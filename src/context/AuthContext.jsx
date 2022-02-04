import { createContext, useReducer } from "react";
export const AuthContext = createContext();

// Auth Context Reducer Function; Function is being exported just in case we decide to use this function in another file later on.
export const authReducer = (state, action) => {
	switch (action.type) {
		case "LOG_IN":
			return { ...state, user: action.payload };
		case "LOG_OUT":
			return { ...state, user: null };
		default:
			return state;
	}
};

// Auth Context Provider Component
export const AuthProvider = ({ children }) => {
	// State for Auth Context Reducer
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	console.log("context state:", state);

	return (
		<AuthContext.Provider
			value={{
				...state,
				dispatch,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
