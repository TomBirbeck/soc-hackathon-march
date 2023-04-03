import { MatchedIprops } from "../types"
import CandidateListItem from "./CandidateListItem"


const PartialMatches = ({props}: MatchedIprops) => {
    return(
        <div className="my-5">
            <h2 className="font-bold my-2">These candidates partially match your criteria</h2>
            <ul>
                {props.map((candidate) => {return(
                <li className="text-left mb-2" key={candidate.id}>
                <CandidateListItem props={candidate}/>
                </li>
                    )})
                }
            </ul>
        </div>
    )
}

export default PartialMatches