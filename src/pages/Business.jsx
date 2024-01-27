import React from 'react';

import Header from '../partials/Header';
import Banner from '../partials/Banner';
import Footer from '../partials/Footer';

import agroBussiness from '../images/agroBusinessImg.jpg';
import tourism from "../images/tourism.png";
import infrastructure from '../images/infrastructure.png';
import realEstate from '../images/real estate.png';
import manufacturing from '../images/manufacturing.webp';
import economy from '../images/economy.webp';
import religiousInstitution from '../images/mosque-church.png';


function Business() {
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
                <h1 className="h1 mb-4">Patner With Us</h1>
                <p className="text-xl text-gray-600"></p>
              </div>

            {/* grids */}
              <div className="container mx-auto">
            
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4">

        {/* first grid */}
          <div className="border p-4 rounded-md shadow-md mb-4">
          <h1>AGRO BUSINESS</h1>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">

              {/* Image Container */}
              <div className=" md:mb-0 mb-4">
                <img
                  src={agroBussiness}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              
              {/* List Container */}
              <div className=" row-span-2">
                <p>Sekere/ Babalokuta New Town is naturally endowed with arable land mass and favourable climate for agricultural related businesses. These include but limited to:</p>
                <ul className="list-disc pl-4">
                  <li>Food crops Production</li>
                  <li>Cash crops Production</li>
                  <li>Live stocks Production</li>
                  <li>Orchards Production</li>
                  <li>Vegetable Production</li>
                    <li>Apiculture</li>
                    <li>Afforestation</li>
                    <li>Processing</li>

                  {/* Add more items as needed */}
                </ul>
                
              </div>
              <div className=''>
                  <p>
                  Do you need further clarifications and enquiries on how to kick start your investment drive? You are one click away! CHAT US NOW 08056453517, 09019945879
                  </p>
                </div>
            </div>
          </div>

            {/* second grid */}
          <div className="border p-4 rounded-md shadow-md mb-4">
            <h1>TOURISM</h1>
            <div className="md:flex md:gap-8 ">
              {/* Image Container */}
              <div className="md:w-1/2 md:mb-0 mb-4">
                <img
                  src={tourism}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="md:w-1/2">
                <p>Babalokuta/Sekere Town is the custodian of three major tourist destinations in Iberekedo land, Igboora, Oyo State, Nigeria. The New Town has a very rich culture and tradition.</p>
                <ul className="list-disc pl-4">
                  <li>Dahomey point</li>
                  <li>Wild life</li>
                  <p>
                  What are you waiting for ? You are one click away! CHAT WITH US NOW
                  </p>
                  {/* Add more items as needed */}
                </ul>
              </div>
            </div>
          </div>

            {/* third grid */}    
          <div className="border p-4 rounded-md shadow-md mb-4">
            <h1>REAL ESTATE </h1>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2  md:gap-8">
              {/* Image Container */}
              <div className=" md:mb-0 mb-4">
                <img
                  src={realEstate}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="row-span-2">
                <p>Sekere/Babalokuta New Town is a stone throw from Oyo State College of Agriculture, Igboora and 3km to Abeokuta in Ogun State. Its proximity to Lagos State makes the location to be the best investment destination for Real Estate development in Oyo, Ogun and Lagos States.</p>
                <ul className="list-disc pl-4">
                  <li>Housing Estate</li>
                  <li>Students Hostels</li>
                  <li>Properties for rent/sale</li>
                  <li>Shopping Mall</li>
                  <li>Boarding Schools</li>
                  <li>Events Hall</li>
                  <li>Research Institutes</li>
                  {/* Add more items as needed */}
                </ul>
               
              </div>
              <div className=''>
              <p>Do you need more information on this investment opportunity?</p>
                <p>You are one click away!</p>
                <p> CHAT WITH US NOW</p>
              </div>
            </div>
          </div>

                      {/* fourth grid */}    
                      <div className="border p-4 rounded-md shadow-md mb-4">
                        <h1>MANUFACTURING</h1>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {/* Image Container */}
              <div className=" md:mb-0 mb-4">
                <img
                  src={manufacturing}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="row-span-2">
                <p>Sekere/Babalokuta New Town is naturally endowed with various raw materials, natural resources and human capital that can drive economy.   
                </p>
                <p>Areas of opportunity cost are:</p>
                <ul className="list-disc pl-4">
                  <li>Agro-produce cottage industries</li>
                  <li>Pharmaceuticals</li>
                  <li>Bakeries</li>
                  <li>Quarry Industry</li>
                  <li>Soap Making</li>
                  <li>Dairy, Cheese and Butter</li>
                  <li>Starch making</li>
                  <li>Knitting, weaving, tie and dye</li>
                  <li>Gas Stations</li>
                  <li>Fruits Juice</li>
                  <li>Groundnut Oil</li>
                  {/* Add more items as needed */}
                </ul>
                
              </div>

              <div>
              <p>The Igboora- Sokoto Express way is an opportunity in waiting to market the finished products.</p>
                <p> Do you need more information on this investment opportunity?</p>
                <p>You are one click away!</p>
                <p> CHAT WITH US NOW</p>
              </div>
            </div>
          </div>

                        {/* fifth grid */}    
          <div className="border p-4 rounded-md shadow-md mb-4">
            <h1>SOFT AND HARD INFRASTRUCTURE</h1>
            <div className=" md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {/* Image Container */}
              <div className=" md:mb-0 mb-4">
                <img
                  src={infrastructure}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="row-span-2">
                <p>Sekere/Babalokuta New Town is ready to partner with individuals, corporate organizations and governments in the areas of Infrastructural development.</p>
                <ul className="list-disc pl-4">
                  <li>Information and Communications Technology</li>
                  <li>State of the Earth Library/ Museum</li>
                  <li>Mobile Solar Installations</li>
                  <li>Security Formations / Barracks</li>
                  <li>Town Planning and Geographical Information System</li>
                  <li>Tertiary Health Care Facility</li>
                  <li>Skill Acquisition Centres</li>
                  <li>Ultra Modern Markets</li>
                  <li>Water Corporation</li>
                  <li>Air Port</li>
                  {/* Add more items as needed */}
                </ul>
                
              </div>

              <div>
              <p>Do you need more information on this investment opportunity?</p>
                <p>You are one click away!</p>
                <p>CHAT WITH US NOW</p>
              </div>
            </div>
          </div>

                      {/* sixth grid */}    
                      <div className="border p-4 rounded-md shadow-md mb-4">
                        <h1>SUPPLY BASED ECONOMY AND KNOWLEDGE DRIVEN ECONOMY</h1>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {/* Image Container */}
              <div className=" md:mb-0 mb-4">
                <img
                  src={economy}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="row-span-2">
                <p>Sekere/Babalokuta New Town has 65% of youths’ population. The innovative ideas of youths can be explored to supply the needed goods and services through development of local contents. Their creativity can be developed and transformed into productivity. We need sustainable partnership in the following exploits:</p>
                <ul className="list-disc pl-4">
                <li>Vocational and Skills development</li>
                  <li>Women development and Youths empowerment</li>
                  <li>Fabrication of tools and simple machines</li>
                  <li>Internship Opportunities</li>
                  <li>Technical know how </li>
                  <li>Scholarships provision</li>
                  <li>Entrepreneurial training </li>
                  <li>Data acquisition, processing, warehousing and marketing</li>
                  <li>Climate Change</li>
                  {/* Add more items as needed */}
                </ul>
                
              </div>
              <div>
              <p> Do you need additional information on how we can develop the resourceful youths?</p>
                <p> You are one click away!</p>
                <p>PLEASE LET’S CHAT NOW</p>
              </div>
            </div>
          </div>

                      {/* seventh grid */}    
                      <div className="border p-4 rounded-md shadow-md mb-4">
                        <h2>PARTNERSHIP FOR RELIGIOUS AND TRADITIONAL INSTITUTIONS</h2>
            <div className="md:grid md:grid-cols-2 md:grid-rows-2 md:gap-8">
              {/* Image Container */}
              <div className="md:mb-0 mb-4">
                <img
                  src={religiousInstitution}
                  alt={`Image 1`}
                  className="w-full h-48 object-cover object-center rounded-md"
                />
              </div>
              {/* List Container */}
              <div className="row-span-2">
                <p>Sekere/Babalokuta New Town is concerned about bringing harmonious relationship amongst the people of diverse faiths and cultural backgrounds. Thus, your voluntary contributions and materials donations will be highly appreciated. Your developmental partnership in this direction will enhance timely construction and completion of the Central Masjid,  Charpel and Ultra Modern Palace. We are passionate about strengthening our religious and traditional institutions. You can donations can be paid to this account details:</p>
                <p>xxxxxxxxxx</p>
                <p>Thanks.</p>
                

              </div>
              <div>
                <p> Do you need further discussions on this?</p>
                <p> You can click on our <a href="" className=''>whatsapp</a> , call our phone numbers, schedule meetings and send e-mail.</p>
              </div>
            </div>
          </div>
      </div>
    </div>


              {/* Form */}
             <div className="max-w-sm mx-auto">
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
              </div>

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

export default Business;