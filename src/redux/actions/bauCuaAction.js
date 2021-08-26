import {choiLai, datCuoc, lac} from "../constants/bauCuaType";

export const datCuocBauCua = (tienCuoc) => {
 return {
     type: datCuoc,
     tienCuoc,
 }
}
export const lacBauCua = (theDice) =>{
 return {
     type: lac,
     theDice,
 }
}

export const choiLaiBauCua = () =>{
    return {
        type:choiLai,
    }
}