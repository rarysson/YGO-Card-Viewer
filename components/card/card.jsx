import Image from "next/image";
import Link from "next/link";
import styles from './card.module.css';

export default function Card({ card }) {
	return (
		<article className={styles.card}>
			<h1 className={styles.title}>{card.title}</h1>
			<Link href={`/card/${card.id}`}>
				<a>
					<Image
						className={styles.img}
						src={card.img}
						width="168"
						height="246"
						alt={card.title}
						placeholder="blur"
						blurDataURL="/images/back.webp"
					/>
				</a>
			</Link>
		</article>
	)
}
