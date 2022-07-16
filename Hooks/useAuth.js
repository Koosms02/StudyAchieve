
import React,{
  createContext,
   useRef,
   useState,
   useContext,
   useEffect} from 'react'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  sendEmailVerification
} from "firebase/auth"
import { auth } from './firebase.js'
import { useMemo } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children}) => {
  
  const [initialLoading , setInitialLoading] = useState(true)
  const [user , setUser] =useState([null])
  function signUp(email ,password){
     return createUserWithEmailAndPassword(auth , email, password);
  }
  function login(email, password){
      return signInWithEmailAndPassword(auth, email , password);
  }

  useEffect(()=>onAuthStateChanged(
      auth ,
      (currentUser)=>{
         if(currentUser){
           setUser(currentUser)
         }else{
          // unable to login
          setUser(null)
         }
         setInitialLoading(false)
    }),
    [])

   const memoedValues = useMemo(()=>({
     user ,
     signUp,
     login
   }),[user , initialLoading])
  return (
    <AuthContext.Provider  value={memoedValues}> {!initialLoading && children}</AuthContext.Provider>
  )
}
export default function useAuth(){
    return useContext(AuthContext);
}