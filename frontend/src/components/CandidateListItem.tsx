import { CandidateListItemIprops} from "../types";

const CandidateListItem = ({props}: CandidateListItemIprops) => {
    const capitalise = (list: string) => {
        const returnedList = ['']
        const skillList = list.split(', ')
        for (let i = 0; i < skillList.length; i++){
            const skill = skillList[i].slice(0,1).toUpperCase() + skillList[i].slice(1)
            returnedList.push(skill + ',')
        }
        return returnedList.join(' ')
    }
    return (
        <>
            <p><span className="font-bold">Firstname: </span>{props.name}</p>
            {<p><span className="font-bold">Skills: </span>{capitalise(props.skills)}</p>}
        </>
    )
}

export default CandidateListItem