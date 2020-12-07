import getProductPrice from './getProductPrice';
import connectToDatabase from '../connectToDatabase';

type Product = {
  _id: string;
  url: string;
  nickname: string;
  price?: number | string;
};

const getProductPrices = async () => {
  const db = await connectToDatabase();

  const collection = await db.collection('products');
  // add typing
  const products: Product[] = await collection.find({}).toArray();

  console.log('Products from DB:', products);

  await Promise.all(
    products.map(async product => {
      let price: number | null = await getProductPrice(product.url);

      console.log(`Found price of $${price} for ${product.nickname}`);

      collection.updateOne(
        { _id: product._id },
        { $set: { price } },
        (err, res) => {
          if (err) {
            throw new Error(err);
          }
        }
      );
    })
  );
};

export default getProductPrices;
