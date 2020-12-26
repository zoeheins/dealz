import { alertOnDeal } from 'services/email';
import connectToDatabase from 'database/connectToDatabase';



const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = await db.collection('products');

  const product = await collection.findOne({}, {_id: '5fe6df93c60b3a3cb5b47ca0'})
  console.log(product)

  alertOnDeal('zcheins@gmail.com', product)
  res.status(200)
  res.end()
}

export default handler;
