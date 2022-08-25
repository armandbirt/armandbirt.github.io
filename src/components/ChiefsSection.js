import ChiefCard from "./ChiefCard"

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Jiayi Su",
            img: "https://i.postimg.cc/xd5hkVJH/img-1.jpg",
            role: "CEO & COO",
        },
        {
            name: "Ruobei Wang",
            img: "https://i.postimg.cc/3Rw6mfmq/img-2.jpg",
            role: "Tech Lead",
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Team</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}