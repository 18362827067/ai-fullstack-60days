public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello Java");
        System.out.println("Day 15");

        int remainingQuantity = calculateRemainingQuantity(100, 80);
        System.out.println(remainingQuantity);

        Equipment equipment = new Equipment();
        equipment.id = 1L;
        equipment.equipmentCode = "EQ-001";
        equipment.equipmentName = "激光切割机";
        equipment.running = true;
        System.out.println(equipment.equipmentCode);
        System.out.println(equipment.equipmentName);
    }

    public static int calculateRemainingQuantity(
        int planQuantity,
        int completedQuantity
    ) {
        return planQuantity - completedQuantity;
    }

    public static Equipment findEquipmentByCode(
        List<Equipment> equipments,
        string equipmentCode
    ) {
        if (equipmentCode == null) {
            return null;
        }

        for (Equipment equipment : equipments) {
            if (equipmentCode.equals(equipment.getEquipmentCode())) {
                return equipment;
            }
        }

        return null;
    }

    public static boolean deleteEquipmentByCode(
        List<Equipment> equipments,
        String equipmentCode
    ) {
        if (equipmentCode == null) {
            return false;
        }

        return equipments.removeIf(
            equipment -> equipmentCode.equals(equipment.getEquipmentCode())
        );
    }

    public static boolean updateEquipmentRunning(
        List<Equipment> equipments,
        String equipmentCode,
        boolean running
    ) {
        if (equipmentCode == null) {
            return false;
        }

        Equipment sameEquipment = findEquipmentByCode(equipments, equipmentCode);

        if (sameEquipment == null) {
            return false;
        }

        sameEquipment.setRunning(running);

        return true;
    }
}