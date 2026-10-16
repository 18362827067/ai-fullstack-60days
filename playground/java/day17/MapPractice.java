import java.util.Map;
import java.util.HashMap;

public class MapPractice {
    public static void main(String[] args) {
        Map<String, String> equipments = new HashMap<>();
        equipments.put("EQ-001", "激光切割机");
        equipments.put("EQ-002", "自动焊接机");
        equipments.put("EQ-003", "数控机床");

        for (Map.Entry<String, String> entry : equipments.entrySet()) {
            System.out.println(entry.getKey() + "=" + entry.getValue());
        }
        
        System.out.println(equipments.size());
    }
}