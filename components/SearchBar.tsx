import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SearchBar = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-3 items-center  rounded-full  p-3 lg:border border-gray-500'>
    <Search size={35} className='hidden lg:flex text-orange-500 ' />
      <Input 
      
      className=' text-xl text-center lg:text-left  border-0 outline-none focus-visible:ring-transparent' placeholder='Search by City or Town' />
      <Button className='bg-orange-500 hover:bg-orange-500 rounded-full w-full lg:w-auto'>Search</Button>
    
    </div>
  )
}

export default SearchBar