import React from 'react'
import { useState, useEffect } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import EditForm from './ItemPage';
import { ToastContainer, toast, Flip } from 'react-toastify';
import Footer from '../../components/Footer';

const HomePage = () => {
  const [allProducts, setAllProducts] = useState([])
  const [popUp, setPopup] = useState(false)

  async function getProducts() {
    const products = await fetch("/api/items")
    const data = await products.json()
    setAllProducts(data.data)
  }
  const handleDelete = async (id) => {
    const res = await fetch(`api/items/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': "application/json"
      }
    })
    const data = await res.json()
    console.log(data)
    if (res.ok) {
      toast.success("Product deleted successfully");
      setAllProducts(allProducts.filter(elem => elem._id !== id));
    } else {
      toast.error("Failed to delete product");
    }
  }
  useEffect(() => {
    getProducts()

  }, [])



  return (
    <>
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
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-200 bg-[linear-gradient(to_right,#012d5819_2px,transparent_1px),linear-gradient(to_bottom,#012d5819_2px,transparent_1px)] bg-[size:6rem_4rem]"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div></div>
      <div className='mx-auto min-h-[100vh] w-fit py-4 pb-10 pt-18 relative'>

        <h1 className='p-6 font-bold text-3xl bg-gradient-to-r from-[#0010a4] to-[#770ce9] inline-block text-transparent bg-clip-text' >Current products</h1>
        <div className=" grid grid-cols-1 xl:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {(allProducts.length === 0) && <div className='px-6 w-72'> No Items in cart. <Link to={"/create"} className='text-purple-700 hover:underline active:text-red-800'>Add Items</Link> </div>}
          {allProducts.map((elem) => {
            return (
              <div className=' bg-[#143555] w-72 overflow-hidden duration-200 hover:shadow-black  hover:shadow-2xl rounded-md'>
                <NavLink to={`item/${elem._id}`} key={elem._id} className='inline-block'>
                  <div className="w-72 h-50  overflow-hidden"><img src={elem.images[0]} alt='image' className='w-full h-full object-cover object-center' /></div>
                  <div className="text-xl capitalize font-bold mx-3 pt-1  text-white ">{elem.name}</div>
                  <div className="text-xl capitalize mx-3 text-gray-400 pt-0.5">{elem.type}</div>
                  <div className="text-lg  mx-3 text-white pt-0.5">{elem.description}</div>
                </NavLink>
                <div className='flex p-3'>
                  <button onClick={() => { handleDelete(elem._id) }} className=" grow py-1 px-2 flex items-center justify-between border-amber-300  h-fit text-xl transform transition-transform duration-300 hover:scale-104 bg-[#ffd700] rounded-sm"> Delete < MdOutlineDeleteOutline /></button>

                </div>
              </div>
            )
          })}
        </div>
        {popUp && <EditForm updateData={updateData} onClose={() => setPopup(false)} defaultValues={editedProduct} />}
      </div>
      <Footer />
    </>
  )
}

export default HomePage
