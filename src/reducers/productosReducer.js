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
  PRODUCTO_EDITAR_EXITO,
  PRODUCTO_EDITAR_ERROR,
} from "../types";
//Cada reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO:
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    case AGREGAR_PRODUCTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case OBTENER_PRODUCTOS:
      return {
        ...state,
        loading: action.payload,
      };
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    case OBTENER_PRODUCTOS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case ELIMINAR_PRODUCTO:
      return {
        ...state,
        productoEliminar: action.payload,
      };
    case ELIMINAR_PRODUCTO_EXITO:
      return {
        ...state,
        productos: state.productos?.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    case ELIMINAR_PRODUCTO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
        productoEliminar: null,
      };
    case OBTENER_PRODUCTO_EDITAR:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case OBTENER_PRODUCTOS_EXITO:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case PRODUCTO_EDITAR_EXITO:
      return {
        ...state,
        productoEditar: action.payload,
        error: null,
      };
    case PRODUCTO_EDITAR_ERROR:
      return {
        ...state,
        error: action.payload,
        productoEditar: null,
      };
    default:
      return state;
  }
}
