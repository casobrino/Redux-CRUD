import clienteAxios from "../config/axios";
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTOS,
  OBTENER_PRODUCTOS_EXITO,
  OBTENER_PRODUCTOS_ERROR,
  ELIMINAR_PRODUCTO,
  ELIMINAR_PRODUCTO_EXITO,
  ELIMINAR_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITAR_EXITO,
  PRODUCTO_EDITAR_ERROR,
} from "../types";
import Swal from "sweetalert2";

//Funcion a utilizar en la vista
// Crear nuevos productos

export const crearProducto = (producto) => {
  return async (dispatch) => {
    dispatch(agregarProducto());
    try {
      //insertar en la API
      await clienteAxios.post("/productos", producto);
      dispatch(agregarProductoExito(producto));
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      dispatch(agregarProductoError(true));
      Swal.fire({
        icon: "error",
        title: "Hubo un error, intenta de nuevo",
        timer: "2000",
        text: "Hubo un error intenta de nuevo",
      });
    }
  };
};

const agregarProducto = () => ({
  type: AGREGAR_PRODUCTO,
  payload: true,
});
//Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
  type: AGREGAR_PRODUCTO_EXITO,
  payload: producto,
});

const agregarProductoError = (estado) => ({
  type: AGREGAR_PRODUCTO_ERROR,
  payload: estado,
});

//OBTENER PRODUCTOS
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    dispatch(obtenerProductos());
    try {
      const { data } = await clienteAxios.get("productos");
      dispatch(obtenerProductosExito(data));
    } catch (error) {
      dispatch(obtenerProductosError());
    }
  };
};

const obtenerProductos = () => ({
  type: OBTENER_PRODUCTOS,
  payload: true,
});
const obtenerProductosExito = (productos) => ({
  type: OBTENER_PRODUCTOS_EXITO,
  payload: productos,
});
const obtenerProductosError = () => ({
  type: OBTENER_PRODUCTOS_ERROR,
  payload: true,
});

//ELIMINAR ACTIONS
export const eliminarProductoAction = (id) => {
  console.log(id);
  return async (dispatch) => {
    dispatch(eliminarProducto(id));
    try {
      await clienteAxios.delete(`/productos/${id}`);
      dispatch(eliminarProductoExito());
      //si se elimina mistrar alerta
      Swal.fire("Eliminado!", "Se ha eliminado correctamente.", "success");
    } catch (error) {
      dispatch(eliminarProductoError());
      console.log(error);
    }
  };
};

const eliminarProducto = (id) => ({
  type: ELIMINAR_PRODUCTO,
  payload: id,
});

const eliminarProductoExito = () => ({
  type: ELIMINAR_PRODUCTO_EXITO,
});

const eliminarProductoError = () => ({
  type: ELIMINAR_PRODUCTO_ERROR,
  payload: true,
});

// OBTENER PRODUCTO EDITAR
export const productoEditarAction = (producto) => {
  return async (dispatch) => {
    dispatch(obtenerProductoEditar(producto));
  };
};

const obtenerProductoEditar = (producto) => ({
  type: OBTENER_PRODUCTO_EDITAR,
  payload: producto,
});

export const editarProductoAction = (nuevoProducto) => {
  return async (dispatch) => {
    dispatch(editarProducto(nuevoProducto));
    try {
      const { data } = await clienteAxios.put(
        `/productos/${nuevoProducto.id}`,
        nuevoProducto
      );
      await dispatch(editarProductoExito());
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(editarProdutoError);
    }
  };
};

const editarProducto = (nuevoProducto) => ({
  type: COMENZAR_EDICION_PRODUCTO,
  payload: nuevoProducto,
});
const editarProductoExito = () => ({
  type: PRODUCTO_EDITAR_EXITO,
  payload: null,
});
const editarProdutoError = () => ({
  type: PRODUCTO_EDITAR_ERROR,
  payload: true,
});
