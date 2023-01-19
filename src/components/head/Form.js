import { useState } from "react";

const Form = ({ onExpenseFromForm, handleClickCloseForm }) => {
    // console.log(handleClickIsDropDown);
    // console.log(onExpenseFromForm);
    const [isTitle, setIsTitle] = useState("");
    const [isAmount, setIsAmount] = useState("")
    const [isDate, setIsDate] = useState("")
    // console.log(expenses);
    const titleHandleChange = (e) => {
        setIsTitle(e.target.value)
    };
    const amountHandleChange = (e) => {
        setIsAmount(e.target.value);
    };
    const dateHandleChange = (e) => {
        setIsDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isTitle || !isAmount || !isDate) {
            alert("Please fill all required fields :(")
            return null;
        } else {
            // console.log("Clicked submit");
            const expenseToAdd = {
                title: isTitle,
                amount: parseInt(isAmount),
                date: new Date(isDate.toString())
            }
            //pass the expenses up
            onExpenseFromForm(expenseToAdd);
            //clear all input fields
            setIsAmount("");
            setIsDate("");
            setIsTitle("");

            handleClickCloseForm()
        }

    };
    const handleCancle = () => {
        handleClickCloseForm();
    };

    return (
        <div className=" flex justify-center">
            <form onSubmit={handleSubmit}>
                <div className=" inline-block">
                    <div className=" mt-2">
                        <label htmlFor="title" className=" text-[#04eeff] text-lg font-bold">Title: </label>
                        <input className=" bg-[#03c7e2] rounded-sm text-white pl-2"
                            type="text"
                            value={isTitle}
                            onChange={titleHandleChange}
                        />
                    </div>
                    <div className=" mt-2">
                        <label htmlFor="title" className=" text-[#04eeff] text-lg font-bold">Amount: </label>
                        <input className=" bg-[#03c7e2] rounded-sm text-white pl-2"
                            type="number"
                            value={isAmount}
                            onChange={amountHandleChange}
                        />
                    </div>
                    <div className=" mt-2">
                        <label htmlFor="title" className=" text-[#04eeff] text-lg font-bold">Date: </label>
                        <input className=" bg-none"
                            type="date"
                            min="2021-01-01"
                            max="2023-12-31"
                            value={isDate}
                            onChange={dateHandleChange}
                        />
                    </div>
                </div>
                <div className="flex justify-around mt-4">
                    <button className="bg-[#03c7e2] text-white font-bold p-2 rounded" onClick={handleCancle}>Cancle</button>
                    <button className="bg-[#03c7e2] text-white font-bold p-2 rounded" type="submit">Add Expenses</button>
                </div>

            </form>
        </div>
    );
}

export default Form;