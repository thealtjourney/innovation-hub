export const rooms = [
  {
    id: "welcome",
    name: "Resident life",
    shortName: "Resident life",
    number: "01",
    question: "What if the everyday felt a little easier?",
    description:
      "A better experience, from the first hello to the everyday tasks that make a house a home.",
    x: 31,
    y: 67,
  },
  {
    id: "warmth",
    name: "Warmer homes",
    shortName: "Warmer homes",
    number: "02",
    question: "Could we notice a cold home sooner?",
    description:
      "Exploring how earlier signals can lead to timely, practical support.",
    x: 31,
    y: 44,
  },
  {
    id: "reading",
    name: "The reading room",
    shortName: "Reading room",
    number: "03",
    question: "What could a shared story start?",
    description:
      "A good book and a conversation can connect people who might never otherwise meet.",
    x: 69,
    y: 44,
  },
  {
    id: "office",
    name: "The housing office",
    shortName: "Housing office",
    number: "04",
    question: "How could we make good work easier?",
    description:
      "Useful tools for the people keeping homes safe, services joined up and promises visible.",
    x: 69,
    y: 67,
  },
  {
    id: "loft",
    name: "The bigger picture",
    shortName: "Bigger picture",
    number: "05",
    question: "What if we could see what comes next?",
    description:
      "Looking across homes and tenancies to understand change and make better decisions.",
    x: 50,
    y: 20,
  },
  {
    id: "community",
    name: "Growing community",
    shortName: "Community",
    number: "06",
    question: "What becomes possible when we come together?",
    description:
      "Shared skills, buying power and time. Small connections with room to grow.",
    x: 50,
    y: 86,
  },
] as const;

export type RoomId = (typeof rooms)[number]["id"];
export type ProjectStatus = "Live" | "Beta" | "Prototype" | "Concept";
export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  href: string;
  status: ProjectStatus;
  room: RoomId;
  kind: "app" | "brief";
  tags: string[];
  iconPath: string;
  preview?: { src: string; alt: string; width: number; height: number };
};

