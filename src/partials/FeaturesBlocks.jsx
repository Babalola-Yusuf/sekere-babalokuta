import React from 'react';
import baale from "../images/baale.jpg";
import realEstate from '../images/real estate.png';
function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">CONSITITUTED TRADITIONAL COUNCIL</h2>
            <p className="text-xl text-gray-600">Babalokuta/Sekere Town has the following chiefs as council of traditional institution. They are representatives of the community and entrusted with responsibilities of harmonizing the customs and traditions with the ethos of the constitution.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none ">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={baale} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">THE BAALE OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF BOLANLE RAMONI BABALOLA.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">ODOFIN OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF LAWRENCE ADIO AFOLABI</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">JAGUN OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF OWOADE ABEEGUNDE AJIYO</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>            
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">ASALU OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF JIMOH AKANO ADELEKE</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">OLUKOTUN OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF GANIYU ADISA ARIYO</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
            <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">ONILADO OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF AMOS OMOTOSHO ODUREMI</p>
            </div>

             {/* 7th item */}
             <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
             <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">OLUKOSIN OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF BABATUNDE ALANI ADEWOLE</p>
            </div>

            {/* 8th item */}
           <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
           <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">IYALODE OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF (MRS.) AKINWUMI ALAKE KUMOLA</p>
            </div>

             {/* 9th item */}
           <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
           <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">OTUN IYALODE BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF (MRS.) ADEBUNMI DASOLA ABIODUN</p>
            </div>

             {/* 10th item */}
           <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
           <div className='p-2 rounded-full h-40 w-40 bg-yellow-400'>  
                <img src={realEstate} alt="" className='rounded-full h-full w-full'/>
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">IKOLABA OF BABALOKUTA</h4>
              <p className="text-gray-600 text-center">CHIEF SAMSON OLUSEGUN ADELEYE</p>
            </div>
          </div>

           
        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
