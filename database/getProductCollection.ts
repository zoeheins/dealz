import connectToDatabase from './connectToDatabase';

const getProductCollection = async () => {
  const db = await connectToDatabase();
  return await db.collection('products');
};

export default getProductCollection;
