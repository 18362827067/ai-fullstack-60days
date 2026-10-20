import java.util.List;

public class Day19Review {
    public static void main(String[] args) {
        List<Integer> temperaters = List.of(35, 92, 60, 85, 100, 75);
        List<Integer> cooledTemperatures = temperaters.stream()
                                                .filter(temperater -> temperater > 80)
                                                .map(temperater -> temperater - 5)
                                                .toList();
        System.out.println(cooledTemperatures);

        cooledTemperatures.stream().filter(temperater -> temperater > 90)
                                   .findFirst()
                                   .ifPresent(temperater -> System.out.println("警告：降温后仍然异常 " + temperater + "℃"));
        System.out.println(temperaters);
    }
}