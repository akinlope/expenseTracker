import ExpenseAmount from "./ExpenseAmount";
const myArr = [
    {id: 1, amount: 10},
    {id: 2, amount: 20},
    {id: 3, amount: 30},
    {id: 4, amount: 40},
    {id: 5, amount: 50},
]
const ExpenseTitle = () => {
    return ( 
        <>
        <ExpenseAmount myArr={myArr}/>
        </>
     );
}
 
export default ExpenseTitle;