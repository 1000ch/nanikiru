export default {
  path    : '/',
  method  : 'get',
  page    : 'index',
  title   : 'Index',
  handler : require('../pages/IndexPage'),
  action  : (context, payload, done) => {
    Promise.all([
      context.executeAction(() => {})
    ]).then(() => done());
  }
};
