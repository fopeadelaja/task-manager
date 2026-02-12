export interface Subtask {
  id: number;
  title: string;
}

export interface Task  {
    id: string;
    title: string;
    description?: string;
    subtasks?: Subtask[]
}

export interface Column {
    id: string;
    title: string;
    tasks: Task[];
}

export interface Board {
    id: string;
    title: string;
    status: Column[]
}

export const platformLaunchBoard: Board[] = [
  {
    id: "Platform Launch",
    title: "Platform Launch",
    status: [
      {
        id: "Todo",
        title: "Todo",
        tasks: [
          {
            id: "Build UI for onboarding flow",
            title: "Build UI for onboarding flow",
            description:
              "Design and implement the complete onboarding user interface including welcome screens, user prompts, and account setup steps.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
          {
            id: "Build UI for search",
            title: "Build UI for search",
            description:
              "Develop the search interface including input fields, filters, and result display layout.",
          },
          {
            id: "Build settings UI",
            title: "Build settings UI",
            description:
              "Create the settings interface allowing users to update profile information and manage preferences.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
          {
            id: "QA and test all major user journeys",
            title: "QA and test all major user journeys",
            description:
              "Test all primary workflows including onboarding, search, authentication, and account management.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
        ],
      },
      {
        id: "Doing",
        title: "Doing",
        tasks: [
          {
            id: "Design settings and search pages",
            title: "Design settings and search pages",
            description:
              "Produce high-fidelity designs for both the settings and search pages.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
          {
            id: "Add account management endpoints",
            title: "Add account management endpoints",
            description:
              "Implement backend endpoints for updating user profiles, passwords, and preferences.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
          {
            id: "Design onboarding flow",
            title: "Design onboarding flow",
            description:
              "Map out and design the full onboarding journey from account creation to dashboard access.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
          {
            id: "Add search endpoints",
            title: "Add search endpoints",
            description:
              "Develop backend APIs to power search queries and filtering functionality.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
          {
            id: "Add authentication endpoints",
            title: "Add authentication endpoints",
            description:
              "Build secure authentication endpoints for login, registration, and token validation.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
          {
            id: "Research pricing points of various competitors and trial different business models",
            title:
              "Research pricing points of various competitors and trial different business models",
            description:
              "Analyze competitor pricing strategies and experiment with different monetization approaches.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
        ],
      },
      {
        id: "Done",
        title: "Done",
        tasks: [
          {
            id: "Conduct 5 wireframe tests",
            title: "Conduct 5 wireframe tests",
            description:
              "Run five structured usability tests on early wireframe prototypes.",
            subtasks: [{ id: 1, title: "Subtask 1" }],
          },
          {
            id: "Create wireframe prototype",
            title: "Create wireframe prototype",
            description:
              "Develop an interactive wireframe prototype to validate core product assumptions.",
            subtasks: [{ id: 1, title: "Subtask 1" }],
          },
          {
            id: "Review results of usability tests and iterate",
            title: "Review results of usability tests and iterate",
            description:
              "Analyze usability feedback and refine the prototype based on findings.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
              { id: 3, title: "Subtask 3" },
            ],
          },
          {
            id: "Create paper prototypes and conduct 10 usability tests with potential customers",
            title:
              "Create paper prototypes and conduct 10 usability tests with potential customers",
            description:
              "Design low-fidelity paper prototypes and conduct ten usability validation sessions.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
          {
            id: "Market discovery",
            title: "Market discovery",
            description:
              "Research target users and identify unmet needs within the market.",
            subtasks: [{ id: 1, title: "Subtask 1" }],
          },
          {
            id: "Competitor analysis",
            title: "Competitor analysis",
            description:
              "Perform structured analysis of direct and indirect competitors.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
          {
            id: "Research the market",
            title: "Research the market",
            description:
              "Conduct broader market research to validate product positioning and opportunity size.",
            subtasks: [
              { id: 1, title: "Subtask 1" },
              { id: 2, title: "Subtask 2" },
            ],
          },
        ],
      },
    ],
  },
];
