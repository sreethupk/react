import { FaBoxOpen } from "react-icons/fa";

import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {

    const{id} = useParams //react r dom provide hook ,dynamic values

  return (
    <div>
       <h2> <FaBoxOpen />Product id : {id}</h2>
    </div>
  )
}

export default ProductDetailPage
