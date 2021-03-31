import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

export default function Posts({posts =[]}){
    return(
        <div>
            <Head>
                <title>my post</title>
            </Head>
           <h1>post list </h1>
           <ol>
{posts.map(post=><Link  key={post.id} href={`/post/${post.id}`}>
<a><li>{post.title}</li></a>
</Link>)}
           </ol>
        </div>
    )
}


export async function getServerSideProps(){
    const {data:posts} = await axios('https://jsonplaceholder.typicode.com/posts')

    return{
        props:{
            posts
        }
    }
}