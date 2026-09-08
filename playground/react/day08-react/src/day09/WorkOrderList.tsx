import { useEffect, useState } from "react";

type WorkOrderStatus = "CREATED" | "PROCESSING" | "COMPLETED";
interface WorkOrder {
    id: number;
    orderNumber: string;
    planQuantity: number;
    completeQuantity: number;
    status: WorkOrderStatus;
}

const initialWorkOrders: WorkOrder[] = [
    {
        id: 1,
        orderNumber: "WO-001",
        planQuantity: 1000,
        completeQuantity: 500,
        status: "PROCESSING"
    },
    {
        id: 2,
        orderNumber: "WO-002",
        planQuantity: 500,
        completeQuantity: 500,
        status: "COMPLETED"
    },
    {
        id: 3,
        orderNumber: "WO-003",
        planQuantity: 800,
        completeQuantity: 0,
        status: "CREATED"
    }
];

function getStatusText(
    status: WorkOrderStatus
): string {
    if (status === "CREATED") {
        return "待生产";
    } else if (status === "PROCESSING") {
        return "生产中";
    } 
    return "已完成"; 
}

function WorkOrderList() {
    const [workOrders, setWorkOrders] = useState<WorkOrder[]>(initialWorkOrders);
    const [searchText, setSearchText] = useState("");
    const [selectedStatus, setSelectedStatus] = useState<WorkOrderStatus | "ALL">("ALL"); 
    const [orderNumber, setOrderNumber] = useState("");
    const [planQuantity, setPlanQuantity] = useState(0);
    const [completeQuantity, setCompleteQuantity] = useState(0);
    const [newStatus, setNewStatus] = useState<WorkOrderStatus>("CREATED");
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingCompleteQuantity, setEditingCompleteQuantity] = useState(0);

    const filteredWorkOrders =
        workOrders.filter(
            workOrder => workOrder.orderNumber
                            .toUpperCase()
                            .includes(searchText.toUpperCase())
                        && (
                            selectedStatus === "ALL" 
                            ||
                            workOrder.status === selectedStatus
                        )
        )

    function handleAddWorkOrder() {
        if (orderNumber.trim() === "") return;
        if (planQuantity <= 0) return;
        if (completeQuantity < 0 || completeQuantity > planQuantity) return;

        const isDuplicate = workOrders.some(
            workOrder => workOrder.orderNumber.trim().toUpperCase() === orderNumber.trim().toUpperCase()
        )

        if (isDuplicate) return;

        setWorkOrders(
            prevWorkOrders => {
                const newId = 
                    prevWorkOrders.length === 0
                        ? 1
                        : Math.max(...prevWorkOrders.map(workOrder => workOrder.id)) + 1;

                const newWorkOrder: WorkOrder = {
                    id: newId,
                    orderNumber: orderNumber.trim(),
                    planQuantity,
                    completeQuantity,
                    status: newStatus
                }

                return [
                    ...prevWorkOrders,
                    newWorkOrder
                ]
            }
        )

        setOrderNumber("");
        setPlanQuantity(0);
        setCompleteQuantity(0);
        setNewStatus("CREATED");
    }

    function handleDeleteWorkOrder(id: number) {
        setWorkOrders(prevWorkOrders => 
            prevWorkOrders.filter(
                wordOrder => wordOrder.id != id
            )
        )
    }

    function handleUpdateCompleteQuantity(
        id: number,
        newQuantity: number
    ): boolean {
        const targetWorkOrder = workOrders.find(
            workOrder => workOrder.id === id
        )

        if (!targetWorkOrder) return false;

        if (newQuantity < 0 || newQuantity > targetWorkOrder.planQuantity) return false;

        setWorkOrders(prevWorkOrders =>
            prevWorkOrders.map(
                WorkOrder => {
                    if (WorkOrder.id === id) {
                        return {
                            ...WorkOrder,
                            completeQuantity: newQuantity
                        }
                    }

                    return WorkOrder;
                }
            )
        )

        return true;
    }

    function handleStartEdit(workOrder: WorkOrder) {
        setEditingId(workOrder.id);
        setEditingCompleteQuantity(workOrder.completeQuantity);
    }

    function handleSaveEdit() {
        if (editingId === null) return;

        const success = handleUpdateCompleteQuantity(editingId, editingCompleteQuantity);

        if (!success) return;

        setEditingId(null);
        setEditingCompleteQuantity(0);
    }

    function handleCancelEdit() {
        setEditingId(null);
        setEditingCompleteQuantity(0);
    }

    useEffect(
        () => {
                document.title = `工单数量：${workOrders.length}`
        },
        [workOrders]
    )

    return (
        <>
            <input
                type="text"
                value={searchText}
                onChange={event => setSearchText(event.target.value)}
                placeholder="请输入工单号"
            />
            <select
                value={selectedStatus}
                onChange={ event => setSelectedStatus(event.target.value as WorkOrderStatus | "ALL")}
            >
                <option value="ALL">全部</option>
                <option value="CREATED">待生产</option>
                <option value="PROCESSING">生产中</option>
                <option value="COMPLETED">已完成</option>
            </select>
            <input
                value={orderNumber}
                onChange={event => setOrderNumber(event.target.value)}
                placeholder="请输入新工单号"
            />
            <input 
                type="number"
                value={planQuantity}
                onChange={event => setPlanQuantity(Number(event.target.value))}
                placeholder="请输入计划数量"
            />
            <input 
                type="number"
                value={completeQuantity}
                onChange={event => setCompleteQuantity(Number(event.target.value))}
                placeholder="请输入完成数量"
            />
            <select
                value={newStatus}
                onChange={event => setNewStatus(event.target.value as WorkOrderStatus)}
            >
                <option value="CREATED">待生产</option>
                <option value="PROCESSING">生产中</option>
                <option value="COMPLETED">已完成</option>
            </select>
            <button 
                onClick={handleAddWorkOrder}
            >
                新增工单
            </button>
            {filteredWorkOrders.length === 0 && <p>没有找到匹配的工单</p>}
            {
                filteredWorkOrders.map(
                    (workOrder) => (
                        <div key={workOrder.id}>
                            <p>
                                工单号  : {workOrder.orderNumber}<br />
                                计划数量: {workOrder.planQuantity}<br />
                                完成数量: {workOrder.completeQuantity}<br />
                                剩余数量: {workOrder.planQuantity - workOrder.completeQuantity}<br />
                                状态：{getStatusText(workOrder.status)}<br />
                                {workOrder.status === "COMPLETED" && "✓ 该工单已完成"}
                            </p>
                            <button
                                onClick={() => handleDeleteWorkOrder(workOrder.id)}
                            >
                                删除
                            </button>
                            <button
                                onClick={() => handleUpdateCompleteQuantity(workOrder.id, workOrder.completeQuantity + 100)}
                            >
                                完成数量 +100
                            </button>
                            <button
                                onClick={() =>handleStartEdit(workOrder)}
                            >
                                编辑
                            </button>
                            {editingId === workOrder.id && (
                                <>
                                    <input 
                                        type="number"
                                        value={editingCompleteQuantity}
                                        onChange={event => setEditingCompleteQuantity(Number(event.target.value))}
                                    />
                                    <button
                                        onClick={handleSaveEdit}
                                    >
                                        保存
                                    </button>
                                    <button
                                        onClick={handleCancelEdit}
                                    >
                                        取消
                                    </button>
                                </>
                            )}
                        </div>
                    )
                )
            }
        </>
    )
}

export default WorkOrderList;
