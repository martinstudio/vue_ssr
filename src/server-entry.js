/**
 * 以前的代码都是运行在客户端，每个用户都有独立的vue实例
 * 如果现在跑在服务端上，就导致不能所有人都是一个实例
 * 所以服务端渲染需要打包返回一个函数
 * 这个函数会在访问服务器的时候被调用，是在服务端执行的
 */
import createApp from './app';

export default (context) => {
    // console.log(context, '-------------')
    // const { app, router } = createApp();
    // // 服务端需要拿到一个vue实例，而且每个用户都是全新的
    // router.push(context.url)
    // // router.onReady(() => {
    // return app;
    // // })

    return new Promise((resolve, reject) => {
        const { app, router, store } = createApp();
        // 服务端需要拿到一个vue实例，而且每个用户都是全新的
        router.push(context.url)
        router.onReady(() => {
            // 前端如果没有配置路由，那应该跳转到404
            const matchComponents = router.getMatchedComponents();
            if (!matchComponents.length) {
                reject({ code: 404 })
            }
            Promise.all(matchComponents.map(component => {
                if (component.changeAll) {
                    return component.changeAll(store)
                }
            })).then(() => {
                context.state = store.state
                // 此方法可以返回一个 promise，返回最终的实例
                resolve(app);
            })
        }, reject)
    })
}