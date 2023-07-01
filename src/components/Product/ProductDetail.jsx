import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../../assets/data/productos.json";
import "./index.css";

import Footer from "../Footer/Footer";

const ProductDetail = () => {
  let { name, product } = useParams();
  console.log(name, "name");
  const [producto, setProducto] = useState();
  const [contador, setContador] = useState(1);

  const productos = data[name];
  console.log(name, product, "productso");

  console.log(productos, "id");
  const findproductbyname = () => {
    const filteredproductbyname = productos.find(
      ({ nombre }) => nombre === product
    );

    setProducto(filteredproductbyname);
  };

  useEffect(() => {
    findproductbyname();
  }, []);

  const incrementContador = () => {
    setContador((prevContador) => prevContador + 1);
  };

  const decrementContador = () => {
    if (contador > 1) {
      setContador((prevContador) => prevContador - 1);
    }
  };

  return (
    <div>
      <>
        <div className="container">
          <div className="container_productdetail">
            <div className="row">
              <div className="col-lg-4 d-flex align-items-center">
                <img src={producto?.imagen} className="img_detail" />
              </div>
              <div className="col-lg-8">
                <div className="detalle_producto">
                  <span className="li_map">
                    <strong>{producto?.nombre}</strong>
                  </span>
                  <h3>Características del producto</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: producto?.descripcion }}
                  ></p>
                  <div className="contador">
                    <button
                      className={`contador__btn  ${
                        contador === 1 ? "disabled" : ""
                      }`}
                      onClick={decrementContador}
                      disabled={contador === 1}
                    >
                      -
                    </button>
                    <span className="contador__valor">{contador}</span>
                    <button
                      className="contador__btn"
                      onClick={incrementContador}
                    >
                      +
                    </button>
                  </div>
                  <a
                    href={`https://wa.me/+51994185990?text=¡Hola! Me gustaría comprar ${contador} ${producto?.nombre} en tu tienda.`}
                    className={`a_whtsapp `}
                  >
                    Comprar por Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div>
  );
};

export default ProductDetail;
