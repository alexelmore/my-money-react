import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export const useCollection = (collection) => {
	// State
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);

	// useEffect hook that fires whenever the collection changes
	useEffect(() => {
		let ref = projectFirestore.collection(collection);
		const unsubscribe = ref.onSnapshot(
			(snapshot) => {
				let results = [];
				snapshot.docs.forEach((doc) => {
					results.push({ ...doc.data(), id: doc.id });
				});
				// Update our documents state with the results variable
				setDocuments(results);
				// Update our error state to null
				setError(error);
			},
			(error) => {
				console.log(error);
				setError(error.message);
			}
		);
		// Clean up function for the unsubscribe event
		return () => unsubscribe();
	}, [collection]);
	// Return documents and error from our hook
	return { documents, error };
};
