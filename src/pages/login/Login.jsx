import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
// Styles for Login component
import styles from "./Login.module.css";
export default function Login() {
	// State for email and password
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// Destructure useLogin hook and pull out login function, error and ispending.
	const { login, isPending, error } = useLogin();

	const handleSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	return (
		<form onSubmit={handleSubmit} className={styles["login-form"]}>
			<h2>Login</h2>
			<label>
				<span>Email:</span>
				<input
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label>
				<span>Password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			{isPending ? (
				<button className="btn" disabled>
					loading
				</button>
			) : (
				<button className="btn">Sign In</button>
			)}
			{error && <p>{error}</p>}
		</form>
	);
}
