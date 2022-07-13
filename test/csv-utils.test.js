
import CSVUtils from "../src/utils/csv-util";

test("test runs", () => {

    const content = `
        a, b
        1, 2
        3, 4.545
    `;

    let m = CSVUtils.parse(content);

    expect(m[0][0]).toBe("a");
    expect(m[0][1]).toBe("b");
    expect(m[1][0]).toBe(1);
    expect(m[1][1]).toBe(2);
    expect(m[2][0]).toBe(3);
    expect(m[2][1]).toBe(4.545);
});
