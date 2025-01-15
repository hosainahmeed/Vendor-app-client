import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="">
        <div className="area">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand Section */}
            <div>
              <h3 className="text-lg font-bold text-green-700">খাঁটি দানা</h3>
              <p className="mt-2">
                Khati Dana is an Organic Food Supply Website in Bangladesh.
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <Link
                  to="#"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaFacebook className="text-xl" />
                </Link>
                <Link
                  to="#"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaFacebookMessenger className="text-xl" />
                </Link>
                <Link
                  to="#"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaWhatsapp className="text-xl" />
                </Link>
                <Link
                  to="#"
                  className="hover:text-green-500 transition duration-300"
                >
                  <FaTwitter className="text-xl" />
                </Link>
              </div>
            </div>

            {/* Info Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Info</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about-us"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/refund-policy"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Refund and Returns Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms-and-conditions"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            {/* Menu Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/cart"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Cart
                  </Link>
                </li>
                <li>
                  <Link
                    to="/login"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/registration"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Registration
                  </Link>
                </li>
                <li>
                  <Link
                    to="/vendor-register"
                    className="hover:text-green-500 hover:underline transition duration-300"
                  >
                    Vendor Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p>SAJJAN KANDA RAJBARI</p>
              <p>Email: VIRTUAL WORLD</p>
              <p>Contact No: 01917363622</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-6 py-4 bg-green-600 text-white">
          © All Rights Reserved By Khati Dana
        </div>
      </div>
    </footer>
  );
}

export default Footer;
