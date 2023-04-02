import { CandidateList, PartialMatchedCandidateList } from "../types";

const partialMatchingCandidates = (candidate: CandidateList[], regex: RegExp, skillsAmount: number): PartialMatchedCandidateList[] => {
    //create an empty array to store the matching candidates
    const matchingCandidates: PartialMatchedCandidateList[] = []

    for (let i = 0; i < candidate.length; i++) {
        //use array.join to get a string of candidate skills
        //use string.match()
        // const candidateSkills = [...candidate[i].skills]
        // const joinedSkills = candidateSkills.join(' ')

        const match = candidate[i].skills.match(regex)
        // const match = joinedSkills.match(regex)

        if (match) {
            //add matched skills onto candidate object. 
            const matchedCandidate = { ...candidate[i], match}
            // const length = match.length
            // console.log("partials", length, skillsAmount)
            // if (length < skillsAmount){
                matchingCandidates.push(matchedCandidate)
            // }
        }
    }

    //get the length of candidate. 
    // sort candidates for highest to lowest
    matchingCandidates.sort(function (a, b) { return b.match.length - a.match.length })

    console.log("partial", matchingCandidates, matchingCandidates.filter((candidate) => candidate.match.length < skillsAmount))
    return matchingCandidates.filter((candidate) => candidate.match.length < skillsAmount)
}

export default partialMatchingCandidates
