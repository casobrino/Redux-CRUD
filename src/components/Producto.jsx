import { useNavigate } from "react-router-dom";

//Redux
import { useDispatch } from "react-redux";
import {
  eliminarProductoAction,
  productoEditarAction,
} from "../actions/productoActions";
import Swal from "sweetalert2";

const Producto = ({ producto }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Confirmar si desea eliminar ptoducto
  const confirmarEliminarProducto = (id) => {
    //preguntar
    Swal.fire({
      title: "Estas seguro?",
      text: "No se podra recuperar el producto",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        //pasarlo al action
        dispatch(eliminarProductoAction(id));
      }
    });
  };

  const { nombre, precio, id } = producto;
  const productoActivo = (producto) => {
    dispatch(productoEditarAction(producto))
    navigate(`/productos/editar/${producto.id}`);
  };
  return (
    <tr>
      <td>{nombre}</td>
      <td>
        {" "}
        <span className="font-weight-bold">{"$" + precio}</span>
      </td>
      <td className="acciones">
        <button
          className="btn btn-primary mr-2"
          type="button"
          onClick={() => productoActivo(producto)}
        >
          Editar
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Producto;
