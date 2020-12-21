import { NextApiRequest, NextApiResponse } from 'next';

import updateProductPrices from '~/services/updateProductPrices';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log('Recieved webhook request')

    const headers = req.headers;
    const secretHeader = headers['secret-header'];

    if (secretHeader !== process.env.WEBHOOK_SECRET) {
      res.send(401);
    } else {
      updateProductPrices();
      res.send(200);
    }
  } catch (err) {
    console.log('Error running web scraper:', err);
    res.send(500);
  }
};

export default handler;
