import React from "react";

const socialIcons = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    svg: (
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-gray-500 hover:text-blue-600 transition"
      >
        <path d="M18 2.01 2 2c-1.1 0-2 .89-2 1.99v16c0 1.1.9 2 2 2h8.5v-7h-2v-2h2v-1.5c0-2.07 1.23-3.5 3.1-3.5.9 0 1.84.16 1.84.16v2h-1.04c-1.03 0-1.36.64-1.36 1.3V13h2.3l-.37 2h-1.93v7H18c1.1 0 2-.9 2-2v-16c0-1.1-.9-1.99-2-1.99z" />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    svg: (
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-gray-500 hover:text-blue-400 transition"
      >
        <path d="M20 3.924c-.735.326-1.523.547-2.35.646a4.11 4.11 0 0 0 1.804-2.27 8.19 8.19 0 0 1-2.605.996A4.104 4.104 0 0 0 9.85 7.03a11.65 11.65 0 0 1-8.457-4.287a4.104 4.104 0 0 0 1.27 5.477a4.07 4.07 0 0 1-1.858-.513v.052a4.104 4.104 0 0 0 3.292 4.022a4.09 4.09 0 0 1-1.853.07a4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 17.13a11.616 11.616 0 0 0 6.29 1.844c7.547 0 11.675-6.155 11.675-11.49c0-.175-.004-.35-.012-.523A8.18 8.18 0 0 0 20 3.924z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    svg: (
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-gray-500 hover:text-pink-500 transition"
      >
        <path d="M7.5 2h5A5.5 5.5 0 0 1 18 7.5v5A5.5 5.5 0 0 1 12.5 18h-5A5.5 5.5 0 0 1 2 12.5v-5A5.5 5.5 0 0 1 7.5 2zm0-2A7.5 7.5 0 0 0 0 7.5v5A7.5 7.5 0 0 0 7.5 20h5A7.5 7.5 0 0 0 20 12.5v-5A7.5 7.5 0 0 0 12.5 0h-5zM10 5.5A4.5 4.5 0 1 1 5.5 10A4.5 4.5 0 0 1 10 5.5zm0-2A6.5 6.5 0 1 0 16.5 10A6.5 6.5 0 0 0 10 3.5zm6.5 1.75a1.25 1.25 0 1 1-1.25-1.25a1.25 1.25 0 0 1 1.25 1.25z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    svg: (
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-gray-500 hover:text-blue-700 transition"
      >
        <path d="M17 2A2 2 0 0 1 19 4v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14zm-9.5 14V9.5H5V16h2.5zm-1.25-7.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5zM17 16v-3.25c0-2.07-2.25-1.91-2.25 0V16H12.5V9.5H15V11c.5-.75 2.25-1.25 2.25 1.25V16H17z" />
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer className="pt-12 pb-4">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 pb-8">
          {/* Logo & Social */}
          <div>
            <div className="mb-4 font-bold text-xl text-gray-900">YourLogo</div>
            <div className="flex gap-3">
              {socialIcons.map((icon) => (
                <a
                  key={icon.name}
                  href={icon.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.name}
                >
                  {icon.svg}
                </a>
              ))}
            </div>
          </div>
          {/* How does it work */}
          <div>
            <div className="mb-3 font-semibold text-gray-900">
              How does it work
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <div className="mb-3 font-semibold text-gray-900">Services</div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Sample Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Apparel Production
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Label Tag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Packaging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Global Shipping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Photography Products
                </a>
              </li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <div className="mb-3 font-semibold text-gray-900">Resources</div>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Sizing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <div className="mb-3 font-semibold text-gray-900">Contact Us</div>
            <div className="text-gray-600 text-sm mb-1">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-gray-900 transition"
              >
                +1 234 567 890
              </a>
            </div>
            <div className="text-gray-600 text-sm mb-1">
              Email:{" "}
              <a
                href="mailto:info@example.com"
                className="hover:text-gray-900 transition"
              >
                info@example.com
              </a>
            </div>
            <div className="text-gray-600 text-sm">
              Location: 123 Main St, City, Country
            </div>
          </div>
        </div>
        <div className="border-t pt-4 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
