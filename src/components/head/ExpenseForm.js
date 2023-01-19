import { useState } from "react";
import Form from "./Form";

const ExpenseForm = ({ onExpenseFromForm2 }) => {
    const [isDropDown, setIsDropDown] = useState(false);

    const onExpenseFromForm = (expensesToSubmit) => {
        const expenseData = {
            id: Math.random().toString(),
            ...expensesToSubmit
        }
        onExpenseFromForm2(expenseData);
        // console.log(expenseData);
    }
    const handleClickOpenForm = () => {
        setIsDropDown(true);
    }
    const handleClickCloseForm = () => {
        setIsDropDown(false)
    }
    return ( 
        <div>
            {isDropDown && <Form handleClickCloseForm={handleClickCloseForm} onExpenseFromForm={onExpenseFromForm} />}
            {!isDropDown && <div className=" flex justify-center mt-3">
                <h2 className=" bg-[#03c7e2] p-2 text-white font-bold rounded" onClick={handleClickOpenForm}>Add Expenses</h2>
            </div>}
        </div>
     );
}
 
export default ExpenseForm;