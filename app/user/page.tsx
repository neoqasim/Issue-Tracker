import Link from 'next/link'
import React from 'react'
interface User {
    id: number,
    name: string
}

const UsersPage = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', { next: { revalidate: 100 } })
    const users: User[] = await response.json()
    console.log(users[0]);
    return (
        <>
            <h1>UsersPage</h1>
            <ul>
                <p>{new Date().toLocaleTimeString()}</p>
                {users.map((user) => (

                    <li className='my-4 px-4 py-2 rounded-md shadow-lg w-max' key={user.id}>{user.name}</li>

                ))}
            </ul>
            <Link href="/user/post" className='rounded-3xl shadow-md' >Post Page</Link>

        </>
    )
}

export default UsersPage