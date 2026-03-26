import React from "react";
import {
  PhoneCall,
  WashingMachine,
  Wifi,
  ShieldCheck
} from "lucide-react";

function ServicesAmenities() {

  const services = [
    {
      icon: <PhoneCall size={50} />,
      title: "24/7 Support",
      desc: "Get instant help anytime during your stay. Our support team is always available to assist you."
    },
    {
      icon: <WashingMachine size={50} />,
      title: "Laundry Service",
      desc: "Enjoy hassle-free laundry facilities for a clean and comfortable living experience."
    },
    {
      icon: <Wifi size={50} />,
      title: "High-Speed WiFi",
      desc: "Stay connected with fast and reliable internet for work, study, and entertainment."
    },
    {
      icon: <ShieldCheck size={50} />,
      title: "Secure Stay",
      desc: "Your safety matters. We provide verified properties with secure and trusted environments."
    }
  ];

  return (
    <div style={{ background: "#f4f4f4", padding: "80px 0" }}>

      <style>
        {`
        .service-card{
          text-align:center;
          padding:20px;
        }

        .service-icon{
          transition: transform 0.3s ease;
          display:inline-block;
          color:#0d5c4d;
        }

        .service-card:hover .service-icon{
          transform: scale(1.3);
        }

        .service-title{
          font-weight:600;
          margin-top:15px;
          font-size:20px;
        }

        .service-desc{
          color:#666;
          font-size:14px;
          margin-top:10px;
        }
        `}
      </style>

      <div className="container">


        <div className="text-center mb-5">
          <p style={{ letterSpacing: "2px", fontSize: "12px" }}>
            SERVICES & AMENITIES
          </p>

          <h2 style={{ fontWeight: "700" }}>
            Our Services & Amenities
          </h2>

          <p style={{ color: "#777" }}>
            We provide everything you need for a comfortable and stress-free stay.
            From secure and verified rooms to modern amenities, our platform ensures
            convenience, safety, and a smooth booking experience for students and professionals.
          </p>
        </div>
        <div className="row">

          {services.map((service, index) => (
            <div key={index} className="col-md-3 col-sm-6">

              <div className="service-card">

                <div className="service-icon">
                  {service.icon}
                </div>

                <div className="service-title">
                  {service.title}
                </div>

                <p className="service-desc">
                  {service.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ServicesAmenities;