export async function getAllCardsFromType(type) {
	const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?race=${type}`);
	const data = await response.json();

	return data.data.map(card => ({
		id: card.id,
		title: card.name,
		description: card.desc,
		img: card.card_images[0].image_url_small,
	}));
}

export async function getCardInfo(id) {
	const response = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?id=${id}`);
	const data = await response.json();

	return data.data.map(card => ({
		id: card.id,
		type: card.race,
		title: card.name,
		description: card.desc,
		img: card.card_images[0].image_url
	}))[0];
}
