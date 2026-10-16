import java.util.HashSet;
import java.util.Set;

public class SetPractice {
    public static void main(String[] args) {
        Set<String> codes = new HashSet<>();
        codes.add("EQ-001");
        codes.add("EQ-002");

        System.out.println(codes.isEmpty());

        codes.clear();

        System.out.println(codes.size());
        System.out.println(codes.isEmpty());

        boolean added = codes.add("EQ-003");

        System.out.println(added);
        System.out.println(codes.contains("EQ-003"));
    }
}