import Link from "next/link";

export default function JobsTitleIndex({ params }: { params: { lng: string } }) {
  const { lng } = params;
  return (
    <div>
      <Link href={`/${lng}`}>
        JobsSkillTitle page
      </Link>
    </div>
  );
}
