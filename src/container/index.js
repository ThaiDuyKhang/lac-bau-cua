import React from "react";
import "./../assets/style.css";
import ListCharacter from "./listCharacter";
import Header from "./Header";
import ListDice from "./listDice";
import TongTien from "./tongTien";

export default function IndexLacBauCua() {
  return (
    <div className="container-fluid">
      <div>
        <Header />
      </div>
      <div className="row d-flex align-items-start">
        <div className="col-6">
          <ListCharacter />
        </div>
        <div className="col-6">
          <div className="row d-flex flex-column align-items-center">
            <div style={{height: 100, marginTop: 30,marginBottom:200}}className="col-12">
              <TongTien />
            </div>
            <div className="col-12">
              <ListDice />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
