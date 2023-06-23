import React, { useState } from 'react'

export const BMIForm = (props) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [message, setMessage] = useState("");
    //this is to toggle the state to show errors
    const [showMessage, setShowMessage] = useState(false);
    const [bmiMessage, setBmiMessage] = useState("");

    const onHeightChangeHandler = (event) => {
        setHeight(event.target.value);
    }

    const onWeightChangeHandler = (event) => {
        setWeight(event.target.value);
    }

    const calculateBMI = (props) => {
        if (height && weight) {
            const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
            console.log(bmi);
            if (bmi < 18.5) {
                setBmiMessage("Underweight: " + bmi);
            }
            if (bmi >= 18.5 && bmi <= 24.9) {
                setBmiMessage("Normal: " + bmi);
            }
            if (bmi >= 25 && bmi <= 29.9) {
                setBmiMessage("Overweight " + bmi);
            }
            if (bmi >= 30) {
                setBmiMessage("Obese " + bmi);
            }
            setShowMessage(false);
        } else {
            setShowMessage(true);
            console.log("Enter valid height and weight.");
            setMessage("Enter both weight and height.")
        }
    }



    return (
        <>
            <div className='flex justify-start'>
                <div className='text-3xl font-Kanit py-5 px-10 text-white'>BMI Calculator</div>
            </div>
            <div className='flex justify-center'>
                <p className='justify-center'>
                    <div>
                        <div className="form-control w-full max-w-xs px-10">
                            <label className="label">
                                <span className="label-text text-lg font-Kanit">What is your height?</span>
                                <span className="label-text-alt">(cms)</span>
                            </label>
                            <input type="text" placeholder="Enter your height." className="input input-bordered rounded-none w-full max-w-xs" onChange={(event) => onHeightChangeHandler(event)} />
                        </div>
                        <div className="form-control w-full max-w-xs px-10">
                            <label className="label">
                                <span className="label-text text-lg font-Kanit">What is your weight?</span>
                                <span className="label-text-alt">(kg)</span>
                            </label>
                            <input type="text" placeholder="Enter your weight." className="input input-bordered rounded-none w-full max-w-xs" onChange={(event) => onWeightChangeHandler(event)} />
                        </div>
                    </div>

                    {!showMessage && (<div className="row py-5">
                        <div className="col-md">
                            <p className="text-center bg-white text-black font-Kanit">{bmiMessage}</p>
                        </div>
                    </div>)}

                    {showMessage && (<div className="row">
                        <div className="col-md">
                            <p className="text-center text-bg-danger">{message}</p>
                        </div>
                    </div>
                    )}

                    <div className="px-28 py-10">
                        <button class="btn btn-neutral rounded-none font-Montserrat" onClick={calculateBMI}>Calculate</button>
                    </div>
                </p>
            </div>
        </>
    )
}
