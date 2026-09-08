const newWorkOrder = {
    orderNumber : "WO-010",
    planQuantity: 1200,
    completeQuantity: 0,
    status : "CREATED"
};

const requestBody = JSON.stringify(newWorkOrder);

console.log(requestBody);
console.log(typeof requestBody);

async function createWorkOrder() {
    try {
        const response = await ferch(
            "/api/work-orders",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: requestBody
            }
        );
    
        if (!response.ok) {
            throw new Error("创建工单失败");
        }
    
        const createdWorkOrder =  await response.json();
    
        console.log(createdWorkOrder.orderNumber);
    } 
    catch (error) {
        console.log(`创建失败：${error.message}`);
    } 
    finally {
        console.log("请求结束");
    }
}

createWorkOrder();

const response = await fetch("/api/work-orders/WO-9999");

if (response.status === 404) {
    console.log("工单不存在");
} else if (response.ok){
    console.log("工单查询成功");
} else {
    console.log("服务器处理失败");
}

function getWorkOrderMessage(status) {
    if (status === 404) {
        return "工单不存在";
    } else if (status >= 200 && status < 300) {
        return "工单查询成功";
    } else {
        return "服务器处理失败";    
    }
}