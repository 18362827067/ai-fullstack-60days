import java.util.HashMap;
import java.util.Map;

public class HashMapPractice {
    public static void main(String[] args) {
        String code1 = new String("EQ-001");
        String code2 = new String("EQ-001");

        System.out.println(code1 == code2);
        System.out.println(code1.equals(code2));
        System.out.println(code1.hashCode() == code2.hashCode());

        Map<String, String> map = new HashMap<>();
        map.put(code1, "激光切割机");
        map.put(code2, "自动焊接机");

        System.out.println(map.size());
        System.out.println(map.get("EQ-001"));
    }
}