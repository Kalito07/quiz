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
    <Card className="w-[380px]">
      <CardHeader>
        <CardTitle>Регистрация</CardTitle>
        <CardDescription>Създайте си акаунт</CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter className="flex">
        <span className="text-sm">Вече имате акаунт?</span>
        <Link to="/">
          <Button variant="link" className="px-2">
            Влезте тук.
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
