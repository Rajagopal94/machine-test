import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const CountriesList = ({ filteredCountries, displayCount }) => {
  return (
    <div className="card-flex mt-4 mt-lg-5">
      <Row>
        {filteredCountries.slice(0, displayCount).map((country, index) => (
          <Col xs={12} lg={6} key={index}>
            <Card>
              <div className="imgBlock">
                <Card.Img variant="top" src={country.flag} />
              </div>
              <Card.Body>
                <Card.Title>{country.name}</Card.Title>
                <Card.Text>{country.region}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CountriesList;
