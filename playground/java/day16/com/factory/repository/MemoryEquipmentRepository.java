package com.factory.repository;

import com.factory.equipment.Equipment;
import java.util.ArrayList;
import java.util.List;

public class MemoryEquipmentRepository implements EquipmentRepository{
    private final List<Equipment> equipments = new ArrayList<>();

    @Override
    public void save(Equipment equipment) {
        equipments.add(equipment);
    }

    @Override
    public Equipment findByCode(String equipmentCode) {
        if (equipmentCode == null) {
            return null;
        }

        for(Equipment equipment : equipments) {
            if (equipmentCode.equals(equipment.getEquipmentCode())) {
                return equipment;
            }
        }

        return null;
    }

    @Override
    public boolean deleteByCode(String equipmentCode) {
        if (equipmentCode == null) {
            return false;
        }

        return equipments.removeIf(
            equipment -> equipmentCode.equals(equipment.getEquipmentCode())
        );
    }

    @Override
    public int count() {
        return equipments.size();
    }
}