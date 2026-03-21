import React from "react";
import { useParams, useNavigate } from "react-router-dom";
const propertyData = [
  {
    id: 1,
    title: "Deluxe Room",
    location: "Mumbai",
    rent: 2500,
    rating: 4.5,
    description: "This Deluxe Room is designed to offer the perfect balance of comfort and elegance. Featuring modern interiors and a cozy bed, it creates a relaxing environment for guests. Large windows allow natural light to brighten the space, enhancing your stay experience. The room comes with air conditioning, high-speed WiFi, and premium furnishings. Whether you're traveling for leisure or work, this room ensures a peaceful and refreshing stay. Enjoy a calm ambiance after a long day in the city. Ideal for couples or solo travelers looking for comfort at an affordable price. The stylish decor adds a touch of luxury to your experience. Book now and enjoy a comfortable stay like never before."
,
    images: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427"
    ]
  },

  {
    id: 2,
    title: "Luxury Suite",
    location: "Delhi",
    rent: 5000,
    rating: 4.8,
    description: "Step into luxury with this beautifully designed suite offering spacious interiors and premium comfort. The room features a king-size bed, elegant furniture, and a stylish seating area. Perfect for both business and leisure travelers who appreciate comfort and class. The suite is equipped with modern amenities including WiFi, air conditioning, and smart lighting. Enjoy a peaceful environment that helps you relax and unwind. The sophisticated design creates a luxurious atmosphere. Ideal for long stays and special occasions. Experience top-tier comfort and service. A perfect choice for those who want a premium lifestyle."
,
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
    ]
  },

  {
    id: 3,
    title: "Single Room",
    location: "Pune",
    rent: 1500,
    rating: 4.2,
    description: "This Single Room is perfect for solo travelers seeking comfort and affordability. Designed with simplicity and functionality in mind, it offers a cozy bed and clean interiors. The room provides essential amenities for a comfortable stay. Ideal for students, professionals, or short trips. Enjoy a peaceful environment where you can relax after a busy day. The compact design ensures efficient use of space. It’s budget-friendly without compromising on quality. A great choice for minimal yet comfortable living. Experience convenience at its best."
,
    images: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1618220179428-22790b461013"
    ]
  },

  {
    id: 4,
    title: "Family Room",
    location: "Nagpur",
    rent: 3500,
    rating: 4.6,
    description: "Our Family Room is designed to provide maximum comfort for families traveling together. It offers spacious interiors with multiple beds and a large seating area. The room creates a homely environment, making it perfect for long stays. Equipped with modern amenities, it ensures a comfortable experience for everyone. Children and adults alike can enjoy the relaxing atmosphere. The room layout provides both privacy and togetherness. Ideal for vacations and family gatherings. Experience warmth, comfort, and convenience in one place. Make unforgettable memories with your loved ones."
,
    images: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ]
  },

  {
    id: 5,
    title: "Executive Room",
    location: "Bangalore",
    rent: 4000,
    rating: 4.7,
    description: "The Executive Room is crafted especially for business professionals who need both comfort and productivity. It features a dedicated workspace along with a comfortable bed. The modern design enhances focus and relaxation. High-speed internet ensures seamless work experience. After a long day, unwind in a cozy and peaceful environment. The elegant interiors add a professional touch to your stay. Ideal for corporate travelers and working individuals. Experience a perfect blend of work and comfort. Stay productive while enjoying luxury."
,
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
    ]
  },

  {
    id: 6,
    title: "Presidential Suite",
    location: "Hyderabad",
    rent: 8000,
    rating: 5.0,
    description: "Experience unmatched luxury in our Presidential Suite designed for ultimate comfort and elegance. This suite offers a large living area, premium furniture, and a king-size bed. The interiors reflect sophistication and high-end living. Perfect for VIP guests and luxury seekers. Enjoy top-class amenities and exclusive services. The ambiance is calm, private, and extremely relaxing. Ideal for special occasions or premium stays. Experience royal living with exceptional comfort. A truly unforgettable experience awaits you."
,
    images: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198"
    ]
  },

  {
    id: 7,
    title: "Studio Room",
    location: "Pune",
    rent: 2200,
    rating: 4.3,
    description: "The Studio Room offers a smart and modern living space perfect for individuals or couples. Its compact design ensures maximum comfort with efficient space usage. Includes a cozy bed and a small workspace for convenience. The room provides a perfect blend of style and functionality. Ideal for long stays or work-from-home setups. Enjoy privacy and a peaceful environment. Modern interiors enhance the overall experience. A perfect choice for simple yet comfortable living. Affordable and stylish at the same time."
,
    images: [
      "https://images.unsplash.com/photo-1521783988139-893c0b2c5b0b",
      "https://images.unsplash.com/photo-1600585154204-1c7c37a8cfa5",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
    ]
  },

  {
    id: 8,
    title: "Queen Room",
    location: "Mumbai",
    rent: 2700,
    rating: 4.4,
    description: "This Queen Room is designed for comfort and elegance with a stylish interior. It features a queen-size bed and modern decor. Ideal for couples looking for a relaxing stay. The room offers a calm and peaceful atmosphere. Equipped with all necessary amenities for convenience. Natural lighting enhances the beauty of the space. Perfect for short vacations or weekend getaways. Enjoy a cozy and comfortable experience. A great choice for a pleasant stay."
,
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
    ]
  },

  {
    id: 9,
    title: "King Room",
    location: "Delhi",
    rent: 3200,
    rating: 4.6,
    description:"The King Room offers spacious interiors with a luxurious king-size bed. Designed for maximum comfort and relaxation. Ideal for couples and business travelers. The room includes modern facilities and elegant decor. Enjoy a peaceful and premium environment. The large space adds to the comfort level. Perfect for a luxurious stay experience. Relax and unwind in style. A perfect combination of comfort and elegance."
,
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ]
  },

  {
    id: 10,
    title: "Budget Room",
    location: "Aurangabad",
    rent: 1200,
    rating: 4.0,
    description: "Our Budget Room is perfect for travelers looking for affordability without compromising comfort. It provides clean and simple interiors with essential amenities. Ideal for short stays and students. The room ensures a comfortable and peaceful experience. Designed for practicality and convenience. Enjoy a hassle-free stay at a low cost. A great option for budget-conscious travelers. Simple, clean, and comfortable living. Value for money guaranteed."
,
    images: [
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
      "https://images.unsplash.com/photo-1618220179428-22790b461013"
    ]
  },

  {
    id: 11,
    title: "Honeymoon Suite",
    location: "Goa",
    rent: 6000,
    rating: 4.9,
    description: "The Honeymoon Suite is specially designed for couples seeking a romantic getaway. It features beautiful interiors and a cozy ambiance. Perfect for creating unforgettable memories. The room offers privacy and comfort. Soft lighting and elegant decor enhance the romantic feel. Ideal for honeymoon trips or special occasions. Enjoy a peaceful and luxurious stay. Experience love and comfort in one place. Make your moments truly special."
,
    images: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ]
  },

  {
    id: 12,
    title: "Twin Room",
    location: "Pune",
    rent: 2000,
    rating: 4.3,
    description: "The Twin Room offers two separate beds, making it ideal for friends or colleagues. Comfortable and spacious with modern interiors. Designed for convenience and practicality. The room includes all essential amenities. Perfect for shared stays without compromising privacy. Enjoy a relaxed and comfortable environment. A great option for group travelers. Functional and affordable. Experience comfort with flexibility."
,
    images: [
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4",
      "https://images.unsplash.com/photo-1618220179428-22790b461013",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115"
    ]
  },

  {
    id: 13,
    title: "Garden View Room",
    location: "Lonavala",
    rent: 2800,
    rating: 4.5,
    description: "This Garden View Room offers a refreshing experience with beautiful greenery outside. Perfect for nature lovers who enjoy peace and relaxation. The room is designed with comfort and elegance. Fresh air and natural surroundings enhance your stay. Ideal for a calm and stress-free environment. Enjoy scenic views right from your window. A perfect escape from city life. Relax, refresh, and rejuvenate."
,
    images: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1",
      "https://images.unsplash.com/photo-1618220179428-22790b461013"
    ]
  },

  {
    id: 14,
    title: "Sea View Room",
    location: "Goa",
    rent: 4500,
    rating: 4.7,
    description:"Enjoy breathtaking ocean views in our Sea View Room. Wake up to the sound of waves and stunning scenery. Perfect for relaxing vacations and peaceful stays. The room features modern design and comfortable interiors. Ideal for couples and leisure travelers. Experience a calm and refreshing environment. Enjoy beautiful sunsets from your room. A perfect getaway by the sea."
,
    images: [
      "https://images.unsplash.com/photo-1501117716987-c8e1ecb210ec",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ]
  },

  {
    id: 15,
    title: "Penthouse Suite",
    location: "Mumbai",
    rent: 10000,
    rating: 5.0,
    description: "The Penthouse Suite offers ultimate luxury with spacious interiors and stunning city views. Designed for high-end living and premium comfort. Includes modern furniture and elegant decor. Ideal for those who love luxury lifestyle. Enjoy privacy and top-class amenities. The suite provides a unique and exclusive experience. Perfect for special occasions. Live the luxury you deserve."
,
    images: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      "https://images.unsplash.com/photo-1600585154084-4e5fe7c39198",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed"
    ]
  },

  {
    id: 16,
    title: "Office+Bedroom Room",
    location: "Bangalore",
    rent: 4500,
    rating: 4.6,
    description: "This Office + Bedroom Room is perfect for professionals working from home. It combines a comfortable sleeping area with a functional workspace. Modern design ensures productivity and relaxation. Equipped with all necessary amenities. Ideal for long stays and remote work. Enjoy a balanced lifestyle in one space. Comfortable, practical, and stylish. Work and relax without compromise."
,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Kr87Ms_n5ooG8u0kGKBFn4UymeNQjPNp-g&s",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32"
    ]
  }
];


function RoomDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const room = propertyData.find((item) => item.id === Number(id));

  if (!room) return <h2>Room not found</h2>;

  return (
    
    <div className="container py-5">

      <h2>{room.title}</h2>

      {/* Images */}
      <div className="row my-4">
        {room.images.map((img, index) => (
          <div className="col-md-4" key={index}>
            <img
              src={img}
              alt=""
              style={{ width: "100%", height: "250px",marginTop:"10px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>

      <h5>📍 {room.location}</h5>
      <h5>💰 ₹{room.rent} / month</h5>

      <p style={{ marginTop: "15px" }}>{room.description}</p>

      <button
        onClick={() => navigate(`/book/${room.id}`)}
        style={{
          backgroundColor: "#0d5c4d",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Book Now
      </button>

    </div>
  );
}

export default RoomDetail;
