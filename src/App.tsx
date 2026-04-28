import "./App.css";
import AppLayout from "./components/layout/AppLayout";
import KanbanColumn from "./components/board/KanbanColumn";

function App() {
  return (
    <AppLayout>
      <KanbanColumn />
    </AppLayout>
  );
}

export default App;
