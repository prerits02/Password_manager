import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
const Manager = () => {
    const [form, setform] = useState({ website: "", Username: "", Password: "" })
    const ref = useRef()
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let password = localStorage.getItem("password")
        let passwordArray
        if (password) {
            setpasswordArray(JSON.parse(password))
        }
    }, [])


    const changeShow = () => {
        if (ref.current.src.includes("icons/image2.png")) {
            ref.current.src = "icons/image1.png"
        }
        else {
            ref.current.src = "icons/image2.png"
        }

    }

    const savePassword = () => {
        setpasswordArray([...passwordArray, form])
        localStorage.setItem("password", JSON.stringify([...passwordArray, form]))
        console.log([...passwordArray, form])

    }

    const handlechange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })

    }


    return (
        <>
            <div>
                <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            </div>
            <div className=" mx-auto max-w-4xl">
                <div>

                    <div className=' font-bold'>
                        <h1 className='text-4xl text font-bold text-center '>

                            <span className='text-green-600'>&lt;</span>
                            Pass
                            <span className='text-green-700'>OP/&gt;</span>
                        </h1>
                    </div>
                    <p className='text-green-700 text-center'>your own password  manager </p>

                </div>
                <div className=' flex flex-col p-4 gap-4'>
                    <input value={form.website} onChange={handlechange} placeholder='Enter your website name' className='rounded-lg border border-green-800 border-r-4 p-4 py-1' type="text" name='website' id='' />
                    <div className=' flex w-full justify-between gap-8'>
                        <input value={form.Username} onChange={handlechange}
                            placeholder='Username' className='rounded-lg border border-green-800 border-r-4 w-full p-4 py-1' type="text" name='Username' id='' />
                        <div className="relative">

                            <input value={form.Password}
                                onChange={handlechange} placeholder='Password' className='rounded-lg border border-green-800 border-r-4  p-4 py-1' type="text" name='Password' id='' />
                            <span className='absolute right-[1px] top-[1px] cursor-pointer' onClick={changeShow}>
                                <img ref={ref} className='p-1' width={30} src="./icons/image1.png" alt="" />
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className=' flex hover:bg-green-500    justify-center items-center bg-green-700 rounded-full  w-fit border border-green-800 px-8 py-2'>
                        <lord-icon
                            src="https://cdn.lordicon.com/hqymfzvj.json"
                            trigger="hover">

                        </lord-icon>
                        ADD PASSWORD
                    </button>
                </div>
                <div className="passwords">
                   <h2 className='text-2xl font-bold py-4'>Yours password</h2>
                   {passwordArray.length===0&&<div>No password saved</div>}
                   {passwordArray.length!=0&&
                   <table className="table-auto w-full rounded-md overflow-hidden ">
                        <thead className='bg-green-800 text-white '>
                            <tr>
                                <th className='py-2'>web site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((items,id)=>{
                                return(<tr key={id}>
                                    <td className=' py-2 border border-whitetext-center w-32'><a href={items.website} target={'_blank'}>{items.website}</a></td>
                                    <td className=' py-2 border border-white text-center w-32'>{items.Username}</td>
                                    <td className=' py-2 border border-white text-center w-32'>{items.Password}</td>
                                </tr>)
                            })}
                            
                            
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
