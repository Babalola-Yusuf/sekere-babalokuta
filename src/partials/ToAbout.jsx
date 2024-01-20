import React from 'react';
import { Link } from 'react-router-dom'; 

function ToAbout() {
  return (
    <section className="text-center p-5 sm:mx-32 xl:mx-64 justify-self-center">
            <h2 className="h2 mb-4">About Us</h2>
            <p className="text-xl text-gray-600">It gladdens my heart to welcome your honour to Babalokuta/Sekere Town official website. Our aim is to bring to your fingertip, information about opportunities that abound at Babalokuta/ Sekere Town, located in... <Link className='bg-green-400 rounded-2xl p-1' to='/about-us'> More</Link></p>
            
    </section>
  );
}

export default ToAbout;
