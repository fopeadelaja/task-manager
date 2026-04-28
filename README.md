# Kanban Task Manager

A modern, responsive Kanban board application to help you manage your tasks efficiently. Built using a modern React stack with Vite and Chakra UI.

## Features

- **Kanban Board:** Organize tasks into customizable columns (e.g., Todo, Doing, Done).
- **Task Management:** Create, edit, and delete tasks with an intuitive interface.
- **Sidebar Layout:** Seamless, responsive sidebar navigation for switching contexts or boards.
- **Modern UI:** Clean, glass-like styling equipped with smooth transitions, leveraging **Chakra UI** and the **Plus Jakarta Sans** font.
- **Form Validation:** Performant and robust form handling using **React Hook Form**.

## Tech Stack

- **Core:** [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler:** [Vite](https://vitejs.dev/)
- **UI & Styling:** [Chakra UI](https://chakra-ui.com/) + [@emotion/react](https://emotion.sh/)
- **Routing:** [React Router 7](https://reactrouter.com/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Theme:** [next-themes](https://github.com/pacocoursey/next-themes)

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed along with `npm` or another package manager.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/fopeadelaja/task-manager.git
   ```

2. Navigate down into the project directory:
   ```bash
   cd task-manager
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development

To start the local Vite development server:
```bash
npm run dev
```
The application will usually be available at `http://localhost:5173`. 

### Production Build

To compile TypeScript and build the optimized production application:
```bash
npm run build
```

The output will be placed in the `dist` directory. You can preview the production build locally with:
```bash
npm run preview
```

### Linting

To run ESLint and check for code quality issues:
```bash
npm run lint
```

## Structure Highlights

- `src/components/layout/` - Includes shell components like the `AppLayout` and `SideBar`.
- `src/components/` - Includes task-related UI like `KanbanColumn`, `EditTask`, and dialogs.

## License

This project is licensed under the MIT License.
