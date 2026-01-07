import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'BuildCart - E-Commerce Platform',
  description: 'BuildCart offers quality products with easy ordering and management',
  keywords: 'ecommerce, shopping, products, online store',
};

export default Meta;
