import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Card.Img src={product.image} variant='top' />

      <Card.Body>
        <Card.Title as='div' className='product-title'>
          <strong>{product.name}</strong>
        </Card.Title>

        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>

        <Link to={`/product/${product._id}`}>
          <Button variant='primary' className='w-100 mt-2'>
            View Product
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;

