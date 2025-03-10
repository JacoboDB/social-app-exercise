// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PostType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "../utils";

type DataResponse = {
  message: string;
  data?: PostType [] | PostType;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>,
) {
  if (req.method === 'GET') {
    const { id } = req.query;
    if(id) {
      const postFound = posts.find(item => item.id === id);
      if(postFound) {
        res.status(200).json({ message: 'Ok', data: postFound });
      } else {
        res.status(400).json({ message: 'Not found!'});
      }
    } else {
      res.status(400).json({ message: 'Not found!'});
    }
    
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
