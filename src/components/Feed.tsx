import { PostType } from "@/types/types";
import PostListItem from "./PostListItem";


interface FeedProps {
    items?: Array<PostType>
};

const Feed = (props:FeedProps) => {
    return <>
        {props.items?.map(item => {
            return <PostListItem post={item}/>
        })}
    </>
}

export default Feed;