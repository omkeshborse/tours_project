import React, { useEffect, useState } from "react";
const url = "https://course-api.com/react-tours-project";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(true);
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      // console.log(tours);
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  return <div>App</div>;
};

export default App;
