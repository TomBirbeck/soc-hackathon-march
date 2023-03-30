import { useState, useEffect, FormEvent } from "react";
import DatePicker from "react-datepicker";
import CheckboxDropdown from "./CheckboxDropdown";
export default function contractForm() {
    const [jobTitleInput, setJobTitleInput] = useState("");
    const [contactPhoneInput, setContactPhoneInput] = useState("");
    const [contactEmailInput, setContactEmailInput] = useState("");
    // const [startDate, setStartDate] = useState(new Date());
    // const [endDate, setEndDate] = useState(null);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const [skills, setSkills] = useState([]);
    let handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("FORM SUBMTITED");
    };
    return (
        <>
            <div>
                <div className="border-solid border-4 border-white bg-rose-500">
                    <form
                        onSubmit={(e) => {
                            handleSubmit(e);
                        }}
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
                            type="text"
                            name="contact-phone"
                            placeholder="Phone number"
                            onChange={(e) => {
                                setContactPhoneInput(e.target.value);
                            }}
                            value={contactPhoneInput}
                        ></input>
                        <input
                            type="text"
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
                        <CheckboxDropdown />
                    </form>
                </div>
            </div>
        </>
    );
}
