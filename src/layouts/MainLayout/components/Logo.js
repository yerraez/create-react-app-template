import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="/logo192.png"       
      {...props}
      width="25" 
    />
  );
}

export default Logo;
