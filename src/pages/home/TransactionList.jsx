import styles from "./Home.module.css";
import PropTypes from "prop-types";
export default function TransactionList({ transactions }) {
	return (
		<ul className={styles.transactions}>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className={styles.name}>{transaction.transaction}</p>
					<p className={styles.amount}>${transaction.amount}</p>
				</li>
			))}
		</ul>
	);
}

// Prop types
TransactionList.propTypes = {
	transactions: PropTypes.array,
};
