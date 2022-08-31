import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item}) => {
    const navigate = useNavigate()
    const showDetail = () => {
        navigate(`/product/${item.id}`)
    }
  return (
    <div className='img-card' onClick={showDetail}>
        <img className='item-img' src={item?.img} alt="" />
        <div>{item?.choice?"Concious Choice":""}</div>
        <div>{item?.title}</div>
        <div>₩{item?.price}</div>
        <div>{item?.new?"신상품":""}</div>
    </div>
  )
}

export default ProductCard