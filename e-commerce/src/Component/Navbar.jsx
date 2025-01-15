import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return(
        <div className="flex sticky  flex-row gap-5  justify-between sticky top-0 bg-white z-50">
        <p><img src="/shop.jpg" alt="shop.jpg" className='h-16 flex-1' /></p>
        <div className='flex flex-row gap-5  items-baseline'>
        <p className="py-3 px-1">
        <div >
        <input type="text" id="large-input" placeholder='Search for Products,Brands and More' class="block w-[400px] p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
         </div>
        </p>
        <p className="py-3 px-1"> <FontAwesomeIcon  icon={faUser} /><span className='px-2'>Profile</span></p>
        <p className="py-3 px-1"><FontAwesomeIcon icon={faCartShopping} /><span className='px-2'>Cart</span></p>
        </div>
        </div>
    )
}