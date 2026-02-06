import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js + Tailwind Starter</title>
        <meta
          name="description"
          content="Starter base con Next.js, React y Tailwind CSS."
        />
      </Head>

      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">
            Next.js + Tailwind Starter
          </h1>

          <p className="text-gray-400 max-w-md">
            Base limpia para arrancar proyectos web con Next.js y Tailwind CSS.
          </p>
        </section>
      </main>
    </>
  );
}
