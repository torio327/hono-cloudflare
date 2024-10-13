import { Hono } from 'hono'
import post from './post/post'
// import auth from './auth/auth'
import {basicAuth} from "hono/basic-auth";
const app = new Hono()


app.use('/auth/*',basicAuth({username:"hono",password:"hono"}),
    )

app.get('/auth/page',(c)=>{
    return c.text('You are authorized')
})
app.route('/post',post)
// app.route('/auth',auth)


export default app
