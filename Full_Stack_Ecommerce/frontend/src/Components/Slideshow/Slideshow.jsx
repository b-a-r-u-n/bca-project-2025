// // src/Components/Slideshow.jsx
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import img1 from "../Assets/dc-1.webp";
// import img2 from "../Assets/fandom-tile-copy.webp";
// import img3 from "../Assets/harry_potter_fandom_tile.webp";

// const Slideshow = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2500,
//   };

//   return (
//     <div style={{ margin: "50px auto", width: "90%" }}>
//       <Slider {...settings}>
//         <div><img src={img1} alt="DC" style={imgStyle} /></div>
//         <div><img src={img2} alt="Fandom" style={imgStyle} /></div>
//         <div><img src={img3} alt="Harry Potter" style={imgStyle} /></div>
//       </Slider>
//     </div>
//   );
// };

// const imgStyle = {
//   width: "100%",
//   height: "auto",
//   borderRadius: "10px",
//   objectFit: "cover",
// };

// export default Slideshow;