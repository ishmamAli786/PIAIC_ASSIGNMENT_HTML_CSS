import React from 'react';
import firebase from '../config/firebase';

export const Auth=(provider)=> {
            return firebase.auth().signInWithPopup(provider).then((res)=>{
                return res.user
            }).catch((err)=>{
                return err;
            })
}
