function calculateProgress(planQuantity, completeQuantity) {
    return completeQuantity / planQuantity * 100;
}

function calculateRemainingQuantity(planQuantity, completeQuantity) {
    return planQuantity - completeQuantity;
}

export default calculateProgress;
export { calculateRemainingQuantity };