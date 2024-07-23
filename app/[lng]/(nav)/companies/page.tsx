import Link from "next/link";

export default function Companies({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <Link href={`/${lng}`}>
        Company page
      </Link>
    </div>
  );
}
