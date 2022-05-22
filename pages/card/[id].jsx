import React from "react";
import Head from "next/head";
import Image from "next/image";
import Header from "../../components/header/header";
import Layout from "../../components/layout/layout";
import { getCardInfo } from "../../lib/types";

export async function getServerSideProps({ params: { id } }) {
	const card = await getCardInfo(id);

	return {
		props: {
			card: card
		},
	};
}

export default function Card({ card: { title, type, img, description } }) {
	return (
		<Layout>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.webp" />
			</Head>

			<Header backRoute={`/type/${type.toLowerCase()}`} backText={type} />

			<main>
				<Image
					className="card-img"
					src={img}
					width="421"
					height="614"
					alt={title}
					placeholder="blur"
					blurDataURL="/images/back.webp"
				/>

				<h2 className="card-title">{title}</h2>

				<p className="card-description">{
					description.split("\n").map(word => (
						<React.Fragment key={word}>
							{word}
							<br />
						</React.Fragment>
					))
				}</p>
			</main>

			<style jsx>{`
				main {
					height: 614px;
					display: grid;
					grid-template-areas:
						"img title"
						"img description";
					grid-template-columns: 421px 1fr;
					grid-template-rows: 25px 1fr;
					gap: 30px;
					align-items: start;
				}

				.card-img {
					grid-area: img;
				}

				.card-title {
					grid-area: title;
				}

				.card-description {
					grid-area: description;
				}
			`}</style>
		</Layout>
	)
}
