import React from 'react'
import { Pagination} from 'flowbite-react'
export default function Paginationn() {
  return (
    
<div className="flex justify-center mt-3">
<Pagination
  currentPage={1}
  totalPages={100}
 
/>
</div>
  )
}
