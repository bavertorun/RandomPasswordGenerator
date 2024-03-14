import Checkbox from "./Checkbox.jsx";
import {useEffect, useState} from "react";


export default function Generator() {

    const [passGen, setPassGen] = useState({
        length: 0,
        lowerCase: true,
        upperCase: false,
        numbers: true,
        symbols: false
    });

    const [handleText, setHandleText] = useState('');
    const [copied,setCopied] = useState(false)

    const generatePassword = () => {
        const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
        const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()+_-=}{[]|:;"/?.><,`~';

        let password = '';
        let characters = '';

        passGen.lowerCase && (characters += lowerCase);
        passGen.upperCase && (characters += upperCase);
        passGen.numbers && (characters += numbers);
        passGen.symbols && (characters += symbols);

        for (let i = 0; i < passGen.length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }

        setHandleText(password);
    };
    const handleChangeLowerCase = () => {
        setPassGen({
            ...passGen,
            lowerCase: !passGen.lowerCase
        });
    };
    const handleChangeUpperCase = () => {
        setPassGen({
            ...passGen,
            upperCase: !passGen.upperCase
        });
    };
    const handleChangeNumbers = () => {
        setPassGen({
            ...passGen,
            numbers: !passGen.numbers
        });
    };
    const handleChangeSymbols = () => {
        setPassGen({
            ...passGen,
            symbols: !passGen.symbols
        });
    };
    const handlePasswordLength = val => {
        setPassGen({
            ...passGen,
            length: val
        });
    };

    const handleCopied = () =>{
        if(passGen.length > 0){
            navigator.clipboard.writeText(handleText);
            setCopied(true)
        }
        setInterval(()=>{
            setCopied(false)
        },1000)

    }

    const {length,lowerCase,upperCase,numbers,symbols} = passGen
    useEffect(() => {
        generatePassword()
    }, [length,lowerCase,upperCase,numbers,symbols]);

    return (
        <>
            <div className="d-flex justify-content-center">
                <input type="text" value={handleText} className="form-control rounded-pill w-50 shadow mx-1" readOnly />
                <button disabled={length==0} onClick={()=>handleCopied()} className="btn btn-outline-primary p-3 px-4 shadow rounded-pill">{copied ? 'Copied!' : 'Copy'}</button>
            </div>
            <div className={'row w-75 my-4'}>
                <label htmlFor="passwordRange" className="form-label">Password Length: {passGen.length}</label>
                <input type="range" defaultValue={passGen.length} onChange={e => handlePasswordLength(e.target.value)}
                       className="form-range" min="0" max="50" step="1"/>
            </div>
            <div className="row justify-content-center mt-2">
                <Checkbox
                    onChange={() => handleChangeLowerCase()}
                    label={'abc'}
                    value={passGen.lowerCase}
                />
                <Checkbox
                    onChange={() => handleChangeUpperCase()}
                    label={'ABC'}
                    value={passGen.upperCase}
                />
                <Checkbox
                    onChange={() => handleChangeNumbers()}
                    label={'123'}
                    value={passGen.numbers}

                />
                <Checkbox
                    onChange={() => handleChangeSymbols()}
                    label={'#$&'}
                    value={passGen.symbols}
                />
            </div>


        </>
    )
}