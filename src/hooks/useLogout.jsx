import { useEffect, useState } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogout = () => {
	// State for isCancelled, error and pending
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(false);
	const [isCancelled, setIsCancelled] = useState(false);

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

			// Before we update any state, we make sure that the component has not unmounted
			if (!isCancelled) {
				// Re-set state values
				setIsPending(false);
				setError(null);
			}

			// Catch any errors if there are any
		} catch (err) {
			// Before we update any state, we make sure that the component has not unmounted
			if (!isCancelled) {
				setError(err.message);
				setIsPending(false);
			}
		}
	};

	// useEffect hook that returns a clean up function to prevent errors when the component unmounts
	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);
	return { logout, error, isPending };
};
