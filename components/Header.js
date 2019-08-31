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
                <Link href="/events"><a className="item" style={styles.item}>Events</a></Link>
                <Link href="/people"><a className="item" style={styles.item}>People</a></Link>
            </span>
            <span className="hidden-mobile">
            <Link href="/contact"><a className="item" style={styles.itemside}>Contact Us</a></Link>
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