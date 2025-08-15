// pages/api/qa.js
import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("qa_database"); // Replace with your DB name
  const collection = db.collection("questions");

  if (req.method === 'GET') {
    const questions = await collection.find({}).toArray();
    res.json(questions);
  }
}
