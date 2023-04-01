
    // const candidateArray: CandidateList[] = [{ name: "candidate1", skills: ["AWS", "javascript"] },
    // { name: "candidate3", skills: ["AWS"] },
    // { name: "candidate2", skills: ["typescript", "javascript"] }
    // ]

import { CandidateList, ContractList } from "../types";

    const contract = { name: "Contract Name", skills: ["typescript"] }


    // matchingCandidates(candidateArray, contract)

    function matchingCandidates(candidate: CandidateList[], contract: ContractList): PartialMatchedCandidateList[] {

        //create an empty array to store the matching candidates
        const matchingCandidates: PartialMatchedCandidateList[] = []

        //list of skills required
        const skillsRequired = contract.skills;
        const regex = /Javascript|AWS/ig;



        for (let i = 0; i < candidate.length; i++) {
            //use array.join to get a string of candidate skills
            //use string.match()
            const joinedSkills = candidate[i].skills.join(' ')

            const match = joinedSkills.match(regex)

            if (match) {
                //add matched skills onto candidate object. 
                const matchedCandidate = { ...candidate[i], match }
                matchingCandidates.push(matchedCandidate)
            }

            // const skills = candidate[i].skills
            // if(skillsRequired.every(r => skills.includes(r))){
            //     //do something
            //     console.log('Found all skills in list from ', candidate[i].name);
            // }

        }



        //get the length of candidate. 
        // sort candidates for highest to lowest

        matchingCandidates.sort(function (a, b) { return b.match.length - a.match.length })

        // console.log(matchingCandidates)
        return matchingCandidates

    }

// console.log({candidates})