import Link from "next/link";

export default function Company({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <h1>Hi there!</h1>
      <Link href={`/${lng}`}>
        Company page
      </Link>
    </div>
  );
}
