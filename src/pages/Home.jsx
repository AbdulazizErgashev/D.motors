import React, { useState } from "react";
import { Link } from "react-router-dom";
import Aclass from "../assets/products/merc/a-class.jpg";
import Cclass from "../assets/products/merc/c-class.jpg";
import Eclass from "../assets/products/merc/e-class.jpeg";
import Sclass from "../assets/products/merc/s-class.jpg";
import Gclass from "../assets/products/merc/gClass.jpg";
import GLA from "../assets/products/merc/gla.jpg";
import GLC from "../assets/products/merc/glc.jpg";
import GLE from "../assets/products/merc/gle.jpg";
import GLS from "../assets/products/merc/gls.jpg";
import GLB from "../assets/products/merc/glb.jpg";
import Maybach from "../assets/products/merc/maybah.jpg";
import CLS from "../assets/products/merc/cls.png";
import BMW3 from "../assets/products/bmw/bmw-3.png";
import BMW5 from "../assets/products/bmw/bmw-5.png";
import BMW7 from "../assets/products/bmw/bmw-7.webp";
import BMWx1 from "../assets/products/bmw/bmw-x1.jpg";
import BMWx3 from "../assets/products/bmw/bmw-x3.webp";
import BMWx5 from "../assets/products/bmw/bmw-x5.webp";
import BMWx7 from "../assets/products/bmw/bmw-x7.webp";
import BMWz4 from "../assets/products/bmw/bmw-z4.png";
import BMWi8 from "../assets/products/bmw/bmw-i8.jpg";
import BMWm4 from "../assets/products/bmw/bmw-m4.webp";
import BMWm5 from "../assets/products/bmw/bmw-m5.webp";
import BMWm8 from "../assets/products/bmw/bmw-m8.jpg";
import Ghost from "../assets/products/rolls/ghost.webp";
import Phantom from "../assets/products/rolls/Phantom.webp";
import Wraith from "../assets/products/rolls/wraith.jpg";
import Cullinan from "../assets/products/rolls/cullinan.jpg";
import Dawn from "../assets/products/rolls/dawn.jpg";
import Sweptail from "../assets/products/rolls/sweptail.jpg";
import Spectre from "../assets/products/rolls/spectre.jpg";
import BoatTail from "../assets/products/rolls/boat-tail.jpg";
import Corniche from "../assets/products/rolls/corniche.webp";
import ParkWard from "../assets/products/rolls/park-ward.jpg";
import Camargue from "../assets/products/rolls/camargue.jpg";
import Spur from "../assets/products/rolls/spur.jpg";
import Aventador from "../assets/products/lambo/aventador.jpg";
import Huracan from "../assets/products/lambo/huracan.jpg";
import Urus from "../assets/products/lambo/urus.jpg";
import Gallardo from "../assets/products/lambo/gallardo.webp";
import Diablo from "../assets/products/lambo/diablo.jpg";
import Murcielago from "../assets/products/lambo/murcielago.jpg";
import Sian from "../assets/products/lambo/sian.jpg";
import Centenario from "../assets/products/lambo/centenario.jpg";
import Reventon from "../assets/products/lambo/reventon.webp";
import Veneno from "../assets/products/lambo/veneno.jpg";
import Miura from "../assets/products/lambo/miura.jpg";
import Essenza from "../assets/products/lambo/essenza.jpg";
import ToyotaCorolla from "../assets/products/toyota/corolla.webp";
import ToyotaCamry from "../assets/products/toyota/camry.png";
import ToyotaRav4 from "../assets/products/toyota/rav4.webp";
import ToyotaHighlander from "../assets/products/toyota/highlander.png";
import ToyotaLandCruiser from "../assets/products/toyota/landcruiser.jpg";
import ToyotaSupra from "../assets/products/toyota/supra.jpg";
import Toyota4Runner from "../assets/products/toyota/4runner.png";
import ToyotaAvalon from "../assets/products/toyota/avalon.jpg";
import ToyotaTacoma from "../assets/products/toyota/tacoma.jpg";
import ToyotaTundra from "../assets/products/toyota/tundra.jpg";
import ToyotaSequoia from "../assets/products/toyota/sequoia.webp";
import ToyotaPrius from "../assets/products/toyota/prius.jpg";
import Spark from "../assets/products/gm-uzbekistan/spark.jpg";
import Cobalt from "../assets/products/gm-uzbekistan/cobalt.jpg";
import Nexia3 from "../assets/products/gm-uzbekistan/nexia3.png";
import Lacetti from "../assets/products/gm-uzbekistan/lacetti.png";
import Malibu from "../assets/products/gm-uzbekistan/malibu.png";
import Captiva from "../assets/products/gm-uzbekistan/captiva.png";
import Trailblazer from "../assets/products/gm-uzbekistan/trailblazer.jpg";
import Tahoe from "../assets/products/gm-uzbekistan/tahoe.png";
import Tracker from "../assets/products/gm-uzbekistan/tracker.png";
import Monza from "../assets/products/gm-uzbekistan/monza.png";
import Equinox from "../assets/products/gm-uzbekistan/equinox.png";
import Onix from "../assets/products/gm-uzbekistan/onix.png";
import GmSilverado from "../assets/products/gm/silverado.jpg";
import GmSierra from "../assets/products/gm/Sierra.jpg";
import GmYukon from "../assets/products/gm/Yukon.jpg";
import GmEscalade from "../assets/products/gm/Escalade.webp";
import GmCT5 from "../assets/products/gm/CT5.jpg";
import GmEnclave from "../assets/products/gm/Buick-Enclave.webp";
import GmAcadia from "../assets/products/gm/Acadia.jpg";
import GmBlazer from "../assets/products/gm/Blazer.webp";
import GmSuburban from "../assets/products/gm/Suburban.jpg";
import GmXT6 from "../assets/products/gm/XT6.jfif";
import GmEncore from "../assets/products/gm/Encore.jpg";
import GmLyriq from "../assets/products/gm/Lyriq.jpg";

