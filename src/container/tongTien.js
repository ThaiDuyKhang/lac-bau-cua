import React from 'react';
import "./../assets/style.css"
import { useSelector, useDispatch } from 'react-redux';
import { choiLai } from '../redux/constants/bauCuaType';

export default function TongTien() {
    const tongTien = useSelector((state) => state.bauCuaReducer.tongTien);
    const dispatch = useDispatch();
  
    return (
      <div>
        
  
        <div className="row d-flex justify-content-center align-items-center">
  
          <div className="text-center mt-4 col-3 d-flex align-items-center">
          <img className="coin" src="./images/coin.png" alt=""/>
            <span className="tongTien">
               <span style={{fontSize:30}}>x </span>
               <span>{tongTien.toLocaleString()}</span> 
            </span>
          </div>
          <div className="resetGame text-center mt-4 col-3 d-flex align-items-center">
            <button className="btn resetGame_btn d-flex align-items-center" onClick={()=>{
              dispatch({
                type: choiLai,
              })
            }}
            >
            <img className="resetGame_img"  src="./images/reset.png" alt=""/>            
            <span className="resetGame_text"> Chơi lại</span>
            </button>
          </div>
        </div>
      </div>
    );
}
