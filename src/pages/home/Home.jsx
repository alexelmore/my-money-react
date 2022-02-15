import TransactionForm from "./TransactionForm";
import styles from "./Home.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import TransactionList from "./TransactionList";
export default function Home() {
	// Destructure Auth Context Hook and pull out user property
	const { user } = useAuthContext();

	// Destructure useCollection Hook and pull out the documents and error state
	// Pass in a second argument to the useCollection hook, which is an array setting up a query to retrieve the user specific transaction(s)
	const { documents, error } = useCollection(
		"transactions",
		["uid", "==", user.uid],
		["createdAt", "desc"]
	);
	return (
		<div className={styles.container}>
			<div
				className={styles.content}
				style={
					documents.length === 0
						? { display: "flex", alignItems: "center" }
						: {}
				}
			>
				{error && <p>{error}</p>}
				{documents && (
					<TransactionList name={user.displayName} transactions={documents} />
				)}
			</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
}
