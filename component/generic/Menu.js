import Link from 'next/link'


export default function Menu() {
    return (<menu>
        <ul>
            <li>
                <Link href="/">
                    <a>HOME</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                <a>ABOUT</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                <a>CONTACT</a>
                </Link>
            </li>
            <li>
                <Link href="/post">
                <a>POST</a>
                </Link>
            </li>
            <li>
                <Link href="/user">
                <a>USERS</a>
                </Link>
            </li>
        </ul>
    </menu>)
}