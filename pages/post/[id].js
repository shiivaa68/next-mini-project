import Link from 'next/link'
import axios from 'axios'
import Head from 'next/head'


export default function Post({post={}}){
    return(
        <div>
            <Head>
                <title>
{post.title}
                </title>
            </Head>


            {post.title}
            <p>
                {post.body}
            </p>
<hr/>
            <Link href="/post">
            <a>back to list</a>
            </Link>
        </div>
    )
}


export async function getServerSideProps({params}){

    const {data:post} = await axios ( `https://jsonplaceholder.typicode.com/posts/${params.id}`)

return{
    props:{
        post
    }
}

}

