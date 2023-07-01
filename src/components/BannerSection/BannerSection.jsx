import React from "react";
import styles from "./bannersection.module.css";

const BannerSection = () => {
  return (
    <div className={styles.bannersection}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className={styles.banner_img}>
              <h1>
                {" "}
                ¡Protege tu negocio y a tus empleados con nuestro catálogo de
                productos de seguridad industrial!
              </h1>
              <button type="button" class="btn btn-dark">
                Explorar catálogo
              </button>
            </div>
            ;
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
