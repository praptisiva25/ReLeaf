import React from "react";

const Footer = () => {
    return (
      <footer className="text-white py-8 absolute left-0 w-screen bg-gray-600 text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Awareness", links: ["Campaigns", "Segregation", "Recycling"] },
              { title: "Official", links: ["Official", "Press Releases", "Environment", "Jobs", "Privacy Policy", "Contact Us"] },
              { title: "Contact Us", details: ["Support: 123-456-7890", "Enquiry: 349-387-3928"] },
              { title: "Social", icons: [
                  { name: "Facebook", link: "https://facebook.com", src: "/facebook.svg" },
                  { name: "Twitter", link: "https://twitter.com", src: "/twitter-x.svg" },
                  { name: "YouTube", link: "https://youtube.com", src: "/youtube.svg" },
                  { name: "Instagram", link: "https://instagram.com", src: "/instagram (1).svg" },
                ] },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
                {section.links ? (
                  <ul className="space-y-2">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href="#" className="hover:underline">{link}</a>
                      </li>
                    ))}
                  </ul>
                ) : section.details ? (
                  <ul className="space-y-2">
                    {section.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                ) : (
                  <div className="flex justify-center space-x-4">
                    {section.icons.map(({ name, link, src }, i) => (
                      <a key={i} href={link} target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                        <img src={src} alt={name} className="w-6 h-6" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="border-t border-gray-600 mt-6 pt-4 text-center text-sm">
            © 2025 ReLeaf | All Rights Reserved
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  