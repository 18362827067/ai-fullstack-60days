let palnQuantity: number = 1000;

let orderNumber: string = "WO-001";

let completeQuantity: number = 350;

let urgent: boolean = true;

type WorkOrderStatus = "CREATED" | "PROCESSING" | "COMPLETED";

interface BaseEntity {
    id: number;
    createdAt: string;
}

interface WorkOrder extends BaseEntity  {
    orderNumber: string;
    planQuantity: number;
    completeQuantity: number;
    urgent: boolean;
    remark?: string;
    status: WorkOrderStatus;
}

const workOrder: WorkOrder = {
    id: 1,
    createdAt: "2026-09-02",
    orderNumber: "WO-001",
    planQuantity: 1000,
    completeQuantity: 350,
    urgent: true,
    status: "PROCESSING"
}

const workOrders: WorkOrder[] = [
    {
        orderNumber: "WO-001",
        id: 1,
        planQuantity: 1000,
        completeQuantity: 350,
        urgent: true,
        status: "PROCESSING",
        createdAt: "2026-09-02"
    },
    {
        orderNumber: "WO-002",
        id: 2,
        planQuantity: 800,
        completeQuantity: 800,
        urgent: false,
        status: "COMPLETED",
        createdAt: "2026-09-02"
    }
]

function calculateRemainingQuantity(
    planQuantity: number,
    completeQuantity: number
): number {
    return planQuantity - completeQuantity;
}

const remainingQuantity = calculateRemainingQuantity(1000, 350);

type QuantityCalculator = 
    (completeQuantity: number, planQuantity: number) => number;

const calculateProgress: QuantityCalculator = 
    (completeQuantity, planQuantity) => {
        return completeQuantity / planQuantity * 100
    }

function printWorkOrderStatus(
    orderNumber: string,
    status: WorkOrderStatus
): void {
    console.log(`工单 ${orderNumber} 当前状态: ${status}`)
}

printWorkOrderStatus("WO-001", "PROCESSING");

interface WorkOrderSummary {
    orderNumber: string;
    progress: number;
    remainingQuantity: number;
    status: WorkOrderStatus;
}

function createWorkOrderSummary(
    workOrder: WorkOrder
): WorkOrderSummary {
    return {
        orderNumber: workOrder.orderNumber,
        progress: workOrder.completeQuantity / workOrder.planQuantity * 100,
        remainingQuantity: workOrder.planQuantity - workOrder.completeQuantity,
        status: workOrder.status
    };
}

const summaries : WorkOrderSummary[] = 
    workOrders.map(
        (workOrder) => createWorkOrderSummary(workOrder)
    )

console.log(summaries)