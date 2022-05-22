import Head from "next/head";
import Card from "../../components/card/card";
import Header from "../../components/header/header";
import Layout from "../../components/layout/layout";
import { getAllCardsFromType } from "../../lib/types";
import { capitalizeFirstWord } from "../../utils/text";
import { cardTypes } from "../../utils/cardTypes";

export async function getStaticProps({ params: { id } }) {
	const typeData = { type: id };
	const cards = await getAllCardsFromType(capitalizeFirstWord(id));

	return {
		props: {
			typeData,
			cards
		},
	};
}

export async function getStaticPaths() {
	const paths = cardTypes.map(type => ({
		params: {
			id: type,
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export default function Type({ typeData: { type }, cards }) {
	return (
		<Layout>
			<Head>
				<title>{capitalizeFirstWord(type)} cards</title>
				<link rel="icon" href="/favicon.webp" />
			</Head>

			<Header backRoute="/" backText="Home">
				<h1>{ type } cards</h1>
			</Header>

			<main>
				{cards.map(card => (
					<Card card={card} key={card.id} />
				))}
			</main>

			<style jsx>{`
				h1 {
					text-transform: capitalize;
				}

				main {
					display: grid;
					grid-template-columns: repeat(auto-fill, minmax(168px, 1fr));
					gap: 30px;
					align-items: end;
				}
			`}</style>
		</Layout>
	)
}
