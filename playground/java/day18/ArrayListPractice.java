import java.util.ArrayList;
import java.util.List;

public class ArrayListPractice {
    public static void main(String[] args) {
        List<String> list = new ArrayList<>();
        list.add("EQ-001");
        list.add("EQ-002");
        list.add("EQ-003");
        list.add("EQ-004");
        String removed = list.remove(1);

        System.out.println(removed);
        System.out.println(list.size());

        for (String item : list) {
            System.out.println(item);
        } 
    }
    
}