interface WorkOrder {
    id: number;
    orderNumber: string;
}

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

interface WorkOrderPage {
    items: WorkOrder[];
    total: number;
}

export type{
    WorkOrder,
    Todo,
    WorkOrderPage
};