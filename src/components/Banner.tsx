import React from 'react'

function Banner() {
  return (
    <div className="py-3  text-center bg-[linear-gradient(to_right,rgb(252,214,255,.7),rgb(41,216,255,.7),rgb(255,253,128,.7),rgb(248,154,191,.7),rgb(252,214,255,.7))]">
      <div className="container">
        <p className='font-medium'>
          <span className='hidden sm:inline'>Introducing a completely redesigned interface - </span>
        <a href="#" className="underline underline-offset-4 ">
          Explore the Demo
        </a>
        </p>
      </div>
    </div>
  );
}

export default Banner