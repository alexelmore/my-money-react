import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
// styles
import styles from "./Navbar.module.css";

export default function Navbar() {
	const { logout } = useLogout();
	const { user } = useAuthContext();

	return (
		<nav className={styles.navbar}>
			{user === null ? (
				<ul style={{ display: "flex" }}>
					<li className={styles.title}>myMoney</li>
					<>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="/signup">Sign Up</Link>
						</li>
					</>
				</ul>
			) : (
				<ul style={{ display: "block" }}>
					<li className={styles.title}>myMoney</li>
					<li style={{ display: "flex", alignItems: "center" }}>
						<p>{`Greetings, ${
							user.displayName.charAt(0).toUpperCase() +
							user.displayName.slice(1)
						}!`}</p>
						<button onClick={logout} className="btn">
							Logout
						</button>
					</li>
				</ul>
			)}
		</nav>
	);
}
