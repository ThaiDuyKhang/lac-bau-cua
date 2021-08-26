import React from "react";
import { lac } from "../redux/constants/bauCuaType";
import TheDice from "./theDice";
import { useSelector, useDispatch } from "react-redux";

export default function ListDice(props) {
  const dispatch = useDispatch();
  const listDice = useSelector((state) => state.bauCuaReducer.listDice);

  // const renderListDice = () =>{
  //   return listDice.map((item,index)=>{
  //     return
  //   })
  // }

  return (
    <div className="the-dice ml-5 ">
      <div className="row d-flex justify-content-center">
        <div className="col-2 mb-5">
          <TheDice dice={listDice[0]} />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-2 mt-2 ml-auto">
          <TheDice dice={listDice[1]} />
        </div>
        <div className="col-2 mt-2 mr-auto">
          <TheDice dice={listDice[2]} />
        </div>
        <div className="col-12 text-center mt-5">
          <img src="./images/lacBtn.png" alt=""
            className="mt-5 lac-btn" width="100px"
            onClick={() => {
              dispatch({
                type: lac,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}
