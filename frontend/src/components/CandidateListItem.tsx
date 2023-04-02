import { useEffect, useState } from "react";
import { CandidateList, MatchedIprops } from "../types";

interface CandidateListItemIprops {
    props: {
        id: number,
        name: string,
        skills: string[]
    }
}

const CandidateListItem = ({props}: CandidateListItemIprops) => {
    const [skills, setSkills] = useState<string[]>([])

    const splitSkills = (skills: any) => {
        const skillList = []
        const split = skills.split('').length
        for (let i = 0; i < split.length; i++){
            skillList.push(split[i])
        }
        return skillList
        //  setSkills(skillList)
    }
    

    useEffect(() => {
        splitSkills(props.name)
    },[props])

console.log("prop skills", props.skills)

    return (
        <li>
            <p>{props.name}</p>
            {/* {props.skills.map((skill) => {return <p>{skill}</p>})} */}
        </li>
    )
}

export default CandidateListItem