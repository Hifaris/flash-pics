import React, { useEffect, useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import photoStore from '../store/product-store'
  import useAuthStore from '../store/auth-store'
  import { Delete } from '../icons'
  import { deletePhoto } from '../api/photo'
import { listUsers } from '../api/auth'

function UserManagement() {
    const token =useAuthStore ((state)=>state.token)
    const [user,setUser] = useState([])

    const allUser= async()=>{
    const resp = await listUsers(token)
    setUser(resp.data)
    console.log(resp.data[0].enable)
    }

    useEffect(()=>{
    allUser()
    },[])
  return (
    <Table className="w-3/4 mx-auto mt-5">
      <TableCaption>User Management</TableCaption>
      <TableHeader className="text-lg font-medium">
        <TableRow>
          <TableHead className="w-[100px]  text-sky-600 py-2">Id</TableHead>
          <TableHead className="w-[200px]  text-sky-600 py-2">Name</TableHead>
          <TableHead className=" text-sky-600 py-2">Email</TableHead>
          <TableHead className=" text-sky-600 py-2">Role</TableHead>
          <TableHead className="text-right  text-sky-600 py-2">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>

        {
          user.map((el) => (

          <TableRow>
            <TableCell className="font-medium">{el.id}</TableCell>
            <TableCell className="font-medium">{el.firstName} {el.lastName}</TableCell>
            <TableCell>{el.email}</TableCell>
            <TableCell>{el.role}</TableCell>
            <TableCell className="text-right">{el.enable}</TableCell>
         
          </TableRow>
            
          ))
        }
        
      </TableBody>
    </Table>
  )
}

export default UserManagement