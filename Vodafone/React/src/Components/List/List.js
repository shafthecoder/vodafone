// import {Animated} from "react-animated-css";
import { useState } from 'react';
import styled from 'styled-components'
import DeleteIcon from "../../Assets/delete.svg";


const Div = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;

    .selector{
        font-size: 23px;
        font-weight: bold;
        margin: 40px 15px 10px 15px;
        color: #333333;
        cursor: pointer;
    }

    .selector:hover{
        color: red;
        transition: 0.10s;
    }
    .selector:not(:hover){
        color: #333333;
        transition: 0.10s;
    }
`

const GDiv = styled.div`
    .grid{
        display: grid;
        grid-template-columns: auto auto auto;
        justify-content: space-between;
    }
    .grid-item{
        width: 300px;
        box-shadow: 0px 2px 6px #DDDDDD;
        display: inline-block;
        margin: 15px 20px;
        transition: 2s;
    }
    .cname{
        width: 100%;
        padding: 10px 0;
        background-color: #222222;
        color: white;
    }
    .details{
        padding: 15px 40px;
        color: #777777;
    }
    .email{
        font-size: 13px;
    }
    .number{
        font-size: 15px;
        margin-top: 4px;
    }
    .remove{
        position: absolute;
        z-index: 2;
        margin-right: 0px; 
        right: 0px;
        top: 0px;
        background-color: #111111;
    }
    .remove svg{
        height: 20px;
        width: 20px;
        padding: 10px 10px 7px 10px;
    }
    .remove:hover{
        background-color: #EE3023;
        transition: .2s;
    }
    .remove:not(:hover){
        background-color: #111111;
        transition: .2s;
    }
    .remove svg:hover{
        fill: black;
    }
`
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  

function List({letterClicked, contacts, filteredContacts, removePressed}) {
    
    let firstLetters = []

    contacts.forEach(val => {
        // console.log(val.name[0]);
        firstLetters.push(val.name[0]);
    })

    let unique = firstLetters.filter(onlyUnique);

    return (
        <div>
            <Div>
                {
                    unique.map((letter, i) => (
                        <div key={i} className="selector" onClick={letterClicked}>{letter}</div>
                    ))
                }
            </Div>
            <GDiv className="grid">
            {
                filteredContacts.map(contact => {
                    return(  
                        <div key={contact.id} className="grid-item animate__animated animate__flipInX">
                            <div className="cname">{contact.name} 
                                <span className="remove" >
                                    <svg fill="#FFFFFF" onClick={removePressed} value={contact.name} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 21 2 C 19.355469 2 18 3.355469 18 5 L 18 7 L 10.15625 7 C 10.097656 6.992188 10.042969 6.984375 9.984375 6.984375 C 9.9375 6.988281 9.886719 6.992188 9.839844 7 L 8 7 C 7.640625 6.996094 7.304688 7.183594 7.121094 7.496094 C 6.941406 7.808594 6.941406 8.191406 7.121094 8.503906 C 7.304688 8.816406 7.640625 9.003906 8 9 L 9 9 L 9 45 C 9 46.644531 10.355469 48 12 48 L 38 48 C 39.644531 48 41 46.644531 41 45 L 41 9 L 42 9 C 42.359375 9.003906 42.695313 8.816406 42.878906 8.503906 C 43.058594 8.191406 43.058594 7.808594 42.878906 7.496094 C 42.695313 7.183594 42.359375 6.996094 42 7 L 40.167969 7 C 40.058594 6.980469 39.949219 6.980469 39.84375 7 L 32 7 L 32 5 C 32 3.355469 30.644531 2 29 2 Z M 21 4 L 29 4 C 29.554688 4 30 4.445313 30 5 L 30 7 L 20 7 L 20 5 C 20 4.445313 20.445313 4 21 4 Z M 11 9 L 18.832031 9 C 18.941406 9.019531 19.050781 9.019531 19.15625 9 L 30.832031 9 C 30.941406 9.019531 31.050781 9.019531 31.15625 9 L 39 9 L 39 45 C 39 45.554688 38.554688 46 38 46 L 12 46 C 11.445313 46 11 45.554688 11 45 Z M 17.988281 19.988281 C 17.582031 19.992188 17.21875 20.238281 17.0625 20.613281 C 16.910156 20.992188 17 21.421875 17.292969 21.707031 L 23.585938 28 L 17.292969 34.292969 C 17.03125 34.542969 16.925781 34.917969 17.019531 35.265625 C 17.109375 35.617188 17.382813 35.890625 17.734375 35.980469 C 18.082031 36.074219 18.457031 35.96875 18.707031 35.707031 L 25 29.414063 L 31.292969 35.707031 C 31.542969 35.96875 31.917969 36.074219 32.265625 35.980469 C 32.617188 35.890625 32.890625 35.617188 32.980469 35.265625 C 33.074219 34.917969 32.96875 34.542969 32.707031 34.292969 L 26.414063 28 L 32.707031 21.707031 C 33.003906 21.417969 33.089844 20.980469 32.929688 20.601563 C 32.769531 20.21875 32.394531 19.976563 31.980469 19.988281 C 31.71875 19.996094 31.472656 20.105469 31.292969 20.292969 L 25 26.585938 L 18.707031 20.292969 C 18.519531 20.097656 18.261719 19.992188 17.988281 19.988281 Z"/></svg>
                                </span>
                            </div>
                            <div className="details">
                                <div className="email">{contact.email}</div>
                                <div className="number">{contact.phone}</div>
                            </div>
                        </div>
                    )
                })
            }
            </GDiv>
        </div> 
    )
}

export default List
