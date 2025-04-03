import React, { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { fetchCountries } from "../Features/countriesSlice";
import CountriesList from "../Component/CountriesList";
import Slider from "../Component/Slider";

const HomePage = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector((state) => state.countries);

  const [displayCount, setDisplayCount] = useState(12);
  const [isLoadMore, setIsLoadMore] = useState(true);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  useEffect(() => {
    if (selectedRegion === "All") {
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
    <>
      <Header handleRegionFilter={handleRegionFilter} />
      <div className="contentWrapper">
        <Container>
          <div className="position-relative w-100">
            <div className="titleBlock">
              <h1>Welcome</h1>
            </div>

            <div className="positioon-relative mt-4 mt-lg-5 sliderBlock">
              <Row>
                <Col xs={12} lg={8}>
                  <Slider filteredCountries={filteredCountries} />
                </Col>
                <Col xs={12} lg={4}>
                  <div className="image-slider">
                    <div className="customImgBox">
                      {filteredCountries.length > 0 &&
                      filteredCountries[0].flag ? (
                        <Image
                          src={filteredCountries[0].flag}
                          alt="Country Flag"
                        />
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <CountriesList
              filteredCountries={filteredCountries}
              displayCount={displayCount}
            />

            <div className="text-center mt-4 mt-lg-5">
              <Button variant="primary" type="button" onClick={handleLoadMore}>
                {isLoadMore ? "Load More" : "Load Less"}
              </Button>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
