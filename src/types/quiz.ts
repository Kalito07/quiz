import { QuizQuestion, QuizQuestionWithOptions } from "@/types/quizQuestion";

export type Quiz = {
  uuid: `${string}-${string}-${string}-${string}-${string}`;
  creatorUserUuid: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  createdAt: string;
  updatedAt: string;
};

export type QuizWithQuestions = Quiz & { questions: QuizQuestion[] };

export type QuizWithQuestionsWithOptions = Quiz & {
  questions: QuizQuestionWithOptions[];
};
