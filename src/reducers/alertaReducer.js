import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../types";

//State del reducer
const initialState = {
  alert: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case MOSTRAR_ALERTA:
      return {
        ...state,
        alert: action.payload,
      };
    case OCULTAR_ALERTA:
      return {
        ...state,
        alert: action.payload,
      };
    default:
      return state;
  }
}
