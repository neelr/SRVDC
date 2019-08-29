import Link from "next/link";
import {FaEnvelope,FaFacebookSquare} from "react-icons/fa";
const Footer = () => {
    return(
        <div className="container">
            <div className="center">
                <p>San Ramon Diversity Coalition</p>
                <span><a className="icon"><FaEnvelope size={30}/></a><a className="icon"><FaFacebookSquare size={30}/></a></span>
                <p className="smallText">Created by <a href="https://neelredkar.tech" className="link">@Neel Redkar</a></p>
                <p className="smallText">MIT License</p>
            </div>
            <style>{`
                .icon {
                    margin:10px;
                }
                .icon :hover {
                    color:#4285f4;
                    cursor: pointer;
                }
                .container {
                    background-color: #fafafa;;
                    height: 30vh;
                    text-align:center;
                    display: flex;
                }
                .center {
                    margin: auto;
                }
                .link  {
                    color:#4285f4;
                    border-radius:20px;
                    padding: 3px;
                    text-decoration:none;
                }
                a.link:hover {
                    background-color:#ccc;
                    cursor: pointer;
                }
                .smallText {
                    font-size:0.9em;
                }
            `}</style>
        </div>
    )
};

export default Footer;