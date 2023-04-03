import { useState, useEffect, FormEvent, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import CheckboxDropdown from "./CheckboxDropdown";
import { options } from "../types";

interface Iprops {
    setRequiredSkills : React.Dispatch<React.SetStateAction<options[]>>;
}
function ContractForm( {setRequiredSkills} : Iprops) {
    const [jobTitleInput, setJobTitleInput] = useState("");
    const [contactPhoneInput, setContactPhoneInput] = useState("");
    const [contactEmailInput, setContactEmailInput] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [skills, setSkills] = useState<options[]>([]);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("FORM SUBMTITED WITH DATA: ", {
            Title: jobTitleInput,
            Phone: contactPhoneInput,
            Email: contactEmailInput,
            skills: skills,
        });
        setRequiredSkills(skills)
    };

    return (
            <div className="flex items-center justify-center flex-col">
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
                        className="grid md:grid-cols-6 border-solid border-4 border-rose-300 p-5"
                    >
                        <input
                            type="text"
                            name="job-title"
                            placeholder="Job title"
                            onChange={(e) => {
                                setJobTitleInput(e.target.value);
                            }}
                            value={jobTitleInput}
                        ></input>
                        <input
                            type="number"
                            name="contact-phone"
                            placeholder="Phone number"
                            onChange={(e) => {
                                setContactPhoneInput(e.target.value);
                            }}
                            value={contactPhoneInput}
                        ></input>
                        <input
                            type="email"
                            name="contact-email"
                            placeholder="Email address"
                            onChange={(e) => {
                                setContactEmailInput(e.target.value);
                            }}
                            value={contactEmailInput}
                        ></input>
                        <DatePicker
                            selectsRange={true}
                            startDate={startDate}
                            endDate={endDate}
                            onChange={(update: any) => {
                                //TODO: fix type
                                setDateRange(update);
                            }}
                            isClearable={true}
                        />
                        <CheckboxDropdown
                            required
                            skills={skills}
                            setSkills={setSkills}
                        />
                        <button className="p-1 bg-blue-500 m-2 h-10 self-center">Search</button>
                    </form>
                </div>
    );
}
export default ContractForm;
