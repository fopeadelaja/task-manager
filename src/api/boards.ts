import { apiClient } from "./client";
import { type GetBoardsResponse, type Board } from "../types/kanban";

function mapApiBoardToBoard(
  apiBoard: GetBoardsResponse["boards"][number],
): Board {
  return {
    id: apiBoard.id,
    title: apiBoard.title,
    columns: apiBoard.columns
      .sort((a, b) => a.position - b.position)
      .map((col) => ({
        id: col.id,
        title: col.title,
        tasks: [],
      })),
  };
}

export const getBoards = async (userId: string) => {
  try {
    const response = await apiClient.get<GetBoardsResponse>(
      "/boards/user-boards",
      { params: { userId } },
    );
    return response.data.boards.map(mapApiBoardToBoard);
  } catch (error) {
    console.error("Error fetching boards:", error);
    throw error;
  }
};
