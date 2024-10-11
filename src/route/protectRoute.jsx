import { useEffect, useState } from "react";
import { currentUser } from "../api/auth";
import { Navigate } from "react-router-dom";
import useAuthStore from "../store/auth-store";

export const ProtectRoute = ({element,allow})=>{
    const [isAllowed, setIsAllowed] = useState(null)

    const token = useAuthStore((state)=>state.token)


    useEffect(()=>{
        checkRole()
    },[])

    const checkRole = async ()=>{
        try {
            console.log(token)
            const resp = await currentUser(token)
            const role = resp.data.member.role
            console.log(role,"from backend")

            if(allow.includes(role)){
                setIsAllowed(true)
            }else{
                setIsAllowed(false)
            }
        } catch (err) {
            console.log(err)
            setIsAllowed(false)
        }
    }
    return element
}