


import React from 'react'

function page() {
//  Create a Next.js application that fetches a list of users from an API. Each user’s name should link to a dynamic route based on their username. On visiting /[username], display that user’s website. If the user is not found, then add a 404 default page.

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const fetchUsers = async () => {
  const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
}

console.log(fetchUsers());

  return (
    <div className='page-container'>profile page</div>
  )
}

export default page