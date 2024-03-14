import { RiLockPasswordLine } from "react-icons/ri";
import { PiPasswordBold } from "react-icons/pi";

export default function Header(){
    return(
        <>
            <header className="bg-dark py-2">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="text-center text-white">
                        <h2 className="display-4 fw-bolder"><RiLockPasswordLine/> Random Password Generator <PiPasswordBold/></h2>
                        <p className="lead fw-normal text-white-50 mb-0">Create strong and secure passwords to keep your account safe online.</p>
                    </div>
                </div>
            </header>
        </>
    )
}