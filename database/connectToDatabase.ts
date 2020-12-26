import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

// A function for connecting to MongoDB,
// taking a single parameter of the connection string
const connectToDatabase = async () => {
  // If no connection is cached, create a new one
  const client = await MongoClient.connect(MONGODB_URI as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Select the database through the connection,
  // using the database path of the connection string
  return await client.db(MONGODB_DB);
};

export default connectToDatabase;
