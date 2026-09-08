import { useState } from "react";
import WorkOrderList from "./day09/WorkOrderList";

interface WorkOrderInfoProps  {
  orderNumber: string;
  planQuantity: number;
  completeQuantity: number;
}

function WorkOrderInfo({
  orderNumber,
  planQuantity,
  completeQuantity: initialCompleteQuantity
}: WorkOrderInfoProps) {

  const [completeQuantity, setCompleteQuantity] = useState(initialCompleteQuantity);
  const [searchText, setSearchText] = useState("");

  function handleSearchChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setSearchText(event.target.value);
  }

  function handleIncrease(amount: number) {
    setCompleteQuantity(prev => prev + amount)
  }

  return (
    <>
      <h2>工单号: {orderNumber}</h2>
      <p>计划数量: {planQuantity}</p>
      <p>完成数量: {completeQuantity}</p>
      <p>剩余数量: {planQuantity - completeQuantity}</p>
      <button 
          onClick={
            () => handleIncrease(100)
          }
      >
        完成 +100
      </button>
      <button
          onClick={
            () => handleIncrease(500)
          }
      >
        完成 +500
      </button>
      <input
          type="text"

          value={searchText}
          onChange={handleSearchChange}
      ></input>
      <p>当前搜索：{searchText}</p>
    </>
  )
}

function App() {
  // 在这里使用 WorkOrderInfo 组件
  return (
    <>
      <WorkOrderInfo 
        orderNumber="WO-001"
        planQuantity={1000}
        completeQuantity={350}
      />
      <WorkOrderList />
    </> 
  )
}

export default App;