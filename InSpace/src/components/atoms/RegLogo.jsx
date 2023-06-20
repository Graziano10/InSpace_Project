import React from 'react'
import { Link } from 'react-router-dom'
const RegLogo = () => {
  return (
      <section className='mx-auto '>
          <Link to="/">
            <div className='bg-logo h-16 w-48 bg-cover bg-center hover:w-52 active:w-52'></div>
        </Link>
    </section>
  )
}

export default RegLogo