import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/";
export const useCollection = (collection) => {
	// State
	const [documents, setDocuments] = useState(null);
	const [error, setError] = useState(null);

	// useEffect hook that fires whenever the collection changes
	useEffect(() => {
		let ref = projectFirestore.collection(collection);
		const unsubscribe = ref.onSnapshot((snapshot) => {
			let results = [];
			snapshot.docs.forEach((doc) => {
				results.push({ ...doc.data(), id: doc.id });
			});
		});
	}, [collection]);
};
