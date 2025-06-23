import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Commet } from 'react-loading-indicators';
import { NavLink } from 'react-router-dom';
import { GiTireIronCross } from "react-icons/gi";
import { useEffect } from 'react';

const CreatePage = () => {
  const {
    register, // Registers input fields
    handleSubmit, // Handles form submission
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting }, // Access form errors
  } = useForm();

  const itemType = watch("type", "")

  const [images, setImages] = useState([0])

  useEffect(() => {
    if (itemType) {
      setValue("type", itemType.charAt(0).toUpperCase() + itemType.slice(1), {
        shouldValidate: true,
      })
    }
  }, [itemType]);


  const addItem = async (itemObj) => {
    const images = Object.keys(itemObj).filter(imgs=>imgs.startsWith("imgLink")).map((img)=>itemObj[img].trim())
    const modObj = {
      ...itemObj,
      images
    }
     Object.keys(modObj).forEach((key) => {
    if (key.startsWith("imgLink")) {
      delete modObj[key];
    }
  });

    const res = await fetch("api/items", {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(modObj)
    })
    const data = await res.json()
    console.log(data)
  }


  const onSubmit = async (itemObj) => {
    toast.promise(
      addItem(itemObj),
      {
        pending: "Fetching data...",
        success: "Pruduct added successfully!",
        error: "Failed to fetch data.",
      })
    reset()
  }


  return (
    < >
      <div className="absolute  inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(130%_113%_at_50%_-10%,#eaeaea_40%,#00b0ffba_100%)]"></div>
      <div className='flex justify-center pt-10 relative'>

        <form className="  w-lg mx-4 my-9 bg-white p-6 shadow-2xl rounded-lg" onSubmit={handleSubmit(onSubmit)}>
          <NavLink to="/" className="absolute right-1 top-1 py-1.5 px-2" ><GiTireIronCross /></NavLink>
          {/* Item Name */}
          {isSubmitting && <div className=' absolute bg-blue-200/0 right-52 top-32 z-10 '><Commet color="#32cd32" size="medium" /></div>}
          <div className="mb-4 relative">
            <label htmlFor="itemName" className="block text-gray-700 font-semibold mb-2">
              Enter Item Name
            </label>
            <input
              id="itemName"
              autoComplete='off'
              autoCapitalize="sentences"
              type="text"
              {...register("name", {
                required: { value: true, message: "Name is required" },
                minLength: { value: 2, message: "Length should be greater than 2" },
                maxLength: { value: 25, message: "Length should be smaller than 25" },
              })}
              className="w-full p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.name.message}</p>}
          </div>

          {/* Item type */}
          <div className="mb-4 relative">
            <label htmlFor="itemType" className="block text-gray-700 font-semibold mb-2">
              Enter Item type
            </label>
            <input
              autoComplete='off'
              id="itempType"
              type="text"
              autoCapitalize="sentences"
              {...register("type", {
                required: { value: true, message: "Type is required" },
                minLength: { value: 3, message: " length should be greater than 3" },
                maxLength: { value: 25, message: " length should be smaller than 25" },
              })}
              className="w-full  p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.type && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.type.message}</p>}
          </div>

          {/* Item discription */}
          <div className="mb-4 relative">
            <label htmlFor="itemDesc" className="block text-gray-700 font-semibold mb-2">
              Enter Item description
            </label>
            <input
              autoComplete='off'
              id="itempDesc"
              type="text"
              autoCapitalize="sentences"
              {...register("description", {
                required: { value: true, message: "description is required" },
                minLength: { value: 4, message: " length should be greater than 4" },
                maxLength: { value: 100, message: " length should be smaller than 100" },
              })}
              className="w-full  p-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1 absolute right-1">{errors.description.message}</p>}
          </div>

          {/* Image Link */}

          <div className="mb-8 relative">
            <label className="block text-gray-700 font-semibold mb-2">
              Enter Image Links
            </label>
            {images.map((_, indx)=>{
              return <div className="mb-4 relative" key={indx}>
            <input
              autoComplete='off'
              type="link"
              placeholder={`Image URL : ${indx +1}`}
              {...register(`imgLink${indx}`, {
                required: { value: true, message: "This is required" },

              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
            })}
            

          <button
            type="button"
            onClick={() => setImages((prev)=>[...prev, prev+1])}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add Images
          </button>

          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full mb-4 relative bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300">
            Submit
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover
            theme="light"
            transition={Flip}
          />
          <div className='mx-auto w-fit text-purple-900 hover:underline'>
            <NavLink to={`https://unsplash.com/s/photos/${watch("type")}`} target="_blank" rel="noopener noreferrer" >Get {watch("type")} Image from unsplash  </NavLink>
          </div>
        </form>

      </div>
    </>
  )
}

export default CreatePage