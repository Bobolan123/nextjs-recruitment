import Link from "next/link";

export default function SignUp({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <Link href={`/${lng}`}>
        SignUp page
      </Link>
    </div>
  );
}
