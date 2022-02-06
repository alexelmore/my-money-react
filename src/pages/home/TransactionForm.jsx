import { useState } from "react";

export default function TransactionForm() {
	// State for transaction name and amount
	const [transName, setTransName] = useState("");
	const [transAmount, setTransAmount] = useState("");

	// Function that handles form submission
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log({ transName, transAmount });
	};
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
