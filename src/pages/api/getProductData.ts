// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import Product from "../../../public/model/model";

type Data = {
  data : any
};




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await mongoose.connect(process.env.MONGODB_URI || '')

  const data = await Product.find({});
  res.status(200).json({data:data});
}
