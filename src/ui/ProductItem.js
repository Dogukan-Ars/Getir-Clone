import { FiPlus } from 'react-icons/fi'

export const ProductItem = ({ product }) => {
   return (
      <div className="bg-white flex flex-col gap-y-1 relative items-center text-center text-sm font-semibold p-3">
         <button className='bg-white absolute top-3 right-3 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg transition-colors text-brand-color shadow-lg hover:text-brand-yellow hover:border-brand-color'>
            <FiPlus size={17} />
         </button>
         <img src={product.image} alt={product.title} />
         <div className="text-brand-color">{product.price}</div>
         <div className="text-gray-900">{product.title}</div>
         <div className="text-gray-500">{product.alt}</div>
      </div>
   )
}
