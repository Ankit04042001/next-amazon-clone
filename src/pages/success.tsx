import { resetCart } from "@/store/nextSlice"
import Link from "next/link"
import { UseDispatch, useDispatch } from "react-redux"

function SuccessPage() {
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col gap-2 items-center justify-center py-20'>
      <h1>Thank you for shopping in next_amazon_yt</h1>
      <Link href={'/'} onClick={()=>dispatch(resetCart())}>
          <p>Continue Shopping</p>
      </Link>
    </div>
  )
}

export default SuccessPage