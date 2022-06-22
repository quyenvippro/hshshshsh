//load package
global.package = require("./package.json")
console.log("╾─────────────────────────────────────────────────╼\n😻 ⇇◎ Khởi động LisaPN Bot Version 1.0.3 ... ◎⇉ 😻")
//load config
global.config = require("./createConfig.js")()
//load data
global.data = require("./getdata.js")()
//login
const login = require("./login.js");
