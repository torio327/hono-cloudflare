import {exportBlogPosts} from "../data/data";


export const getPosts=({pages,limit}:{pages:string,limit:string})=>{
    const blogPosts=exportBlogPosts
    return blogPosts.slice(Number(pages)*10,Number(pages)*10+Number(limit))

}

//blogPosts配列から、指定した数のページをとる
//blogPosts get
//array control    cut range or like split syntax
