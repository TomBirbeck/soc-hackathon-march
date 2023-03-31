import { CandidateList, MatchedIprops} from "../types"


const MatchedCandidates = ({props} : MatchedIprops) => {
console.log({props})
    return (
        <ul>
           <li>
            matched candidates
           </li>
        </ul>
    )
}

export default MatchedCandidates