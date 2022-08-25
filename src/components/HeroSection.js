import CustomImage from "./CustomImage"
import { Link } from "react-router-dom"

export default function HeroSection(){
    const images = [
        "https://i.postimg.cc/pdrYBwcK/img-1.jpg",
        "https://i.postimg.cc/nLWKS3Ng/img-2.jpg",
        "https://i.postimg.cc/wjfD3WxM/img-3.jpg",
        "https://i.postimg.cc/6qXvFgcj/img-4.jpg",
        "https://i.postimg.cc/WzGM3Ttc/img-5.jpg",
        "https://i.postimg.cc/k4r6tz0J/img-6.jpg",
        "https://i.postimg.cc/7ZYgHvkj/img-7.jpg",
        "https://i.postimg.cc/LXZtczpX/img-8.jpg",
        "https://i.postimg.cc/5ydBb64m/img-9.jpg"
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