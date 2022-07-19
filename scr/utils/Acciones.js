import { firebaseApp } from "./Firebase"
import * as firebase from 'firebase'

export const isUserLogged =()=>{
    let isLogged = false
    
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            isLogged = true
        }
        else{
            isLogged = false
        }
    })

    return isLogged
}