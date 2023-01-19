const Date = ({dateFromBody}) => {
    // console.log(dateFromBody);
    const year = dateFromBody.getFullYear();
    const month = dateFromBody.toLocaleString("en-US", {month: "short"});
    const day = dateFromBody.toLocaleString("en-US", {day: "2-digit"});
    
    return ( 
        <div className="  text-[#04eeff] border-r-2 pr-2 pl-2">
            <p className=" text-center text-xs">{month}</p>
            <p className=" text-center pl-1">{day}</p>
            <p className=" text-center pl-1 text-xs">{year}</p>
        </div>
     );
}
 
export default Date;