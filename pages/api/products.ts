import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '~/utils/connectToDatabase';
import { Product } from '~/utils/types';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = await connectToDatabase();
  const collection = await db.collection('products');
  const products: Product[] = await collection.find({}).toArray();

  res.status(200).json({ products });
};

export default handler;
