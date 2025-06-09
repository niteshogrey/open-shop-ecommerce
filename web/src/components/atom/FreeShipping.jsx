import { Truck } from 'lucide-react';

const FreeShipping = () => {
  return (
    <section className='w-full flex justify-center items-center py-5 px-10'>
        <div className='w-[80vw]  py-6 px-8 border-2 border-violet-600 flex items-center justify-between rounded-md'>
            <div className='flex items-center gap-4 '>
                <Truck size={40} />
                <span className='text-2xl font-bold'>Free Shipping</span>
            </div>
            <p>Free Delivery Now On Your First Order and over $200</p>
            <h2 className='text-2xl font-bold'>-Only $200</h2>
        </div>
    </section>
  )
}

export default FreeShipping