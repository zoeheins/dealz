import getProductPrice from '../../services/scraper';

const handler = async (req, res) => {
  const products = [
    {
      _id: 1,
      nickname: 'slip dress',
      url:
        'https://www.freepeople.com/shop/bring-it-back-printed-slip/?color=086&type=REGULAR&quantity=1',
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
