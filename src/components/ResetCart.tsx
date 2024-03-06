import { resetCart } from '@/store/nextSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function ResetCart() {
    const dispatch = useDispatch()
    const handleResetCart = ()=>{
        const confirmReset = window.confirm("Are you sure to reset the cart?")
        if(confirmReset){
            dispatch(resetCart())
        }
    }
  return (
    <button onClick={handleResetCart} className='w-44 h-10 font-semibold bg-gray-100 rounded-lg hover:bg-red-600 hover:text-white duration-300'>reset cart</button>
  )
}

export default ResetCart