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
          <section className="flex min-h-screen w-full flex-col justify-between bg-primary/40 p-4 dark:bg-primary">
            <header>
              <Link to="/" className="flex gap-1">
                <span>Logo here</span>
                <h3 className="font-semibold">QuizHub</h3>
              </Link>
            </header>
            <p>
              TODO: put an image of QuizHub here or just a background image for
              the whole left section. Think I prefer the bg image.
            </p>
            <footer>
              "QuizHub преобрази начина, по който споделям знания с приятелите
              си. Прави ученето толкова забавно и увлекателно! Никога не съм
              предполагала, че викторините могат да обединяват хората по този
              начин." - Мария Иванова, учителка и вечен ученик от София.
            </footer>
          </section>
        )}
        <section className="min-h-screen w-full bg-background p-4 flex flex-col">
          <header className="flex items-center justify-end gap-4">
            <Link to="/register" className="flex gap-1">
              <Button variant="ghost">Регистрирай се</Button>
            </Link>
            <ThemeToggle/>
          </header>
          <div className="flex-grow flex items-center justify-center">
            <LoginCard/>
          </div>
        </section>

      </main>
    </>
  );
}
