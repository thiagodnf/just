const path = require("path");

module.exports = {
    mode: "none",
    entry: {
        app: "./src/index.js",
    },
    output: {
        filename: "just.bundle.js",
        library: "just",
        libraryTarget: "umd",
        path: path.resolve(__dirname, "dist")
    },
};
