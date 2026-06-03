import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { type Board, type CreateBoardFormValues } from "../types/kanban";
import { getBoards } from "../api/boards";
import { USER_ID } from "../config/env";

interface BoardContextType {
  boards: Board[];
  activeBoardId: string;
  activeBoard: Board | undefined;
  loading: boolean;
  setActiveBoard: (id: string) => void;
  updateBoard: (boardId: string, data: CreateBoardFormValues) => void;
  createNewBoard: (data: CreateBoardFormValues) => void;
  addTask: (boardId: string, columnId: string, task: any) => void;
}

const BoardContext = createContext<BoardContextType>({} as BoardContextType);

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<Board[]>([]);
  const [activeBoardId, setActiveBoardId] = useState("");
  const [loading, setLoading] = useState(true);

  const activeBoard = useMemo(
    () => boards.find((b) => b.id === activeBoardId),
    [boards, activeBoardId],
  );

  useEffect(() => {
    getBoards(USER_ID)
      .then((fetchedBoards) => {
        setBoards(fetchedBoards);
        setActiveBoardId(fetchedBoards[0]?.id ?? "");
      })
      .catch((error) => {
        console.error("Error fetching boards:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  const updateBoard = (boardId: string, data: CreateBoardFormValues) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id !== boardId) return board;
        const newColumns = data.columns.map((colData, index) => {
          const existingCol = board.columns[index];
          return {
            id: colData.title,
            title: colData.title,
            tasks: existingCol ? existingCol.tasks : [],
          };
        });

        return {
          ...board,
          id: data.title,
          title: data.title,
          columns: newColumns,
        };
      }),
    );
    if (activeBoardId === boardId) {
      setActiveBoardId(data.title);
    }
  };

  const setActiveBoard = (id: string) => setActiveBoardId(id);

  const createNewBoard = (data: CreateBoardFormValues) => {
    const newBoard: Board = {
      id: data.title,
      title: data.title,
      columns: data.columns.map((col) => ({
        id: col.title,
        title: col.title,
        tasks: [],
      })),
    };

    setBoards((prev) => [...prev, newBoard]);
    setActiveBoardId(newBoard.id);
  };

  const addTask = (boardId: string, columnId: string, task: any) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) => {
        if (board.id !== boardId) return board;
        return {
          ...board,
          columns: board.columns.map((col) => {
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
        loading,
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
