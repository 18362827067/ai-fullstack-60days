import { workOrders } from "./workOrders";3
import { Link } from "react-router-dom";

function WorkOrderPage() {
    return (
        <>
            <p>工单列表页面</p>
            {workOrders.map(
                workOrder => (
                    <Link 
                        key={workOrder.id}
                        to={`/work-orders/${workOrder.id}`}
                    >
                        {workOrder.orderNumber} 查看详情
                    </Link>
                )
            )}
        </>
    )
}

export { WorkOrderPage };