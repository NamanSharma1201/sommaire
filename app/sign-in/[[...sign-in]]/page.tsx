import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center">
      <SignIn />
    </section>
  );
}
