import {Hono} from "hono";
import {exportBlogPosts} from "../data/data";

let blogPosts=exportBlogPosts

const app=new Hono()

app.get('/',(c)=>{
    return c.json(blogPosts)
})

app.get('/:id',(c)=>{
    const id=c.req.param("id")
    const post=blogPosts[Number(id)]
    if(!post){
        return c.json({message:"Node found"},404)
    }
    return c.json(post)
})

app.post('/',async(c)=>{
    const {name,content}=await c.req.json<{name:string,content:string}>()
    blogPosts=[...blogPosts, {id:String(blogPosts.length), name, content} ]

    return c.json(blogPosts)
})

app.put('/:id',async(c)=>{
    const id=c.req.param('id')
    const index=blogPosts.findIndex((p)=>p.id===id)
    if(index===-1){
        return c.json({message:'Not found'},404)
    }
    const {name,content}=await c.req.json()
    blogPosts[index]={id,name,content}
    return c.json(blogPosts[index],201)
})

app.delete('/:id',(c)=>{
    const id=c.req.param('id')
    blogPosts=blogPosts.filter((p)=>p.id!==id)
    return c.json(blogPosts,201)
})

export default app