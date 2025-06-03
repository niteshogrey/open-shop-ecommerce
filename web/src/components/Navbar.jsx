import { SlidersHorizontal, Rocket } from 'lucide-react';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-3 border-b border-gray-200 px-20 shadow-lg'>
        <div className='font-semibold'>

            <button className='uppercase flex items-center gap-3 text-xl hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer'> <span><SlidersHorizontal/></span> Shop By Filter</button>
        </div>
        <div className='w-[60%] font-semibold'>
            <ul className='flex w-full justify-between text-lg capitalize '>

            {["Home", "fashoin", "Electronics", "bags", "Footwear", "Groceries", "Beauty"].map((item, index)=>(
                <li key={index} className='cursor-pointer duration-500 hover:scale-105'>{item}</li>
            ))}
            </ul>
        </div>
        <div className='flex items-center gap-2 w-[16%] bg-amber-500 px-3 py-2 rounded-full'>
            <span><Rocket/></span>
            <p>Free Delivery</p>
            <button type="button" className='bg-violet-500 px-2 py-1 rounded-full text-white font-semibold'>Subscribe</button>
        </div>
    </div>
  )
}

export default Navbar