// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PostType } from "@/types/types";
import type { NextApiRequest, NextApiResponse } from "next";
import { posts } from "./utils";

type DataResponse = {
    message: string;
    data?: PostType[] | PostType;
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<DataResponse>,
) {
    if (req.method === 'GET') {
        const num = Math.floor(Math.random() * posts.length)
        const randomPosts = [...posts].sort(() => 0.5 - Math.random());
        randomPosts.slice(0, num);
        res.status(200).json({ message: 'Ok', data: randomPosts });


    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
