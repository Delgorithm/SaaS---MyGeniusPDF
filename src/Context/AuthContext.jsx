import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../Auth/Firebase";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "firebase/auth";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    const createUserAccount = async (email, password) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            return user;
        } catch (error) {
            throw error;
        }
    };

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email ,password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => { 
            console.log(currentUser)
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <UserContext.Provider value={{createUserAccount, user, logout, login}}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};
