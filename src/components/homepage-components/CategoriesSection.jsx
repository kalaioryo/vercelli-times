import React from 'react'

import CategoriesNews from '../articles-components/CategoriesNews';

function CategoriesSection() {
  return (
    <>
      <CategoriesNews section={'world'} category={'World news'}/>
      <CategoriesNews section={'us'} category={'U.S. News'}/>
      <CategoriesNews section={'politics'} category={'U.S. Politics'}/>
      <CategoriesNews section={'nyregion'} category={'New York'}/>
      <CategoriesNews section={'business'} category={'Business'}/>
      <CategoriesNews section={'technology'} category={'Technology'}/>
      <CategoriesNews section={'science'} category={'Science'}/>
      <CategoriesNews section={'sports'} category={'Sports'}/>
      <CategoriesNews section={'obituaries'} category={'Obituaries'}/>   

      <CategoriesNews section={'opinion'} category={'Opinion'}/>
      <CategoriesNews subSection={'columnist'} category={'Columnist'}/>
      <CategoriesNews subSection={'editorials'} category={'Editorials'}/>
      <CategoriesNews subSection={'contributors'} category={'Guest Essays'}/>
      <CategoriesNews subSection={'sunday'} category={'Sunday Review'}/>

      <CategoriesNews section={'arts'} category={'Arts'}/>
      <CategoriesNews subSection={'design'} category={'Art & Design'}/>
      <CategoriesNews subSection={'movies'} category={'Movies'}/>
      <CategoriesNews subSection={'television'} category={'Television'}/>
      <CategoriesNews subSection={'music'} category={'Music'}/>
      <CategoriesNews subSection={'theater'} category={'Theater'}/>
      <CategoriesNews subSection={'dance'} category={'Dance'}/>
    </>
  )
}

export default CategoriesSection