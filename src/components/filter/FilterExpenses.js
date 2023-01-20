

const FilterExpenses = ({ selected, onSelectYear }) => {
    // console.log(selected, onSelectYear);
    const handleSelectedYear = (e) => {
        const option = e.target.value;
        onSelectYear(option);

    }

    return (
        <div className="flex justify-around">
            <div className=" text-[#04eeff] text-xl font-bold pt-2">Filter</div>
            <div className=" pt-1">
                <select className="p-1 rounded" value={selected} onChange={handleSelectedYear}>
                    <option value="all">All</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                </select>
            </div>
        </div>
    );
}

export default FilterExpenses;