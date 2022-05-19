<template>
    <div id="app">
        <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
    </div>
</template>
<script>
import ResumeEditor from './components/ResumeEditor'
import './assets/reset.css'
let isPc = (function() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
    ];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}());
let getDateDiff = function(startDate, endDate) {
    var startTime = new Date(Date.parse(startDate.replace(/-/g, "/"))).getTime();
    var endTime = new Date(Date.parse(endDate.replace(/-/g, "/"))).getTime();
    var dates = Math.abs((startTime - endTime)) / (1000 * 60 * 60 * 24);
    return dates;
}
// document.title += getDateDiff((new Date()).getFullYear() + '-' + ((new Date()).getMonth() + 1) + '-' + (new Date()).getDate(), '2016-09-15') + 1 + '天';
export default {
    name: 'app',
    components: {
        ResumeEditor
    },
    data() {
        return {
            interval: 27,
            currentStyle: '',
            enableHtml: false,
            currentMarkdown: '',
            fullMarkdown: `Yu × Lang
----

2016年02月09日，即大年初二凌晨，我们在一起啦！
已有 ${getDateDiff((new Date()).getFullYear()+'-'+((new Date()).getMonth()+1)+'-'+(new Date()).getDate(),'2016-02-09') + 1} 天了

还记得为你写的诗吗？
----

* 长路漫漫
* 唯剑做伴
* 金戈铁马
* 陪你潇洒
* 时光不老
* 我们不散
* 2016.4.22
*
* 片片红霞飘天边，点点星光落人间
* 微微夏风吹人脸，幕幕回忆映眼帘
* 2016.6.4
*
* 初识君时君不知
* 再遇君时长相思
* 人生必有千帆过
* 愿能与君共此生
* 沙浪黑哟
* 2016.7.31  1:15
*
* 万里行舟逐梦子
* 沙河浩瀚风不止
* 浪花涌动茫茫雾
* 吾独远眺前方路
* 爱恨终究有定数
* 尔今不知在何处
* 2016.8.19 23:38
*
* 相识
* 迫切想找到合适的借口与你再次
* 相见
* 每天都在想找聊天的理由与你促膝长谈
* 期望早上起床便有铃声响起，那是你的问候
* 相恋
* 盼望早日相见以解相思苦
* 希望每天能有更多的时间在一起
* 期待离别之后能尽快再见
* 2016.8.25 00:09
*
* 我多么希望，
* 早晨，起床能看到你在身旁，
* 睁开双眼，一个吻一句早安，
* 拉开窗帘，阳光照进屋里，
* 外面车水马龙，里面宁静安详。
* 2016.9.1 23:57


> 【Love you forever my dear Lang】
> 遇见你，让我体会了一个人体会不到的快乐。
> 想要跟你一起去体会大千世界，爱你，我的叔！

`
        }
    },
    created() {
        this.makeResume()
    },

    methods: {
        makeResume: async function() {
            // await this.progressivelyShowStyle(0)
            await this.progressivelyShowResume()
            // await this.progressivelyShowStyle(1)
            await this.showHtml()
            // await this.progressivelyShowStyle(2)
        },
        showHtml: function() {
            return new Promise((resolve, reject) => {
                this.enableHtml = true
                resolve()
            })
        },
        progressivelyShowResume() {
            return new Promise((resolve, reject) => {
                let length = this.fullMarkdown.length
                let interval = this.interval
                let showResume = () => {
                    if (this.currentMarkdown.length < length) {
                        this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
                        let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
                        let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
                        if (prevChar === '\n' && this.$refs.resumeEditor) {
                            this.$nextTick(() => this.$refs.resumeEditor.goBottom())
                        }
                        setTimeout(showResume, interval)
                    } else {
                        resolve()
                    }
                }
                showResume()
            })
        }
    }
}
</script>
<style scoped>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

}

html {
    min-height: 100%;
}
body{
  background: #9fafca;
}
.styleEditor {
    -webkit-backface-visibility: hidden;
}
</style>
