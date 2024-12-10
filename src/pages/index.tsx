import { LoginCard } from "@/components/auth/LoginCard";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";

export function HomePage() {
  const lg = useMediaQuery(1024);

  return (
      <>
        <PageTitle title="Начало" />
        <main className="flex w-full">
          {lg && (
              <section className="hidden lg:flex min-h-screen w-1/2 flex-col justify-between bg-accent text-text p-8">
                <header>
                  <Link to="/" className="flex items-center gap-2 text-xl font-bold">
                    <span>Logo here</span>
                    <h3>QuizHub</h3>
                  </Link>
                </header>
                <div className="flex-grow flex items-center justify-center">
                  <p className="text-center text-lg">
                    TODO: Постави изображение на QuizHub или фон за цялата лява секция.
                  </p>
                </div>
                <footer className="mt-8">
                  <blockquote className="italic text-lg">
                    "QuizHub преобрази начина, по който споделям знания с приятелите си. Прави ученето толкова забавно и увлекателно! Никога не съм предполагала, че викторините могат да обединяват хората по този начин."
                    <br />
                    <span className="font-semibold">- Мария Иванова, учителка и вечен ученик от София</span>
                  </blockquote>
                </footer>
              </section>
          )}
          <section className="min-h-screen w-full lg:w-1/2 bg-gradient-to-br from-background to-accent p-6 flex flex-col">
            <header className="flex justify-end gap-4">
              <Link to="/register">
                <Button variant="ghost">Регистрирай се</Button>
              </Link>
              <ThemeToggle />
            </header>
            <div className="flex-grow flex items-center justify-center">
              <LoginCard />
            </div>
          </section>
        </main>
      </>
  );
}
