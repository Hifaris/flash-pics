import React from 'react'
import Header from '../MainSearch/Heaader'


import Pagination from '../MainSearch/Pagination'
import ImageShow from '../MainSearch/ImageShow'
import SearchPhoto from '../MainSearch/SearchPhoto'

function MainSearch() {
  return (
    <div>
   
     <SearchPhoto/>
     <ImageShow/>
     <Pagination/>

    </div>
  )
}

export default MainSearch