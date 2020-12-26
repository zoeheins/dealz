import connectToDatabase from 'database/connectToDatabase';
import { DBProduct } from 'utils/types';

import getProductPrice from 'services/getProductPrice';

const updateProductPrices = async () => {
  const db = await connectToDatabase();

  const collection = await db.collection('products');
  const products: DBProduct[] = await collection.find({}).toArray();

  console.log('Products from DB:', products);

  await Promise.all(
    products.map(async product => {
      let price: number | null = await getProductPrice(product.url);

      if (price) {
        console.log(`Found price of $${price} for ${product.nickname}`);

        collection.updateOne(
          { _id: product._id },
          { $set: { price } },
          (err, res) => {
            if (err) {
              throw new Error(err.message as string);
            }
          }
        );
      }
    })
  );
};

export default updateProductPrices;
