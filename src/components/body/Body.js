import { useState } from "react";
import FilterExpenses from "../filter/FilterExpenses";
import ExpenseDisplay from "./ExpennseDisplay";
import ExpenseTotal from "./ExpenseTotal";

const Body = ({ props }) => {
    const [filteredYear, setFilteredYear] = useState("all");
    const recievedYearPicked = (year) => {
        setFilteredYear(year);
    };
    const toCheck = () => {
        if (filteredYear === "all") {
            return props
        } else {
            const FilterExpensesDate = props.filter((filtered) => {
                // console.log(typeof (filtered.date.getFullYear().toString()));
                return filtered.date.getFullYear().toString() === filteredYear;
            })
            // console.log(FilterExpensesDate);
            return FilterExpensesDate
        }
        
    }
// toCheck()
    // const FilterExpensesDate = props.filter((filtered) => {
    //     console.log(typeof(filtered.date.getFullYear().toString()));
    //     return filtered.date.getFullYear().toString() === filteredYear;
    // })

    return (
        <div className="justify-center">
            <div className=" h-12 mt-5 mb-5">
                <FilterExpenses selected={filteredYear} onSelectYear={recievedYearPicked} />
            </div>
            <ExpenseDisplay dataFromBody={toCheck()} />
            <div>
            <ExpenseTotal sumTotal={toCheck()}/>
            </div>
        </div>
    );
}

export default Body;