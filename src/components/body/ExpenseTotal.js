const ExpenseTotal = ({ sumTotal }) => {
    const num = sumTotal.map((elem)=> {
        return elem.amount;
    }).reduce((a,b)=> {
        return a + b;
    });

    // console.log(num);

    // const numToInt = parseFloat(num)
// console.log(typeof(numToInt));
    return ( 
        <div className=" flex float-right">
            <div className=" mt-2 mr-2 rounded ">
                {/* <span className=" ">Total: $ <p className="font-extrabold text-white text-xl" >{num.toLocaleString("en-US")}</p></span> */}
                <div className=" flex text-white text-lg">Total: $ <p className=" font-extrabold">{num.toLocaleString("en-US")}</p></div>
            </div>
        </div>
     );
}
 
export default ExpenseTotal;