import React from 'react'
import SearchBar from '../../../components/form/input/SearchBar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuBarItem from '../../../components/MenuBarItem';
function NavbarHeader() {
  return (
    <div className=' my-3'>
      <div className="area flex-bet gap-4">
        <h1>logo</h1>
        <SearchBar />
        <div className='flex-center gap-2'>
          <FavoriteBorderIcon />
          <ShoppingCartIcon />
        </div>
      </div>
      <MenuBarItem />
    </div>
  )
}

export default NavbarHeader