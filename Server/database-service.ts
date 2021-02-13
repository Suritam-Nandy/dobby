import { Db, MongoClient } from "mongodb";

let db: Db;

async function initializeClient(): Promise<Db> {
  
  const uri = "mongodb+srv://test:test1234@cluster0.kbjbw.mongodb.net/dobby?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri, {
  
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db();
}

// const MongoClient = require('mongodb').MongoClient;








export default async (): Promise<Db> => {
  if (!db) {
    db = await initializeClient();
  }

  return db;
};