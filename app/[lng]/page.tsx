'use client'

import Link from "next/link";
import { useTranslation } from "@/app/i18n";

export default async function Home({ params:{lng} }: { params: { lng: string } }) {
  const { t } = await useTranslation(lng)

  return (
    <div>
      <h1>Hi there!</h1>
      <Link href={`/${lng}/company`}>
      {t('title')}
      </Link>
      <Link href="/" locale="vi">
      To vi
    </Link>
    </div>
  );
}
