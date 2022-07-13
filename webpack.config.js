const path = require("path");

module.exports = {
    mode: "none",
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "just.bundle.js",
        library: "MyLibrary",
        libraryTarget: "umd",
        globalObject: "this",
        path: path.resolve(__dirname, "dist")
    },
};
