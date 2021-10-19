import { useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/Firebase.initialize";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userName, setUserName] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setError('');
            }
        });
    }, [auth]);

    const handleSignOut = () => {
        signOut(auth)
            .then((result) => {
                setUser({});
            }).catch((error) => {
                setError(error.message);
            })
    }

    return {
        user,
        setUser,
        error,
        setError,
        email,
        password,
        signInWithGoogle,
        handleSignOut,
        setEmail,
        setPassword,
        userName,
        setUserName,
    }
}

export default useFirebase;