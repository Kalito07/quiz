import { PageTitle } from "@/components/PageTitle";
import { QuizForm } from "@/components/quiz/create/QuizForm";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CreateQuizPage() {
  return (
      <>
        <PageTitle title="Създаване на викторина"/>
        <main
            className="flex min-h-screen items-center text-text justify-center bg-gradient-to-br from-background to-accent px-6 py-8">
          <Card className="w-full max-w-screen-lg py-3 border-none bg-white/10 shadow-2xl rounded-[2rem]">
            <CardHeader className="space-y-4 items-center">
              <CardTitle className="text-4xl  font-extrabold">
                Създайте своята викторина
              </CardTitle>
              <CardDescription className="text-lg text-secondary">
                Създайте и споделете свои собствени викторини лесно и бързо.
              </CardDescription>
            </CardHeader>
            <QuizForm/>
            <div className="pb-8"></div>
          </Card>
        </main>
      </>
  );
}
