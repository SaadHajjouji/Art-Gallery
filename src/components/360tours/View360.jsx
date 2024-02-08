// import React, { useContext } from "react";
// import { context } from "../../API/DataCenter";
// import * as PANOLENS from "panolens";
// import { useRef } from "react";

// const View360 = (props) => {
//   ///360 params
//   const panorama = new PANOLENS.ImagePanorama(
//     window.location.origin + "/pano3.png"
//   );

//   const theref = useRef(null);
//   console.log(theref);
//   // console.log(panorama);
//   const viewer = new PANOLENS.Viewer({
//     container: theref.current,
//     // autoRotate: true,
//   });
//   // console.log(viewer);
//   viewer.add(panorama);
//   /// data management
//   const { alltours } = useContext(context);
//   const id = props.match.params.id;
//   const exactTour = alltours.find((tour) => tour.id === +id);
//   return (
//     <>
//       {/* <h1>hello {exactTour.id + exactTour.tourName}</h1> */}
//       <div ref={theref} style={{ height: "100%", overflow: "hidden" }}></div>
//     </>
//   );
// };

// export default View360;
