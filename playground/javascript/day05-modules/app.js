import calculateProgress, {calculateRemainingQuantity } from "./workOrder.js"; 

const progress = calculateProgress(1000, 350);
// const remainingQuantity = calculateRemainingQuantity(1000, 350);

const json = '{"orderNumber":"WO-002","planQuantity":800,"completeQuantity":500}';

const workOrder = JSON.parse(json);
const remainingQuantity = calculateRemainingQuantity(workOrder.planQuantity, workOrder.completeQuantity);

console.log(progress);
console.log(remainingQuantity);