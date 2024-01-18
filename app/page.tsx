import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <Image
          src={"/logo.png"}
          height={100}
          width={100}
          alt="Logo Sen Digital Pulse"
          className=" rounded shadow"
        />
        <h1>Vcard is back soooon...🔥</h1>
      </div>
    </main>
  );
}
