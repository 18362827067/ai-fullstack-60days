import type { 
    WorkOrder, 
    WorkOrderCreateRequest, 
    WorkOrderUpdateRequest 
} from './workOrder.ts';
import { calculateProgress, updateWorkOrder } from './workOrder.ts';

const createData: WorkOrderCreateRequest = {
    orderNumber: "WO-010",
    planQuantity: 1200,
    completeQuantity: 0,
    status: "CREATED"
}

const updateData: WorkOrderUpdateRequest = {
    completeQuantity: 500
}

const workOrder: WorkOrder = {
    id : 1,
    orderNumber: "WO-001",
    planQuantity: 1000,
    completeQuantity: 350,
    status: "PROCESSING",
}

const progress = calculateProgress(workOrder);

console.log(progress);

async function createWorkOrder(
    data: WorkOrderCreateRequest
): Promise<WorkOrder> {
    const response = await fetch(
        "/api/work-orders",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error("创建工单失败");
    }

    const workOrder: WorkOrder = await response.json(); 

    return workOrder;
}

interface WorkOrderListResponse {
    data: WorkOrder[];
    total: number;
};

async function loadWorkOrders(): Promise<WorkOrderListResponse> {
    const response = await fetch("/api/work-orders");

    if (!response.ok) {
        throw new Error("获取工单列表失败");
    }

    const data: WorkOrderListResponse = await response.json();

    return data;
}

interface ApiResponse<T> {
    code: number;
    message: string;
    data: T;
}

type WorkOrderDetailResponse = ApiResponse<WorkOrder>;

type WorkOrderListResponse2 = ApiResponse<WorkOrder[]>;

async function updateWorkOrder2(
    orderNumber: string,
    data: WorkOrderUpdateRequest
): Promise<ApiResponse<WorkOrder>> {
    const response = await fetch(
        `/api/work-orders/${orderNumber}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
    );

    if (!response.ok) {
        throw new Error("更新工单失败");
    }

    const result: ApiResponse<WorkOrder> = await response.json();

    return result;
}


const updatedWorkOrder = updateWorkOrder(
    workOrder,
    {
        completeQuantity: 800,
        status: "PROCESSING"
    }
)

console.log(workOrder);
console.log(updatedWorkOrder);