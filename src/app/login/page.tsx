import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";
import LoginForm from "@/components/login-form";

export default function Page() {
  return (
    <main className="bg-background flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <section className="w-full max-w-sm">
        <header className="mb-6 flex flex-col items-center gap-2 text-center">
          <Link href="/" className="flex items-center gap-2 font-medium" aria-label="Go to home">
            <span className="flex size-8 items-center justify-center rounded-md" aria-hidden>
              <GalleryVerticalEnd className="size-6" />
            </span>
            <span className="sr-only">Dapp Auth</span>
          </Link>
          <h1 className="text-xl font-bold">Welcome to Dapp Auth</h1>
        </header>

        <LoginForm />

        <p className="text-muted-foreground mt-6 text-center text-xs text-balance">
          By clicking continue, you agree to our {" "}
          <Link href="#" className="underline underline-offset-4 hover:text-primary">Terms of Service</Link>
          {" "}and{" "}
          <Link href="#" className="underline underline-offset-4 hover:text-primary">Privacy Policy</Link>.
        </p>
      </section>
    </main>
  );
}
