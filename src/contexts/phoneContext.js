import React from 'react';

export  const CustomerDetails = React.createContext();
export default function CustomerProvider(props) {

    const [account,setAccount]=React.useState({})


    
    return (
      <CustomerDetails.Provider value={{account,setAccount}}>
          {/* what is rappped in the component becomes child */}
          
        {props.children}
      </CustomerDetails.Provider>

     
      
    )
  }

  export const useCustomer = () => {

	return React.useContext(CustomerDetails)

	
  }
  