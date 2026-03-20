import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function AddRooms() {

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    description: ""
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImages = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const data = new FormData();
      data.append("title", formData.title);
      data.append("location", formData.location);
      data.append("rent", formData.rent);
      data.append("description", formData.description);

      images.forEach((img) => {
        data.append("images", img); // must match backend
      });

      await axios.post(
        "http://localhost:5000/property",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          
          }
        }
      );

      toast.success("Room Added Successfully");

      setFormData({
        title: "",
        location: "",
        rent: "",
        description: ""
      });
      setImages([]);

    } catch (err) {
      console.log(err);
      toast.error("Error adding room");
    }
  };

  return (
    <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">

      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "1000px" }}>

        <h2 className="text-center mb-4" style={{ color: "#0d5c4d" }}>
          Add New Room
        </h2>

        <div className="row">

          <div className="col-md-6">
            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">Room Title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Location</label>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Rent (₹)</label>
                <input
                  type="number"
                  name="rent"
                  className="form-control"
                  value={formData.rent}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <textarea
                  name="description"
                  className="form-control"
                  rows="3"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Upload Images</label>
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={handleImages}
                />
              </div>

              <button
                type="submit"
                className="w-100"
                style={{
                  backgroundColor: "#0d5c4d",
                  color: "white",
                  border: "none",
                  padding: "10px",
                  borderRadius: "5px"
                }}
              >
                Add Room
              </button>

            </form>
          </div>

          <div className="col-md-6 border rounded bg-white p-3">

            {images.length > 0 ? (
              <div className="row">
                {images.map((img, index) => (
                  <div className="col-6 mb-3" key={index}>
                    <img
                      src={URL.createObjectURL(img)}
                      alt="preview"
                      className="img-fluid rounded"
                      style={{
                        height: "120px",
                        width: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="d-flex align-items-center justify-content-center h-100">
                <p className="text-muted text-center">
                  Image previews will appear here
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddRooms;