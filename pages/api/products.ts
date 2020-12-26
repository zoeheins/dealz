import { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from 'utils/connectToDatabase';
import { DBProduct } from 'utils/types';

import updateProductPrices from 'services/updateProductPrices';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // await updateProductPrices()  // update db with latest prices

  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const collection = await db.collection('products');
      const products: DBProduct[] = await collection.find({}).toArray();
      res.status(200).json({ products });
    } catch (err) {
      console.log('Error connecting to db:', err);

      res.status(500);
      res.end();
    }
  } else if (req.method === 'POST') {
    console.log('Got POST request with body:', req.body);
    const { name, url, targetPrice } = JSON.parse(req.body);

    if (!(name && url && targetPrice)) {
      res.status(400);
      res.end();
    } else {
      try {
        const db = await connectToDatabase();
        const collection = await db.collection('products');
        collection.insert({ nickname: name, url, targetPrice });
        res.status(200);
        res.end();
      } catch (err) {
        console.log('Error adding product:', err);
        res.status(500);
        res.end();
      }
    }
  }
};

export default handler;
