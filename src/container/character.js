import React from "react";
import { datCuoc } from "./../redux/constants/bauCuaType";
import { useDispatch } from "react-redux";

export default function Character(props) {
  const dispactch = useDispatch();

  const { character } = props;
  // console.log(character);
  return (
    <div className="mt-3 row">
      <div style={{height:350}} 
      className="character col-12 align-items-center d-flex flex-column">
        <img src={character.hinhAnh} style={{ width: "80%" }} alt="" />
      <p className="mt-2" style={{ fontSize: "35px", fontWeight: "500", color: "#313131" }}>
        {character.tienCuoc}
      </p>
      </div>
      <div className="col-12 mt-3 d-flex justify-content-center">
        <div className="btn-datCuoc align-items-center d-flex fustify-content-center">
          {!character.btnGiam ?  <img
              className="giamCuoc mx-auto"
              onClick={() => {
                dispactch({
                  type: datCuoc,
                  character,
                  tangGiam: false,
                });
              }}
              src="./images/giamCuocBtn.png" width="22%" alt=""/>
           : (
            ""
          )}
           <img className="datCuoc mx-auto"
            onClick={() => {
              dispactch({
                type: datCuoc,
                character,
                tangGiam: true,
              });
            }}
            src="./images/datCuocBtn.png" width="40%" alt=""/>
        </div>
      </div>
    </div>
  );
}
