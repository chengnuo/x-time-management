exports.index = function* (ctx) {
  const userId = ctx.params.id;
  const userInfo = yield ctx.service.user.find(userId);
  ctx.body = userInfo;
};