import React, { useEffect } from "react"
import { useUserProfileQuery } from "../../store/service/endpoints/auth.endpoints";
import { useNavigate } from "react-router-dom";


export const AuthGuard =  ({check,path,children}) => {
    const {isError,data} = useUserProfileQuery();
    
    const nav = useNavigate();
    useEffect(()=> {
        if(check){
            nav(path)
        }
    },[check])
    
    return (
        <div>
         {children}
        </div>
    )
}