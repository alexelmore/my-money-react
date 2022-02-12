import TransactionForm from "./TransactionForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";
export default function Home() {
	// Destructure Auth Context Hook and pull out user property
	const { user } = useAuthContext();
	// Destructure useCollection Hook and pull out the documents and error state
	const { documents, error } = useCollection("transactions");
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{error && <p>{error}</p>}
				{documents ? (
					<TransactionList transactions={documents} />
				) : (
					<p>
						No Transactions for
						{user.displayName.charAt(0).toUpperCase() +
							user.displayName.slice(1)}
					</p>
				)}
			</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
