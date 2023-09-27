import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>Next.js 블로그 포스팅</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>First Post</h1>
      <img src="/images/profile.jpg" alt="Your Name" />
      <Link href="/" scroll={false}>
        Back to home
      </Link>
    </>
  );
}
