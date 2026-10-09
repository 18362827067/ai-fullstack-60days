package com.factory.service;

import com.factory.equipment.Equipment;
import com.factory.repository.EquipmentRepository;
// import java.util.List;
// import java.util.ArrayList;

public class EquipmentService {
    // private final List<Equipment> equipments = new ArrayList<>();
    private final EquipmentRepository repository;

    public EquipmentService(EquipmentRepository repository) {
        this.repository = repository;
    }

    public boolean addEquipment(Equipment equipment) {
        if (
            equipment == null || 
            equipment.getEquipmentCode() == null || 
            findEquipmentByCode(equipment.getEquipmentCode()) != null
        ) {
            return false;
        }

        repository.save(equipment);
        return true;
    }

    public Equipment findEquipmentByCode(String equipmentCode) {
        return repository.findByCode(equipmentCode);
    }

    public boolean updateEquipmentRunning(
        String equipmentCode,
        boolean running
    ) {
        Equipment equipment = findEquipmentByCode(equipmentCode);

        if (equipment == null) {
            return false;
        }

        equipment.setRunning(running);
        return true;
    }

    public boolean deleteEquipmentByCode(String equipmentCode) {
        return repository.deleteByCode(equipmentCode);
    }

    public int countEquipments() {
        return repository.count();
    }
}