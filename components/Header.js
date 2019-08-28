import Link from "next/link";
import {FaGithub} from "react-icons/fa";
var styles = {
    header: {
        width: "100vw",
        paddingBottom: "10px",
        paddingTop: "10px",
        margin: "0px"
    },
    item: {
        textDecoration: "none",
        padding: "10px",
        paddingLeft: "20px",
        color: "#4285f4",
        display: "inline-block"
    },
    itemside: {
        textDecoration: "none",
        padding: "10px",
        color: "#4285f4",
        float: "right",
        display: "inline-block",
        paddingRight: "20px"
    },icon: {
        display: "inline-block",
        marginRight: "10px",
    }
}
const Header = () => {
    return (
        <div style={styles.header}>
            <span>
                <Link href="/"><a className="item" style={styles.item}>Home</a></Link>
                <Link href="/calender"><a className="item" style={styles.item}>Calendar</a></Link>
                <Link href="/contact"><a className="item" style={styles.item}>Contact Us</a></Link>
            </span>
            <span className="hidden-mobile">
            <a className="item" href="https://github.com/hacker719/srvdc" style={styles.itemside}>
                <FaGithub size={15} style={styles.icon}/>
                <span>Github</span>
            </a>
            </span>
            <style>{`
            .item:hover {
                color:black !important;
            }
            .item {
                display: flex;
            }
            .iconText {
                margin-bottom:10px
            }
            .center {
                margin: auto;
            }
            `}</style>
        </div>
    )
}

export default Header