import { MatchedIprops} from "../types"
import CandidateListItem from "./CandidateListItem"


const MatchedCandidates = ({props} : MatchedIprops) => {

    return (
        <div className="my-5">
            <h2 className="font-bold my-2">These candidates fully match your criteria:</h2>
        <ul>
            {
                props.map((candidate) => {return(
            <li key={candidate.id} className="text-left">
                    <CandidateListItem props={candidate}/>
                </li>
                )})
            }
        </ul>
        </div>
    )
}

export default MatchedCandidates