! function(e) {
	function t(o) {
		if(n[o]) return n[o].exports;
		var i = n[o] = {
			exports: {},
			id: o,
			loaded: !1
		};
		return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
	}
	var n = {};
	t.m = e, t.c = n, t.p = "", t(0)
}([function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	var i = n(1),
		r = o(i),
		a = n(3),
		s = o(a);
	angular.module("bootstrap", [r.default, s.default])
}, function(e, t, n) {
	"use strict";

	function o(e, t) {
		if(!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
	}

	function i() {
		return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function(e) {
			return navigator.userAgent.indexOf(e) < 0
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = function() {
			function e(e, t) {
				for(var n = 0; n < t.length; n++) {
					var o = t[n];
					o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
				}
			}
			return function(t, n, o) {
				return n && e(t.prototype, n), o && e(t, o), t
			}
		}(),
		a = n(2),
		s = function(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}(a),
		l = function() {
			function e() {
				o(this, e)
			}
			return r(e, [{
				key: "extend",
				value: function(e, t) {
					for(var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
				}
			}]), e
		}(),
		c = function() {
			function e(t) {
				o(this, e);
				var n = "ontouchend" in t.document,
					i = void 0;
				i = {
					start: n ? "touchstart" : "mousedown",
					move: n ? "touchmove" : "mousemove",
					end: n ? "touchend" : "mouseup",
					wheel: "mousewheel"
				}, this.event = i
			}
			return r(e, null, [{
				key: "$inject",
				get: function() {
					return ["$window"]
				}
			}]), e
		}(),
		u = function() {
			function e() {
				o(this, e)
			}
			return r(e, [{
				key: "stop",
				value: function(e) {
					document.querySelector("body").addEventListener(e.event.start, function(e) {
						i() || !i() && "A" == e.target.nodeName || e.preventDefault()
					})
				}
			}]), e
		}(),
		d = function() {
			function e() {
				o(this, e)
			}
			return r(e, [{
				key: "init",
				value: function() {
					var e = document.querySelectorAll(".dock-fill"),
						t = document.createElement("div");
					t.classList.add("-arrow"), e[0].appendChild(t)
				}
			}, {
				key: "destroy",
				value: function() {
					var e = document.querySelector(".-arrow");
					e.parentNode.removeChild(e)
				}
			}]), e
		}();
	t.default = angular.module("appServices", []).constant("resumeData", s.default).service("actionEvent", c).service("stopIosDropDown", u).service("dataExtend", l).service("initArrow", d).name
}, function(e, t) {
	e.exports = {
		cn: {
			header: {
				langList: ["中", "英"],
				titleList: [{
					svg: "img/d_home.svg",
					title: "首页"
				}, {
					svg: "img/d_info.svg",
					title: "关于我"
				}, {
					svg: "img/d_skills.svg",
					title: "技能栈"
				}, {
					svg: "img/d_exp.svg",
					title: "经历"
				}, {
					svg: "img/d_works.svg",
					title: "作品集"
				}, {
					svg: "img/d_contact.svg",
					title: "联系我"
				}]
			},
			footer: {},
			default: {
				quote: "只有不断前行，才能不断成长",
				desList: ["我叫温思远", "应聘职位:前端开发工程师", "邮箱:siyuanseven@qq.com"]
			},
			info: {
				title: "关于我",
				infoList: [{
					icon: "img/i_age.svg",
					key: "年龄",
					value: "23岁"
				}, {
					icon: "img/i_edu.svg",
					key: "学历",
					value: "本科"
				}, {
					icon: "img/i_site.svg",
					key: "坐标",
					value: "深圳"
				}, {
					icon: "img/i_status.svg",
					key: "状态",
					value: "离职"
				}],
				desList: ["三年前端开发经验", "熟悉MV*开发,模块化开发", "高效的自学能力,具备独立分析解决问题能力", "强烈的自我驱动力,代码强迫症患者"]
			},
			skill: {
				title: "技能栈",
				outCircleList: [{
					color: "rgba(121,100,102,0.8)",
					name: "HTML5"
				}, {
					color: "rgba(49,65,82,0.8)",
					name: "vue2.0"
				}, {
					color: "rgba(76,157,160,0.8)",
					name: "webpack"
				}, {
					color: "rgba(66,66,66,0.8)",
					name: "less"
				}, {
					color: "rgba(193,131,106,0.8)",
					name: "BootStrap"
				}, {
					color: "rgba(117,148,179,0.8)",
					name: "svn"
				}, {
					color: "rgba(71,83,94,0.8)",
					name: "require.js"
				}, {
					color: "rgba(147,147,189,0.8)",
					name: "Flex"
				}],
				innerCircleList: [{
					color: "rgba(179,164,140,0.8)",
					name: "ES6"
				}, {
					color: "rgba(171,209,220,0.8)",
					name: "Git"
				}, {
					color: "rgba(238,215,163,0.8)",
					name: "Ajax"
				}, {
					color: "rgba(207,184,178,0.8)",
					name: "jQuery"
				}],
				desList: ["擅长书写原生js","擅长SE0优化","擅长Vue2.0组件开发",  "常驻前端开发","编码常思其健壮性，扩展性，维护性"]
			},
			works: {
				title: "作品集",
				worksList: [{
					title: "基于vue2.0+vuex开发的简书项目",
					des: "学习了vue之后 因为对简书官网的喜爱 所以就写了个简书官网 因为是业余时间来做的 所以周期有点长 从项目布局到成大概用了一个月 目前项目已经完成 正在进行一些性能的优化 增加详细的注释",
					url: "https://github.com/wensiyuanseven/SimpleBooks"
				}, {
					title: "房多多社区",
					des: "房多多社区,大家可以交流买房心得、购房信息、最新楼盘、二手房源、收房验房等信息,同时  还会  有房多      多小区专家、交易专家、金融业务人员答疑解惑 的一个交流平台",
					url: "http://www.fangdd.com/group/shenzhen"
				}, {
					title: "基于PHP+mysql写的前后台录入系统",
					des: "此项目实现了数据的增删改查和前台数据的实时更新  后台对数据的管理 和前台文章的展示 搜索文章 对文章的发布，管理，修改，删除 等功能",
					url: "https://github.com/wensiyuanseven/Article-entry"
				}, {
					title: "响应式金融网站",
					des: "普通性的各类金融网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习 性进行详细分析策划，使用gulp打包上线 制定出一套适合企业自身的网站建设的设计风格方案",
					url: "http://8.siyuanseven.applinzi.com/wensiyuan/index.html"
				}],
				viewMore: "github上面查看更多"
			},
			experience: {
				title: "经历",
				expList: [{
					title: "深圳市房多多网络科技有限公司",
					time: "2016年1月~2017年5月",
					post: "web前端工程师",
					imgUrl: "img/e_js.svg",
					tech: "技术:Vue2.0 less webpack 原生js及若干类库 ElementUI",
					contentList: ["根据产品需求设计并开发基于Vue2.0的前端网站页面", "根据业务需求设计合适的工程项目", "高度组件化、模块化思维，拥有各平台调试能力", "同期学习ES6及Vue,体会模块化编程思想"]
				}, {
					title: "河南聚金金融服务有限公司",
					time: "2014年6月~2015年11月",
					post: "web前端工程师",
					imgUrl: "img/e_html.svg",
					tech: "html5,css3,javascript,jquery,bootstrap等",
					contentList: ["根据产品UI和交互方面的开发需求", "负责网页产品的前端展示效果开发，配合后台开发人员实现网站动态功能 ", "负责优化代码并保持良好的ie6+、Chrome、firefox等浏览器兼容性", "负责前端效果调优，前端体验优化"]
				}, {
					title: "我是温思远",
					time: "毕业于华北水利水电大学",
					post: "喜欢挑战新事物",
					imgUrl: "img/e_seo.svg",
					tech: "前端即兴趣，兴趣即未来",
					contentList: ["带上我吧，一起看到更大的世界"]
				}],
				des: ""
			},
			contact: {
				title: "联系我",
				desList1: ["灵感", "代码", "梦想", "未来"],
				desList2: ["注重效率，偏爱敏捷开发", "喜欢尝试，期待新鲜事物", "前端即兴趣，兴趣即未来", "行路有良友，便是捷径", "手机:18339269503", "邮箱:siyuanseven@qq.com ", "带上我吧，一起看到更大的世界"],
				download: "",
				fileList: [{
					title: "HTML版",
					url: "www.baidu.com"
				}, {
					title: "PDF版",
					url: "www.baidu.com"
				}],
				typeList: [{
					icon: "",
					url: ""
				}, {
					icon: "",
					url: ""
				}, {
					icon: "img/s_github.svg",
					url: "https://github.com/wensiyuanseven"
				}, {
					icon: "",
					url: ""
				}, {
					icon: "",
					url: ""
				}]
			}
		},
		en: {
			header: {
				langList: ["CN", "EN"],
				titleList: [{
					svg: "img/d_home.svg",
					title: "home"
				}, {
					svg: "img/d_info.svg",
					title: "about"
				}, {
					svg: "img/d_skills.svg",
					title: "skills"
				}, {
					svg: "img/d_exp.svg",
					title: "exp"
				}, {
					svg: "img/d_works.svg",
					title: "works"
				}, {
					svg: "img/d_contact.svg",
					title: "contact"
				}]
			},
			footer: {},
			default: {
				quote: "Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",
				desList: ["I am Zhao Keyu", "A front-end R & D engineer", "zhaoky2016@163.com"]
			},
			info: {
				title: "About Me",
				infoList: [{
					icon: "img/i_age.svg",
					key: "Age",
					value: "23"
				}, {
					icon: "img/i_edu.svg",
					key: "Edu.",
					value: "B.S."
				}, {
					icon: "img/i_site.svg",
					key: "Add.",
					value: "ChengDu"
				}, {
					icon: "img/i_status.svg",
					key: "Status",
					value: "On Job"
				}],
				desList: ["Three years of Internet experience, two and a half years full-time front-end development experience", "Familiar with MV * development, well versed in automation, modular development of the road", "Efficient self-learning ability, with independent analysis to solve problems", "Strong self-driving force, the code OCD"]
			},
			skill: {
				title: "Skills",
				outCircleList: [{
					color: "rgba(121,100,102,0.8)",
					name: "gulp"
				}, {
					color: "rgba(49,65,82,0.8)",
					name: "angular"
				}, {
					color: "rgba(76,157,160,0.8)",
					name: "webpack"
				}, {
					color: "rgba(66,66,66,0.8)",
					name: "less"
				}, {
					color: "rgba(193,131,106,0.8)",
					name: "git"
				}, {
					color: "rgba(117,148,179,0.8)",
					name: "nodejs"
				}, {
					color: "rgba(71,83,94,0.8)",
					name: "cordova"
				}, {
					color: "rgba(147,147,189,0.8)",
					name: "react"
				}],
				innerCircleList: [{
					color: "rgba(179,164,140,0.8)",
					name: "es6"
				}, {
					color: "rgba(171,209,220,0.8)",
					name: "vue"
				}, {
					color: "rgba(238,215,163,0.8)",
					name: "ng2"
				}, {
					color: "rgba(207,184,178,0.8)",
					name: "fp"
				}],
				desList: ["Skilled use of angularJs1.x and encapsulate all kinds of libraries", "Permanent PC / APP / WeChat three platform front-end research and development", "Good at component / plugin development, can be written out of the library to write JS code", "Coding thinking robustness/scalability/maintainability"]
			},
			works: {
				title: "Works",
				worksList: [{
					title: "Web front engineer resumes (2015)",
					des: "The first edition of this resume, on the line a month later, Baidu keyword 'web front engineer resumes' ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.",
					url: "http://www.flqin.com/2015/"
				}, {
					title: "Campus APP",
					des: "One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.",
					url: "http://app.cufe.edu.cn/"
				}, {
					title: "campus management system",
					des: "According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.",
					url: "http://www.app8848.com/cloud_mgr/#/user/login"
				}, {
					title: "Enterprise official website",
					des: "Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.",
					url: "http://www.lantunet.com"
				}],
				viewMore: "Go github to see more"
			},
			experience: {
				title: "Experience",
				expList: [{
					title: "LANTU TECH",
					time: "2015.06~now",
					post: "Web front-end R & D engineers",
					imgUrl: "img/e_js.svg",
					tech: "less gulp angular1.x cordova javascript and some libraries",
					contentList: ["Responsible for the rapid construction of high-quality APP / PC / WeChat page", "According to business needs to design the appropriate project", "Highly component, modular thinking, with the platform debugging capabilities", "Learning ES6 and vue, react, ng2, experience the function of programming ideas"]
				}, {
					title: "Zhuohuang Management Co., Ltd",
					time: "2014.08~2015.06",
					post: "Web development and SEO",
					imgUrl: "img/e_html.svg",
					tech: "html5,css3,javascript,jquery,bootstrap",
					contentList: ["Responsible for enterprise station static page development", "Responsible for website background maintenance", "Responsible for Baidu bid operation and seo optimization", "Outside of work to enhance their own javascript coding ability"]
				}, {
					title: "106 Culture Co., Ltd.",
					time: "2014.03~2014.08",
					post: "SEO",
					imgUrl: "img/e_seo.svg",
					tech: "SEO,SEM,Baidu (360, Sogou) bid, promotion",
					contentList: ["Responsible for site background maintenance, new media marketing and promotion", "Responsible for Baidu PPC background adjustment", "Get the best new person award", "The same period of work began to self-learning web front-end technology"]
				}],
				des: "In early 2014, to abandon the network engineer position, began front self-study career."
			},
			contact: {
				title: "Contact Me",
				desList1: ["INSPIRATION", "CODE", "DREAM", "FUTURE"],
				desList2: ["Focus on efficiency, preference for agile development", "Like to try, look forward to something new", "Front is interested, interest is the future", "Line road friends, is a shortcut", "With me, see the bigger world together"],
				download: "Download Resume",
				fileList: [{
					title: "HTML",
					url: "www.baidu.com"
				}, {
					title: "PDF",
					url: "www.baidu.com"
				}],
				typeList: [{
					icon: "img/s_github.svg",
					url: "https://github.com/wensiyuanseven/SimpleBooks"
				}, {
					icon: "img/s_sf.svg",
					url: "https://segmentfault.com/u/keyu2016"
				}, {
					icon: "img/s_blog.svg",
					url: "http://blog.sina.com.cn/u/5901265743"
				}, {
					icon: "img/s_zh.svg",
					url: "http://blog.sina.com.cn/u/5901265743"
				}, {
					icon: "img/s_wb.svg",
					url: "http://blog.sina.com.cn/u/5901265743"
				}]
			}
		}
	}
}, function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}

	function i() {}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var r = n(4),
		a = o(r),
		s = n(5),
		l = o(s),
		c = n(6),
		u = o(c);
	t.default = angular.module("zkyResume", [a.default, l.default, u.default]).component("zkyResume", {
		templateUrl: "components/zkyResume/cmpt.html",
		controllerAs: "zr",
		controller: i
	}).name
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.header), i.pageIndex = 0, i.selectedLang = 1, n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.header : t.cn.header;
			e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rHeader", []).component("resumeHeader", {
		templateUrl: "components/rHeader/cmpt.html",
		controller: n,
		bindings: {
			pageIndex: "="
		}
	}).directive("showNav", ["actionEvent", function(e) {
		function t(t, n) {
			function o() {
				i.isShowNav = !i.isShowNav, t.$apply()
			}
			var i = t.$ctrl;
			n[0].addEventListener(e.event.start, o)
		}
		return {
			restrict: "A",
			link: t
		}
	}]).directive("switchLang", ["actionEvent", "$rootScope", function(e, t) {
		function n(n, o) {
			function i(e) {
				"SPAN" === e.target.nodeName && (r.selectedLang = Number(e.target.dataset.index) + 1, n.$apply(), t.$broadcast("switchLang", r.selectedLang))
			}
			var r = n.$ctrl;
			o[0].addEventListener(e.event.start, i)
		}
		return {
			restrict: "A",
			link: n
		}
	}]).directive("selectedNavItem", ["resumeData", "actionEvent", function(e, t) {
		function n(n, o) {
			function i(t) {
				"EM" == t.target.nodeName && (+t.target.dataset.index !== r.pageIndex && !e.moving && (r.pageIndex = +t.target.dataset.index), r.isShowNav = !1, n.$apply())
			}
			var r = n.$ctrl;
			o[0].addEventListener(t.event.start, i)
		}
		return {
			restrict: "A",
			link: n
		}
	}]).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n() {}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rFooter", []).component("resumeFooter", {
		templateUrl: "components/rFooter/cmpt.html",
		controllerAs: "rf",
		controller: n
	}).name
}, function(e, t, n) {
	"use strict";

	function o(e) {
		return e && e.__esModule ? e : {
			default: e
		}
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	});
	var i = n(7),
		r = o(i),
		a = n(8),
		s = o(a),
		l = n(9),
		c = o(l),
		u = n(10),
		d = o(u),
		m = n(11),
		p = o(m),
		g = n(12),
		f = o(g);
	t.default = angular.module("rMain", [r.default, s.default, c.default, d.default, p.default, f.default]).directive("resumeMain", ["initArrow", "stopIosDropDown", "$timeout", "resumeData", "actionEvent", function(e, t, n, o, i) {
		function r(r, a) {
			function s(e) {
				b || e.wheelDelta < 0 && h == k - 1 || e.wheelDelta > 0 && 0 == h || (e.wheelDelta < 0 ? h++ : h--, p(h))
			}

			function l(e) {
				b || "touchstart" != e.type || (y = e.changedTouches[0].pageY, a[0].addEventListener(i.event.move, c))
			}

			function c(e) {
				b || (w = e.changedTouches[0].pageY - y) < 0 && h == k - 1 || w > 0 && 0 == h || (g(), a[0].addEventListener(i.event.end, u))
			}

			function u() {
				b || (Math.abs(w) < 100 ? m() : p(L))
			}

			function d() {
				b = !1, o.moving = b, f(), a[0].removeEventListener("touchmove", c), a[0].removeEventListener("touchend", u)
			}

			function m() {
				var e = a[0].querySelectorAll(".page-section");
				e[L].style.transform = "", e[L].style.transition = "transform 0.5s", e[w < 0 ? L - 1 : L + 1].style.transform = "", e[w < 0 ? L - 1 : L + 1].style.transition = "transform 0.5s", e[L].addEventListener("webkitTransitionEnd", d)
			}

			function p(e) {
				r.$apply(function() {
					r.pageIndex = e
				})
			}

			function g() {
				var e = a[0].querySelectorAll(".page-section");
				L = w < 0 ? h + 1 : h - 1, e[L].classList.add("touch-page"), e[L].style.transform = w < 0 ? "translateY(" + (a[0].offsetHeight + w) + "px)" : "translateY(" + (-a[0].offsetHeight + w) + "px)", e[w < 0 ? L - 1 : L + 1].style.transform = "translateY(" + w + "px)"
			}

			function f() {
				var e = a[0].querySelectorAll(".page-section");
				e = Array.prototype.slice.call(e), e.forEach(function(e, t) {
					e.classList.remove("prev-page", "active", "next-page", "cur-page", "touch-page"), e.style.transform = "", e.style.transition = "", 0 !== h && t == h - 1 && e.classList.add("prev-page"), t == h && e.classList.add("cur-page"), h !== k - 1 && t == h + 1 && e.classList.add("next-page"), e.removeEventListener("webkitTransitionEnd", d)
				}), a[0].querySelectorAll(".-arrow")[0].style.display = h == k - 1 ? "none" : "block"
			}

			function v() {
				console.log("Hi! 朋友，感谢您愿意调试简历代码。\n本简历采用ES6,angularJS 1.x,gulp,less,webpack开发构建。\n源码已开源在（https://github.com/zhaoky/flqin),喜欢请点个star吧！ \n如果您有什么建议或者想学习前端，欢迎您加入我们,我们互相学习，共同进步^_^ \n%c QQ小群(http://t.cn/RtlQbTq)", "color: red")
			}
			var h = 0,
				b = void 0,
				y = void 0,
				w = void 0,
				L = void 0,
				x = a[0].querySelectorAll(".page-section"),
				k = x.length;
			! function() {
				a[0].classList.add("dock-fill"), x[0].classList.add("cur-page"), x[h + 1].classList.add("next-page"), e.init(), t.stop(i), v(), a[0].addEventListener(i.event.start, l), a[0].addEventListener("mousewheel", s)
			}(), r.$watch("pageIndex", function(e, t) {
				var i = a[0].querySelectorAll(".page-section");
				if(!b && void 0 !== e) {
					var r = +e;
					if(b = void 0 !== t, o.moving = b, Math.abs(r - t) > 1) {
						new Promise(function(e) {
							i[r].style.display = "block", i[r].style.transform = r > t ? "translateY(100%)" : "translateY(-100%)", n(function() {
								e()
							}, 200)
						}).then(function() {
							i[r].classList.add("active"), i[r].style.display = "", void 0 !== t && (i[t].style.transform = r > t ? "translateY(-100%)" : "translateY(100%)", i[t].style.transition = "transform 0.5s")
						})
					} else 1 == Math.abs(r - t) && (i[r].classList.add("active"), void 0 !== t && (i[t].style.transform = r > t ? "translateY(-100%)" : "translateY(100%)", i[t].style.transition = "transform 0.5s"));
					h = r, i[r].addEventListener("webkitTransitionEnd", d)
				}
			}), r.$on("$destroy", function() {
				e.destroy(), a[0].removeEventListener("touchstart", l), a[0].removeEventListener("mousewheel", s)
			})
		}
		return {
			restrict: "E",
			link: r,
			template: "<div ng-transclude></div>",
			transclude: !0,
			replace: !0,
			scope: {
				pageIndex: "="
			}
		}
	}]).name
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.contact), n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.contact : t.cn.contact;
			i.isEng = 2 == Number(r), e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rContact", []).component("resumeContact", {
		templateUrl: "components/_rContact/cmpt.html",
		controller: n
	}).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.default), n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.default : t.cn.default;
			e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rDefault", []).component("resumeDefault", {
		templateUrl: "components/_rDefault/cmpt.html",
		controller: n
	}).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.works), n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.works : t.cn.works;
			i.isEng = 2 == Number(r), e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rWorks", []).component("resumeWorks", {
		templateUrl: "components/_rWorks/cmpt.html",
		controller: n
	}).directive("switchWork", ["actionEvent", function(e) {
		function t(t, n, o) {
			function i(e) {
				"I" === e.target.nodeName && (a += "-left" == e.target.className ? 90 : -90, r.style.transform = "rotateY(" + a + "deg)")
			}
			var r = document.body.querySelector(".-work-list"),
				a = 0;
			n[0].addEventListener(e.event.start, i)
		}
		return {
			link: t
		}
	}]).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.experience), i.curIndex = 0, i.exp = i.expList[i.curIndex], n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.experience : t.cn.experience;
			i.isEng = 2 == Number(r), e.extend(i, a), i.exp = i.expList[0], o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rExperience", []).component("resumeExperience", {
		templateUrl: "components/_rExperience/cmpt.html",
		controller: n,
		bindings: {
			pageIndex: "<"
		}
	}).directive("touchThreeD", ["$window", "actionEvent", function(e, t) {
		function n(n, o) {
			function i(e) {
				var t = e.pageX,
					n = e.pageY,
					i = t - c - s / 2,
					r = l / 2 - n + u + 140;
				o[0].style.transform = "rotateY(" + i / 50 + "deg) rotateX(" + r / 50 + "deg)"
			}

			function r(e) {
				o[0].style.transform = "rotateY(0deg) rotateX(0deg)"
			}

			function a() {
				c = o[0].offsetLeft, u = o[0].offsetTop
			}
			var s = void 0,
				l = void 0,
				c = void 0,
				u = void 0;
			n.$watch("$parent.$parent.pageIndex", function(e) {
				3 === Number(e) && (s = o[0].offsetWidth, l = o[0].offsetHeight, c = o[0].offsetLeft, u = o[0].offsetTop)
			}), o[0].addEventListener(t.event.move, i), o[0].addEventListener("mouseout", r), e.onresize = a
		}
		return {
			restrict: "A",
			link: n
		}
	}]).directive("switchExp", ["actionEvent", function(e) {
		function t(t, n) {
			function o(e) {
				"LI" == e.target.nodeName && e.target.dataset.index !== r.curIndex && (r.curIndex = e.target.dataset.index, a.style.opacity = "0", a.addEventListener("webkitTransitionEnd", i))
			}

			function i() {
				a.style.opacity = "1", t.$apply(function() {
					r.exp = r.expList[r.curIndex]
				}), a.removeEventListener("webkitTransitionEnd", i)
			}
			var r = t.$ctrl,
				a = document.body.querySelectorAll(".-experience-content")[0];
			r.cutList = new Array(3), n[0].addEventListener(e.event.start, o)
		}
		return {
			link: t
		}
	}]).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.info), n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.info : t.cn.info;
			i.isEng = 2 == Number(r), e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rInfo", []).component("resumeInfo", {
		templateUrl: "components/_rInfo/cmpt.html",
		controller: n
	}).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}, function(e, t) {
	"use strict";

	function n(e, t, n, o) {
		var i = this;
		e.extend(i, t.cn.skill), n.$on("switchLang", function(n, r) {
			var a = 2 == Number(r) ? t.en.skill : t.cn.skill;
			i.isEng = 2 == Number(r), e.extend(i, a), o.$apply()
		})
	}
	Object.defineProperty(t, "__esModule", {
		value: !0
	}), t.default = angular.module("rSkill", []).component("resumeSkill", {
		templateUrl: "components/_rSkill/cmpt.html",
		controller: n
	}).name, n.$inject = ["dataExtend", "resumeData", "$rootScope", "$scope"]
}]);