import connectToDatabase from '../connectToDatabase';

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = await db.collection('products');
  const products = await collection.find({}).toArray();

  res.status(200).json({ products });
};

export default handler;
