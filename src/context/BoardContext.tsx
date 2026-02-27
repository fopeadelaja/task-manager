import React, { createContext, useContext, useState, useMemo } from "react";
import {
  type Board,
  type CreateBoardFormValues,
  Boards,
} from "../types/kanban";

interface BoardContextType {
  boards: Board[];
  activeBoardId: string;
  activeBoard: Board | undefined;
  setActiveBoard: (id: string) => void;
  updateBoard: (boardId: string, data: CreateBoardFormValues) => void;
  createNewBoard: (data: CreateBoardFormValues) => void;
  addTask: (boardId: string, columnId: string, task: any) => void;
}

const BoardContext = createContext<BoardContextType>({} as BoardContextType);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<Board[]>(Boards);
  const [activeBoardId, setActiveBoardId] = useState<string>(
    Boards[0]?.id || "",
  );

  const activeBoard = useMemo(
    () => boards.find((b) => b.id === activeBoardId),
    [boards, activeBoardId],
  );

  const updateBoard = (boardId: string, data: CreateBoardFormValues) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id !== boardId) return board;
        // Create new columns based on the form data
        // For simplicity, we match by index if possible to preserve tasks,
        // or just create new ones if they are added.
        const newColumns = data.columns.map((colData, index) => {
          const existingCol = board.status[index];
          return {
            id: colData.title, // Using title as ID for now as per the static data pattern
            title: colData.title,
            tasks: existingCol ? existingCol.tasks : [],
          };
        });

        return {
          ...board,
          id: data.title, // If board name changes, ID also changes in this simple implementation
          title: data.title,
          status: newColumns,
        };
      }),
    );
    // If we renamed the active board, update the ID
    if (activeBoardId === boardId) {
      setActiveBoardId(data.title);
    }
  };

  const setActiveBoard = (id: string) => setActiveBoardId(id);

  const createNewBoard = (data: CreateBoardFormValues) => {
    const newBoard: Board = {
      id: data.title,
      title: data.title,
      status: data.columns.map((col) => ({
        id: col.title,
        title: col.title,
        tasks: [],
      })),
    };

    setBoards([...boards, newBoard]);
    setActiveBoardId(newBoard.id);
  };

  const addTask = (boardId: string, columnId: string, task: any) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id !== boardId) return board;
        return {
          ...board,
          status: board.status.map((col) => {
            if (col.id !== columnId) return col;
            return {
              ...col,
              tasks: [...col.tasks, task],
            };
          }),
        };
      }),
    );
  };

  return (
    <BoardContext.Provider
      value={{
        boards,
        activeBoardId,
        activeBoard,
        setActiveBoard,
        updateBoard,
        createNewBoard,
        addTask,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => {
  const context = useContext(BoardContext);
  if (context === undefined) {
    throw new Error("useBoard must be used within a BoardProvider");
  }
  return context;
};
