import { api } from "@/api";
import { PageTitle } from "@/components/PageTitle";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/components/providers/AuthProvider";
import { Link } from "react-router-dom";

export function DashboardPage() {
    const { setUser } = useAuth();

    async function logout() {
        await api.auth.logout(setUser);
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-background to-accent px-4">
            <PageTitle title="Табло" />
            <div className="w-full max-w-md bg-white/10 shadow-xl rounded-[2rem] p-8 space-y-4">
                <h1 className="text-2xl font-extrabold text-text text-center">
                    Добре дошли!
                </h1>
                <p className="text-lg text-secondary text-center">
                    Какво искате да направите днес?
                </p>
                <div className="flex flex-col gap-5">
                    <Link to="/quizzes/create">
                        <Button className="w-full bg-[hsl(var(--primary))] text-white hover:bg-[hsl(var(--accent))] transition duration-300 shadow-md">
                            Създай викторина
                        </Button>
                    </Link>
                    <Button
                        className="w-full bg-red-500 text-white hover:bg-red-600 transition duration-300 shadow-md"
                        onClick={logout}
                        variant="destructive"
                    >
                        Излез
                    </Button>
                </div>
            </div>
            <footer className="mt-6 text-sm text-[hsl(var(--secondary))]">
                © 2024 Your App Name. Всички права запазени.
            </footer>
        </div>
    );
}
