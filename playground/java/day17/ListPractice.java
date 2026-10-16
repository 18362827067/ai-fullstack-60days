import java.util.ArrayList;
import java.util.List;

public class ListPractice {
    public static void main(String[] args) {
        List<Integer> numbers = new ArrayList<>();
        numbers.add(101); 
        numbers.add(102);
        numbers.add(103);
        boolean removed = numbers.remove(Integer.valueOf(102));

        System.out.println(removed);
        System.out.println(numbers.size());

        for (Integer number : numbers) {
            System.out.println(number);
        }
    }
}