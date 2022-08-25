import CustomImage from "./CustomImage"
import { Link } from "react-router-dom"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Your Personal Dietitian</h1>
                <p className="info">Finding a right nutrionist can be very challenging and expensive. It is even harder to stick to the diet plan. Try Eaten and get a nutrionist-recommended meal plan tailored to your daily needs and wants.</p>
                <Link to="/recipes" className="logo"><button className="btn">explore now</button></Link>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}