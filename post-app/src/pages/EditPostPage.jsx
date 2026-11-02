import {useParams} from "react-router-dom"
import { getPost } from "../api/postApi"
import { useEffect } from "react"

function EditPostPage() {
    const {id} = useParams()
    const [post, setPost] = useState(null)

    useEffect(()=>{
        getPost(id).then((data)=>{
            console.log(data)
            setPost(data)
        })
    }, [])

    return (
        <>
            EditPost
            <input type="text" placeholder="닉네임 입력"
                   value={Post?.userId} onChange={(e)=>setPost({...s, userId: e.target.value})}/>
            <input type="tect" placeholder="제목 입력"
                   value={Post?.title} onChange={(e)=>setPost({...s, title: e.target.value})} />
            <br/>
            <input type="text" placeholder="내용 입력"
                   value={Post?.body} onChange={(e)=>setPost({...s, body: e.target.value})} />
            <br />

            <button onClick={handleClick}>추가</button>
        </>
    )
}

export default EditPostPage