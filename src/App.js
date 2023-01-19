import "./index.css"
import Top from "./components/head/Top"
import Body from "../src/components/body/Body"
import { useState } from "react"

function App() {
  const initialData = [
    { id: 0, title: "Car insurance", amount: 23.54, date: new Date(2022, 6, 21)},
    { id: 1, title: "House rent", amount: 100.99, date: new Date(2021, 5, 2) },
    { id: 2, title: "Utility Bills", amount: 98.54, date: new Date(2022, 9, 14) },
    { id: 3, title: "Outing on a date ", amount: 89.99, date: new Date(2019, 12, 25) },
    { id: 4, title: "Purchase of iPhone", amount: 1199.99, date: new Date(2023, 1, 7) },
    
  ];
  const [isUpdatedData, setIsUpdatedDate] = useState(initialData)
  const addExpenseHandler = (expense) => {
    setIsUpdatedDate((prevData)=> {
      return [expense, ...prevData]
    });
  }
  // console.log(isUpdatedData);
  return (
    <div className=" bg-[#002c3e] pb-10 h-screen">
      <Top addExpenseHandler={addExpenseHandler}/>
      <Body props={isUpdatedData}/>
    </div>
  );
}

export default App;
