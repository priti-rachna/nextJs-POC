import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
       
      </div>
    </>
  );
};

export default Hero;
