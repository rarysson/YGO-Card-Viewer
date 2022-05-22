import Link from "next/link";
import styles from './header.module.css';

export default function Header({ children, backRoute, backText }) {
	return (
		<header className={styles.header}>
			{children}

			<Link href={backRoute}>
				<a className={styles.homeBtn}>&#8592; {backText}</a>
			</Link>
		</header>
	)
}
