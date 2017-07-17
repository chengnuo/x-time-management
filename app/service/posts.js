exports.index = function* (ctx) {
  const userId = ctx.params.id;
  //console.log("userId",userId)
  const userInfo = yield ctx.service.user.find(userId);
  ctx.body = userInfo;
};