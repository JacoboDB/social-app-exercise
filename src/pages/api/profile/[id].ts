
import type { NextApiRequest, NextApiResponse } from "next";
import { posts, getUser } from "../utils";
import { ProfileType } from "@/types/types";

type DataResponse = {
  message: string;
  data?: ProfileType [] | ProfileType;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>,
) {
  if (req.method === 'GET') {
    const { id } = req.query;
    if(id) {
      const profile = getUser(id as string);
      
      if(profile) {
        const postsByProfile = posts.filter(item => item.authorId === id);
        profile.posts = postsByProfile;
        res.status(200).json({ message: 'Ok', data: profile });
      } else {
        res.status(404).json({ message: 'Not found!'});
      }
    } else {
      res.status(400).json({ message: 'Not id provided!'});
    }
    
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
