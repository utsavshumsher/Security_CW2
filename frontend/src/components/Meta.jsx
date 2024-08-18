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
  title: 'Welcome To BagHeaven',
  description: 'We sell the best products for cheap',
  keywords: 'bag, hand bags, tote bags, handbag',
};

export default Meta;
