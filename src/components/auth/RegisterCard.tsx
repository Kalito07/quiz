import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { RegisterForm } from "@/components/auth/RegisterForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export function RegisterCard() {
    return (
        <Card className="w-[380px] sm:w-full max-w-md border-none rounded-[2rem] p-1 shadow-lg bg-white/10">
            <CardHeader className="pb-6 text-center">
                <CardTitle className="text-2xl font-bold">Регистрация</CardTitle>
                <CardDescription className="text-sm text-secondary">
                    Създайте си акаунт
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm />
            </CardContent>
            <CardFooter className="flex justify-center text-sm">
                <span>Вече имате акаунт?</span>
                <Link to="/">
                    <Button variant="link" className="px-2 text-sm text-primary hover:underline">
                        Влезте тук.
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
