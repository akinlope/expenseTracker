import ExpenseForm from "./ExpenseForm";

const Top = ({ addExpenseHandler }) => {
    const onExpenseFromForm2 = (inComingExpense) => {
        const inExpenses = {
            ...inComingExpense
        }
        
        addExpenseHandler(inExpenses)
    }
    return ( 
        <div className=" ">
            <h2 className=" text-2xl text-center pt-5 font-extrabold text-[#04eeff]">Expenses Tracker</h2>
            <ExpenseForm onExpenseFromForm2={onExpenseFromForm2}/>
            
        </div>
     );
}
 
export default Top;