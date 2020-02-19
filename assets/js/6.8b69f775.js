(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{225:function(t,s,n){t.exports=n.p+"assets/img/0024-01.80a79fcc.png"},226:function(t,s,n){t.exports=n.p+"assets/img/0024-02.a10c6a3c.png"},227:function(t,s,n){t.exports=n.p+"assets/img/0024-03.f8aea25d.png"},228:function(t,s,n){t.exports=n.p+"assets/img/0024-04.45f4ccff.png"},229:function(t,s,n){t.exports=n.p+"assets/img/0024-05.3310030f.png"},276:function(t,s,n){"use strict";n.r(s);var e=[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"题目：两两交换链表中的节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题目：两两交换链表中的节点","aria-hidden":"true"}},[this._v("#")]),this._v(" 题目：两两交换链表中的节点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("你不能只是单纯的改变节点内部的值")])]),this._v("，而是需要实际的进行节点交换。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("strong",[this._v("示例:")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("给定 1->2->3->4, 你应该返回 2->1->4->3.\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"解题思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解题思路","aria-hidden":"true"}},[this._v("#")]),this._v(" 解题思路")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这条题可以使用链表操作中最常用的一个概念：dummyHead(虚拟头节点)，如何使用如下图:\n"),s("img",{attrs:{src:n(225),alt:"0024-01.png"}}),s("br"),this._v("\n定义好一个虚拟节点后把它的"),s("code",[this._v("next")]),this._v("指向head，然后开始对链表进行循环操作，循环步骤如下：")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[t._v("先用一个"),e("code",[t._v("p")]),t._v("指向最开始的节点，然后判断"),e("code",[t._v("p.next")]),t._v("和"),e("code",[t._v("p.next.next")]),t._v("是否存在，同时存在才能进行两个节点交换\n"),e("img",{attrs:{src:n(226),alt:"0024-02.png"}}),e("br")]),t._v(" "),e("li",[t._v("把"),e("code",[t._v("p.next")]),t._v("和"),e("code",[t._v("p.next.next")]),t._v("缓存为"),e("code",[t._v("n1")]),t._v("和"),e("code",[t._v("n2")]),t._v("，同时把"),e("code",[t._v("n2")]),t._v("的"),e("code",[t._v("next")]),t._v("也取出来\n"),e("img",{attrs:{src:n(227),alt:"0024-03.png"}}),e("br")]),t._v(" "),e("li",[t._v("接下来是核心步骤，先把"),e("code",[t._v("n2.next")]),t._v("指向"),e("code",[t._v("n1")]),t._v("，"),e("code",[t._v("n1.next")]),t._v("指向next\n"),e("img",{attrs:{src:n(228),alt:"0024-04.png"}}),e("br"),t._v("\n两个节点交换完后好像可以进行下一次循环进行下一轮交换了？当然不是，不要忘记刚才的"),e("code",[t._v("p")]),t._v("节点，当"),e("code",[t._v("n1")]),t._v("和"),e("code",[t._v("n2")]),t._v("交换完后"),e("code",[t._v("p")]),t._v("和"),e("code",[t._v("n2")]),t._v("都同时指向"),e("code",[t._v("n1")]),t._v("，因此要进行更正把"),e("code",[t._v("p")]),t._v("指向"),e("code",[t._v("n2")]),t._v("，同时把"),e("code",[t._v("p")]),t._v("更新为"),e("code",[t._v("n1")]),t._v("，这样才可以对下一轮交换的节点进行判断\n"),e("img",{attrs:{src:n(229),alt:"0024-05.png"}}),e("br")]),t._v(" "),e("li",[t._v("重复上述步骤，当循环结束后返回"),e("code",[t._v("dummyHead.next")]),t._v("就是交换后的结果")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码实现")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("swapPairs")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("head")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dummyHead "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ListNode")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dummyHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" head"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummyHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" node1 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            node2 "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        node1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        p"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        p "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" node1\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" list "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" dummyHead"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("next"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    dummyHead "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" list\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],a=n(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),n("p",[t._v("来源：力扣（LeetCode）"),n("br"),t._v("\n链接："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/swap-nodes-in-pairs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://leetcode-cn.com/problems/swap-nodes-in-pairs/"),n("OutboundLink")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8)])},e,!1,null,null,null);s.default=r.exports}}]);