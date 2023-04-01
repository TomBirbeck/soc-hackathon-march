import { CandidateList, options } from "../types";

const fullMatchingCandidates = (candidate: CandidateList[], skillsRequired: options[]): CandidateList[] => {

    //create an empty array to store the matching candidates
    const matchingCandidates: CandidateList[] = []

    for (let i = 0; i < candidate.length; i++) {

        const skills = candidate[i].skills
        if(skillsRequired.every(r => skills.includes(r.value))){
            matchingCandidates.push(candidate[i]);
        }
    }

    return matchingCandidates

}

export default fullMatchingCandidates