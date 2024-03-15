import Checkbox from "./Checkbox.jsx";
import {useEffect, useReducer, useState} from "react";


const reducer = (state,payload)=>{
    switch (payload.type){
        case 'length':
            return {
                ...state,
                length: payload.val
            }
        case 'lowerCase':
            return{
                ...state,
                lowerCase: !state.lowerCase
            }
        case 'upperCase':
            return{
                ...state,
                upperCase: !state.upperCase
            }
        case 'numbers':
            return{
                ...state,
                numbers: !state.numbers
            }
        case 'symbols':
            return{
                ...state,
                symbols: !state.symbols
            }
    }
}

export default function Generator() {

    const [state,dispatch] = useReducer(reducer,{
        length: 0,
        lowerCase: true,
        upperCase: false,
        numbers: true,
        symbols: false
    })

    const [handleText, setHandleText] = useState('');
    const [copied,setCopied] = useState(false)

    const generatePassword = () => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

        let password = '';
        let characters = '';

        state.lowerCase && (characters += lowerCase);
        state.upperCase && (characters += upperCase);
        state.numbers && (characters += numbers);
        state.symbols && (characters += symbols);

        for (let i = 0; i < state.length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setHandleText(password);
    };

    const handleCopied = () =>{
        if(state.length > 0){
            navigator.clipboard.writeText(handleText);
            setCopied(true)
        }
        setTimeout(()=>{
            setCopied(false)
        },1000)

    }

    useEffect(() => {
        generatePassword()
    }, [state]);

    return (
        <>
            <div className="d-flex justify-content-center">
                <input type="text" value={handleText} className="form-control rounded-pill w-50 shadow mx-1" readOnly />
                <button disabled={state.length==0} onClick={(e)=>handleCopied(e.target.value)} className="btn btn-outline-primary p-3 px-4 shadow rounded-pill">{copied ? 'Copied!' : 'Copy'}</button>
            </div>
            <div className={'row w-75 my-4'}>
                <label htmlFor="passwordRange" className="form-label">Password Length: {state.length}</label>
                <input type="range" defaultValue={state.length} onChange={e => dispatch({type:'length',val:e.target.value})}
                       className="form-range" min="0" max="50" step="1"/>
            </div>
            <div className="row justify-content-center mt-2">
                <Checkbox
                    onChange={() => dispatch({type:'lowerCase'})}
                    label={'abc'}
                    value={state.lowerCase}
                />
                <Checkbox
                    onChange={() => dispatch({type:'upperCase'})}
                    label={'ABC'}
                    value={state.upperCase}
                />
                <Checkbox
                    onChange={() => dispatch({type:'numbers'})}
                    label={'123'}
                    value={state.numbers}

                />
                <Checkbox
                    onChange={() => dispatch({type:'symbols'})}
                    label={'#$&'}
                    value={state.symbols}
                />
            </div>


        </>
    )
}