// This is the single source for the house, project directory and featured work.
// Statuses describe the existing portfolio; they are not live uptime checks.
export const projects: Project[] = [
  {
    id: "housing-portal",
    name: "Housing Portal",
    tagline: "A simpler front door to everyday services.",
    description:
      "Manage a tenancy, report repairs and check rent in one place, built around what residents need to do.",
    href: "https://ssp-seven-mu.vercel.app/",
    status: "Beta",
    room: "welcome",
    kind: "app",
    tags: ["Resident experience", "Self-service"],
    iconPath: "M3 12 12 3l9 9M5 10v10h14V10M9 20v-6h6v6",
  },
  {
    id: "housing-journeys",
    name: "Housing Journeys",
    tagline: "Every stage. A better experience.",
    description:
      "Connect the stages of the resident experience with the processes, policies and measures behind them.",
    href: "https://jm-five-murex.vercel.app/",
    status: "Beta",
    room: "welcome",
    kind: "app",
    tags: ["Service design", "Assurance"],
    iconPath: "M9 20 3 22V8l6-2m0 14 6 2m-6-2V6m6 16 6-2V4l-6 2m0 14V6",
    preview: {
      src: "/journey-manager-explorer.png",
      alt: "Housing Journeys prototype showing the homes, residents and homeowners journeys and their connected stages",
      width: 2388,
      height: 1660,
    },
  },
  {
    id: "threshold",
    name: "Threshold",
    tagline: "Notice earlier. Support sooner.",
    description:
      "Explore emerging tenancy and repairs risks, understand the signals behind them and plan a useful next step.",
    href: "/apps/threshold",
    status: "Prototype",
    room: "loft",
    kind: "brief",
    tags: ["Early warning", "Tenancy & repairs"],
    iconPath: "M3 12h4l3-8 4 16 3-8h4",
    preview: {
      src: "/threshold-repairs-dashboard.png",
      alt: "Threshold prototype repairs intelligence dashboard showing property priorities and component outlook",
      width: 2930,
      height: 1596,
    },
  },
  {
    id: "regulator-ratings",
    name: "Regulator Ratings",
    tagline: "A clearer view of the wider sector.",
    description:
      "Explore consumer, governance and viability judgements to benchmark providers and learn from peers.",
    href: "https://rsh-xi.vercel.app/",
    status: "Beta",
    room: "office",
    kind: "app",
    tags: ["Regulation", "Benchmarking"],
    iconPath:
      "M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Zm-3.5 9 2.5 2.5L16 10",
  },
  {
    id: "process-mapping",
    name: "Process Mapping Studio",
    tagline: "Make the way work flows visible.",
    description:
      "Map, document and improve housing processes so teams share a clear picture of how services work.",
    href: "https://bp-nu-wine.vercel.app/",
    status: "Beta",
    room: "office",
    kind: "app",
    tags: ["Process design", "Operational improvement"],
    iconPath: "M4 6h6v4H4V6Zm10 8h6v4h-6v-4Zm-4-4v4M7 10v4h7",
  },
  {
    id: "reading-room",
    name: "The Reading Room",
    tagline: "Good books. Better conversations.",
    description:
      "Choose reads together, share progress and give colleagues and residents a regular way to connect.",
    href: "/book-club.html",
    status: "Prototype",
    room: "reading",
    kind: "app",
    tags: ["Community", "Wellbeing"],
    iconPath:
      "M3 5a2 2 0 0 1 2-2h5v16H5a2 2 0 0 1-2-2V5Zm11-2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5V3Z",
  },
  {
    id: "social-value",
    name: "Social Value Tool",
    tagline: "Follow the promise through to the outcome.",
    description:
      "Score supplier commitments and track the resident outcomes delivered, with evidence attached.",
    href: "/social-value.html",
    status: "Prototype",
    room: "community",
    kind: "app",
    tags: ["Social value", "Supplier accountability"],
    iconPath: "M3 21h18M5 21V10m4 11V6m4 15v-9m4 9V3m4 18v-7",
  },
  {
    id: "repairs-portal",
    name: "Repairs Portal",
    tagline: "Get the right repair moving.",
    description:
      "Make reporting a repair easier, with live property data behind diagnosis, routing and priorities.",
    href: "https://repairs-orcin.vercel.app/",
    status: "Beta",
    room: "office",
    kind: "app",
    tags: ["Repairs", "Resident experience"],
    iconPath:
      "M14.7 6.3a5 5 0 0 0-6.4 6.4L3 18l3 3 5.3-5.3a5 5 0 0 0 6.4-6.4l-2.8 2.8-2.8-2.8 2.8-2.8Z",
  },
  {
    id: "pooled",
    name: "Pooled",
    tagline: "More buying power, together.",
    description:
      "Help households combine their buying power for better deals on energy, broadband and everyday essentials.",
    href: "https://pooled-mocha.vercel.app/",
    status: "Beta",
    room: "community",
    kind: "app",
    tags: ["Collective buying", "Cost of living"],
    iconPath:
      "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm8 2a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2 21v-1a6 6 0 0 1 6-6h2a6 6 0 0 1 6 6v1M16 21v-1a4 4 0 0 0-2-3.46",
  },
  {
    id: "skill-exchange",
    name: "Skill Exchange",
    tagline: "Everyone has something to share.",
    description:
      "Connect neighbours and colleagues through practical skills, from gardening and DIY to digital confidence.",
    href: "https://skillexchange-ochre.vercel.app/",
    status: "Beta",
    room: "community",
    kind: "app",
    tags: ["Community", "Skills"],
    iconPath:
      "M7 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm10 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM4 21v-1a4 4 0 0 1 4-4h3M20 3v1a4 4 0 0 1-4 4h-3",
  },
  {
    id: "fuel-poverty",
    name: "Fuel-Poverty Intelligence",
    tagline: "Spot a cold home before a crisis.",
    description:
      "A concept linking temperature and humidity signals with arrears patterns to help target earlier support.",
    href: "/apps/fuel-poverty",
    status: "Concept",
    room: "warmth",
    kind: "brief",
    tags: ["Warmer homes", "Early intervention"],
    iconPath:
      "M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-1.7.8-3.4 1.8-4.7M12 14a2 2 0 0 0 2-2",
  },
  {
    id: "charity-days",
    name: "Charity Days",
    tagline: "Turn time into something that matters.",
    description:
      "Help colleagues find, book and track volunteering days with partner charities in their communities.",
    href: "https://mhgcharitydays.vercel.app/",
    status: "Live",
    room: "community",
    kind: "app",
    tags: ["Volunteering", "Community impact"],
    iconPath:
      "M12 21s-6.7-4.35-9.33-8.06A5.5 5.5 0 0 1 12 6.09a5.5 5.5 0 0 1 9.33 6.85C18.7 16.65 12 21 12 21z",
  },
  {
    id: "digital-twin",
    name: "Social Housing Digital Twin",
    tagline: "See the homes. Explore the possibilities.",
    description:
      "Bring stock condition, energy performance and investment scenarios into a shared view of the housing portfolio.",
    href: "https://shdt.vercel.app/",
    status: "Beta",
    room: "loft",
    kind: "app",
    tags: ["Asset intelligence", "Net zero"],
    iconPath:
      "M3 7.5 12 3l9 4.5-9 4.5-9-4.5Zm0 5L12 17l9-4.5M3 17.5 12 22l9-4.5",
  },
];

export const featuredProjectIds = [
  "threshold",
  "housing-journeys",
  "reading-room",
];
export const projectsInRoom = (room: RoomId) =>
  projects.filter((project) => project.room === room);
export const isExternalProject = (project: Project) =>
  project.href.startsWith("https://");
export const projectAction = (project: Project) =>
  project.kind === "brief"
    ? "Explore the idea"
    : project.status === "Prototype"
      ? "Try the prototype"
      : "Explore the app";
