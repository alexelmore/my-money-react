import TransactionForm from "./TransactionForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

export default function Home() {
	// Destructure Auth Context Hook and pull out user property
	const { user } = useAuthContext();
	return (
		<div className={styles.container}>
			<div className={styles.content}>Transaction List</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
