import { useEffect, useState } from "react";

const useResMenu = (id) => {
    const [resInfo, setResInfo] = useState(null);
  
    useEffect(() => {
      fetchMenu();
    }, []); // Ensure useEffect reruns if `id` changes
  
    const fetchMenu = async () => {
        try {
          const response = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=11.24653&lng=75.82718229999999&restaurantId=${id}`
          );
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const json = await response.json();
          setResInfo(json.data); // Update state with fetched data
        
        } catch (error) {
          console.error("Error fetching menu:", error.message);
        }
      };

    return resInfo; // Return state
  };

export default useResMenu;