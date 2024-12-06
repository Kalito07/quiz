import { PageTitle } from "@/components/PageTitle";
import { QuizForm } from "@/components/quiz/create/QuizForm";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CreateQuizPage() {
  return (
    <>
      <PageTitle title="Създаване на викторина" />
      <main className="flex min-h-screen items-center justify-center">
        <Card className="w-full max-w-screen-md">
          <CardHeader>
            <CardTitle>Създаване на собствена викторина</CardTitle>
            <CardDescription>QuizHub</CardDescription>
          </CardHeader>
          <CardContent>
            <QuizForm />
          </CardContent>
          <CardFooter>Footer</CardFooter>
        </Card>
      </main>
    </>
  );
}
