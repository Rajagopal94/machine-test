import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Component/Header";
import { fetchCountries } from "../Features/countriesSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [displayCount, setDisplayCount] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("all");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (selectedRegion === "all") {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(
        countries.filter((country) => country.region === selectedRegion)
      );
    }
  }, [countries, selectedRegion]);

  const handleLoadMore = () => {
    if (isLoadMore) {
      setDisplayCount(filteredCountries.length);
    } else {
      setDisplayCount(12);
    }
    setIsLoadMore(!isLoadMore);
  };

  const handleRegionFilter = (region) => {
    setSelectedRegion(region);
  };

  return (
    <Container>
      <div className="position-relative w-100">
        <Header handleRegionFilter={handleRegionFilter} />

        <div className="container mx-auto p-4">
          <div>
            {filteredCountries.slice(0, displayCount).map((country) => (
              <div key={country.name} className="mb-4">
                <h3 className="text-xl">{country.name}</h3>
                <p>{country.region}</p>
                <img
                  src={country.flag}
                  alt={`${country.name} flag`}
                  className="w-24"
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleLoadMore}
            className="mt-4 p-2 bg-green-500 text-white rounded"
          >
            {isLoadMore ? "Load More" : "Load Less"}
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
