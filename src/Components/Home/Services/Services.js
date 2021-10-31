import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://pacific-bayou-55573.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.log(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <h2 className="text-info my-5">Our Services</h2>
      <div>
        {isLoading && <Spinner animation="border" variant="info" />}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
          {services.map((service) => (
            <Service key={service} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

/* const services = [
    {
      name: "20 DAYS FROM PARIS TO MALI",
      img: "https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/2015/05/22-1170x350.jpg",
      description:
        "France was the former colonial overlord of Mali, then known as French Sudan, in which it ruled from the capital in Bamako. Bamako later became the capital of the newborn Republic of Mali. French rule had influenced Mali in several aspects, such as the adoption of the French language as the main language of Mali.",
    },
    {
      name: "TRIP TO KAZAKHSTAN",
      img: "https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/2015/05/5.jpg",
      description:
        "Kazakhstan is the largest country in Central Asia and the ninth largest in the world. ... The capital is Nur-Sultan (formerly Astana, Aqmola, and Tselinograd), in the north-central part of the country.",
    },
    {
      name: "HONEYMOON SUITE GREECE",
      img: "https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/2015/05/24-1170x350.jpg",
      description:
        "Honeymoon suites in Greece are the most romantic accommodation type to stay during this special trip. ... These Greece honeymoon suites are usually constructed in a discreet building away from the main hotel complex, or at the top floor of the resort to offer a breathtaking view.",
    },
    {
      name: "20 DAYS FROM PARIS TO VENICE",
      img: "https://kodeforest.com/wp-demo/travel/wide/wp-content/uploads/2015/04/19-1170x350.jpg",
      description:
        "Discover Paris, Geneva and Venice on a vacation by rail through spectacular Alpine scenery. Discover the most romantic city in the world with a trip to Paris. Travel from Paris to Geneva, arriving with time to enjoy an evening meal or perhaps a stroll around the lake. Continue the next day through the scenic Simplon Pass route, before crossing the border into Italy, arriving at your final stop, Venice, for three nights discovering this enchanting city.",
    },
    {
      name: "HONEYMOON SUITE DUBAI",
      img: "https://images.unsplash.com/photo-1605101943206-05c8f4e64598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9uZXltb29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "Discover Banyan Tree Residences at Dubai. Resort-Style living, everyday. Unparalleled facilities and amenities with magnificent views. Infinity Pool. Multiple Amenities. Luxury Living.",
    },
    {
      name: "21 DAYS IN THE HEART OF ITALY",
      img: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRhbHl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description:
        "In many ways the most modern of Italian cities, Milan is a busy, elegant metropolis with an impressive list of grand palaces, fine churches, and important museums. Museum-lovers will appreciate Villa Carlotta and Pinacoteca di Brera. Visit Duomo di Milano and Castello Sforzesco for their historical value. Change things up with a short trip to Greenway del Lago di Como in Colonno (about 1h 20 min away).",
    },
  ]; */
