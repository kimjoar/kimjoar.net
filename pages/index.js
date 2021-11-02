import Head from "next/head";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Kim Joar Bekkelund</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="description">
          Pragmatic software engineer turned engineering manager.
        </div>
      </main>

      <style jsx>{`
        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }

        .description {
          font-family: "Reenie Beanie", cursive;
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </Layout>
  );
}
