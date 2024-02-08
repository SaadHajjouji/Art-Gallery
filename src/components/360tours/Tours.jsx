// import React, { useContext } from "react";
// import Layout from "../Layout";
// import "../../sass/_main.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVrCardboard } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";
// import { context } from "../../API/DataCenter";
// const Tours = () => {
//   const { alltours } = useContext(context);

//   return (
//     <div>
//       <Layout>
//         <h1 className="headingPrimary">
//           <FontAwesomeIcon icon={faVrCardboard} /> 360 tours
//         </h1>
//         <section className="allTours">
//           {alltours.map((tour) => {
//             return (
//               <article className="tour">
//                 <Link to={`360view/${tour.id}`}>
//                   <div
//                     className="image"
//                     style={{
//                       backgroundImage: `url(${tour.image})`,
//                       backgroundRepeat: `no-repeat`,
//                       backgroundSize: "cover",
//                       backgroundPosition: "center",
//                     }}
//                   ></div>
//                   <div className="vrinfo">
//                     <span className="exhibition">{tour.tourName}</span>
//                     <FontAwesomeIcon className="vricon" icon={faVrCardboard} />
//                   </div>
//                 </Link>
//               </article>
//             );
//           })}
//         </section>
//       </Layout>
//     </div>
//   );
// };

// export default Tours;
