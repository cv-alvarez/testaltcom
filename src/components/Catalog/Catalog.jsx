import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../assets/data/productos.json";

import "./index.css";
import Footer from "../Footer/Footer";

const Catalog = () => {
  let { name } = useParams();
  const productos = data[name];
  const [filter, setFilter] = useState("");

  const inputfind = (e) => {
    setFilter(e.target.value);
  };
  const findbyname = productos?.filter(({ nombre }) => {
    return nombre
      ?.replaceAll("-", " ")
      .toLowerCase()
      .includes(filter?.toLowerCase().trim());
  });

  console.log(findbyname, "findbyname");
  console.log(productos, "producto");
  return (
    <>
      <></>
      <div className="Catalog_Container_main">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-5 mt-5 inputfind">
              <span className="catalog-title">
                Catálogo {">"} {productos[0]?.categoria}
              </span>{" "}
              <span>
                <input
                  type="text"
                  placeholder="Buscar por nombre"
                  onChange={inputfind}
                />
              </span>
            </div>
          </div>

          <div className="catalog">
            <div className="container">
              <div className="row">
                {findbyname?.map(({ nombre, imagen, index }) => (
                  <div key={index} className="col-sm-12 col-md-4 col-lg-3">
                    <div className="cards">
                      <p>{nombre?.replaceAll("-", " ")}</p>
                      <img
                        src={imagen}
                        height="150px"
                        className="imgcardscatalog"
                      />
                      <div className="overlay">
                        <span className="productoadetalle">
                          <Link
                            to={`/${name}/${nombre}`}
                            className="linkdetalle"
                          >
                            Ver Producto
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catalog;
