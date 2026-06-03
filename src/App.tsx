import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import KanbanColumn from "./components/board/KanbanColumn";
import EmptyBoard from "./components/board/EmptyBoard";
import { useBoard } from "./context/BoardContext";
import { Flex, Spinner } from "@chakra-ui/react";

function App() {
  const { boards, loading } = useBoard();

  return (
    <AppLayout>
      {loading ? (
        <Flex flex="1" align="center" justify="center" w="100%">
          <Spinner size="lg" color="primary" />
        </Flex>
      ) : boards.length === 0 ? (
        <EmptyBoard />
      ) : (
        <KanbanColumn />
      )}
    </AppLayout>
  );
}

export default App;
