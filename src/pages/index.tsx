import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>나의 Next.js 블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>메인 페이지</h1>
      <Link href="/posts/first-post" scroll={false}>
        to First Post
      </Link>
    </>
  );
}
