import Image from "next/image";
import QRCodeCard from "@/components/QRCodeCard";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Mentor QR Code</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-screen  items-center justify-center  ">
        <QRCodeCard />
      </main>
    </>
  );
}
