import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

import { useNavigate } from 'react-router-dom';

// const nodemailer = require("nodemailer");


const dropDownData = [
    {
        name: "Computer",
        problems: ["comp1", "comp2", "comp3", "comp4", "Other"]
    },
    {
        name: "Keyboard",
        problems: ["kb1", "kb2", "kb3", "kb4", "Other"]
    },
    {
        name: "Monitor",
        problems: ["mon1", "mon2", "mon3", "mon4", "Other"]
    },
    {
        name: "Mouse",
        problems: ["mou1", "mou2", "mou3", "mou4", "Other"]
    },
    {
        name: "Printer",
        problems: ["prin1", "prin2", "prin3", "prin4", "Other"]
    },
    {
        name: "Tablet",
        problems: ["tab1", "tab2", "tab3", "tab4", "Other"]
    },
    {
        name: "WiFi",
        problems: ["wf1", "wf2", "wf3", "wf4", "Other"]
    },
    {
        name: "Yubikey",
        problems: ["ybk1", "ybk2", "ybk3", "ybk4", "Other"]
    },
    {
        name: "Other",
        problems: ["Other"]
    },
    //
    //
    //
    {
        name: "Account",
        problems: ["acc1", "acc2", "acc3", "acc4", "Other"]
    },
    {
        name: "DocMan",
        problems: ["doc1", "doc2", "doc3", "doc4", "Other"]
    },
    {
        name: "Jobscope",
        problems: ["job1", "job2", "job3", "job4", "Other"]
    },
    {
        name: "Office365",
        problems: ["off1", "off2", "off3", "off4", "Other"]
    },
    {
        name: "WiFi",
        problems: ["wf1", "wf2", "wf3", "wf4", "Other"]
    },
    {
        name: "Other",
        problems: ["Other"]
    }
];




