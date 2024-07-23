import Link from "next/link";

export default function JobsCompanyIndex({
    params,
}: {
    params: { lng: string };
}) {
    const { lng } = params;
    return (
        <div>
            <Link href={`/${lng}`}>JobsCompanyIndex</Link>
        </div>
    );
}
