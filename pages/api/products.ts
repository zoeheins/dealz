import getProductPrice from '../../services/scraper';
import connectToDatabase from '../connectToDatabase';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = await db.collection('products');
  const products = await collection.find({}).toArray();

  console.log('tracked products:', products)

  const pricedProducts = await Promise.all(
    products.map(async product => {
      let price: number | string = await getProductPrice(product.url);
      if (!price) {
        price = 'could not find price'
      }
      return { ...product, price}
    })
  )

  res.status(200).json({ products: pricedProducts });
};

export default handler;
