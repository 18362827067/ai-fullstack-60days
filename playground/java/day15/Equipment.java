public class Equipment {
    Long id;
    private String equipmentCode;
    String equipmentName;
    private boolean running;

    public Equipment(
        Long id,
        String equipmentCode,
        String equipmentName,
        boolean running
    ) {
        this.id = id;
        this.equipmentCode = equipmentCode;
        this.equipmentName = equipmentName;
        this.running = running;
    }

    public String getEquipmentCode() {
        return equipmentCode;
    }

    public void setEquipmentCode(String equipmentCode) {
        this.equipmentCode = equipmentCode;
    }

    public boolean isRunning() {
        return running;
    }

    public void setRunning(boolean running) {
        this.running = running;
    }
}