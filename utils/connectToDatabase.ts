import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

// Create cached connection variable
let cachedDb = null;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
const connectToDatabase = async () => {
  // If the database connection is cached,
  // use it instead of creating a new connection
  if (cachedDb) {
    return cachedDb;
  }

  console.log('My MongoDB URI:', MONGODB_URI)

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
};

export default connectToDatabase;
