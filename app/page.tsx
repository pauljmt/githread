import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAuthSession } from "@/lib/auth";

export default async function Home() {
  const session = await getAuthSession();

  return (
    <main className="flex min-h-screen items-start flex-col gap-8">
      <p>{JSON.stringify(session, null, 2)}</p>
      <Button variant="default">Click me</Button>
      <Input></Input>
    </main>
  );
}
