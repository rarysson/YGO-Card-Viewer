import Head from "next/head";
import Layout from "../components/layout";
import CardType from "../components/cardType";

const cardTypes = ["beast", "dragon", "fairy", "insect", "machine", "psychic", "pyro", "warrior", "zombie"];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Yu-Gi-Oh! Card Viewer</title>
        <link rel="icon" href="/favicon.webp" />
      </Head>

      <Layout>
        <header>
          <h1>Yu-Gi-Oh! Card Viewer</h1>
        </header>
        <main className="cards-container">
          {cardTypes.map(type => (
            <CardType key={type} type={type} />
          ))}
        </main>
      </Layout>

      <style jsx>{`
        .cards-container {
          margin-top: 75px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 50px;
        }
      `}</style>
    </div>
  )
}
