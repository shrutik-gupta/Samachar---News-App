import React from 'react'
import OwnerImage from '../assets/Shrutik.jpg';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div style={{ marginTop: "55px" }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://images.unsplash.com/photo-1525184990509-4fd44ed9e056?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5ld3N8ZW58MHwwfDB8fHww"
              className="d-block w-100" alt="First slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3c3xlbnwwfDB8MHx8fDA%3D"
              className="d-block w-100" alt="Second slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src="https://images.unsplash.com/photo-1560957123-e8e019c66980?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmV3c3xlbnwwfDB8MHx8fDA%3D"
              className="d-block w-100" alt="Third slide" style={{ height: "70vh", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="row justify-content-center m-5">
        <div className="text-body-secondary" style={{ fontSize: "30px" }}>About the founder</div>
        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center" style={{ height: '100%' }}>
          <img
            src={OwnerImage}
            alt="error"
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
          />
          <h2 className="fw-normal">Shrutik Gupta</h2>
          <p className='text-center'>
            I am an expressive communicator dedicated to building relationships and fostering inclusivity while continuously seeking to learn and excel in my commitments.</p>
          <p>
            <NavLink className="btn btn-secondary" to="/">
              Explore Samachar »
            </NavLink>
          </p>
        </div>
      </div>

      <div className="container">
        
        <div className="row featurette mt-3 d-flex align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
            </h2>
            <p className="lead">
              Samachar is a comprehensive news platform designed to deliver your daily news updates. Discover a wide range of news categories with ease.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://images.pexels.com/photos/6335/man-coffee-cup-pen.jpg?auto=compress&cs=tinysrgb&w=600"  // Replace with your actual image path
              alt="Description of the image" // Provide a description for accessibility
              className="featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette mt-3 d-flex align-items-center">
          <div className="col-md-7 order-md-1">
            <h2 className="featurette-heading fw-normal lh-1">
            Say goodbye to traditional newspapers. <span className="text-body-secondary">Embrace the future of news.</span>
            </h2>
            <p className="lead">
            Samachar revolutionizes your news experience, providing real-time updates and a diverse range of categories at your fingertips. Stay informed with just a click.
            </p>
          </div>
          <div className="col-md-5 order-md-2">
            <img
              src="https://images.pexels.com/photos/3057984/pexels-photo-3057984.jpeg?auto=compress&cs=tinysrgb&w=600"  // Replace with your actual image path
              alt="Description of the image" // Provide a description for accessibility
              className="featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette mt-3 d-flex align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Discover the difference. <span className="text-body-secondary">Join us today.</span>
            </h2>
            <p className="lead">
            At Samachar, we strive to provide a seamless news experience, ensuring that you are always informed. Navigate through a plethora of categories designed to cater to your interests.
            </p>
          </div>
          <div className="col-md-5 order-md-1">
            <img
              src="https://media.istockphoto.com/id/866600030/photo/abstract-cyberspace-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sr0u60I1nxRvq1mZaWAgw2Wf8_YdBOqUWCn6ngQtN_M="  // Replace with your actual image path
              alt="Description of the image" // Provide a description for accessibility
              className="featurette-image img-fluid mx-auto"
              style={{ width: "500px", height: "500px" }}
            />
          </div>
        </div>

        <hr className="featurette-divider"></hr>
      </div>
      <div className="text-center m-3">
        <p>&copy; Shrutik Gupta 2024</p>
      </div>
    </div >
  )
}

export default About

