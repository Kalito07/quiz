import { QuizOption } from "./quizOption";

export type QuizQuestion = {
  id: number;
  quizUuid: `${string}-${string}-${string}-${string}-${string}`;
  content: string;
  points: number;
};

export type QuizQuestionWithOptions = QuizQuestion & {
  options: QuizOption[];
};
