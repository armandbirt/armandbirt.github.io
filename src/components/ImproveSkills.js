export default function ImproveSkills(){
    const list = [
        "Step 1: Tell us about your weight",
        "Step 2: Tell us what you are craving for today",
        "Step 3: Choose your protein source, carbs & veggie",
        "Step 4: Get your free meal plan",
        "Step 5: Eat your favorite food while living on a healthy diet"
    ]

    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="https://i.postimg.cc/fWm75jCq/img-10.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">How Eaten Works</h1>
                { list.map((item, index) => (
                    <p className="skill-item" key={index}>{item}</p>
                )) }
            </div>
        </div>
    )
}