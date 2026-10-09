package com.factory.equipment;

public class Equipment {
    private Long id;
    private String equipmentCode;
    private String equipmentName;
    private boolean running;

    public Equipment(Long id, String equipmentCode, String equipmentName, boolean running) {
        this.id = id;
        this.equipmentCode = equipmentCode;
        this.equipmentName = equipmentName;
        this.running = running;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEquipmentCode() {
        return equipmentCode;
    }

    public void setEquipmentCode(String equipmentCode) {
        this.equipmentCode = equipmentCode;
    }

    public String getEquipmentName() {
        return equipmentName;
    }

    public void setEquipmentName(String equipmentName) {
        this.equipmentName = equipmentName;
    }

    public boolean isRunning() {
        return running;
    }

    public void setRunning(boolean running) {
        this.running = running;
    }
}