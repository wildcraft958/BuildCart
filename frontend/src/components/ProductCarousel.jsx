import { Link } from 'react-router-dom';
import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  return isLoading ? null : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Container className='mb-4'>
      <h2 className='mb-3' style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
        ⭐ Top Rated Products
      </h2>
      <Carousel
        pause='hover'
        className='product-carousel'
        indicators={true}
        controls={true}
      >
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`} className='carousel-link'>
              <Row className='align-items-center'>
                <Col md={5} className='carousel-image-col'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    className='carousel-product-image'
                  />
                </Col>
                <Col md={7} className='carousel-content-col'>
                  <div className='carousel-product-info'>
                    <h3 className='carousel-product-name'>{product.name}</h3>
                    <p className='carousel-product-price'>${product.price}</p>
                    <p className='carousel-product-rating'>
                      ⭐ {product.rating} ({product.numReviews} reviews)
                    </p>
                    <span className='carousel-cta'>View Product →</span>
                  </div>
                </Col>
              </Row>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default ProductCarousel;
