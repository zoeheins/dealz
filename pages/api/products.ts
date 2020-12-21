import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '~/utils/connectToDatabase';
import { Product } from '~/utils/types';

import updateProductPrices from '~/services/updateProductPrices'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await updateProductPrices()  // update db with latest prices

  try {
    const db = await connectToDatabase();
    const collection = await db.collection('products');
    const products: Product[] = await collection.find({}).toArray();

    console.log('products from db', products);

    res.status(200).json({ products });
  } catch (err) {
    console.log('Error connecting to db:', err);

    res.status(500);
    res.end();
  }
};

export default handler;
