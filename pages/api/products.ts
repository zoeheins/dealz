import getProductPrice from '../../services/scraper';

const handler = async (req, res) => {
  const products = [
    {
      _id: 1,
      nickname: 'pots',
      url:
        'https://smile.amazon.com/dp/B083Q8V5TB/?coliid=I2D3HG3D1Y5R6K&colid=TSXFAOTD35NU&psc=1&ref_=lv_ov_lig_dp_it',
    },
  ];

  const pricedProducts = await Promise.all(
    products.map(async product => {
      const price = await getProductPrice(product.url);
      return { ...product, price}
    })
  )

  res.status(200).json({ products: pricedProducts });
};

export default handler;
