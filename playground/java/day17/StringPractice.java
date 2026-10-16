public class StringPractice {
    public static void main(String[] args) {
        String existingCode = "EQ-001";
        String inputCode = "  eq-001  ";
        String cleanCode = inputCode.trim();
        boolean isDuplicate = cleanCode.equalsIgnoreCase(existingCode);
        // System.out.println(isDuplicate);

        String equipmentName = "Laser Cutting Machine";
        String keyword = "  CUTTING  ";
        boolean matched = equipmentName.toLowerCase().contains(keyword.trim().toLowerCase());
        // System.out.println(matched);

        String inputCode2 = "   ";
        boolean invalidCode = inputCode2.isBlank();
        // System.out.println(invalidCode);

        String inputCode3 = "EQ-001";
        boolean invalidCode3 = inputCode3 == null || inputCode3.isBlank();
        // System.out.println(invalidCode3);

        String equipmentCode = "EQ-001";
        String equipmentType = equipmentCode.substring(0, 2);
        String equipmentNumber = equipmentCode.substring(3);
        System.out.println(equipmentType);
        System.out.println(equipmentNumber);
    }
}