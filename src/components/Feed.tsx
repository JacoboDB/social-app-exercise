import { PostType } from "@/types/types";
import PostListItem from "./PostListItem";


interface FeedProps {
    items?: Array<PostType>
};

const Feed = (props:FeedProps) => {
    return <>
        {props.items?.map(item => {
            return <PostListItem key={item.id.toString()} post={item}/>
        })}
    </>
}

export default Feed;