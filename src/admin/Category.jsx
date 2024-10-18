import React, { useEffect, useState } from 'react'
import useAuthStore from '../store/auth-store'
import categoryStore from '../store/category-store'
import { listCategory } from '../api/category'

function Category() {


  const token = useAuthStore((state) => state.token)
  const actionListCategory = categoryStore((state) => state.actionListCategory)
  const actionCreateCategory = categoryStore((state) => state.actionCreateCategory)
  const categories = categoryStore((state) => state.categories)
  const actionRemove = categoryStore((state) => state.actionRemove)


  const [name, setName] = useState({ name: '',url:"" })
  const formData = new FormData()

  const initialState = {
    name: '',

  }
  // const [categories, setCategories] = useState([])

  useEffect(() => {
    actionListCategory(token)
  }, [])

  // const getCategory = async (token) => {
  //   try {
  //     const resp = await listCategory(token)
  //     setCategories(resp.data.allCategory)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  const hdlChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }
  const hdlUpload = async(e)=>{
    const file = e.target.files[0]
    formData.append("file",file)
    formData.append("name",name.name)
  }


  const hdlSubmit = async (e) => {
    e.preventDefault()
    await actionCreateCategory(token,formData)
    await actionListCategory(token)
    setName(initialState)
  }
  const hdlRemove = async (id) => {
    await actionRemove(token, id)
    await actionListCategory(token)
  }
  return (
    
    <div className='container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg'>
      <h1 className='text-2xl font-bold text-gray-800 mb-6 border-b pb-3'>Category Management</h1>

      <form className='flex items-center gap-3 mb-6 flex-col' onSubmit={hdlSubmit}>
        <input
          className='flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200'
          type='text'
          name='name'
          placeholder='Enter category name'
          onChange={hdlChange}
          value={name.name}
        />
        <input
          className='flex-1 border border-gray-300 rounded-lg p-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200'
          type='file'
          name='url'
          placeholder='Select file'
          onChange={hdlUpload}
          value={name.url}
        />
        
        <button
          className='bg-sky-600 text-white hover:bg-sky-700 font-semibold py-2 px-4 rounded-lg shadow transition-all duration-300'
          type='submit'>
          Add Category
        </button>
      </form>

      <hr className='mb-6' />

      <ul className='space-y-4'>
        {categories.map((item, index) => (
          <li key={index} className='flex justify-between items-center text-gray-700'>
            <span className='font-medium'>{item.name}</span>
            <button
              onClick={() => hdlRemove(item.id)}
              className='text-orange-600 font-semibold hover:underline'>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Category