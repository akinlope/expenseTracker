// import { data } from "autoprefixer";
import Date from "./ExpenseDate";


const ExpenseDisplay = ({ dataFromBody }) => {
    // console.log(dataFromBody)
    return (
        <div className="  text-[#04eeff]  ">
            {
                dataFromBody.map((elem) => {
                    return (
                        <div className=" flex justify-between border-2 mt-2 rounded-lg" key={elem.id}>
                            <Date dateFromBody={elem.date} />
                            <div className=" text-2xl pt-2 pb-2 pl-10">{elem.title}</div>
                            <div className=" text-2xl pt-2 pb-2 pl-10 mr-3">${elem.amount.toFixed(2)}</div>
                            {/* <div className=" text-2xl pt-3 pl-10">{elem.title}</div> */}
                        </div>
                    )
                })
            }
        </div>
    );
}

export default ExpenseDisplay;