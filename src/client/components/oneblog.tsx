import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

interface blogProps extends RouteComponentProps<{ id: string }> { }
interface blog {
    id: number,
    user: string,
    content: string,
    title: string
}

const OneBlog: React.FC<blogProps> = ({ match: { params: { id } } }) => {

    const [newblog, setBlog] = useState<any>('')
    const [tags, setTags] = useState<any>([])

    const getBlog = async () => {
        let r = await fetch(`/api/blog/${id}`)
        let blog = await r.json()
        setBlog(blog)
    }

    const getTags = async () => {
        let r = await fetch(`/api/blogtags/${id}`)
        let blogtags = await r.json()
        setTags(blogtags[0])
    }
    console.log(tags)

    useEffect(() => { getBlog(), getTags() }, [])
    // useEffect(() => { getTags() }, [])

    return (
        <div className="container border m-3 p-2">
            <h1 className="display-4">{newblog.title}</h1>
            <h2>{newblog.user}</h2>
            <p>{newblog.content}</p>
            <Link to={`/api/blog/${id}/admin`} className="btn btn-primary mx-2">Options</Link>
            <Link to={`/`} className="btn btn-secondary mx-2">Home</Link>
            <p>Tags:</p>
            <div>
                {tags.map(tag=>(<span>{`${tag.name} `}</span>))}
            </div>
        </div>
    )



}

export default OneBlog