export const log = function (ctx, next) {
  console.log(`Current path ${ctx.pathname}`);
  next();
};
