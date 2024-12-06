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
        <div className="flex flex-col items-center justify-center min-h-screen bg-background">
            <PageTitle title="Табло" />
            <div className="flex flex-col gap-4">
                <Link to="/quizzes/create">
                    <Button>Създай викторина</Button>
                </Link>
                <Button onClick={logout}>Излез</Button>
            </div>
        </div>
    );
}
