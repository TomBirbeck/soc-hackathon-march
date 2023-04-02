import { MatchedIprops} from "../types"
import CandidateListItem from "./CandidateListItem"


const MatchedCandidates = ({props} : MatchedIprops) => {

    const splitSkills = (skills: any) => {
        const skillList = []
        const split = skills.split(' ')
        for (let i = 0; i < split.length; i++){
            skillList.push(split[i])
        }
        console.log(skills, split, skillList)
        return skillList
    }

    return (
        <div>
            <h2>These candidates fully match your criteria</h2>
        <ul>
            {/* {props.map((candidate) => {return <CandidateListItem props={candidate}/>})} */}
        {props.map((candidate) => {return (
            <li key={candidate.id}>
                <p className="font-bold">{candidate.name}</p>
                <p>{splitSkills(candidate.skills)}</p>
            </li>
        )})}
        </ul>
        </div>
    )
}

export default MatchedCandidates