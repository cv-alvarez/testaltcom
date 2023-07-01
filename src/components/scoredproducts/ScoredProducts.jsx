import React from "react";
import styles from "./scoredproducts.module.css";
import data from "../../assets/data/recomended.json";
import { Link } from "react-router-dom";

const ScoredProducts = () => {
  console.log(data, "data");
  return (
    <div className="container">
      <div
        className={styles.background_cards}
        style={{ marginBottom: "100px" }}
      >
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <p style={{ fontSize: "18px", marginTop: "50px" }}>
                <strong>Encuentra lo que necesitas aquí</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {data.categorias.map((d) => (
            <div className="col-md-3">
              <Link to={`catalog/${d.url}`} style={{ textDecoration: "none" }}>
                <div className={styles.recomendedcard}>
                  <p style={{ color: "rgb(42 65 107)" }}>{d.nombre}</p>

                  <img src={d.imagen} alt="" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div
        className={styles.container_scoredproducts}
        style={{ marginBottom: "100px" }}
      >
        <div className="row" v>
          <div className="offset-md-1 col-md-2">
            <div className={styles.scoredproducts_container_text}>
              <p style={{ fontSize: "14px" }}>Lo más destacado</p>
              <p style={{ fontSize: "18px" }}>
                <strong> Conoce lo nuevo que tenemos para ti</strong>
              </p>
            </div>
          </div>
          <div className="col-md-8 ml-md-1">
            <div className={styles.scoredproducts}>
              <div className={styles.scoredproducts_container}>
                <div className={styles.container_img}>
                  <div className={styles.container_img_column}>
                    <div className={styles.container_img_column_div}>
                      <div className={styles.overlay}>
                        <Link
                          to="/proteccion-manual/GUANTES DE BADANA - CLUTE"
                          className={styles.overlayText}
                        >
                          Ver producto
                        </Link>
                      </div>
                    </div>
                    <div className={styles.container_img_column_div}>
                      {" "}
                      <div className={styles.overlay}>
                        <Link
                          to="/proteccion-de-cabeza/DELTA-PLUS-QUARTZ-UP-III"
                          className={styles.overlayText}
                        >
                          Ver producto
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container_img_column_2}>
                    {" "}
                    <div className={styles.container_img_column_div}>
                      <div className={styles.overlay}>
                        <Link
                          to="/proteccion-auditiva/Orejera 3M H9A Peltor con Banda 25 dB"
                          className={styles.overlayText}
                        >
                          Ver producto
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoredProducts;
