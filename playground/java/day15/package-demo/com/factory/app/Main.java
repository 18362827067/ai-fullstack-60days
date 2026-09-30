package com.factory.app;

import com.factory.equipment.Equipment;

public class Main {
    public static void main(String[] args) {
        Equipment equipment = new Equipment("EQ-001");

        System.out.println(equipment.getEquipmentCode());
    }
}