import React, { useState } from 'react'

function UploadFile({setForm, form,ref}) {

    const [isLoading, setIsLoading] = useState(false)
    const hdlOnChange = (e)=>{
        //array-like object ใช้เพื่อเข้าถึงไฟล์แรกที่ผู้ใช้เลือกจาก input ชนิดไฟล์
        const file = e.target.files[0]
        if(file){
           setIsLoading(true)  
        }
        console.log(e.target.name,e.target.value)
        setForm({...form,
            [e.target.name]:e.target.files[0],
            previewPhoto: URL.createObjectURL(file)
        })
      }

      //useref to be the reference of file input
  return (
    <div className='mb-3'>

        <div>

        <input 
        onChange={hdlOnChange}
        type="file" 
        name='file'
        className='file:bg-white file:border-orange-500 file:text-orange-500 hover:file:bg-orange-500 hover:file:text-white'
        ref={ref}
        />
        </div>
    </div>
  )
}

export default UploadFile

