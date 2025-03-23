import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-2xl font-bold">Hello!</h1>
        <p>Click the below button to navigate to Skill Test Page</p>
        <Button>
          <Link href="/skill-test">Skill Test</Link>
        </Button>
      </div>
    </div>
  );
}
