import './Auth.css'
import { useState } from "react";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const Authorization = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setuserName] = useState('')
    const [useremail, setUseremail] = useState('')
    const [userphoto, setUserphoto] = useState('')

    const signIn = async () => {
        await createUserWithEmailAndPassword(auth, email, password)
    }

    const provider = new GoogleAuthProvider()

    const googleSignin = async () => {
        console.log('signup is working');

        await signInWithRedirect(auth, provider)
            .then((data) => {
               
                 setUseremail(data.user.email)
                setuserName(data.user.displayName)
                 setUserphoto(data.user.photoURL)
            })
            .catch((error) => {
                console.log(error.message);
            });
    }

   


    return (
    
        <div className="signIn">
            <input type="text" placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={signIn}> Sign in</button>
            <button onClick={googleSignin}> Sign in with Google</button>
            
            <h1>Username : {username}</h1>
            <h1>Email : {useremail}</h1>
            <img src={userphoto} alt="should not display anything" />
        </div>

    );
}

export default Authorization;