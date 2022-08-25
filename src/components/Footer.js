import { Link } from "react-router-dom"

export default function Footer(){
    return (
        <div className="footer container">
            <div className="footer-section">
            <Link to="/message" className="logo"><p>Made with ❤️ by Ruobei Wang</p></Link>
                <p>&copy; 2022 Eaten | All Rights Reserved</p>
            </div>
        </div>
    )
}