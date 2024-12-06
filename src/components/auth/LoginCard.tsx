import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/auth/LoginForm";

export function LoginCard() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Вход</CardTitle>
        <CardDescription>
          Създавайте и споделяйте интерактивни тестове
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
}
