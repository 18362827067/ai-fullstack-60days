package com.factory.app;

import com.factory.equipment.Equipment;
import com.factory.service.EquipmentService;
import com.factory.repository.EquipmentRepository;
import com.factory.repository.MemoryEquipmentRepository;

public class Main {
    public static void main(String[] args) {
        EquipmentRepository repository = new MemoryEquipmentRepository();
        EquipmentService equipmentService = new EquipmentService(repository);
        boolean result = equipmentService.addEquipment(new Equipment(1L, "EQ-001", "激光切割机", true));
        System.out.println(result);
        System.out.println(equipmentService.countEquipments());

        boolean result2 = equipmentService.addEquipment(new Equipment(2L, "EQ-001", "自动焊接机", false));
        System.out.println(result2);
        System.out.println(equipmentService.countEquipments());

        boolean updated = equipmentService.updateEquipmentRunning("EQ-001", false);

        Equipment found = equipmentService.findEquipmentByCode("EQ-001");

        System.out.println(updated);
        System.out.println(found.isRunning());

        boolean deleted = equipmentService.deleteEquipmentByCode("EQ-001");

        Equipment found2 = equipmentService.findEquipmentByCode("EQ-001");

        System.out.println(deleted);
        System.out.println(found2 == null);
        System.out.println(equipmentService.countEquipments());
    }
}