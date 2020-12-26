import { NextApiRequest, NextApiResponse } from 'next';

import updateProductPrices from 'database/updateProductPrices';
import alertOnDealz from '~/services/alertOnDeals';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('Recieved webhook request');

  const headers = req.headers;
  const secretHeader = headers['secret-header'];

  console.log('recieved header:', secretHeader)
  console.log('expected header:', process.env.WEBHOOK_SECRET)

  if (secretHeader !== process.env.WEBHOOK_SECRET) {
    console.log('Missing secret header');
    res.send(401);
  } else {
  // scrape web for current prices and update db
  updateProductPrices();

  alertOnDealz()

  res.status(200);
  res.json({ message: 'success' });
  res.end();
};

export default handler;
