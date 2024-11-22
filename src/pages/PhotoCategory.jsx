import { useLocale } from 'antd/es/locale'
import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import photoStore from '../store/product-store'
import useAuthStore from '../store/auth-store'


function PhotoCategory() {

    // const photos = photoStore((state)=> state.products)
    const getProduct = photoStore((state) => state.getProduct)
    const token = useAuthStore((state) => state.token)
    const location = useLocation()
    console.log(location.state)
    const navigate = useNavigate()
    useEffect(() => {
        getProduct(120)
    }, [])




    const hdlClick = (id) => {
        navigate(`/user/photo/${id}`)
    }

    return (
        <div>

            <div className="relative bg-cover bg-center h-96" style={{
                backgroundImage:
                    "url('https://images.pexels.com/photos/1048033/pexels-photo-1048033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
            }}>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <div className="flex gap-2">

                        <h1 className="text-4xl font-bold">{location.state.name} Category</h1><span className="text-4xl font-bold text-sky-500">Flash</span><span className="text-4xl font-bold text-orange-600">Pics</span>
                    </div>

                </div>
            </div>
            <div className="flex justify-center items-center ">
                <h1 className="text-center text-2xl font-bold mb-6 opacity-70">Explore All {location.state.name} Photos here</h1>
            </div>
            <div>

                <div className="grid grid-cols-4 gap-3 mb-8 p-5 mt-10">

                    {

                        location.state.Photos.map((el) => (
                            <Link to={'/user/photo/' + el.id} >
                                <img src={el.url} key={el.id}
                                    className="w-full h-auto rounded cursor-pointer hover:scale-105 " />


                            </Link>

                        ))

                    }

                </div>

            </div>

        </div>
    )
}

export default PhotoCategory