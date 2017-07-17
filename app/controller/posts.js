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
exports.edit = function* (ctx) {
    console.log("edit")
    ctx.body = "edit";
};
exports.update = function* (ctx) {
    console.log("update")
    ctx.body = "update";
};
exports.destroy = function* (ctx) {
    console.log("destroy")
    ctx.body = "destroy";
};