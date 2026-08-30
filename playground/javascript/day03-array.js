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
    },
    {
        orderNumber: 'WO-004',
        productionName: '风机',
        planQuantity: 500,
        completeQuantity:200
    }
]

// let workOrder = null;
// for(let i = 0; i < workOrders.length; i++) {
//     if (workOrders[i].orderNumber === "WO-002") {
//         workOrder = workOrders[i];
//         break;
//     }
// }

// if (workOrder === null) {
//     console.log("该工单不存在");
// } else {
//     console.log(`工单：${workOrder.orderNumber}  | 产品：${workOrder.productionName}  | 计划数量：${workOrder.planQuantity}  | 完成数量：${workOrder.completeQuantity}`);
// }

const result = workOrders.find((workOrder) => {
    return workOrder.orderNumber === "WO-003"
})

const resultTest = workOrders.find(function(workOrder) {
    return workOrder.orderNumber === "WO-999"
})

// if (result === undefined) {
//     console.log("该工单不存在");
// } else {
//     console.log(`工单：${result.orderNumber}  | 产品：${result.productionName}  | 计划数量：${result.planQuantity}  | 完成数量：${result.completeQuantity}`);
// }

// if (resultTest === undefined) {
//     console.log("该工单不存在");
// } else {
//     console.log(`工单：${resultTest.orderNumber}  | 产品：${resultTest.productionName}  | 计划数量：${resultTest.planQuantity}  | 完成数量：${resultTest.completeQuantity}`);
// }

const resultFilter = workOrders.filter(workOrder =>  workOrder.completeQuantity < workOrder.planQuantity);

// console.log(resultFilter);

const processingFilter = workOrders.filter(workOrder => workOrder.completeQuantity > 0 && workOrder.completeQuantity < workOrder.planQuantity);

// console.log(processingFilter);

const workOrderProgressList = workOrders.map(
    workOrder => ({
        orderNumber: workOrder.orderNumber,
        productionName: workOrder.productionName,
        progress: workOrder.completeQuantity / workOrder.planQuantity * 100
    })
);  

// console.log(workOrderProgressList)

// const workOrderRemainingList = workOrders
//     .filter(function(workOrder) {
//         return workOrder.planQuantity - workOrder.completeQuantity > 0;
//     })
//     .map(function(workOrder) {
//         return {
//             orderNumber: workOrder.orderNumber,
//             productionName: workOrder.productionName,
//             remainingQuantity: workOrder.planQuantity - workOrder.completeQuantity
//         }
//     })

// console.log(workOrderRemainingList);

// const resultForEach = workOrders.forEach(function(workOrder) {
//     console.log(`工单：${workOrder.orderNumber}`)
// })

const workOrderRemaingList = workOrders
    .filter(({completeQuantity,planQuantity}) => completeQuantity > 0 && completeQuantity < planQuantity)
    .map(({orderNumber,productionName,completeQuantity,planQuantity}) => ({
        orderNumber,
        productionName,
        remainingQuantity: planQuantity - completeQuantity
    }))

// console.log(workOrderRemaingList);

const completedWorkOrder = workOrders.find(
    workOrder => workOrder.completeQuantity >= workOrder.planQuantity
);

// if (completedWorkOrder === undefined) {
//     console.log('没有已完成工单');
// } else {
//     console.log(completedWorkOrder.orderNumber);
// }

const workOrder = null;
const productionName = workOrder?.productionName ?? '未知产品'

const updateWorkOrders = workOrders.map(workOrder => {
    if(workOrder.orderNumber === 'WO-001') {
        return {
            ...workOrder,
            completeQuantity : 500
        }
    }

    return workOrder;
})

// console.log(updateWorkOrders);
function createWorkOrder(
    orderNumber,
    productionName,
    planQuantity = 1000,
    completeQuantity = 0
){
    return {
        orderNumber,
        productionName,
        planQuantity,
        completeQuantity
    }
}

// console.log(createWorkOrder("WO-005", "电机"));
// console.log(createWorkOrder("WO-006", "水泵", 800));
// console.log(createWorkOrder("WO-007", "风机", 500, 200));
// console.log(createWorkOrder("WO-008", "减速机", undefined, 100));

const workOrders2 = [
    { orderNumber: "WO-001", planQuantity: 1000, completeQuantity: 350 },
    { orderNumber: "WO-002", planQuantity: 1000, completeQuantity: 0 },
    { orderNumber: "WO-003", planQuantity: 800, completeQuantity: 800 },
    { orderNumber: "WO-004", planQuantity: 500, completeQuantity: 200 }
];


const planQuantityAll = workOrders2.reduce(
    (total,workOrder) => {
        return  total + workOrder.planQuantity
    },0
)

const completeQuantityAll = workOrders2.reduce(
    (total,workOrder) => total + workOrder.completeQuantity
    ,0
)

const quantitySummary = workOrders2.reduce(
    (total,workOrder) => ({
        planQuantityAll: total.planQuantityAll + workOrder.planQuantity,
        completeQuantityAll: total.completeQuantityAll + workOrder.completeQuantity
    }),
    {
        planQuantityAll: 0,
        completeQuantityAll: 0
    }
)

