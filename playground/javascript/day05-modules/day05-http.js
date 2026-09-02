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