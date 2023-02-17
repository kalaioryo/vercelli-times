import React from 'react'

import CategoryNews from '../articles-components/CategoryNews';

function CategorySection() {
  return (
    <>
      <CategoryNews section={'world'} category={'World news'}/>
      <CategoryNews section={'us'} category={'U.S. News'}/>
      <CategoryNews section={'politics'} category={'U.S. Politics'}/>
      <CategoryNews section={'nyregion'} category={'New York'}/>
      <CategoryNews section={'business'} category={'Business'}/>
      <CategoryNews section={'technology'} category={'Technology'}/>
      <CategoryNews section={'science'} category={'Science'}/>
      <CategoryNews section={'sports'} category={'Sports'}/>
      <CategoryNews section={'obituaries'} category={'Obituaries'}/>   

      <CategoryNews section={'opinion'} category={'Opinion'}/>
      <CategoryNews subSection={'columnist'} category={'Columnist'}/>
      <CategoryNews subSection={'editorials'} category={'Editorials'}/>
      <CategoryNews subSection={'contributors'} category={'Guest Essays'}/>
      <CategoryNews subSection={'sunday'} category={'Sunday Review'}/>

      <CategoryNews section={'arts'} category={'Arts'}/>
      <CategoryNews subSection={'design'} category={'Art & Design'}/>
      <CategoryNews subSection={'movies'} category={'Movies'}/>
      <CategoryNews subSection={'television'} category={'Television'}/>
      <CategoryNews subSection={'music'} category={'Music'}/>
      <CategoryNews subSection={'theater'} category={'Theater'}/>
      <CategoryNews subSection={'dance'} category={'Dance'}/>
    </>
  )
}

export default CategorySection