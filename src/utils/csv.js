export class csv {

    static parse(content, separator = ",") {

        return content.split("\n")
            .map(e => e.trim())
            .filter(e => !["", null, undefined].includes(e))
            .map(e => {
                return e.split(separator)
                    .map(e => e.trim())
                    .map(e => {

                        let number = Number(e);

                        if (isNaN(number)) {
                            return e;
                        }

                        return number;
                    });
            });
    }
}
