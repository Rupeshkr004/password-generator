
import { FaGithub, FaLinkedin, FaTelegram, FaTwitter } from "react-icons/fa";

const SocialLinks = () => {
    return ( 
        <div className="w-100 h-auto bg-gray-800 flex justify-center p-1 rounded-md">
            <div className="w-1/2 h-9 flex flex-row justify-center ">
                <div className="w-9 h-9 flex justify-center items-center">
                    <a href='https://github.com/bereky' target="_blank" rel="noreferrer">
                        <FaGithub className='text-accent text-3xl hover:text-accent-focus cursor-pointer '/>
                    </a>
                </div>

                <div className="w-9 h-9 flex justify-center items-center">
                    <a href='https://www.linkedin.com/in/bereket-lemma' target="_blank" rel="noreferrer">
                        <FaLinkedin className='text-accent text-3xl hover:text-accent-focus cursor-pointer '/>
                    </a>
                </div>

                <div className="w-9 h-9 flex justify-center items-center">
                    <a href='https://twitter.com/Berek_et' target="_blank" rel="noreferrer">
                        <FaTwitter className='text-accent text-3xl hover:text-accent-focus cursor-pointer '/>
                    </a>
                </div>

                <div className="w-9 h-9 flex justify-center items-center">
                    <a href='https://t.me/fa_con' target="_blank" rel="noreferrer">
                        <FaTelegram className='text-accent text-3xl hover:text-accent-focus cursor-pointer '/>
                    </a>
                </div>
            </div>
        </div>
     );
}
 
export default SocialLinks;