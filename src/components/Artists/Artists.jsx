import React, { useContext } from "react";
import { context } from "../../API/DataCenter";
import Layout from "../Layout";
import "../../sass/_main.scss";
import { Link } from "react-router-dom";
const Artists = () => {
  const { artists } = useContext(context);
  return (
    <div>
      <Layout>
        <section className="allArtists">
          {artists.map((el) => {
            return (
              <Link key={el.id} to={`/artist/${el.id}`}>
                <div className="infoContainer">
                  <div
                    className="artistBox"
                    style={{
                      backgroundImage: `url(${
                        window.location.origin + "/artistImages/" + el.image
                      })`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      webkitfilter: "grayscale(100%)",
                      filter: "grayscale(100%)",
                    }}
                  ></div>
                  <h2>{el.name}</h2>
                </div>
              </Link>
            );
          })}
        </section>
      </Layout>
    </div>
  );
};

export default Artists;
