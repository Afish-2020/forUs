webpackJsonp([1],{38:function(n,e,t){t(82);var r=t(37)(t(40),t(91),"data-v-bd26cd6c",null);n.exports=r.exports},40:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(23),a=t.n(r),o=t(44),u=t.n(o),s=t(43),i=t.n(s),c=t(89),l=t.n(c),d=t(80),f=(t.n(d),function(){for(var n=navigator.userAgent,e=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,r=0;r<e.length;r++)if(n.indexOf(e[r])>0){t=!1;break}}(),function(n,e){var t=new Date(Date.parse(n.replace(/-/g,"/"))).getTime(),r=new Date(Date.parse(e.replace(/-/g,"/"))).getTime();return Math.abs(t-r)/864e5});e.default={name:"app",components:{ResumeEditor:l.a},data:function(){return{interval:27,currentStyle:"",enableHtml:!1,currentMarkdown:"",fullMarkdown:"Yu × Lang\n----\n\n2016年02月09日，即大年初二凌晨，我们在一起啦！\n已有 "+(f((new Date).getFullYear()+"-"+((new Date).getMonth()+1)+"-"+(new Date).getDate(),"2016-02-09")+1)+" 天了\n\n还记得为你写的诗吗？\n----\n\n* 长路漫漫\n* 唯剑做伴\n* 金戈铁马\n* 陪你潇洒\n* 时光不老\n* 我们不散\n* 2016.4.22\n*\n* 片片红霞飘天边，点点星光落人间\n* 微微夏风吹人脸，幕幕回忆映眼帘\n* 2016.6.4\n*\n* 初识君时君不知\n* 再遇君时长相思\n* 人生必有千帆过\n* 愿能与君共此生\n* 沙浪黑哟\n* 2016.7.31  1:15\n*\n* 万里行舟逐梦子\n* 沙河浩瀚风不止\n* 浪花涌动茫茫雾\n* 吾独远眺前方路\n* 爱恨终究有定数\n* 尔今不知在何处\n* 2016.8.19 23:38\n*\n* 相识\n* 迫切想找到合适的借口与你再次\n* 相见\n* 每天都在想找聊天的理由与你促膝长谈\n* 期望早上起床便有铃声响起，那是你的问候\n* 相恋\n* 盼望早日相见以解相思苦\n* 希望每天能有更多的时间在一起\n* 期待离别之后能尽快再见\n* 2016.8.25 00:09\n*\n* 我多么希望，\n* 早晨，起床能看到你在身旁，\n* 睁开双眼，一个吻一句早安，\n* 拉开窗帘，阳光照进屋里，\n* 外面车水马龙，里面宁静安详。\n* 2016.9.1 23:57\n\n\n> 【Love you forever my dear Lang】\n> 遇见你，让我体会了一个人体会不到的快乐。\n> 想要跟你一起去体会大千世界，爱你，我的叔！\n\n"}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=i()(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.progressivelyShowResume();case 2:return n.next=4,this.showHtml();case 4:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new a.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowResume:function(){var n=this;return new a.a(function(e,t){var r=n.fullMarkdown.length,a=n.interval;!function t(){if(n.currentMarkdown.length<r){n.currentMarkdown=n.fullMarkdown.substring(0,n.currentMarkdown.length+1);n.currentMarkdown[n.currentMarkdown.length-1];"\n"===n.currentMarkdown[n.currentMarkdown.length-2]&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.goBottom()}),setTimeout(t,a)}else e()}()})}}}},41:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(83),a=t.n(r);e.default={props:["markdown","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?a()(this.markdown):this.markdown}},methods:{goBottom:function(){this.$refs.container.scrollTop=1e5}}}},42:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(39),a=t(38),o=t.n(a);new r.a({el:"#app",render:function(n){return n(o.a)}})},80:function(n,e){},81:function(n,e){},82:function(n,e){},89:function(n,e,t){t(81);var r=t(37)(t(41),t(90),"data-v-3539023c",null);n.exports=r.exports},90:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlMode:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},91:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("ResumeEditor",{ref:"resumeEditor",attrs:{markdown:n.currentMarkdown,enableHtml:n.enableHtml}})],1)},staticRenderFns:[]}}},[42]);