// console.log(quantitySummary);

const workOrders3 = [
    { orderNumber: "WO-001" },
    { orderNumber: "WO-002" },
    { orderNumber: "WO-003" }
];

const targetWorkOrder = {
    orderNumber: "WO-002"
};

const isOrderNumber =  workOrders3.some(
    workOrder => workOrder.orderNumber === targetWorkOrder.orderNumber
);

// console.log(isOrderNumber);

const allowedOrderNumbers = [
    "WO-001",
    "WO-003",
    "WO-005"
];

const workOrder4 = {
    orderNumber: "WO-003"
};

const isAllowed = allowedOrderNumbers.includes(workOrder4.orderNumber);

// console.log(isAllowed);

const workOrders5 = [
    { orderNumber: "WO-001", planQuantity: 1000, completeQuantity: 350 },
    { orderNumber: "WO-002", planQuantity: 1000, completeQuantity: 0 },
    { orderNumber: "WO-003", planQuantity: 800, completeQuantity: 800 },
    { orderNumber: "WO-004", planQuantity: 500, completeQuantity: 500 }
];

const completedIndex = workOrders5.findIndex(
    workOrder => workOrder.completeQuantity >= workOrder.planQuantity
);

// console.log(completedIndex);

const workOrders6 = [
    { orderNumber: "WO-001", planQuantity: 1000 },
    { orderNumber: "WO-002", planQuantity: 500 },
    { orderNumber: "WO-003", planQuantity: 800 }
];

const sortedWorkOrders = [...workOrders6].sort(
    (a,b) => a.planQuantity - b.planQuantity
)

// console.log(workOrders6);
// console.log(sortedWorkOrders);

const workOrders7 = [
    { orderNumber: "WO-001", completeQuantity: 350 },
    { orderNumber: "WO-002", completeQuantity: 0 },
    { orderNumber: "WO-003", completeQuantity: 800 },
    { orderNumber: "WO-004", completeQuantity: 200 }
];

const sortedWorkOrders7 = [...workOrders7].sort(
    (a,b) => b.completeQuantity - a.completeQuantity
) 

// console.log(workOrders7);
// console.log(sortedWorkOrders7);

const workOrders8 = [
    { orderNumber: "WO-001", planQuantity: 1000 },
    { orderNumber: "WO-002", planQuantity: 500 },
    { orderNumber: "WO-003", planQuantity: 800 },
    { orderNumber: "WO-004", planQuantity: 300 }
];

const topWorkOrders = [...workOrders8]
    .sort(
        (a,b) => b.planQuantity - a.planQuantity
    )
    .slice(0,2)

// console.log(topWorkOrders)

const workOrders9 = [
    { orderNumber: "WO-001", planQuantity: 1000, completeQuantity: 350 },
    { orderNumber: "WO-002", planQuantity: 500, completeQuantity: 0 },
    { orderNumber: "WO-003", planQuantity: 800, completeQuantity: 800 },
    { orderNumber: "WO-004", planQuantity: 300, completeQuantity: 200 }
];

const topIncompleteWorkOrders = workOrders9
    .filter(
        workOrder => workOrder.completeQuantity < workOrder.planQuantity
    )
    .sort(
        (a,b) => b.planQuantity - a.planQuantity
    )
    .slice(0,2)

// console.log(topIncompleteWorkOrders);

const input = " 电机, 减速机, 水泵 ";
const targetProduct = "减速机";

const hasProduct = input
    .split(',')
    .map(
        item => item.trim()
    )
    .includes(targetProduct);

// console.log(hasProduct);

function isValidWorkOrder(input) {
    const normalizedOrderNumber = input.trim().toUpperCase();
    return normalizedOrderNumber.length !== 0 && normalizedOrderNumber.startsWith("WO-");
}

// console.log(isValidWorkOrder("  wo-001  "));
// console.log(isValidWorkOrder("   "));
// console.log(isValidWorkOrder("abc-001"));

const input2 = "  wo-2026-015  ";

const normalizedOrderNumber = input2.trim().toUpperCase();
const year = normalizedOrderNumber.slice(3,7);
const sequence = normalizedOrderNumber.slice(-3);

// console.log(normalizedOrderNumber);
// console.log(year);
// console.log(sequence);

const quantity = {
    planQuantity: 1000,
    completeQuantity: 350,
    remainingQuantity: 650
};

Object.entries(quantity).forEach(
    ([key,value]) => {
        // console.log(`${key}: ${value}`)
    }
)

const workOrder10 = {
    planQuantity: 1000,
    completeQuantity: 350,
    scrapQuantity: 10
};

const isAll = Object.values(workOrder10).every(
    value => value > 0
)

const workOrder11 = {
    orderNumber: "WO-001",
    productionName: "电机",
    planQuantity: 1000,
    completeQuantity: 350
};

const allowedKeys11 = ["orderNumber", "productionName"];

const result11 = Object.fromEntries(
    Object.entries(workOrder11)
        .filter(([key]) => allowedKeys11.includes(key))
);

