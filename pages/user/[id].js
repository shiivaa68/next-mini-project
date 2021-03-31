import Link from 'next/link'
import axios from 'axios'
import Error from '../_error'

export default function user({user={},statusCode}){

    if(statusCode) {
return<Error statusCode={statusCode}/>
    }

return(
    <div>
{user.name}
<p>
    {user.email}
</p>



        <hr/>
        <Link href="/user">
        <a>
            return to list
        </a>
        </Link>
    </div>
)



}

export async function getStaticPaths(context){
    console.log(context,'my context')

const {data:users} =await axios('https://jsonplaceholder.typicode.com/users')

users.length = 10

return {
paths:users.map(user=> ({params:{id:`${user.id}`}})),
fallback:true
}
}

export async function getStaticProps({params}){
    const res = await axios(`https://jsonplaceholder.typicode.com/users/${params.id}`).catch(err => console.log('ERROR'))


    const user =res?.data

    const statusCode =res ?false:404
  // console.log(Object.keys(context))
  // console.log(context.params.id)

  // console.log('User id is =>>>', user.id)

    return{
        props:{
            user,
            statusCode
        },
        revalidate:5
    }


}