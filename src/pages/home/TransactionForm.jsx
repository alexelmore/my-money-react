import { useState, useEffect } from "react";
import { useFirestore } from "../../hooks/useFirestore";

export default function TransactionForm({ uid }) {
	// Destructure useFirestore hook and pull out addDocument function, removeDocument function and response.
	const { addDocument, response } = useFirestore("transactions");

	// State for transaction name and amount
	const [transName, setTransName] = useState("");
	const [transAmount, setTransAmount] = useState("");

	// Function that handles form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({ uid: uid, transaction: transName, amount: transAmount });
	};

	// useEffect hook to check if response was a success, if so, then continue on to clear the form fields
	useEffect(() => {
		if (response.success) {
			setTransAmount("");
			setTransName("");
		}
	}, [response.success]);
	return (
		<>
			<h3>Add A Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction Name:</span>
					<input
						required
						type="text"
						onChange={(e) => setTransName(e.target.value)}
						value={transName}
					/>
				</label>

				<label>
					<span>Transaction Amount:</span>
					<input
						required
						type="number"
						onChange={(e) => setTransAmount(e.target.value)}
						value={transAmount}
					/>
				</label>
				<button type="submit">Add Transaction</button>
			</form>
		</>
	);
}
