import React from 'react'

const ProductInfo = ({product}) => {

const {size, weight, height, length, width} = product

  return (
    <div>
    {size &&
    (<div>
        <h4>{size}</h4>
    </div>)}

    {weight &&
    (<div>
        <h4>{weight}</h4>
    </div>)}

    {length &&
    (<div>
        <h4>{height}X{width}X{length}</h4>
    </div>)}
  
    
  </div>
  
)
};

export default ProductInfo
