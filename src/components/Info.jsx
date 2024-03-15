import {IoKeyOutline} from "react-icons/io5";
import { SiLetsencrypt } from "react-icons/si";
import { IoDocumentLockOutline } from "react-icons/io5";

export default function Info() {
    return (
        <div className='container my-5'>
            <div className='row justify-content-around'>
                <h1 className='text-center fw-bold mb-5'>What makes a password strong?</h1>

                <div className="col-md-6">
                    <h3 className='fw-bold'>Complex <SiLetsencrypt/></h3>
                    <p>
                        Strong passwords use a combination of letters, numbers, cases (upper and lower case), and
                        symbols to form an unpredictable string of characters. Avoid using easily guessable information
                        like birthdates, common words, or names. Instead, opt for a mixture of random characters to
                        increase security.
                    </p>
                </div>

                <div className="col-md-6">
                    <h3 className='fw-bold'>Unique <IoDocumentLockOutline/></h3>
                    <p>
                        A strong password should be unique to each account. Reusing passwords across multiple accounts
                        increases the risk of a security breach. If one account is compromised, attackers could
                        potentially gain access to other accounts using the same password. Consider using a password
                        manager to generate and securely store unique passwords for each of your accounts.
                    </p>
                </div>
                <div className="col-md-6">
                    <h3 className='fw-bold'>Long <IoKeyOutline/></h3>
                    <p>
                        The longer a password, the more secure it is. A strong password should be at least 10 characters
                        long to make it harder for attackers to guess or crack through brute force methods.
                    </p>
                </div>
            </div>

        </div>
    )
}