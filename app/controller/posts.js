exports.index = function* (ctx) {
    console.log("index")
    ctx.body = "index";
};
exports.new = function* (ctx) {
    console.log("new")
    ctx.body = "new";
};
exports.create = function* (ctx) {
    console.log("create")
    ctx.body = "create";
};
exports.show = function* (ctx) {
    console.log("show")
    ctx.body = "show";
};
exports.edit = function* () {};
exports.update = function* () {};
exports.destroy = function* () {};