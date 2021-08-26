import React from 'react'
import { useSelector } from 'react-redux';
import Character from './character';


export default function ListCharacter(props) {

    const listCharacter = useSelector(state => state.bauCuaReducer.listCharacter);

    // console.log(listCharacter);
    
    const renderListCharacter = () =>{
        return listCharacter.map((item, index) => {
            return <div className="col-4 mt-2" key={index}>
            <Character character={item}/>
        </div>
        })
    }

    return (
        <div className="row mb-2">
            {renderListCharacter()}
        </div>
    )
}
