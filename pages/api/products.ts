import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '~/utils/connectToDatabase';
import { Product } from '~/utils/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // try {
  //   const db = await connectToDatabase();
  //   const collection = await db.collection('products');
  //   const products: Product[] = await collection.find({}).toArray();
  //   res.status(200).json({ products });
  // } catch (err) {
  //   console.log('Error connecting to db:', err);
  //   res.status(500);
  //   res.end();
  // }
  const products = [
    {
      _id: 123,
      url: 'fake-url.com',
      nickname: 'fake item',
      price: 1,
    },
  ];
  res.status(200).json({ products });
};

export default handler;