// console.log(result11);

const workOrder12 = {
    orderNumber: "WO-001",
    productionName: "电机",
    planQuantity: 1000,
    completeQuantity: 350,
    remark: null,
    urgent: false
};

const result12 = Object.fromEntries(
    Object.entries(workOrder12)
        .filter(([key,value]) => typeof value === 'string')
)

// console.log(result12)

const workOrder13 = {
    orderNumber: "WO-001",
    planQuantity: 1000,
    completeQuantity: 350
};

const fieldName13 = "completeQuantity";

function updateField(workOrder, fieldName, newValue) {
    return {
        ...workOrder,
        [fieldName]:newValue
    }
}

function updateExistingField(workOrder, fieldName, newValue) {
    // 只有 fieldName 对应的属性已经存在时
    // 才返回更新后的新对象
    if(fieldName in workOrder){
        return {
            ...workOrder,
            [fieldName]:newValue
        }
    }

    // 如果属性不存在
    // 就直接返回原来的 workOrder
    return {...workOrder};
}

const updatedWorkOrder13 = updateField(
    workOrder13,
    fieldName13,
    500
);

// console.log(workOrder13.completeQuantity);
// console.log(updatedWorkOrder13.completeQuantity);
// console.log(updatedWorkOrder13 === workOrder13);

const workOrder14 = {
    orderNumber: "WO-001",
    planQuantity: 1000,
    completeQuantity: 350,
    remark: "测试工单"
};

const fieldName014 = "remark";

if(fieldName014 in workOrder14) {
    delete workOrder14[fieldName014];
}

const workOrder15 = {
    orderNumber: "WO-001",
    productionName: "电机",
    planQuantity: 1000,
    completeQuantity: 350
};

Object.entries(workOrder15)
    .filter(
        ([,value]) => typeof value === 'number'
    )
    .forEach(
        ([key,value]) => {
                // console.log(`${key}: ${value}`)
        }
    )

const quantityInfo = 
    Object.fromEntries(
        Object.entries(workOrder15)
            .filter(
                ([,value]) => typeof value === 'number'
            )
    )


const workOrders16 = [
    { orderNumber: "WO-001", productName: "电机", planQuantity: 1000, completeQuantity: 350 },
    { orderNumber: "WO-002", productName: "减速机", planQuantity: 500, completeQuantity: 0 },
    { orderNumber: "WO-003", productName: "水泵", planQuantity: 800, completeQuantity: 800 },
    { orderNumber: "WO-004", productName: "风机", planQuantity: 600, completeQuantity: 200 }
];

const remainingWorkOrders = 
        workOrders16.filter(
            workOrder => workOrder.completeQuantity !== 0 && workOrder.completeQuantity < workOrder.planQuantity
        )
        .map(
            ({orderNumber,productName,planQuantity,completeQuantity}) => ({
                orderNumber,
                productName,
                remainingQuantity: planQuantity - completeQuantity
            })
        )

const maxRemainingWorkOrders = 
        [...remainingWorkOrders].sort(
            (a,b) => b.remainingQuantity - a.remainingQuantity
        )
        .slice(0,1)

const countWorkOrders = 
        workOrders16.reduce(
            (total,workOrder) => ({
                totalPlanQuantity: total.totalPlanQuantity + workOrder.planQuantity,
                totalCompleteQuantity: total.totalCompleteQuantity + workOrder.completeQuantity
            }),
            {
                totalPlanQuantity: 0,
                totalCompleteQuantity: 0
            }
        )

const hasProduct16 = 
        workOrders16.some(
            workOrder => workOrder.completeQuantity === 0
        )

        
const isAllProduct16 = 
        workOrders16.every(
            workOrder => workOrder.completeQuantity > 0
        )


const findCompletedOrderNumber = 
        workOrders16.find(
            ({planQuantity,completeQuantity}) => completeQuantity >= planQuantity
        )
        ?.orderNumber ?? "没有已完成工单"

const fieldName16 = "completeQuantity";  

function updateWorkOrder16(workOrder, fieldName, newValue) {
    if(Object.hasOwn(workOrder,fieldName)) {
        return {
            ...workOrder,
            [fieldName]: newValue
        }
    }

    return workOrder;
}

const allowedKeys16 = ["orderNumber", "productName"];

const sliceWorkOrders16 = 
    [...workOrders16].map(
        (workOrder) => {
            return Object.fromEntries(
                    Object.entries(workOrder)
                        .filter(
                            ([key]) => allowedKeys16.includes(key)
                        )
                ) 
        }    
    )

const fieldName = "completeQuantity";

for(const workOrder of workOrders16) {
    console.log(workOrder[fieldName])
}

const remainingWorkOrders16 = 
    workOrders16.filter(
        ({completeQuantity,planQuantity}) => completeQuantity < planQuantity
    )
    .map(
        ({orderNumber,completeQuantity,planQuantity}) => ({
            orderNumber,
            progress: completeQuantity / planQuantity * 100
        })
    )


console.log(remainingWorkOrders16);