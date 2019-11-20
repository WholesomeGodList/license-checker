import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        try {
            String bot_token = Files.readString(Path.of("bot-token.txt"), StandardCharsets.UTF_8);
            System.out.println(bot_token);
        } catch(IOException e) {
            System.err.println("Can't open bot-token.txt.");
        }
    }
}