import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { FaYoutube, FaFacebook, FaTelegram, FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  useEffect(() => {
    // Set view to Namangan, Uzbekistan coordinates
    const map = L.map("footerMap").setView([40.9983, 71.6726], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "© OpenStreetMap",
    }).addTo(map);

    // Add marker for Namangan location
    L.marker([40.9983, 71.6726])
      .addTo(map)
      .bindPopup("D.Motors Location - Namangan, Uzbekistan")
      .openPopup();

    return () => {
      map.remove();
    };
  }, []);

  return (
    <footer className="bg-blue-800 text-white py-12">
      <div className="container mx-auto px-5 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-4">D.Motors</h1>
          <p className="text-sm text-gray-300 mb-6">
            Your go-to destination for quality automotive services. Visit us to
            explore our wide range of services.
          </p>
          <div
            id="footerMap"
            className="w-full h-40 rounded-lg shadow-md"
          ></div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:underline">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">
                Sign up
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-x-2">
              <FaPhoneAlt className="text-blue-400" />
              <span>+998 93 908 03 35</span>
            </li>
            <li className="flex items-center gap-x-2">
              <AiOutlineMail className="text-blue-400" />
              <span>info@dmotors.com</span>
            </li>
            <li className="flex items-center gap-x-2">
              <span>Namangan, Uzbekistan</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-6 text-gray-300 text-2xl">
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram className="hover:text-blue-400" />
              </a>
            </li>
            <li>
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTelegram className="hover:text-blue-400" />
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="hover:text-blue-400" />
              </a>
            </li>
            <li>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="hover:text-blue-400" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10">
        © {new Date().getFullYear()} D.Motors. All rights reserved.
      </div>
    </footer>
  );
}
