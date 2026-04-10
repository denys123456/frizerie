import { AuthForm } from "@/components/auth-form";

export default function SignInPage() {
  return (
    <section className="section-shell flex min-h-[calc(100vh-9rem)] items-center justify-center py-8 sm:py-12">
      <AuthForm mode="signin" />
    </section>
  );
}
