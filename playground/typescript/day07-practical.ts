type ProductionTask = {
    type: "PRODUCTION";
    orderNumber: string;
    planQuantity: number;
}

type InspectionTask = {
    type: "INSPECTION";
    inspectionNumber: string;
    passed: boolean;
}

type Task = ProductionTask | InspectionTask;

function getTaskDescription(
    task: Task
): string {
    if (task.type === "PRODUCTION") {
        return `生产工单：${task.orderNumber}，计划数量：${task.planQuantity}`;
    }

    return `质检单：${task.inspectionNumber}，是否通过：${task.passed ? "通过":"不通过"}}`;
}

function getFirstWithId<T extends { id: number}>(items: T[]): T {
    return items[0]
}

type Product = {
    id: number;
    productCode: string;
    productName: string;
}

const products: Product[] = [
    {
        id: 1,
        productCode: "P001",
        productName: "Product 1",
    },
    {
        id: 2,
        productCode: "P002",
        productName: "Product 2",
    }
]

const firstProduct = getFirstWithId(products);

type WorkOrderStatus = "CREATED" | "PROCESSING" | "COMPLETED";

interface WorkOrder {
    id: number;
    orderNumber: string;
    planQuantity: number;
    completeQuantity: number;
    status: WorkOrderStatus;
    remark?: string;
}

type WorkOrderCreateRequest = Omit<WorkOrder, "id">;

type WorkOrderUpdateRequest = Partial<Omit<WorkOrder, "id">> & Readonly<Pick<WorkOrder, "id">>;

type WorkOrderListItem = Pick<WorkOrder, "orderNumber" | "status">;