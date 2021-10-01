import React from "react";
import ContactUs from "./ContactForm";

// Only works with Bitcoin Cash  - BCH (Not Bitcoin) - learn  more @ https://bitcoincash.org/

//payment data will be here
//https://blockchair.com/search?q=qpuyrhda7zrn3jk6yzr98zxq3a6uavvqkspgv5fdmu

//add ternary based off of set conditon to render the QR code

//make route in react based off of order completion

const Bitcoin = () => {
  return (
    <div className="bitcoin">
      {/* code to render image */}

      {/* {
    //   ifCheckoutComplete (filler variable)
    //    ?
    //     <p>Render Image Tag Here</p> : null
       } */}
      <br />

      <h2 color="red">Pay in Bitcoin!!</h2>

      <img
        src="https://i.imgur.com/YjqbUjv.jpeg"
        alt="Bitcoin Logo"
        width="90px"
        length="auto"
      />

      <br />
      {/* <br /> */}
      <br />

      <img src="https://i.imgur.com/Rw8Sw9e.jpeg" alt="Bitcoin QR Code" />

      <br />
      <br />

      <span>Payment data is logged here:</span>

      <br />

      <a href="https://blockchair.com/search?q=qpuyrhda7zrn3jk6yzr98zxq3a6uavvqkspgv5fdmu">
        https://blockchair.com/search?q=qpuyrhda7zrn3jk6yzr98zxq3a6uavvqkspgv5fdmu
      </a>
    </div>
  );
};

export default Bitcoin;
