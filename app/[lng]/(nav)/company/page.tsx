import Link from "next/link";

export default function Company({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <Link href={`/${lng}`}>
        Company page
      </Link>
    </div>
  );
}
