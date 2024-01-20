import React from 'react';

import Header from '../partials/Header';
import Footer from '../partials/Footer';
import Banner from '../partials/Banner';

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20 ">
                <h1 className="h1 mb-4">About Us</h1>
                <p className="text-xl text-gray-600">It gladdens my heart to welcome your honour to Babalokuta/Sekere Town official website. Our aim is to bring to your fingertip, information about opportunities that abound at Babalokuta/ Sekere Town, located in Iberekodo, Igboora, Ibarapa Central Local Government, Oyo State, Nigeria. 
This website will create express link for indigenes of our town all over the world. It will further serve as a window to public for investments’ opportunities, community development, commerce and industries, leisure and tourism. It is our belief that, if we explore both human, natural and capital resources that available in Babalokuta/Sekere Town, it will bring about partnership that works in terms of establishment of economic institutions, business organizations, youths empowerments initiatives and recognition of traditional institutions for the mutual benefits of all parties and for the total wellbeing of humanity.
Kindly feel free to partner with us in our efforts and determination to bring growth and development to the New Town in Iberekodo Land, Ibarapa Central Local Government, Igboora, Oyo State, Nigeria..  
“As Citizens of the World, Our coming together will make Babalokuta/ Sekere Town a Beautiful City to Live”
Thanks and God bless you.
Chief Bolanle Ramoni Babalola..</p>
              </div>

              {/* Form */}
             {/*  <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Send reset link</button>
                    </div>
                  </div>
                </form>
              </div> */}

            </div>
          </div>
        </section>

      </main>

      <Banner />
        {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default AboutUs;