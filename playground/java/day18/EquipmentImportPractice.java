import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.List;
import java.util.ArrayList;

public class EquipmentImportPractice {
    public static void main(String[] args) {
        String[] codes = {
            new String("EQ-001"),
            "EQ-002",
            "EQ-001",
            "EQ-003"
        };

        List<String> allCodes = new ArrayList<>();
        Set<String> uniqueCodes = new HashSet<>();
        Map<String, String> equipmentMap = new HashMap<>();

        for (String code : codes) {
            allCodes.add(code);
            boolean added = uniqueCodes.add(code);

            if (added) {
               if ("EQ-001".equals(code)) {
                    equipmentMap.put(code, "激光切割机");
               } else if ("EQ-002".equals(code)) {
                    equipmentMap.put(code, "自动焊接机");
               } else if ("EQ-003".equals(code)){
                    equipmentMap.put(code, "数控机床");
               } else {
                    equipmentMap.put(code, "未知设备");
               }
            }
        }

        System.out.println("原始编码：" + allCodes);
        System.out.println("原始数量：" + allCodes.size());
        System.out.println("去重数量：" + uniqueCodes.size());
        System.out.println("查询EQ-002：" + equipmentMap.get("EQ-002"));
    }
}