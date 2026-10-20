import java.util.Collections;
import java.util.List;
import java.util.ArrayList;

public class CollectionsPractice {
    public static void main(String[] args) {
        List<String> codes = new ArrayList<>();
        codes.add("EQ-003");
        codes.add("EQ-001");
        codes.add("EQ-002");
        System.out.println(codes);

        Collections.reverse(codes);
        System.out.println(codes);
        Collections.sort(codes);
        System.out.println(codes);
        Collections.reverse(codes);
        System.out.println(codes);
    }
}