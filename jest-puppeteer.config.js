module.exports = {
    launch: {
      ignoreDefaultArgs: ["--disable-extensions"],
      args: ["--no-sandbox"],
    },
    server: {
      command: "npm run dev",
      port: 3000,
    },
};