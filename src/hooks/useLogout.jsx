import { useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
	// State for error and pending
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);

	// Destructure Auth Context Hook
	const { dispatch } = useAuthContext();

	// Funtion that gets invoked whenever user wants to logout.
	const logout = async () => {
		setError(null);
		setIsPending(true);

		try {
			// Try to sign the user out
			await projectAuth.signOut();

			// Dispatch logout action
			dispatch({ type: "LOG_OUT" });

			// Re-set state values
			setIsPending(false);
			setError(null);

			// Catch any errors if there are any
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	};

	return { logout, error, isPending };
};
