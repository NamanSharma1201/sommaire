import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section className="min-h-[90vh] w-full flex items-center justify-center px-4">
      <SignUp />
    </section>
  );
}
