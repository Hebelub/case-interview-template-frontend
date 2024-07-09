import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <span className="mb-4 text-2xl">Services</span>
      <Link className="mb-4" href="/book-room" passHref>
        <Button>Book a room</Button>
      </Link>
      <Link href="/rooms" passHref>
        <Button>Rooms</Button>
      </Link>
    </ div>
  );
}
