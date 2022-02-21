import PropTypes from "prop-types";
import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";
export default function TransactionList({ transactions, name }) {
	const { deleteDocument } = useFirestore("transactions");
	return (
		<ul className={styles.transactions}>
			{transactions.length ? (
				transactions.map((transaction) => (
					<li key={transaction.id}>
						<p className={styles.name}>{transaction.transaction}</p>
						<p className={styles.amount}>${transaction.amount}</p>
						<p>
							<u>{transaction.createdAt.toDate().toDateString()}</u>
						</p>
						<button onClick={() => deleteDocument(transaction.id)}>x</button>
					</li>
				))
			) : (
				<p className={styles.name}>
					{name.charAt(0).toUpperCase() + name.slice(1)} has no transactions
				</p>
			)}
		</ul>
	);
}

// Prop types
TransactionList.propTypes = {
	transactions: PropTypes.array,
};
