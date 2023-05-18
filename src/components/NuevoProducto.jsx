import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Actions from redux
import { crearProducto } from "../actions/productoActions";
import { mostrarAlertaAction, ocultarAlertaAction} from "../actions/alertaActions";
useNavigate;
const NuevoProducto = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //acceder el producto del store
  const cargando = useSelector((state) => state.productos.loading);
  const error = useSelector((state) => state.productos.error);
  const alerta = useSelector(state => state.alerta.alert)

  const nuevoProducto = (e) => {
    e.preventDefault();
    const agregarProducto = (producto) => dispatch(crearProducto(producto)); //action
    //Validar
    if (nombre.trim() === "" || precio <= 0 || precio.isNaN) {
      const alerta = {
        msg: "Ambos campos son obligatorios",
        classes: "alert alert-danger text-center text-uppercas p3 ",
      };
      dispatch(mostrarAlertaAction(alerta));
      return
    }
    //Prueba de errores
    //Crear Producto
    dispatch(ocultarAlertaAction())
    agregarProducto({
      nombre,
      precio,
    });
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="row justfy-content-center">
      <div className="col-md-8">
        <div className="card-body">
          {alerta && <p className={alerta?.classes} >{alerta.msg}</p>}
          <h2 className="text-center mb-4 font-weight-bold">
            Agregar producto
          </h2>
          <form onSubmit={nuevoProducto}>
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
                onChange={(e) => setPrecio(Number(e.target.value))}
              />
              <input
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100 my-2"
                value={"Enviar"}
              />
            </div>
          </form>
          {cargando ? <p>Cargando... </p> : null}
          {error ? (
            <p className="alert alert-danger p2 text-center mt-4">
              Hubo un error{" "}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NuevoProducto;
