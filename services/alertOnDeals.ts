import getProductCollection from 'database/getProductCollection';
import { DBProduct } from 'utils/types';

import sendEmail from './sendEmail';

const alertOnDeals = async () => {
  const collection = await getProductCollection();
  const products: DBProduct[] = await collection.find({}).toArray(); // add type?

  products.map(product => {
    const { price, targetPrice } = product;

    if (price && (price <= targetPrice)) {
      console.log(`${product.nickname} is a deal!!!`);
      alertOnDeal('zcheins@gmail.com', product);
    } else {
      console.log(`${product.nickname} isnt a deal yet`);
    }
  });
};

const alertOnDeal = (toAddress: string, product: DBProduct) => {
  const emailBody = `
    <p>
      You're in luck! The ${product.nickname} on Amazon you've been wanting
      now costs $${product.targetPrice}. Check it out at ${product.url}
    </p>
  `;

  sendEmail(toAddress, 'yay', emailBody);
};

export default alertOnDeals;
