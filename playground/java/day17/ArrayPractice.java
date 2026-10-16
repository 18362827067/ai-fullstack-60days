public class ArrayPractice {
    public static void main(String[] args) {
        String[] codes = {"EQ-001", "EQ-002", "EQ-003"};
        boolean[] disabled = {false, true, false};
        
        for (int i = 0; i < codes.length; i++) {
            if (disabled[i]) {
                continue;
            }

            System.out.println(i + ": " + codes[i]);
        }
    }
}