import connectToDatabase from 'utils/connectToDatabase';
import { DBProduct } from 'utils/types';

import getProductPrice from './getProductPrice';

const updateProductPrices = async () => {
  const db = await connectToDatabase();

  const collection = await db.collection('products');
  const products: DBProduct[] = await collection.find({}).toArray();

  console.log('Products from DB:', products);

  await Promise.all(
    products.map(async product => {
      let price: number | null = await getProductPrice(product.url);

      console.log(`Found price of $${price} for ${product.nickname}`);

      if (price) {
        collection.updateOne(
          { _id: product._id },
          { $set: { price } },
          (err, res) => {
            if (err) {
              throw new Error(err);
            }
          }
        );
      }
    })
  );
};

export default updateProductPrices;
