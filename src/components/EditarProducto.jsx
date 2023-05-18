import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editarProductoAction,
  obtenerProductosAction,
} from "../actions/productoActions";
const EditarProducto = () => {
  const dispatch = useDispatch();
  const producto = useSelector((state) => state.productos.productoEditar);
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  if (!producto) return null;
  useEffect(() => {
    setNombre(producto.nombre);
    setPrecio(producto.precio);
  }, [producto]);
  const submitEditarProducto = (e) => {
    e.preventDefault();
    const nuevoProducto = { nombre, precio, id: producto.id };
    console.log(nuevoProducto);
    dispatch(editarProductoAction(nuevoProducto))
    navigate("/");
  };
  return (
    <div className="row justfy-content-center">
      <div className="col-md-8">
        <div className="card-body">
          <h2 className="text-center mb-4 font-weight-bold">Editar producto</h2>
          <form onSubmit={submitEditarProducto}>
            <label>Nombre del Producto</label>
            <div action="form-group">
              <input
                type="tex"
                className="form-control"
                placeholder="nombre del producto"
                name="name"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div action="form-group">
              <label>Precio</label>
              <input
                type="number"
                className="form-control"
                placeholder="precio del producto"
                name="price"
                value={precio}
                onChange={(e) => setPrecio(parseInt(e.target.value))}
              />
              <input
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                value={"Guardar Cambios"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditarProducto;