const FormDetails = () => {

    const { id } = useParams();
    const { data: form, error, isPending } = useFetch('http://localhost:8000/forms/' + id);


    const [optionA, setOptionA] = useState('');
    const [otherA, setOtherA] = useState('');
    const [optionB, setOptionB] = useState('');
    const [otherB, setOtherB] = useState('');
    const [desc, setDesc] = useState('');
    const [name, setName] = useState('');

    const history = useNavigate();

    const hardwareOptions = dropDownData.slice(0, 9); // Extract the hardware options
    const softwareOptions = dropDownData.slice(9, 15); // Extract the software options


    const handleSubmit = (event) => {
        event.preventDefault();
        const submitedForm = { id, optionA, otherA, optionB, otherB, desc, name };

        console.log(form.title + ' submitted: ');
        console.log(submitedForm);

        //     try {
        //         let transporter = nodemailer.createTransport({
        //             host: "mailhub.utc.com",
        //             port: 25,
        //             secure: true,
        //             auth: {
        //                 user: "your-email@gmail.com",
        //                 pass: "your-password",
        //             },
        //         });

        //         transporter.sendMail({
        //             from: '"CollinsAidTool" <your-email@gmail.com>',
        //             to: "shannonIT@utas.utc.com",
        //             subject: "Form Submission Details",
        //             html: `
        //     <h1>Form Submission Details</h1>
        //     <h2>This is a test</h2>
        //     <p>Form ID: ${id}</p>
        //     <p>Option A: ${optionA}</p>
        //     <p>Other A: ${otherA}</p>
        //     <p>Option B: ${optionB}</p>
        //     <p>Other B: ${otherB}</p>
        //     <p>Option A: ${desc}</p>
        //     <p>Option B: ${name}</p>    
        //   `,
        //         });

        //         console.log("Email sent");
        //     } catch (error) {
        //         console.error("Error sending email: " + error.message);
        //     }



        const parseID = parseInt(id);

        switch (parseID) {
            case 1:
                console.log("form1 submit");
                if (optionA === "Other" || optionB === "Other") {
                    history('/emailconfirm');
                }
                else console.log("working on it");
                break;
            case 2:
                console.log("form1 submit");
                if (optionA === "Other" || optionB === "Other") {
                    history('/emailconfirm');
                }
                else console.log("working on it");
                break;
            case 3:
            case 4:
                console.log("to email confirm1")
                history('/emailconfirm');
                break;
            default:
                console.log("no form " + id);
        }

    };

    return (
        <div className="formDetails">

            {isPending && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {form && (

                <form onSubmit={handleSubmit}>
                    <h2>{form.title}</h2>
                    <hr />
                    {form.fields.map((field, index) => {

                        //Main dropdown checks and fill
                        if (field.type === 'dropdown') {
                            if (field.check === "main") {
                                if (form.id === 1 || form.id === 3) {
                                    return (
                                        <div key={index}>
                                            <label>{field.label}</label>
                                            <select
                                                required
                                                value={optionA}
                                                onChange={(e) => {
                                                    setOptionA(e.target.value);
                                                    setOptionB("");
                                                }}>
                                                <option value="" disabled selected>Please choose an option</option>
                                                {hardwareOptions.map((option, optionIndex) => (
                                                    <option key={optionIndex}
                                                        value={option.name}>
                                                        {option.name}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    );
                                }
                                else if (form.id === 2 || form.id === 4) {
                                    return (
                                        <div key={index}>
                                            <label>{field.label}</label>
                                            <select
                                                required
                                                value={optionA}
                                                onChange={(e) => {
                                                    setOptionA(e.target.value);
                                                    setOptionB("");
                                                }}>
                                                <option value="" disabled selected>Please choose an option</option>
                                                {softwareOptions.map((option, optionIndex) => (
                                                    <option key={optionIndex}
                                                        value={option.name}>
                                                        {option.name}
                                                    </option>
                                                ))}
                                            </select>

                                        </div>
                                    );
                                }


                                //Sub dropdown checks and fill
                            } else if (field.check === "sub") {
                                return (
                                    <div key={index}>
                                        <label>{field.label}</label>
                                        <select
                                            required
                                            value={optionB}
                                            disabled={!optionA}
                                            onChange={(e) => setOptionB(e.target.value)}>
                                            <option value="" disabled selected>Please choose an option</option>
                                            {optionA && dropDownData.find((option) => option.name === optionA)?.problems.map(
                                                (problem, problemIndex) => (
                                                    <option key={problemIndex}
                                                        value={problem}>
                                                        {problem}
                                                    </option>
                                                ))}
                                        </select>

                                    </div>
                                );
                            }

                            //text inputs checks
                        } else if (field.type === 'text') {
                            if (field.check === "name") {
                                return (
                                    <div key={index}>
                                        <label>{field.label}</label>
                                        <input
                                            required
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)} />
                                        <hr />
                                    </div>
                                );
                            }
                            else if (field.other === 1) {
                                return (
                                    <div key={index}>
                                        <label>{field.label}</label>
                                        <input
                                            type="text"
                                            value={otherA}
                                            required={optionA === "Other"}
                                            disabled={optionA !== "Other"}
                                            onChange={(e) => setOtherA(e.target.value)} />
                                        <hr />
                                    </div>
                                );
                            }
                            else if (field.other === 2) {
                                return (
                                    <div key={index}>
                                        <label>{field.label}</label>
                                        <input
                                            type="text"
                                            value={otherB}
                                            required={optionB === "Other"}
                                            disabled={optionB !== "Other"}
                                            onChange={(e) => setOtherB(e.target.value)} />
                                        <hr />
                                    </div>
                                );
                            }
                            else {
                                return (
                                    <div key={index}>
                                        <label>{field.label}</label>
                                        <input type="text" />
                                        <hr />
                                    </div>
                                );
                            }

                        } else if (field.type === 'textarea') {
                            return (
                                <div key={index}>
                                    <label>{field.label}</label>
                                    <textarea
                                        rows={4}
                                        cols={40}
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        required />
                                    <hr />
                                </div>
                            );
                        } else if (field.type === 'submit') {
                            return (
                                <div key={index} className="formBTN">
                                    <button type="submit" className="submitBTN">{field.label}</button>
                                </div>
                            );
                        } else {
                            // Handle other fields as needed
                            return null;
                        }
                    })}
                </form>
            )}

            {/* <p>{optionA}</p>
            <p>{otherA}</p>
            <p>{optionB}</p>
            <p>{otherB}</p>
            <p>{desc}</p>
            <p>{name}</p> */}
        </div>
    );
}

export default FormDetails;