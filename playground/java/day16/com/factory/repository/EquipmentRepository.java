package com.factory.repository;

import com.factory.equipment.Equipment;

public interface EquipmentRepository {
    void save(Equipment equipment);

    Equipment findByCode(String equipmentCode);

    boolean deleteByCode(String equipmentCode);

    int count();
}