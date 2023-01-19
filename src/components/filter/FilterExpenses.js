

const FilterExpenses = ({ selected, onSelectYear }) => {
    // console.log(selected, onSelectYear);
    const handleSelectedYear = (e) => {
        const option = e.target.value;
        onSelectYear(option);

    }

    return (
        <div className="flex justify-between">
            <div className=" text-[#04eeff] text-xl font-bold">Filter</div>
            <div>
                <select value={selected} onChange={handleSelectedYear}>
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