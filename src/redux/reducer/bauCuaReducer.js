
import { datCuoc, lac, choiLai } from "./../constants/bauCuaType";

const initialState = {
  listCharacter: [
    { ma: "nai", hinhAnh: "./images/nai.jpg", tienCuoc: null, btnGiam: true },
    { ma: "bau", hinhAnh: "./images/bau.jpg", tienCuoc: null, btnGiam: true },
    { ma: "ga", hinhAnh: "./images/ga.jpg", tienCuoc: null, btnGiam: true },
    { ma: "ca", hinhAnh: "./images/ca.jpg", tienCuoc: null, btnGiam: true },
    { ma: "cua", hinhAnh: "./images/cua.jpg", tienCuoc: null, btnGiam: true },
    { ma: "tom", hinhAnh: "./images/tom.jpg", tienCuoc: null, btnGiam: true },
  ],
  tongTien: 10000,
  listDice: [
    { ma: "tom", hinhAnh: "./images/tom.jpg" },
    { ma: "cua", hinhAnh: "./images/cua.jpg" },
    { ma: "ca", hinhAnh: "./images/ca.jpg" },
  ],
};

const bauCuaReducer = (state = initialState, action) => {
  switch (action.type) {
    case datCuoc: {
      // console.log(action);
      const listCharacterUpdate = [...state.listCharacter];
      const index = listCharacterUpdate.findIndex(
        (character) => character.ma === action.character.ma
      );
      if (index !== -1) {
        if (action.tangGiam) {
          if (state.tongTien > null){
          listCharacterUpdate[index].tienCuoc += 1000;
          state.tongTien -= 1000;
          listCharacterUpdate[index].btnGiam = false;
        }} else {
          if (listCharacterUpdate[index].tienCuoc > null) {
            listCharacterUpdate[index].tienCuoc -= 1000;
            state.tongTien += 1000;
          } if (listCharacterUpdate[index].tienCuoc <= 0) {
            listCharacterUpdate[index].tienCuoc = null;
            listCharacterUpdate[index].btnGiam = true;
          }
        }
      }
      // state.listCharacter = listCharacterUpdate
      return { ...state, listCharacter: listCharacterUpdate };
    }

    // eslint-disable-next-line no-fallthrough
    case lac: {
      const ListDiceRandom = [];

      for (let i = 0; i < 3; i++) {
        let random = Math.floor(Math.random() * 6);
        const diceRandom = state.listCharacter[random];
        ListDiceRandom.push(diceRandom);
      }

      state.listDice = ListDiceRandom;

      //Xử lý tăng điểm thưởng
      ListDiceRandom.forEach((diceRandom, index) => {
        let indexListCharacter = state.listCharacter.findIndex(
          (character) => character.ma === diceRandom.ma
        );
        if (index !== -1) {
          state.tongTien += state.listCharacter[indexListCharacter].tienCuoc;
        }
      });

      //Xử lý hoàn tiền
      state.listCharacter.forEach((character, index) => {
        let indexDiceRandom = ListDiceRandom.findIndex(
          (diceRandom) => diceRandom.ma === character.ma
        );

        if (indexDiceRandom !== -1) {
          state.tongTien += character.tienCuoc;
        }
      });

      //Xử lý làm mới game
      state.listCharacter = state.listCharacter.map((character, index) => {
        return {...character,tienCuoc:null, btnGiam: true};
      });

      return { ...state };
    }

    case choiLai: {
      state.tongTien = 10000;
      state.listCharacter = state.listCharacter.map((character, index) => {
        return { ...character, tienCuoc: null,btnGiam: true };
      });
      return { ...state };
    }

    default:
      return state;
  }
};
export default bauCuaReducer;
