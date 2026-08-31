import java.io.*;
import java.util.*;

public class CharacterCount {

    public static void main(String[] args) throws IOException {

        String fileName = args[0];

        Map<Character, Integer> map = new HashMap<>();

        FileReader reader = new FileReader(fileName);

        int ch;

        while ((ch = reader.read()) != -1) {

            char character = (char) ch;

            map.put(character, map.getOrDefault(character, 0) + 1);
        }

        reader.close();

        FileWriter writer = new FileWriter("result.txt");

        for (Map.Entry<Character, Integer> entry : map.entrySet()) {

            writer.write(entry.getKey() + " : " + entry.getValue() + "\n");
        }

        writer.close();

        System.out.println("Character count saved to result.txt");
    }
}