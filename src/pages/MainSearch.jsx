import React from 'react'
import Header from '../MainSearch/Heaader'

import RelatedSearches from '../MainSearch/RelatedSerach'
import Pagination from '../MainSearch/Pagination'
import ImageShow from '../MainSearch/ImageShow'
import SearchPhoto from '../MainSearch/SearchPhoto'

function MainSearch() {
  return (
    <div>
     <Header/>
     <SearchPhoto/>
     {/* <RelatedSearches/> */}
     <ImageShow/>
     <Pagination/>

    </div>
  )
}

export default MainSearch