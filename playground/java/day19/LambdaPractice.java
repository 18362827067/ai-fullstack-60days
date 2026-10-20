import java.util.function.Predicate;

interface EquipmentChecker {
    boolean check(String code);
}

public class LambdaPractice {
    public static void main(String[] args) {
        EquipmentChecker checker = 
            code -> code.startsWith("EQ-") && code.length() >= 6;

        // System.out.println(checker.check("EQ-001"));
        // System.out.println(checker.check("EQ-1"));
        // System.out.println(checker.check("MC-001"));
        // System.out.println(checker.check("EQ-ABC123"));

        Predicate<Integer> isNormalTemperature = temperater -> temperater >= 20 && temperater <= 80;
        System.out.println(isNormalTemperature.test(20));
        System.out.println(isNormalTemperature.test(50));
        System.out.println(isNormalTemperature.test(80));
        System.out.println(isNormalTemperature.test(95));
                    
    }
}