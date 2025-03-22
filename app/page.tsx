import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1>Hello!</h1>
        <Button>
          <Link href="">Go to Skill Test</Link>
        </Button>
      </div>
    </div>
  );
}
