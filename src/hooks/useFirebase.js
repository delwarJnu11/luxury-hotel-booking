import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();
//provider
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () => {
    const auth = getAuth();
    //state declare
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [photoUrl, setPhotoUrl] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    //Get Name
    const getName = (e) => {
        setName(e.target.value);
    }

    //Get Email
    const getEmail = (e) => {
        setEmail(e.target.value)
    }

    //Get Password
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    //Get Photo Url
    const getPhotoUrl = (e) => {
        setPhotoUrl(e.target.value);
    }

    const updateUserProfile = () => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl,

        }).then(() => {

        }).catch((error) => {
            setError(error.message)
        });
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Verfication Mail has been Send.')
            });
    }
    //Create new User
    const createNewUser = (e) => {
        e.preventDefault();
        setIsLoading(true);
        if (password.length < 6) {
            setError('Password Should be at Least 6 Chracters!!!');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert('Sign Up Successfully Done!');
                updateUserProfile();
                verifyEmail();

            }).catch((error) => {
                setError(error.message)
            })
    }

    //Email and PassWord SignIn
    const signInWithEmail = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    //Google Sign In
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

    }
    //Facebook Sign In
    const signInWithFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)

    }
    //Github Sign In
    const signInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)

    }
    //PassWord Reset
    const resetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password Reset Email Sent To Your Mail')
            })
            .catch((error) => {
                setError(error.message)
            });
    }
    //Sign Out
    const logOut = () => {
        signOut(auth)
            .then((result) => {
                setUser({})
            })
    }
    // clear error
    useEffect(() => {
        setTimeout(() => {
            setError("");
        }, 5000);
    }, [error]);

    //Observe user 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return unsubscribe;
    }, [auth]);

    return { user, setUser, error, setError, isLoading, setIsLoading, getName, getPhotoUrl, getEmail, getPassword, signInWithEmail, signInWithGoogle, signInWithGithub, signInWithFacebook, createNewUser, resetPassword, logOut }
}
export default useFirebase;
