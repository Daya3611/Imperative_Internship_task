import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-100 text-black py-10 rounded-t-4xl mt-5">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="mt-2 text-gray-600">
              Your one-stop shop for the best products and deals online.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold">Customer Support</h3>
            <ul className="mt-2 space-y-2 text-gray-500">
              <li>
                <a href="/contact" className="hover:text-orange-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-orange-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:text-orange-400">
                  Returns & Refunds
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="mt-3 flex justify-center md:justify-start space-x-5">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 text-2xl"
              >
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-500 hover:text-sky-400 text-2xl">
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-pink-500 text-2xl"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-300 pt-5">
          © {new Date().getFullYear()} YourCompany. All rights reserved. |
          Design & Develop by{" "}
          <a
            href="https://dayanandgawade.in"
            className="hover:text-orange-600"
            target="_blank"
          >
            Dayanand Gawade.
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
