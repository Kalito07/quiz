import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {LoginForm} from "@/components/auth/LoginForm.tsx";

export function LoginCard() {
    return (
        <Card className="w-[380px] sm:w-full p-1 max-w-md rounded-[2rem] border-none shadow-lg bg-white/10">
            <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-center">Вход</CardTitle>
                <CardDescription className="text-center text-sm text-secondary">
                    Създавайте и споделяйте интерактивни тестове
                </CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm />
            </CardContent>
        </Card>
    );
}
