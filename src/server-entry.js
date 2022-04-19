/**
 * 以前的代码都是运行在客户端，每个用户都有独立的vue实例
 * 如果现在跑在服务端上，就导致不能所有人都是一个实例
 * 所以服务端渲染需要打包返回一个函数
 * 这个函数会在访问服务器的时候被调用，是在服务端执行的
 */
import createApp from './app';

export default () => {
    const { app, router } = createApp();
    // 服务端需要拿到一个vue实例，而且每个用户都是全新的
    return app;
}