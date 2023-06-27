import Project from "@/app/projects/page";

export interface Project {
  folder: string;
  title: string;
  files: string[];
  tools?: string[];
}

export const projects_data: Project[] = [
  {
    folder: "alcool_or_gas",
    title: "Alcool Or gas",
    files: [
      "alcool_or_gas1.png",
      "alcool_or_gas2.png",
      "alcool_or_gas3.gif",
      "alcool_or_gas4.png",
      "alcool_or_gas5.png",
    ],
    tools: ["flutter", "figma"],
  },
  {
    folder: "barber_app",
    title: "Barber App",
    files: Array(8)
      .fill(1)
      .map((_, i) => `barber_app${i + 1}.jpg`),
    tools: ["flutter", "figma"],
  },
  {
    folder: "ecommerce_de_joias_com_afiliados",
    title: "Ecommerce de Joias",
    files: Array(41)
      .fill(1)
      .map((_, i) => `lazuli-boss${i + 1}.png`),
    tools: [
      "webpack",
      "ts",
      "js",
      "postgres",
      "python",
      "django",
      "nodejs",
      "scss",
      "angular",
    ],
  },
  {
    folder: "fofok_app",
    title: "Fofoka APp",
    files: Array(12)
      .fill(1)
      .map((_, i) => `fofok_app${i + 1}.jpg`),
    tools: ["flutter", "python", "django"],
  },
  {
    folder: "goldpescados",
    title: "Gold Pescados",
    files: Array(34)
      .fill(1)
      .map((_, i) => `gols-pescados${i + 1}.png`),
    tools: ["python", "django", "html", "css", "js", "postgres"],
  },
  {
    folder: "marcenaria",
    title: "Marcenaria",
    files: Array(14)
      .fill(1)
      .map((_, i) => `marcenaria${i + 1}.png`),
    tools: ["js", "postgres", "python", "django"],
  },
  {
    folder: "meu_predio_smart",
    title: "meu predio smart",
    files: Array(34)
      .fill(1)
      .map((_, i) => `meu_predio_smart${i + 1}.png`),
    tools: [
      "webpack",
      "ts",
      "html",
      "js",
      "rabbitmq",
      "postgres",
      "redis",
      "nodejs",
      "python",
      "django",
      "scss",
      "angular",
    ],
  },
  {
    folder: "prontuario_posto_de_saude",
    title: "Prontuario",
    files: Array(13)
      .fill(1)
      .map((_, i) => `sistema_prontuario${i + 1}.png`),
    tools: ["html", "css", "js", "postgres", "python", "django"],
  },
  {
    folder: "reactapp_layout",
    title: "React app Layout",
    files: ["react_app.gif"],
    tools: ["react", "nodejs"],
  },
  {
    folder: "sistema_de_pdv",
    title: "Sistema PDV",
    files: Array(13)
      .fill(1)
      .map((_, i) => `sistema_pdv${i + 1}.png`),
    tools: ["html", "css", "js", "postgres", "python", "django"],
  },
  {
    folder: "sizzon",
    title: "Sizzon Site institucional",
    files: Array(5)
      .fill(1)
      .map((_, i) => `sizzon${i + 1}.png`),
    tools: ["html", "css", "js", "python", "django"],
  },
  {
    folder: "toolfit",
    title: "Toolfit",
    files: Array(4)
      .fill(1)
      .map((_, i) => `toolfit${i + 1}.png`),
    tools: ["html", "css", "js", "python", "django"],
  },
  {
    folder: "tube_chat",
    title: "Tube Chat",
    files: [
      "tube_chat_app1.gif",
      ...Array(6)
        .fill(1)
        .map((_, i) => `tube_chat_app${i + 2}.png`),
    ],
    tools: ["css", "scss", "js", "postgres", "nodejs", "nestjs", "angular"],
  },
];
