export type WorkOrderStatus = "CREATED" | "PROCESSING" | "COMPLETED";

export interface WorkOrder {
    id: number;
    orderNumber: string;
    planQuantity: number;
    completeQuantity: number;
    status: WorkOrderStatus;
    remark?: string;
}

export function calculateProgress(
    workOrder: WorkOrder
): number {
    if (workOrder.planQuantity === 0) {
        return 0;
    } 

    return workOrder.completeQuantity / workOrder.planQuantity * 100;
}

export type WorkOrderCreateRequest = Omit<WorkOrder, "id">;

export type WorkOrderUpdateRequest = Partial<Omit<WorkOrder, "id">>;

export function updateWorkOrder(
    workOrder: WorkOrder,
    updates: WorkOrderUpdateRequest
): WorkOrder {
    return {
        ...workOrder,
        ...updates
    }
}