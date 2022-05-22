import Image from "next/image";
import Link from "next/link";
import styles from "./cardType.module.css";

export default function CardType({ type }) {
	return (
		<article className={styles.container}>
			<h1 className={styles.title}>{type}</h1>
			<Link href={`/type/${type}`}>
				<a>
					<Image
						className={styles.img}
						src={`/images/${type}.webp`}
						alt={type}
						width="300"
						height="300"
					/>
				</a>
			</Link>
		</article>
	)
}
