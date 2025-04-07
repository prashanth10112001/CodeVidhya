import React, { useState, useEffect } from "react";
// import CategoryList from "../components/CategoryList";
// import MobileList from "../components/MobileList";
// import { getMobilesByCategory } from "../api/api";
import { getLanguages, getDsaData } from "../api/api";
import "../styles/Home.css";
import Cards from "../components/Cards";

function Home() {
  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [Languages, setLanguages] = useState([]);
  const [DsaData, setDsaData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchLanguages = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state
      try {
        const data = await getLanguages();
        setLanguages(data);
        console.log("Languages fetched:", data); // Log the fetched mobiles

        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        setError(err); // Set error state if there's an error
        setLoading(false); // Set loading to false on error
        console.error("Error fetching languages:", err);
      }
    };

    fetchLanguages();

    const fetchDsaData = async () => {
      setLoading(true); // Set loading to true before fetching
      setError(null); // Reset error state
      try {
        const data = await getDsaData();
        setDsaData(data);
        console.log("DsaData fetched:", data); // Log the fetched mobiles data

        setLoading(false); // Set loading to false after fetching
      } catch (err) {
        setError(err); // Set error state if there's an error
        setLoading(false); // Set loading to false on error
        console.error("Error fetching DsaData:", err);
      }
    };

    fetchDsaData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Render error message
  }

  return (
    <>
      <div className="home">
        <div className="homeSection1">
          <div className="sec1Title">DSA</div>
          <div className="sec1Content">
            {DsaData.map((Dsa) => (
              <Cards key={Dsa._id} name={Dsa.name} img={Dsa.img} />
            ))}
          </div>
        </div>
        <div className="homeSection1">
          <div className="sec1Title">Languages</div>
          <div className="sec1Content">
            {/* <div>Python</div>
            <div>Java</div>
            <div>C++</div> */}
            {Languages.map((language) => (
              <Cards
                key={language._id}
                name={language.name}
                img={language.img}
              />
            ))}
          </div>
        </div>
        <div className="homeSection1">
          <div className="sec1Title">Coding Boosters</div>
          <div className="sec1Content">
            <Cards />
          </div>
        </div>
      </div>
    </>
    // <div className="home">
    //   <CategoryList onSelectCategory={setSelectedCategory} />
    //   <MobileList mobiles={mobiles} />
    // </div>
  );
}

export default Home;
