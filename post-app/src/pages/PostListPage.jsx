import { useEffect } from "react";
import usePostStore from "../store/usePostStore";

function PostListPage() {
    const posts = usePostStore((state)=>state.posts)
    return (
        <ul>
           {posts.map((data)=>(
            <li>
                {data?.title}
            </li>
           ))} 
        </ul>
    )
}
export default PostListPage