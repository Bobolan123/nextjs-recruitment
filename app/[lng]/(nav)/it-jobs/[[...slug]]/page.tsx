import Link from "next/link";

export default function ItJobs({
    params,
}: {
    params: { lng: string; slug: string[] };
}) {
    const { lng, slug } = params;
    return (
        <div>
            <Link href={`/${lng}`}>it jobs page</Link>
            {slug}
        </div>
    );
}
