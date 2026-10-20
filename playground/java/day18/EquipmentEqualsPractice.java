import java.util.Set;
import java.util.HashSet;

public class EquipmentEqualsPractice {
    public static void main(String[] args) {
        Equipment e1 = new Equipment("EQ-001");
        Equipment e2 = new Equipment("EQ-001");
        Equipment e3 = new Equipment("EQ-002");

        Set<Equipment> equipments = new HashSet<>();

        boolean add1 = equipments.add(e1);
        boolean add2 = equipments.add(e2);
        boolean add3 = equipments.add(e3);

        System.out.println(add1);
        System.out.println(add2);
        System.out.println(add3);
        System.out.println(equipments.size());
    }
}

class Equipment {
        String code;

        public Equipment(String code) {
            this.code = code;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof Equipment)) {
                return false;
            }

            Equipment other = (Equipment) obj;

            return this.code.equals(other.code);
        }

        @Override
        public int hashCode() {
            return code.hashCode();
        }
    }