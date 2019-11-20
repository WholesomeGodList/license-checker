import org.junit.Test;

import static org.junit.Assert.fail;

public class JUnitTests {
    @Test
    public void testEmpty() {

    }

    @Test
    public void testHello() {
        System.out.println("hello");
    }

    @Test
    public void testFailure() {
        fail("mmm");
    }
}
