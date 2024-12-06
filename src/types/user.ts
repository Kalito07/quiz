import {
  Quiz,
  QuizWithQuestions,
  QuizWithQuestionsWithOptions,
} from "@/types/quiz";

export type User = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
};

export type UserWithQuizzes = User & {
  quizzes: Quiz[];
};

export type UserWithQuizzesWithQuestions = User & {
  quizzes: QuizWithQuestions[];
};

export type UserWithQuizzesWithQuestionsWithOptions = User & {
  quizzes: QuizWithQuestionsWithOptions[];
};