export default function Home() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});

  const handleFlip = (index) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const categories = [
    {
      name: "Mercedes",
      cars: [
        {
          name: "Mercedes A-Class",
          image: Aclass,
        },
        { name: "Mercedes C-Class", image: Cclass },
        { name: "Mercedes E-Class", image: Eclass },
        { name: "Mercedes S-Class", image: Sclass },
        { name: "Mercedes G-Class", image: Gclass },
        { name: "Mercedes GLA", image: GLA },
        { name: "Mercedes GLC", image: GLC },
        { name: "Mercedes GLE", image: GLE },
        { name: "Mercedes GLS", image: GLS },
        { name: "Mercedes GLB", image: GLB },
        { name: "Mercedes Maybach", image: Maybach },
        { name: "Mercedes CLS", image: CLS },
      ],
    },
    {
      name: "BMW",
      cars: [
        { name: "BMW 3 Series", image: BMW3 },
        { name: "BMW 5 Series", image: BMW5 },
        { name: "BMW 7 Series", image: BMW7 },
        { name: "BMW X1", image: BMWx1 },
        { name: "BMW X3", image: BMWx3 },
        { name: "BMW X5", image: BMWx5 },
        { name: "BMW X7", image: BMWx7 },
        { name: "BMW Z4", image: BMWz4 },
        { name: "BMW i8", image: BMWi8 },
        { name: "BMW M4", image: BMWm4 },
        { name: "BMW M5", image: BMWm5 },
        { name: "BMW M8", image: BMWm8 },
      ],
    },
    {
      name: "Rolls-Royce",
      cars: [
        { name: "Rolls-Royce Ghost", image: Ghost },
        { name: "Rolls-Royce Phantom", image: Phantom },
        { name: "Rolls-Royce Wraith", image: Wraith },
        { name: "Rolls-Royce Cullinan", image: Cullinan },
        { name: "Rolls-Royce Dawn", image: Dawn },
        { name: "Rolls-Royce Sweptail", image: Sweptail },
        { name: "Rolls-Royce Spectre", image: Spectre },
        { name: "Rolls-Royce Boat Tail", image: BoatTail },
        { name: "Rolls-Royce Corniche", image: Corniche },
        { name: "Rolls-Royce Park Ward", image: ParkWard },
        { name: "Rolls-Royce Camargue", image: Camargue },
        { name: "Rolls-Royce Silver Spur", image: Spur },
      ],
    },
    {
      name: "Lamborghini",
      cars: [
        { name: "Lamborghini Aventador", image: Aventador },
        { name: "Lamborghini Huracan", image: Huracan },
        { name: "Lamborghini Urus", image: Urus },
        { name: "Lamborghini Gallardo", image: Gallardo },
        { name: "Lamborghini Diablo", image: Diablo },
        { name: "Lamborghini Murcielago", image: Murcielago },
        { name: "Lamborghini Sian", image: Sian },
        { name: "Lamborghini Centenario", image: Centenario },
        { name: "Lamborghini Reventon", image: Reventon },
        { name: "Lamborghini Veneno", image: Veneno },
        { name: "Lamborghini Miura", image: Miura },
        { name: "Lamborghini Essenza SCV12", image: Essenza },
      ],
    },
    {
      name: "Toyota",
      cars: [
        { name: "Toyota Corolla", image: ToyotaCorolla },
        { name: "Toyota Camry", image: ToyotaCamry },
        { name: "Toyota RAV4", image: ToyotaRav4 },
        { name: "Toyota Highlander", image: ToyotaHighlander },
        { name: "Toyota Land Cruiser", image: ToyotaLandCruiser },
        { name: "Toyota Supra", image: ToyotaSupra },
        { name: "Toyota 4Runner", image: Toyota4Runner },
        { name: "Toyota Avalon", image: ToyotaAvalon },
        { name: "Toyota Tacoma", image: ToyotaTacoma },
        { name: "Toyota Tundra", image: ToyotaTundra },
        { name: "Toyota Sequoia", image: ToyotaSequoia },
        { name: "Toyota Prius", image: ToyotaPrius },
      ],
    },
    {
      name: "GM Uzbekistan",
      cars: [
        { name: "Chevrolet Spark", image: Spark },
        { name: "Chevrolet Cobalt", image: Cobalt },
        { name: "Chevrolet Nexia 3", image: Nexia3 },
        { name: "Chevrolet Lacetti", image: Lacetti },
        { name: "Chevrolet Malibu", image: Malibu },
        { name: "Chevrolet Captiva", image: Captiva },
        { name: "Chevrolet Trailblazer", image: Trailblazer },
        { name: "Chevrolet Tahoe", image: Tahoe },
        { name: "Chevrolet Tracker", image: Tracker },
        { name: "Chevrolet Monza", image: Monza },
        { name: "Chevrolet Equinox", image: Equinox },
        { name: "Chevrolet Onix", image: Onix },
      ],
    },
    {
      name: "General Motors",
      cars: [
        { name: "Chevrolet Silverado", image: GmSilverado },
        { name: "GMC Sierra", image: GmSierra },
        { name: "GMC Yukon", image: GmYukon },
        { name: "Cadillac Escalade", image: GmEscalade },
        { name: "Cadillac CT5", image: GmCT5 },
        { name: "Buick Enclave", image: GmEnclave },
        { name: "GMC Acadia", image: GmAcadia },
        { name: "Chevrolet Blazer", image: GmBlazer },
        { name: "Chevrolet Suburban", image: GmSuburban },
        { name: "Cadillac XT6", image: GmXT6 },
        { name: "Buick Encore", image: GmEncore },
        { name: "Cadillac Lyriq", image: GmLyriq },
      ],
    },
  ];

  const nextCategory = () => {
    setActiveCategoryIndex((prevIndex) => (prevIndex + 1) % categories.length);
  };

  const prevCategory = () => {
    setActiveCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categories.length) % categories.length
    );
  };

  return (
    <main className="min-h-screen">
      <section className="container mx-auto mt-5 p-5 lg:px-0">
        <div className="flex items-center justify-between text-blue-500 font-bold pb-3 border-b-2 border-blue-100">
          <h1 className="text-2xl">Home</h1>
          <Link to="/shop">
            <button className="border-2 border-blue-500 py-1 px-3 rounded-md hover:bg-blue-100 active:translate-y-1 transition-all">
              Shop Now
            </button>
          </Link>
        </div>

        <div className="p-5">
          <h1 className="text-lg text-blue-500 font-bold border-b-2 border-blue-100">
            Categories
          </h1>

          <div className="flex justify-between items-center mt-5">
            <button
              onClick={prevCategory}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Prev
            </button>
            <h2 className="text-xl text-blue-500 font-bold">
              {categories[activeCategoryIndex].name}
            </h2>
            <button
              onClick={nextCategory}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Next
            </button>
          </div>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {categories[activeCategoryIndex].cars.map((car, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-3">
                  <h3 className="text-lg font-semibold">{car.name}</h3>
                </div>
              </div>
            ))}
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
            {categories[activeCategoryIndex].cars.map((car, index) => (
              <div
                key={index}
                className="w-full h-64 perspective"
                onClick={() => handleFlip(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-500 transform-style preserve-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  } border rounded-lg overflow-hidden shadow-lg`}
                >
                  <div className="absolute w-full h-full backface-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-40 object-cover"
                    />

                    <div className="p-3 bg-white">
                      <h3 className="text-lg font-semibold">{car.name}</h3>
                    </div>
                  </div>

                  <div className="absolute w-full h-full bg-gray-200 text-gray-800 flex items-center justify-center rotate-y-180 backface-hidden p-3">
                    <p className="text-lg font-semibold">
                      More details about {car.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
