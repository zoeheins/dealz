import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

// Create cached connection variable
let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
async function connectToDatabase() {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  // If no connection is cached, create a new one
  const client = await MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Select the database through the connection,
  // using the database path of the connection string
  const db = await client.db(MONGODB_DB);

  // Cache the database connection and return the connection
  cachedDb = db;
  return db;
}

const handler = async (req, res) => {
  const db = await connectToDatabase();
  const collection = await db.collection('products');
  const products = await collection.find({}).toArray();

  res.status(200).json({ products });
};

export default handler;
