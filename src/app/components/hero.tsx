import React from "react";


import Gearup from "./gearup/page";
import Dontmiss from "./Dontmiss/page";
import Essentials from "./Essentials/page";
import Bottomcategory from "./Btmcategory/page";
import Featured from "./Featured/page";
import Hellonike from "./Hellonike/page";
import Bestof from "./Bestof/page";


const Hero = ()=> {
    return(
     <div className="relative w-full min-h-screen pt-24 bg-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <Hellonike/>
        {/* Best of Section*/}
        <Bestof/>
    
        {/* Featured Section */}
        <Featured/>
    
        {/* Gear Up Section */}
        <Gearup/>
    
        {/* Don't Miss Section */}
        <Dontmiss/>

        {/* The Essentials Section */}
       <Essentials/>
    
        {/* Bottom Section */}
       <Bottomcategory/>
       </div>
       </div>
    )
} 





export default Hero