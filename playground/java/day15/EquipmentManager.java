import java.util.List;
import java.util.ArrayList;

public class EquipmentManager  {
    public static void main(String[] args) {
        List<Equipment> equipments = new ArrayList<>();

        Equipment equipment1 = new Equipment(1L, "EQ-001", "激光切割机", true);
        Equipment equipment2 = new Equipment(2L, "EQ-002", "自动焊接机", false);

        equipments.add(equipment1);
        equipments.add(equipment2);

        updateEquipmentRunning(equipments, "EQ-002", true);

        for (Equipment equipment : equipments) {
            System.out.println(equipment.getEquipmentCode() + " - " + equipment.isRunning());
        }

    }

    public static Equipment findEquipmentByCode(
        List<Equipment> equipments,
        String equipmentCode
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