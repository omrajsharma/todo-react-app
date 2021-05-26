import React from 'react'
import './styles/footer.css'

export default function Footer({title, random}) {
    let footerStyle = {
        marginTop: "2vh",
        position: "relative",
        width: "100%",
    }

    return (
        <footer className="text-center" style={footerStyle}>
            {/* Another kind of passing props */}
            <p>{title} , {random}</p>
            <p>Copyright &#169; 2021 | Omraj Sharma</p>  

        </footer>
    )
}
