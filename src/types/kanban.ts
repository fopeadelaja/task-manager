export interface Subtask {
  id: number;
  title: string;
}

export interface Task {
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

export interface CreateBoardFormValues {
  title: string;
  columns: {
    title: string;
  }[];
};

export const Boards: Board[] = [
  {
    id: "PlatformLaunch",
    title: "Platform Launch",
    status: [
      {
        id: "Todo",
        title: "Todo",
        tasks: [
          {
            id: "Set up CI/CD pipeline",
            title: "Set up CI/CD pipeline",
            description:
              "Configure automated build, test, and deployment pipelines for the platform.",
            subtasks: [
              { id: 1, title: "Configure GitHub Actions" },
              { id: 2, title: "Set up staging environment" },
            ],
          },
        ],
      },
      {
        id: "Doing",
        title: "Doing",
        tasks: [
          {
            id: "Integrate payment gateway",
            title: "Integrate payment gateway",
            description:
              "Implement and test Stripe integration for subscription billing.",
            subtasks: [
              { id: 1, title: "Create payment intent flow" },
              { id: 2, title: "Handle webhook events" },
            ],
          },
        ],
      },
      {
        id: "Done",
        title: "Done",
        tasks: [
          {
            id: "Landing page design",
            title: "Landing page design",
            description:
              "Completed responsive landing page with optimized conversion sections.",
          },
        ],
      },
    ],
  },
  {
    id: "Marketing Plan",
    title: "Marketing Plan",
    status: [
      {
        id: "Todo",
        title: "Todo",
        tasks: [
          {
            id: "Define target audience",
            title: "Define target audience",
            description:
              "Identify primary customer segments and develop user personas.",
            subtasks: [
              { id: 1, title: "Interview 10 potential users" },
              { id: 2, title: "Analyze survey data" },
            ],
          },
        ],
      },
      {
        id: "Doing",
        title: "Doing",
        tasks: [
          {
            id: "Content strategy development",
            title: "Content strategy development",
            description:
              "Develop blog, social media, and email marketing content strategy.",
            subtasks: [
              { id: 1, title: "Outline 5 blog topics" },
              { id: 2, title: "Create content calendar" },
            ],
          },
        ],
      },
      {
        id: "Done",
        title: "Done",
        tasks: [
          {
            id: "Competitor positioning analysis",
            title: "Competitor positioning analysis",
            description:
              "Analyzed competitors’ messaging, pricing, and distribution channels.",
          },
        ],
      },
    ],
  },
  {
    id: "RoadMap",
    title: "RoadMap",
    status: [
      {
        id: "Backlog",
        title: "Backlog",
        tasks: [
          {
            id: "AI-powered recommendations",
            title: "AI-powered recommendations",
            description:
              "Plan implementation of AI-driven personalized recommendation engine.",
            subtasks: [
              { id: 1, title: "Define ML requirements" },
              { id: 2, title: "Research datasets" },
            ],
          },
        ],
      },
      {
        id: "In Progress",
        title: "In Progress",
        tasks: [
          {
            id: "Mobile responsiveness improvements",
            title: "Mobile responsiveness improvements",
            description:
              "Refactor layout and components to improve mobile usability.",
          },
        ],
      },
      {
        id: "Completed",
        title: "Completed",
        tasks: [
          {
            id: "Core architecture setup",
            title: "Core architecture setup",
            description:
              "Established scalable frontend and backend project structure.",
            subtasks: [
              { id: 1, title: "Setup monorepo structure" },
              { id: 2, title: "Configure linting and formatting" },
            ],
          },
        ],
      },
    ],
  },
];