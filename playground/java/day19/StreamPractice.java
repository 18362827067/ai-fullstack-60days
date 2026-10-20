import java.util.List;

public class StreamPractice {
    public static void main(String[] args) {
        List<Integer> temperaters = List.of(15, 20, 35, 80, 95, 60);
        List<Integer> normalTemperatures = temperaters.stream()
                                                    .filter(temperater -> temperater >= 20 && temperater <= 80)
                                                    .toList();
        // System.out.println(normalTemperatures);
        // System.out.println(temperaters);
        List<Integer> quantities = List.of(5, 10, 20, 8, 15);
        List<Integer> result = quantities.stream()
                                        .filter(quantity -> quantity >= 10)
                                        .map(quantity -> quantity * 2)
                                        .toList();

        // System.out.println(result);
        // System.out.println(quantities);

        List<Integer> equipmentTemperatures = List.of(25, 90, 60, 100, 85, 80);
        long abnormalCount = equipmentTemperatures.stream()
                                                .filter(temperater -> temperater > 80)
                                                .count();
        // System.out.println(abnormalCount);

        List<Integer> machineTemperatures = List.of(35, 60, 75);
        int firstAbnormalTemperature = machineTemperatures.stream()
                                                .filter(temperater -> temperater > 80)
                                                .findFirst()
                                                .orElse(-1);
        // System.out.println(firstAbnormalTemperature);

        List<Integer> temperatures2 = List.of(35, 60, 75);
        temperatures2.stream().filter(temperater -> temperater > 80)
                              .findFirst()
                              .ifPresent(temperater -> System.out.println("警告：设备温度异常" + temperater + "℃."));
    }
}