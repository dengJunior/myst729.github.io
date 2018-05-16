(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{94:function(t,e,i){"use strict";i.r(e);var s=i(0),r=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),i("p",[t._v("在 Git 里面我们最常碰到的一种 hash 就是 commit hash。搜一搜百度，很容易找到答案：commit hash 是标识一次提交的唯一编码。就这么简单？是的，就这么简单。但我们想要更进一步，聊一聊它是如何产生的。")]),t._m(5),t._m(6),i("p",[t._v("是不是有种一头雾水的感觉？没关系，我们来实际操作一下。打开命令行工具，输入以下内容：")]),t._m(7),t._m(8),i("p",[t._v("可以看到字符串 leo 的哈希结果是 d26b7dc799f87e5db23f303bc27a616219e2d204。")]),i("p",[t._v("如果把这段内容保存到一个文件里再哈希呢？")]),t._m(9),i("p",[t._v("结果完全一样。试试不同的内容？")]),t._m(10),i("p",[t._v("给的内容不一样，哈希结果就变了。")]),i("p",[t._v("Git 所使用的哈希算法可以对包括 commit 在内的任意对象生成这样一个长度为 40 字符的编码，而且不同的内容，编码结果也不一样，这就是为什么 commit hash 可以唯一的标识一次提交。那么有人就问了，40 个字符虽然可以组合出非常多的字符串，但也是有限的呀，会不会出现不同的内容编码后产生了相同的结果？理论上当然是可能的。然而目前用 Git 管理源代码的规模最大的开源项目——Linux 内核——在经历了近 70 万次提交后，也只需要用到这个编码的前 12 位，就可以对号入座了。因此，哈希碰撞的问题在 Git 里面实在太遥远了，我们暂时（根本）不用想太多。")]),t._m(11),i("p",[t._v("我们的目录里已经有两个文件了，现在来创建一个 Git 仓库吧。")]),t._m(12),i("p",[t._v("这会在当前目录下创建一个名为 .git 的隐藏目录，这就是记录 Git 仓库信息的地方。打开这个目录，里面还有一个 objects 目录，看名字应该是存一些对象的地方。不过现在除了 info 和 pack 两个空目录，这里什么都没有。")]),t._m(13),i("p",[t._v("别急，刚才不是创建了两个文件吗？先提交一个到仓库里。")]),t._m(14),t._m(15),t._m(16),i("p",[t._v("回到我们刚才打开的 .git/objects 目录，一下多出来三个文件夹！")]),t._m(17),i("p",[t._v("其中 35 目录下面有一个文件是 d2a099cee18e853990cc84a79b8cbacc85f824，文件夹和文件的名字拼起来正好是我们第一次提交的 commit hash。这里面会不会就记录了我们刚才这次提交的信息？")]),t._m(18),t._m(19),t._m(20),i("p",[t._v("可以看到这个哈希对象的类型是 commit，我们猜得没错。")]),t._m(21),i("p",[t._v("对象的内容除了作者、提交者、提交说明等基本信息，还有一条重要的信息——又一个 40 字符的哈希编码——743bbf4931e075b3ec6fc7d0836c112eb9b72dab。刚才我们还纳闷，明明一次提交，怎么多出来三个哈希文件，没想到这里就碰到了其中一个。还有，看到 tree 这个类型，我们很容易联想到 shell 命令 tree，那这个对象里面是不是保存了文件的列表？看看。")]),t._m(22),t._m(23),t._m(24),i("p",[t._v("这是三个哈希对象之间的关系：")]),t._m(25),i("p",[t._v("如上图，commit 对象 35d2a09 包含一个指向仓库根目录的 tree 对象 743bbf4，这个 tree 对象又包含一个文件名为 leo.txt 的 blob 对象 d26b7dc。用我们最熟悉的语言再说一遍就是，仓库根目录下有一个内容是字符串 leo 的文件 leo.txt。是不是非常准确地反映了发生提交时仓库的状态？")]),t._m(26),i("p",[t._v("接下来，我们把 deng.txt 文件放到一个 sub 目录下面，准备进行第二次提交。")]),t._m(27),t._m(28),t._m(29),i("p",[t._v("去 .git/objects 目录下看看：")]),t._m(30),t._m(31),t._m(32),t._m(33),t._m(34),i("p",[t._v("可以看到，除了 acdfb0e，又增加了三个新的哈希对象，也就是说这一次提交一共增加了四个哈希对象。")]),t._m(35),i("p",[t._v("我们顺着 commit hash，挨个看看多了些什么东西。")]),t._m(36),t._m(37),t._m(38),t._m(39),t._m(40),i("p",[t._v("一个 commit，两个 tree。新增了一个文件，却没有产生新的 blob 对象，而是尽可能复用已有的对象，Git 的实现还是很聪明的。")]),i("p",[t._v("到目前为止，三次提交，十个哈希对象，我们可以整理出一张完整的关系图。")]),t._m(41),i("p",[t._v("现在，我们终于可以下一个结论：Git 的 history 就是所有这些哈希对象构成的有向图。其中每一个 commit 对象都精确地记录了它被创建时的仓库目录结构和文件内容，这就是 Git 实现版本管理的基础。")]),t._m(42),i("p",[t._v("到这里，我们了解了 Git 的 hash、commit、history 的实质。"),i("router-link",{attrs:{to:"/posts/2017/git-inside-simplified-part-2.html"}},[t._v("下一篇")]),t._v("我们继续聊聊 branch、tag 和其他一些习以为常却大有文章的东西。")],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git-inside-simplified-part-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-inside-simplified-part-1","aria-hidden":"true"}},[this._v("#")]),this._v(" git inside --simplified --part 1")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("本文并非 Git 入门指南，而是面向已经掌握 Git 常规操作的开发者。如果你还是新手，或者不知道 Git 是什么，请在浏览器地址栏输入 "),e("a",{attrs:{href:"https://try.github.io/",target:"_blank",rel:"noopener noreferrer"}},[this._v("try.github.io")]),this._v("，回车。除此之外，你最好已经掌握一些常用的 shell 命令。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-git-commit.jpg",alt:"git-commit"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果要票选日常使用最频繁的 Git 命令，我想 "),e("code",[this._v("git commit")]),this._v(" 排第一恐怕不会有太大争议。那么问题来了，一次 "),e("code",[this._v("git commit")]),this._v(" 操作背后到底发生了些什么？神秘的字符串又有什么含义？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"hash-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" Hash 是什么？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("为了回答这个问题，我们要用到一个平常几乎不会接触的 Git 管道命令 "),e("a",{attrs:{href:"https://git-scm.com/docs/git-hash-object",target:"_blank",rel:"noopener noreferrer"}},[e("code",[this._v("hash-object")])]),this._v("。Git 官方文档对这个命令的介绍是：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Compute object ID and optionally creates a blob from a file")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("pre",{pre:!0,attrs:{class:"language-bash"}},[i("code",[i("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),i("span",{attrs:{class:"token string"}},[t._v("'leo'")]),t._v(" "),i("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),i("span",{attrs:{class:"token function"}},[t._v("git")]),t._v(" hash-object --stdin\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-hash-object-1.png",alt:"hash-object"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-hash-object-2.png",alt:"hash-object"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-hash-object-3.png",alt:"hash-object"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"commit-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commit-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" Commit 是什么？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-init.png",alt:"init"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-objects-1.png",alt:"objects"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-commit.png",alt:"commit"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("看到 35d2a09 这个字符串了吗？其实这只是 commit hash 的前七位，这是 Git 默认的短码长度。我们可以通过 "),e("code",[this._v("git log")]),this._v(" 命令看到完整的 commit hash——35d2a099cee18e853990cc84a79b8cbacc85f824。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-log.png",alt:"log"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-objects-2.png",alt:"objects"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("怎么看呢？我们试试另一个 Git 管道命令 "),e("a",{attrs:{href:"https://git-scm.com/docs/git-cat-file",target:"_blank",rel:"noopener noreferrer"}},[e("code",[this._v("cat-file")])]),this._v("，官方文档对它的介绍是：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Provide content or type and size information for repository objects")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-cat-file-1.png",alt:"cat-file-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-cat-file-2.png",alt:"cat-file-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-cat-file-3.png",alt:"cat-file-3"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("果然，第三个哈希对象也出现了，类型是 blob，对应的文件正是我们刚才提交的 leo.txt。如果你记忆力够好的话，肯定已经注意到了，这个 blob 的哈希编码跟我们最开始执行 "),e("code",[this._v("echo 'leo' | git hash-object --stdin")]),this._v(" 的结果是相同的。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-cat-file-4.png",alt:"cat-file-4"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-commit-topology-1.png",alt:"commit-topology-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"history-是什么？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#history-是什么？","aria-hidden":"true"}},[this._v("#")]),this._v(" History 是什么？")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-second.png",alt:"second"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("执行 "),e("code",[this._v("git add")]),this._v(" 命令，再执行 "),e("code",[this._v("git status")]),this._v(" 可以看到这样的信息：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-staged.png",alt:"staged"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-staged-object-1.png",alt:"staged-object-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("只是 "),e("code",[this._v("git add")]),this._v(" 就多出来一个新的哈希对象，赶紧看看是什么。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-staged-object-2.png",alt:"staged-object-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("并不意外，类型是 blob，内容是 deng，正是 sub/deng.txt 文件保存的内容。由此可见，一个提交所包含的这些哈希对象并不全是在发生提交的时候才生成。继续执行 "),e("code",[this._v("git commit")]),this._v(" 完成第二次提交，得到一个新的 commit hash。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-second-commit.png",alt:"second-commit"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-second-objects-1.png",alt:"second-objects-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-second-objects-2.png",alt:"second-objects-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("第二次提交的哈希对象多了一个 parent，正是第一次提交的 commit hash。结合我们已有的 Git 知识，两个 commit 对象之间的关系已经不言自明。")]),e("li",[this._v("一个新的 tree 对象 46aea95，其中包含了第一次提交产生的 blob 对象 d26b7dc，以及另一个子目录 sub 的 tree 对象 885c65c。")]),e("li",[this._v("885c65c 的内容是刚才 "),e("code",[this._v("git add")]),this._v(" 时生成的 blob 对象 acdfb0e。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("原来如此。接下来我们把 leo.txt 复制一份到 sub 目录，进行第三次提交。这一次 "),e("code",[this._v("git add")]),this._v(" 之后，.git/objects 目录下并没有产生新的哈希对象。这不难理解，因为相同的内容在第一次提交已经被哈希过，两个内容相同的 leo.txt 在 Git 看来是完全相同的。继续完成提交，这一次又产生三个新的哈希对象。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-third-objects-1.png",alt:"third-objects-1"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-third-objects-2.png",alt:"third-objects-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://myst729.github.io/blog/images/2017/06/git1-commit-topology-2.png",alt:"commit-topology-2"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结","aria-hidden":"true"}},[this._v("#")]),this._v(" 小结")])}],!1,null,null,null);e.default=r.exports}}]);