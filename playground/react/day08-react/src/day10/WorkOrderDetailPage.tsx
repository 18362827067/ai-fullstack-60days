import { useParams } from "react-router-dom"; 
import { workOrders } from "./workOrders";

function WorkOrderDetailPage() {
    const { id } = useParams();

    const workOrder = workOrders.find(
        workOrder => workOrder.id === Number(id)
    )

    if (!workOrder) {
        return <p>工单不存在</p>
    }
    return (
        <>
            <p>工单详情页面</p>
            <p>工单 ID: {id}</p>
            <p>工单编号: {workOrder.orderNumber}</p>
        </>
    )
}

export default WorkOrderDetailPage;