import React,{useState} from 'react';
import FaceBookLogin from 'react-facebook-login';

export default function Facebook() {
    const [isLogin,setIsLogin]=useState(false);
    const [userID,setUserID]=useState('');
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [picture,setPicture]=useState('');


    const componentClicked=()=>{
        console.log('clicked me')
    }

    const responseFacebook=(response)=>{
        console.log(response)
    }
    return (
        <div>
            <FaceBookLogin appId="168138108776145" autoLoad={true} fields={"name","email","picture"} onClick={()=>componentClicked} callback={()=>responseFacebook}/>
        </div>
    )
}
