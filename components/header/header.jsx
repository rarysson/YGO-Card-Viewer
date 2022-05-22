import Link from "next/link";
import styles from './header.module.css';

export default function Header({ children }) {
	return (
		<header className={styles.header}>
			{children}

			<Link href="/">
				<a className={styles.homeBtn}>&#8592; Home</a>
			</Link>
		</header>
	)
}
