import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged,signOut} from "firebase/auth";

initializeAuthentication()
const useFirebase =()=>{
    const [user,setUsers] =useState();
    const [loading,setLoading] =useState(true);
    const auth = getAuth();
    const signinUsingGoogle =()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUsers(result.user)
        })
        .finally(()=>{
            setLoading(false)
        })
    }
    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,user=>{
            if(user){
                setUsers(user)
            }
            else{
                setUsers({})
            }
            setLoading(false)
        });
        return()=>unsubscribe
    },[])
   
    const logOut =()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{

        })
        .finally(()=>{
            setLoading(false)
        })
    }
    return {
        user,
        signinUsingGoogle,
        logOut,
        loading
    }
}
    

export default useFirebase