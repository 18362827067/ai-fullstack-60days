const factoryName = '上海一厂';
const productionNum = 'LINE-A01';
const planProductionQuantity = 1000;
let completeQuantity = 350;
let isProductionRunning = true;
// console.log('工厂名称：', factoryName);
// console.log('生产线编号：', productionNum);
// console.log('计划生产数量：', planProductionQuantity);
// console.log('已经完成数量：', completeQuantity);
// console.log('生产线是否运行：', isProductionRunning ? '运行中' : '停止');
// console.log('factoryName的类型', typeof factoryName);
// console.log('planProductionQuantity的类型', typeof planProductionQuantity);
// console.log('isProductionRunning的类型', typeof isProductionRunning);

const manager = null;
let currentWorkOrder;
// console.log('namege的类型:',typeof manager);
// console.log('currentWorkOrder的类型:',typeof currentWorkOrder);

const workOrders = [
    {
        orderNumber: 'WO-001',
        productionName: '电机',
        planQuantity: 1000,
        completeQuantity:350
    },
    {
        orderNumber: 'WO-002',
        productionName: '减速机',
        planQuantity: 1000,
        completeQuantity:0
    },
    {
        orderNumber: 'WO-003',
        productionName: '水泵',
        planQuantity: 800,
        completeQuantity:800
    }
]

function getWorkOrderProgress(workOrder) {
    if (workOrder.planQuantity === 0) {
        return 0;
    }
    const progress = (workOrder.completeQuantity / workOrder.planQuantity) * 100;
    return progress;
}
function getWorkOrderStatus(workOrder) {
    if (workOrder.completeQuantity === 0) {
        return '未开始';
    } else if (workOrder.completeQuantity > 0 && workOrder.completeQuantity < workOrder.planQuantity) {
        return '生产中';
    } else if (workOrder.completeQuantity >= workOrder.planQuantity) {
        return '已完成';
    }

    return '未知';
}

for (let i = 0; i < workOrders.length; i++) {
    console.log(`工单：${workOrders[i].orderNumber}  | 产品： ${workOrders[i].productionName}  | 进度：${getWorkOrderProgress(workOrders[i])}% | 状态：${getWorkOrderStatus(workOrders[i])}`);
}

const workOrdersTest = [
    {
        orderNumber: 'WO-004',
        productionName: '测试产品',
        planQuantity: 0,
        completeQuantity:0
    },
    {
        orderNumber: 'WO-TEST',
        productionName: '异常数据',
        planQuantity: 1000,
        completeQuantity: -10
    }
]

console.log(getWorkOrderProgress(workOrdersTest[0]));
console.log(getWorkOrderStatus(workOrdersTest[1]));
