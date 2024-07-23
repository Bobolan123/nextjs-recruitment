import Link from "next/link";

export default function BestItCompaníe({
    params,
}: {
    params: { lng: string; company:string };
}) {
    const { lng, company } = params;
    return (
        <div>
            <Link href={`/${lng}`}>Company page</Link>
        </div>
    );
}
