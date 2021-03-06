module.exports = {
    base: "/advanced_front_end/",
    title: "前端进阶小书",
    description: "小皮咖前端经验整理而写成的一本书",
    markdown: {
        lineNumbers: true,
        anchor: {
            permalink: true,
            permalinkBefore: true,
            permalinkSymbol: "#",
        },
    },
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Typescript", link: "/typescript/1" },
            {
                text: "Github",
                link: "https://github.com/zxpsuper/advanced_front_end",
            },
        ],
        sidebar: {
            "/book/": [
                {
                    title: "CSS 相关",
                    collapsable: true,
                    children: [
                        "/book/css/cssTips",
                        "/book/css/flex",
                        "/book/css/css3",
                    ],
                },
                {
                    title: "CSS 相关",
                    collapsable: true,
                    children: [
                        "/book/css/cssTips",
                        "/book/css/flex",
                        "/book/css/css3",
                    ],
                },
                {
                    title: "设计模式",
                    collapsable: false,
                    children: [
                        "/design_patterns/前言",
                        "/design_patterns/工厂模式",
                        "/design_patterns/单例模式",
                        "/design_patterns/适配器模式",
                        "/design_patterns/装饰者模式",
                        "/design_patterns/观察者模式",
                        "/design_patterns/发布订阅者模式",
                    ],
                },
                {
                    title: "算法与数据结构",
                    collapsable: true,
                    children: [
                        "/book/suanfa/binarySearch",
                        "/book/suanfa/sort",
                        "/book/suanfa/dataStructure",
                    ],
                },
                {
                    title: "浏览器相关",
                    collapsable: true,
                    children: [
                        "/book/browser/https",
                        "/book/browser/static",
                        "/book/browser/cache",
                        "/book/browser/cors",
                        "/book/browser/eventloop",
                        "/book/browser/urlrender",
                        "/book/browser/garbage",
                        "/book/browser/garbagerefuse",
                        "/book/browser/safe",
                    ],
                },
                {
                    title: "Vue",
                    collapsable: true,
                    children: [
                        "/book/vue/vue",
                        "/book/vue/router",
                        "/book/vue/vueplugin",
                        "/book/vue/vuedate",
                        "/book/vue/computedvswatch",
                    ],
                },
                {
                    title: "Javascript",
                    collapsable: true,
                    children: [
                        "/book/js/use_strict",
                        "/book/js/amd_commonjs",
                        "/book/js/seajs",
                        "/book/js/design",
                        "/book/js/regular_expression",
                        "/book/js/inherit",
                    ],
                },
                {
                    title: "Canvas",
                    collapsable: true,
                    children: [
                        "/book/canvas/canvas1",
                        "/book/canvas/canvas2",
                        "/book/canvas/canvas3",
                        "/book/canvas/canvas4",
                    ],
                },
                {
                    title: "一些插件",
                    collapsable: true,
                    children: [
                        "/book/plugin/carousal",
                        "/book/plugin/underscore",
                    ],
                },
                {
                    title: "其他",
                    collapsable: true,
                    children: ["/book/other/git", "/book/other/linux"],
                },
            ],
        },
    },
};
