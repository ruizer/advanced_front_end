(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{152:function(s,t,a){"use strict";a.r(t);var n=a(0),r=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"体验-typescript"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#体验-typescript","aria-hidden":"true"}},[s._v("#")]),s._v(" 体验 Typescript")]),s._v(" "),a("h2",{attrs:{id:"typescript-工作原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-工作原理","aria-hidden":"true"}},[s._v("#")]),s._v(" Typescript 工作原理")]),s._v(" "),a("p",[s._v("通过 "),a("strong",[s._v("typescript")]),s._v(" 命令行工具, 把 "),a("strong",[s._v("typescript")]),s._v(" 转成 "),a("strong",[s._v("javascript")]),s._v(", 从而支持在浏览器运行.")]),s._v(" "),a("p",[s._v("注: 后面的文章中 "),a("strong",[s._v("typescript")]),s._v(" 简称 "),a("strong",[s._v("ts")]),s._v(" , "),a("strong",[s._v("javascript")]),s._v(" 简称"),a("strong",[s._v("js")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"typescript-特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typescript-特性","aria-hidden":"true"}},[s._v("#")]),s._v(" Typescript 特性")]),s._v(" "),a("p",[a("strong",[s._v("ts")]),s._v(" 和 "),a("strong",[s._v("js")]),s._v(" 最大的区别就是 "),a("strong",[s._v("ts")]),s._v(" 多了"),a("strong",[s._v("类型注解")]),s._v('功能, 通过名字中的 "'),a("strong",[s._v("type")]),s._v('" 也能看出语言的重点在 "'),a("strong",[s._v("类型")]),s._v('" 上. 这个类型分为'),a("strong",[s._v("基础类型")]),s._v("和"),a("strong",[s._v("高级类型")]),s._v(", 高级类型就是通过"),a("strong",[s._v("基础类型")]),s._v("组成的"),a("strong",[s._v("自定义类型")])]),s._v(" "),a("h3",{attrs:{id:"基础类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 基础类型")]),s._v(" "),a("p",[a("strong",[s._v("ts")]),s._v(" 中包含了 "),a("strong",[s._v("boolean")]),s._v(" / "),a("strong",[s._v("number")]),s._v(" / "),a("strong",[s._v("string")]),s._v(" / "),a("strong",[s._v("object")]),s._v(" / "),a("strong",[s._v("数组(数组的表示有多种, 后续文章会展开)")]),s._v(" / "),a("strong",[s._v("元组")]),s._v(" / "),a("strong",[s._v("枚举")]),s._v(" / "),a("strong",[s._v("any")]),s._v(" / "),a("strong",[s._v("undefined")]),s._v(" / "),a("strong",[s._v("null")]),s._v(" / "),a("strong",[s._v("void")]),s._v(" / "),a("strong",[s._v("never")])]),s._v(" "),a("p",[a("strong",[s._v("any")]),s._v(" 是本文的重点, 一会会对他着重讲解.")]),s._v(" "),a("p",[a("strong",[a("em",[s._v("补充说明:")])]),s._v(" 上面列出的类型, 是 "),a("strong",[s._v("ts")]),s._v(" 中表示类型的关键字, 其中 "),a("strong",[s._v("object")]),s._v(" 其实是包含"),a("strong",[s._v("数组")]),s._v("/"),a("strong",[s._v("元祖")]),s._v("/"),a("strong",[s._v("枚举")]),s._v(", 在 "),a("strong",[s._v("ts")]),s._v(" 的概念中, 这个叫做"),a("strong",[s._v("类型兼容")]),s._v(", 就是说数组类型数据, 也可以用"),a("strong",[s._v("object")]),s._v("来标注:")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" array"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" object "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("321")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"高级类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级类型","aria-hidden":"true"}},[s._v("#")]),s._v(" 高级类型")]),s._v(" "),a("p",[s._v("大部分情况是对 "),a("strong",[s._v("object")]),s._v(" 类型做更细的标注, 此处不多讲, 先放个例子了解即可, 知道关键词 "),a("strong",[s._v("interface")]),s._v(' 即可, 中文名 "'),a("strong",[s._v("接口")]),s._v('", 后续章节会展开.')]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Article")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    title"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    content"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    tags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 数组里的元素都是字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"聪明的-vscode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聪明的-vscode","aria-hidden":"true"}},[s._v("#")]),s._v(" 聪明的 "),a("code",[s._v("vscode")])]),s._v(" "),a("p",[s._v("当我们使用 "),a("strong",[s._v("vscode")]),s._v(' 编辑器的时候, 编辑器会根据我们的 "'),a("strong",[s._v("类型注解")]),s._v('" 进行'),a("strong",[s._v("代码提示")]),s._v("和"),a("strong",[s._v("错误提示")]),s._v(":")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005IQkzXly1g4k65l94s1j30k909r0tk.jpg",alt:""}})]),s._v(" "),a("p",[s._v("类型写错了, 也会提示:")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://ws1.sinaimg.cn/large/005IQkzXly1g4k690h7d1j30qd06x0u7.jpg",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"开始实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始实践","aria-hidden":"true"}},[s._v("#")]),s._v(" 开始实践")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://nodejs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("安装 nodejs"),a("OutboundLink")],1)]),s._v(" "),a("li",[s._v("在命令行运行"),a("code",[s._v("npm i -g typescript")]),s._v(", 安装"),a("strong",[s._v("编译器")]),s._v("到全局.")]),s._v(" "),a("li",[s._v("安装"),a("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("vscode 编辑器"),a("OutboundLink")],1),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"开始写代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始写代码","aria-hidden":"true"}},[s._v("#")]),s._v(" 开始写代码")]),s._v(" "),a("h3",{attrs:{id:"生成-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-js","aria-hidden":"true"}},[s._v("#")]),s._v(" 生成 js")]),s._v(" "),a("ol",[a("li",[s._v("建立一个文件夹, 在里面新建一个 "),a("strong",[s._v("hello.ts")]),s._v(" 文件, 注意扩展名是 "),a("strong",[s._v("ts")]),s._v(".")]),s._v(" "),a("li",[s._v("用 "),a("strong",[s._v("vscode")]),s._v(" 打开 "),a("strong",[s._v("hello.ts")]),s._v(" 文件.")]),s._v(" "),a("li",[s._v("输入如下代码, 让我们体验下 "),a("strong",[s._v("ts")]),s._v(":")])]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"456"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[s._v("命令行进入文件夹, 执行命令")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npx tsc hello.ts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("好了我们可以看下文件内部多了一个 "),a("strong",[s._v("hello.js")]),s._v(" , 打开看看:")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"456"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('代码中的"'),a("strong",[s._v("类型注解")]),s._v('"不见了 ,我们的 '),a("code",[s._v("ts")]),s._v(" 被编译成 "),a("code",[s._v("js")]),s._v(" 了, 是不是很神奇.")]),s._v(" "),a("h3",{attrs:{id:"错误提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误提示","aria-hidden":"true"}},[s._v("#")]),s._v(" 错误提示")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interface")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误, 会提示b的类型错误, 应该为string类型")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("A")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("456")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"any-类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#any-类型","aria-hidden":"true"}},[s._v("#")]),s._v(" any 类型")]),s._v(" "),a("p",[s._v("any 代表任意类型, 这个类型特别适合 ts 新手, 初期有些类型不知道如何表达, 我们就可以"),a("strong",[s._v("暂时")]),s._v("使用 any 表达, 等熟练 ts 后再标注精准的类型.")]),s._v(" "),a("p",[s._v("下面的情况新手可能就不会了, 以为 n 标记为 number, 但是循环中 i 大于 5 的时候就是字符串了, 所以 ts 就会提示错误.")]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("number")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ts提示: 不能将类型“"100"”分配给类型“number”')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v('作为新手如果初期你不知道"'),a("strong",[s._v("联合类型")]),s._v('"这个概念, 你就可以直接把 '),a("strong",[s._v("n")]),s._v(" 标记为 "),a("strong",[s._v("any")])]),s._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 熟练后会是这么标记的")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// let n:string|number")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v(" n "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充","aria-hidden":"true"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[a("code",[s._v("Typescript")]),s._v("的配置文件 —— "),a("code",[s._v("tsconfig.json")]),s._v(" 放在你项目的根目录即可:")]),s._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// tsconfig.json仅供参考")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compilerOptions"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 不报告执行不到的代码错误。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"allowUnreachableCode"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 必须标注为null类型,才可以赋值为null")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strictNullChecks"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 严格模式, 强烈建议开启")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"strict"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 支持别名导入:")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// import * as React from "react"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"esModuleInterop"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标js的版本")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标代码的模块结构版本")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在表达式和声明上有隐含的 any类型时报错。")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"noImplicitAny"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除注释")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"removeComments"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 保留 const和 enum声明")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"preserveConstEnums"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 生成sourceMap")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sourceMap"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 目标文件所在路径")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"outDir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 编译过程中需要引入的库文件的列表")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"dom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"es7"')]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 额外支持解构/forof等功能")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"downlevelIteration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 是否生成声明文件")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"declaration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 声明文件路径")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"declarationDir"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 此处设置为node,才能解析import xx from 'xx'")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"moduleResolution"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 入口文件")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"include"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"src/main.ts"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),s._v(" "),a("comment-comment")],1)},[],!1,null,null,null);t.default=r.exports}}]);