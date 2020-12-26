import { NextApiRequest, NextApiResponse } from 'next';

import { DBProduct } from 'utils/types';

import getProductCollection from 'database/getProductCollection';
import addProduct from 'database/addProduct';
import getProductPrice from 'services/getProductPrice';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      const collection = await getProductCollection();
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
        const price = await getProductPrice(url);
        if (price) {
          addProduct(name, url, targetPrice, price);
          res.status(200);
          res.end();
        } else {
          res.status(500);
          res.end();
        }
      } catch (err) {
        console.log('Error adding product:', err);
        res.status(500);
        res.end();
      }
    }
  }
};

export default handler;
