export interface Chapter {
  id: number;
  chapter: string;
  chapterOrder: number;
  technology: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    chapter: "Introduction",
    chapterOrder: 1,
    technology: "angular",
  },
  {
    id: 2,
    chapter: "Routing",
    chapterOrder: 2,
    technology: "angular",
  },
  {
    id: 3,
    chapter: "Form",
    chapterOrder: 3,
    technology: "angular",
  },
  {
    id: 4,
    chapter: "Template driven form",
    chapterOrder: 4,
    technology: "angular",
  },

  {
    id: 5,
    chapter: "Reactive form",
    chapterOrder: 5,
    technology: "angular",
  },
  {
    id: 6,
    chapter: "HTTP requests",
    chapterOrder: 6,
    technology: "angular",
  },
];
