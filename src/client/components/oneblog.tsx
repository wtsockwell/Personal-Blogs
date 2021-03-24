import * as React from 'react'
import { useState, useEffect } from 'react'
import { RouteComponentProps, Link } from 'react-router-dom'

interface blogProps extends RouteComponentProps<{id:string}>{ }
interface blog{
    id:number,
    user:string,
    content:string,
    title:string
}

const OneBlog: React.FC<blogProps> = ({match:{params:{id}}}) =>{

    const [newblog, setBlog] = useState<any>('')

    const getBlog = async() =>{
        let r = await fetch(`/api/blog/${id}`)
        let blog = await r.json()
        setBlog(blog)
    }

    useEffect(()=>{getBlog()}, [])

    return(
        <div>
            <h1 className="distplay-4">{newblog.title}</h1>
            <h2>{newblog.user}</h2>
            <p>{newblog.content}</p>
            <Link to={`/api/blog/${id}/admin`} className="btn btn-primary mx-2">Options</Link>
            <Link to={`/`} className="btn btn-primary mx-2">Home</Link>
        </div>
    )



}

export default OneBlog