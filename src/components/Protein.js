import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Protein(){
    const proteins = ['chicken', 'shrimp', 'white fish', 'beef', 'salmon', 'egg white'] 


    return (
        <div className="previous-searches section">
            <h2>What's your choice of protein today?</h2>
            <div className="previous-searches-container">
                { proteins.map((protein, index) => (<button key={index} value = {protein} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {protein}
                </button>)) }
            </div>
            <div className="search-box">
                <input type="text" placeholder="Search ..." />
                <button className="btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </div>
    )
}