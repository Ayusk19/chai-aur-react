import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()
  return (
    <div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
        <h1 className='text-2xl font-bold'>user: {userid}</h1>
        
        
      
    </div>
  )
}

export default User
