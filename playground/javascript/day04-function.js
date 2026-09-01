const workOrder = {
    orderNumber: "WO-001",
    completeQuantity: 350
};

function updateCompleteQuantity(workOrder, newQuantity) {
    return {
        ...workOrder,
        completeQuantity: newQuantity
    }
}

const result = updateCompleteQuantity(workOrder, 500);

console.log(workOrder.completeQuantity); // 350
console.log(result.completeQuantity);    // 500
console.log(result === workOrder);       // false

async function loadWorkOrder() {
    try {
        const response = await fetch('/api/work-orders/WO-001');

        if (!response.ok) {
            throw new Error("获取工单失败");
        }

        const workOrder = await response.json();

        console.log(`工单：${workOrder.orderNumber}`);
    }
    catch(error) {
        console.log(`请求失败：${error.message}`);
    }
    finally {
        console.log("请求结束");
    }
}

async function loadUnfinishedWorkOrders() {
    try {
        const response = await fetch("/api/work-orders");

        if (!response.ok) {
            throw new Error("获取工单列表失败");
        }

        const workOrders = await response.json();

        const unfinishedWorkOrders = 
            workOrders.filter(
                ({completeQuantity, planQuantity}) => completeQuantity < planQuantity
            );

        console.log(unfinishedWorkOrders);

    }
    catch(error) {
        console.log(`获取失败：${error.message}`)
    }
}