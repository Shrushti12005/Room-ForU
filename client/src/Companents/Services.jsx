import React from "react";

function ServicesAmenities() {

  const services = [
    {
      icon: "📞",
      title: "24/7 Room Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar."
    },
    {
      icon: "🧺",
      title: "Laundry Service",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar."
    },
    {
      icon: "📶",
      title: "Full WiFi Access",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar."
    },
    {
      icon: "📹",
      title: "Hi-Class Security",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctus nec ullamcorper mattis pulvinar."
    }
  ];

  return (
    <div style={{background:"#f4f4f4", padding:"80px 0"}}>

      {/* Internal CSS */}
      <style>
        {`
        .service-card{
          text-align:center;
          padding:20px;
        }

        .service-icon{
          font-size:55px;
          transition: transform 0.3s ease;
          display:inline-block;
          color:#4f7f77;
        }

        .service-card:hover .service-icon{
          transform: scale(1.4);
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

        {/* Section Title */}
        <div className="text-center mb-5">
          <p style={{letterSpacing:"2px",fontSize:"12px"}}>
            SERVICES & AMENITIES
          </p>

          <h2 style={{fontWeight:"700"}}>
            Our Services & Amenities
          </h2>

          <p style={{color:"#777"}}>
           Enjoy a comfortable and relaxing stay with our thoughtfully designed rooms and premium amenities. We provide high-speed WiFi, air-conditioned spaces, and modern interiors to ensure a pleasant experience for every guest. Our services include 24/7 customer support, secure booking, and well-maintained, hygienic environments. Whether you are traveling for business or leisure, we strive to offer convenience, comfort, and quality that makes your stay truly memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row">

          {services.map((service,index)=>(
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
