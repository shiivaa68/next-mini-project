import axios from 'axios'
import Link from 'next/link'


export default function Users({users=[]}){
    return (
        <div>
            <h2>user list</h2>
            <ol>
                {users.map(user=><Link key={user.id} href={`/user/${user.id}`}>
                
            <a><li>{user.name}</li></a>
                </Link>)}
            </ol>
        </div>
    )
}


export async function getStaticProps(){

    const {data:users} = await axios('https://jsonplaceholder.typicode.com/users')
    users.length = 10

    return{
        props:{
            users
        }
    }
}