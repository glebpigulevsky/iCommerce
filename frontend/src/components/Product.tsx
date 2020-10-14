import React, { FunctionComponent } from 'react'
import { Card } from 'react-bootstrap'

interface Props {
  product: {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: number;
    countInStock: number;
    rating: number;
    numReviews: number;
  }
}

const Product: FunctionComponent<Props> = ( {product} ) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
  <Card.Title as ='div'><strong>{product.name}</strong></Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
  <Card.Text as ='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product;
