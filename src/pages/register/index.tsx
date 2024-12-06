import { RegisterCard } from "@/components/auth/RegisterCard";
import { PageTitle } from "@/components/PageTitle";

export function RegisterPage() {
  return (
    <>
      <PageTitle title="Регистрация" />
      <main className="flex min-h-screen items-center justify-center">
        <RegisterCard />
      </main>
    </>
  );
}
