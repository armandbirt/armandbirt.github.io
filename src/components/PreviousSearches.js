import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function PreviousSearches(){
    const searches = ['ice cream', 'fried chicken', 'fries', 'chocolate', 'croissant'] 

    return (
        <div className="previous-searches section">
            <h2>What are you craving for today?</h2>
            <div className="previous-searches-container">
                { searches.map((search, index) => (<button key={index} style={{animationDelay: index * .1 + "s"}} className="search-item">
                    {search}
                </button>)) }
            </div>
        </div>
    )
}