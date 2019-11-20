import net.dv8tion.jda.api.JDA;
import net.dv8tion.jda.api.JDABuilder;

import javax.security.auth.login.LoginException;
import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args) {
        try {
            String bot_token = Files.readString(Path.of("bot-token.txt")).trim();
            System.out.println(bot_token);
            JDA jda = new JDABuilder(bot_token).build();
            jda.addEventListener(new MessageListener());

        } catch(IOException e) {
            System.err.println("Can't open bot-token.txt.");
        } catch(LoginException e) {
            System.err.println("Cannot login");
        }
    }
}