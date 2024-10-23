import React, { useEffect } from 'react'
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
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

function AdminDashbord() {


  const getProduct = photoStore((state) => state.getProduct)
  const photos = photoStore((state) => state.products)
  const token = useAuthStore((state) => state.token)
  const navigate = useNavigate()

  useEffect(() => {
    getProduct(token, 20)
  }, [])
  const hdlDelete = async(id)=>{
    if(window.confirm("Confirm to delete this photo")){
      // console.log(id)
      try {
        const res = await deletePhoto(token,id)
        getProduct(token, 20)
        console.log(res)
       toast.success("Delete photo")
      } catch (err) {
        console.log(err)
        toast.success("Can not delete this photo")
      }

    }
  }

  const hdlEdit = (id) => {
    navigate(`/admin/editPhoto/${id}`)
  }

  // console.log(photos)

  return (
    <Table className="w-3/4 mx-auto mt-5">
    <TableCaption>A list of Flash Pics Photos</TableCaption>
    <TableHeader className="text-lg font-medium">
      <TableRow>
        <TableHead className="w-[100px] text-sky-600 py-2">Id</TableHead>
        <TableHead className="w-[150px] text-sky-600 py-2">Photo</TableHead>
        <TableHead className="text-sky-600 py-2">Title</TableHead>
        <TableHead className="text-sky-600 py-2">Category</TableHead>
        <TableHead className="text-right text-sky-600 py-2">Price</TableHead>
        {/* Flexbox centering for Action */}
        <TableHead className="text-sky-600 py-2 w-[120px] flex justify-center items-center">Action</TableHead>
      </TableRow>
    </TableHeader>
  
    <TableBody>
      {photos.map((el) => (
        <TableRow key={el.id}>
          <TableCell className="font-medium">{el.id}</TableCell>
          <TableCell className="font-medium">
            <img src={el.url} alt={el.title} className="h-18 w-18 object-cover" />
          </TableCell>
          <TableCell>{el.title}</TableCell>
          <TableCell>{el.category.name}</TableCell>
          <TableCell className="text-right">{el.price}</TableCell>
          <TableCell className="text-right flex align-middle justify-center pt-9 space-x-4">
            {/* Add Edit button */}
            <button className="text-blue-600 hover:text-blue-800" onClick={() => hdlEdit(el.id)}>Edit</button>
            {/* Delete icon */}
            <Delete className="w-7 h-7 cursor-pointer" onClick={() => hdlDelete(el.id)} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>

  )
}

export default AdminDashbord