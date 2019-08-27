import Link from "next/link";

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
    },
}
const Header = () => {
    return (
        <div style={styles.header}>
            <span>
                <Link href="/etx"><a style={styles.item}>Home</a></Link>
                <Link href="/etx"><a style={styles.item}>Calendar</a></Link>
                <Link href="/etx"><a style={styles.item}>Contact Us</a></Link>
            </span>
            <span>
                <a href="https://github.com/hacker719/srvdc" style={styles.itemside}>Github</a>
            </span>
        </div>
    )
}

export default Header