

import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import { currentUser } from '../api/auth'
import LoadingToRedirect from './LoadingToRedirect'

function ProtectRouteUser({element}) {
    const [isAllowed, setIsAllowed] = useState(false)
    const user = useAuthStore((state)=> state.user)
    const token = useAuthStore((state)=> state.token)
    const actionLogout = useAuthStore((state)=> state.actionLogout)
    console.log(user)

    useEffect(()=>{
         if(user&&token) {
            currentUser(token)
            .then((res)=> setIsAllowed(true))
            .catch((err)=> setIsAllowed(false))
         }
    },[])
//   actionLogout()
  return isAllowed? element : <LoadingToRedirect/>
}

export default ProtectRouteUser