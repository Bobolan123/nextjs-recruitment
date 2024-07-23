import Link from "next/link";

export default function JobsSkillIndex({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <Link href={`/${lng}`}>
        JobsSkillIndex page
      </Link>
    </div>
  );
}
