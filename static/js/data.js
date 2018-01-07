/**
 * Created by asus-pc on 20,17/3/28.
 */
 // 12道学习题（一个）
var study = [
    {
        num:0,
        problem: '以下哪个语言专业是华科没有的?',
        ans1: 'こんにちは',
        ans2: '안녕하세요',
        ans3: 'Grüß dich',
        true: '안녕하세요'
    },
    {
        num:0,
        problem: '在寝室打lol，用一度电花多少钱?',
        ans1: '0.2元',
        ans2: '0.5元',
        ans3: '0.1元',
        true: '0.5元'
    },
    {
        num:0,
        problem: '以下哪一门体育课华科没有开设?',
        ans1: '柔道',
        ans2: '手球',
        ans3: '体育舞蹈',
        true: '柔'
    },   
    {
        num:0,
        problem: '凌晨四点华科以下哪里的灯还亮着?',
        ans1: '图书馆',
        ans2: '麦当劳',
        ans3: 'Today便利店',
        true: 'Today便利店'
    },
    {
        num:0,
        problem: '以下哪一个不是华科四大才子?',
        ans1: '尹平',
        ans2: '绍琨',
        ans3: '刘克明',
        true: '绍琨'
    },
    {
        num:0,
        problem: '近三年华科最短一次寒假放了多久?',
        ans1: '27天 ',
        ans2: '7天',
        ans3: '600小时',
        true: '27天'
    },
    {
        num:0,
        problem: '近三年华科最长一次暑假放了多久?',
        ans1: '56天',
        ans2: '58天',
        ans3: '1440小时',
        true: '58天'
    },
    {
        num:0,
        problem: '哪个院的学生能更快到百景园吃饭?',
        ans1: '公共卫生学院',
        ans2: '计划生育研究所',
        ans3: '法学院',
        true: '法学院'
    },
    {
        num:0,
        problem: '以下哪个专业在华科没有博士点?',
        ans1: '护理学',
        ans2: '新闻传播学',
        ans3: '设计学',
        true: '设计学'
    },
    {
        num:0,
        problem: '以下哪个互联网+金奖是华科的?',
        ans1: '诸葛io',
        ans2: '小黄车',
        ans3: 'E-chat',
        true: '诸葛io'
    }];
// 11道吃的题目（两个）
var food = [
    {
        num:0,
        problem: '哪个实验室不属于国家重点实验室?',
        ans1: '煤燃烧',
        ans2: '蓝翔汽修',
        ans3: '引力与量子物理',
        true: '引力与量子物理'
    },
    {
        num:0,
        problem: '以下哪个实验室不属于华科“三颗明珠”',
        ans1: '脉冲强磁场',
        ans2: '国家光电实验室',
        ans3: '煤燃烧实验室',
        true: '煤燃烧实验室'  
    },
    {
        num:0,
        problem: '21：30,下课后还能去哪里加餐?',
        ans1: '西华园',
        ans2: '枫林湾',
        ans3: '百品屋',
        true: '西华园'
    },
    {
        num:0,
        problem: '以下哪个食堂的阿姨最早开始工作?',
        ans1: '东教工食堂',
        ans2: '喻园食堂',
        ans3: '百景园',
        true: '东教工食堂'
    },
    {
        num:0,
        problem: '以下哪家不是华科校内咖啡厅?',
        ans1: 'f4咖啡厅',
        ans2: '锁石咖啡屋',
        ans3: 'f2咖啡厅',
        true: 'f4咖啡厅'
    },
    {
        num:0,
        problem: '以下哪家不是华科校内的餐馆?',
        ans1: '同畅堂',
        ans2: '荷鳅塘',
        ans3: '同仁堂',
        true: '同仁堂'
    },
    {
        num:0,
        problem: '在华科能喝到哪家店的奶茶?',
        ans1: '柠檬王子',
        ans2: '益禾堂',
        ans3: '一点点',
        true: '益禾堂'
    },
    {
        num:0,
        problem: '华科以下哪个食堂热干面最便宜?',
        ans1: '集锦园',
        ans2: '韵苑大酒楼',
        ans3: '东一食堂',
        true: '集锦园'
    },
    {
        num:0,
        problem: '华科以下哪个食堂是三层楼?',
        ans1: '东一',
        ans2: '西二',
        ans3: '东园',
        true: '东园'
    },
    {
        num:0,
        problem: '南三门外排队最长的小吃是?',
        ans1: '鸡蛋灌饼',
        ans2: '山东杂粮饼',
        ans3: '手抓饼',
        true: '鸡蛋灌饼'
    },
    {
        num:0,
        problem: '以下哪个食堂不清真?',
        ans1: '东三食堂',
        ans2: '东一食堂',
        ans3: '学一食堂',
        true: '东一食堂'
    },
    {
        num:0,
        problem: '华科内有几个M记?',
        ans1: '1家',
        ans2: '2家',
        ans3: '3家',
        true: '2家'
    }];
// 11道景物路的题目（两个）
var scene = [
    {
        num:0,
        problem: '图书馆正门前的一条主干路叫什么?',
        ans1: '华中路',
        ans2: '迎宾路',
        ans3: '基友路',
        true: '华中路'
    },
    {
        num:0,
        problem: '华科内以下哪种树的种类最多?',
        ans1: '法国梧桐',
        ans2: '樟树',
        ans3: '玉兰树',
        true: '法国梧桐'
    },
    {
        num:0,
        problem: '以下哪个宿舍还住有中学生?',
        ans1: '韵苑二栋',
        ans2: '东七舍',
        ans3: '韵苑四栋',
        true: '韵苑四栋'
    },
    {
        num:0,
        problem: '住哪栋宿舍的晚归后不能刷卡进门?',
        ans1: '东五舍',
        ans2: '韵五栋',
        ans3: '紫菘五栋',
        true: '韵五栋'
    },
    {
        num:0,
        problem: '哪一栋宿舍外面还有大院门?',
        ans1: '教七舍',
        ans2: '东七舍',
        ans3: '紫菘七栋',
        true: '东七舍'
    },
    {
        num:0,
        problem: '华科里没有谁的雕像?',
        ans1: '孟子',
        ans2: '老子像',
        ans3: '爱因斯坦像',
        true: '孟子'
    },
    {
        num:0,
        problem: '华科艺术团的“窝点”在哪栋楼?',
        ans1: '西五楼',
        ans2: '西八楼',
        ans3: '西十二楼',
        true: '西八楼'
    },
    {
        num:0,
        problem: '华中科技大学建校纪念碑在哪里?',
        ans1: '南大门',
        ans2: '青年园',
        ans3: '校史馆',
        true: '青年园'
    },
    {
        num:0,
        problem: '以下哪些景观不可以在喻家山上看到?',
        ans1: '防空洞',
        ans2: '天梯',
        ans3: '碉堡',
        true: '天梯'
    },
    {
        num:0,
        problem: '以下哪个是华科游泳馆主要用途?',
        ans1: '游泳',
        ans2: '划船',
        ans3: '冲浪',
        true: '划船'
    }];
// 15道常识题（一个）
var allKnow = [
    {
        num:0,
        problem: '以下哪一个学院有男生节',
        ans1: '新闻学院',
        ans2: '社会学院',
        ans3: '人文学院',
        true: '社会学院'
    },
    {
        num:0,
        problem: '以下哪个组织/团队没有自己的公众号',
        ans1: '冰岩作坊',
        ans2: '研究生会',
        ans3: '减肥打卡协会',
        true: '减肥打卡协会'
    },
    {
        num:0,
        problem: '南大门毛主席像的高度是',
        ans1: '1.7米',
        ans2: '15米',
        ans3: '20米',
        true: '15米'
    },
    {
        num:0,
        problem: '华科泼水节是哪一年取消的',
        ans1: '2013年',
        ans2: '2014年',
        ans3: '2015年',
        true: '2015年'
    },
    {
        num:0,
        problem: '华科今年满多少周岁',
        ans1: '65岁',
        ans2: '24岁',
        ans3: '17岁',
        true: '17岁'
    },
    {
        num:0,
        problem: '以下哪家社团是华科没有的',
        ans1: '芭蕾舞社',
        ans2: '桥牌协会',
        ans3: '狼人杀社',
        true: '芭蕾舞社'
    },
    {
        num:0,
        problem: '韵体在周末的主要用途',
        ans1: '放电影',
        ans2: '演唱比赛',
        ans3: '打篮球',
        true: '放电影'
    },
    {
        num:0,
        problem: '光谷体育馆的主要搞事用途',
        ans1: '办演唱会',
        ans2: '军训动员会',
        ans3: '体育比赛',
        true: '体育比赛'
    },
    {
        num:0,
        problem: '校车有多少个座位?',
        ans1: '12',
        ans2: '10',
        ans3: '9',
        true: '10'
    },
    {
        num:0,
        problem: '华科“炮楼”位于哪个门口',
        ans1: '南三门',
        ans2: '南二门',
        ans3: '南大门',
        true: '南二门'
    },
    {
        num:0,
        problem: '春天华科骑车的最大杀手是',
        ans1: '东九放学潮',
        ans2: '杨絮',
        ans3: '绝望坡',
        true: '杨絮'
    },
    {
        num:0,
        problem: '以下哪位是华科的校友',
        ans1: '罗振宇 ',
        ans2: '罗大佑',
        ans3: '罗永浩',
        true: '罗振宇 '
    },
    {
        num:0,
        problem: '以下哪款产品出自华科校友?',
        ans1: 'QQ',
        ans2: '摩拜单车',
        ans3: '脸萌',
        true: '脸萌'
    },
    {
        num:0,
        problem: '以下哪款产品不是出自华科校友?',
        ans1: '微派桌游助手',
        ans2: '贪吃蛇大作战 ',
        ans3: '秒拍',
        true: '秒拍'
    },
    {
        num:0,
        problem: '从东小门到南二门有多少个公交站',
        ans1: '3个',
        ans2: '4个',
        ans3: '5个',
        true: '5个'
    },
    {
        num:0,
        problem: '华科的现任掌门人是',
        ans1: '丁烈云',
        ans2: '丁俊辉',
        ans3: '李培根',
        true: '丁烈云'
    }];
// 7道搞事题（两个）
var funny =[
    {
        num:0,
        problem: '西操主要用来：',
        ans1: '跑步',
        ans2: '踢球',
        ans3: '大妈跳广场舞',
        true: '大妈跳广场舞'
    },
    {
        num:0,
        problem: '华科情侣一般在哪里接吻最多',
        ans1: '青年园',
        ans2: '五栋楼下',
        ans3: '自习室',
        true: '五栋楼下'
    },
    {
        num:0,
        problem: '以下哪一个不是“华科男”的标配',
        ans1: '格子衫',
        ans2: '拖鞋',
        ans3: '女朋友',
        true: '女朋友'
    },
    {
        num:0,
        problem: '在华科哪里最容易找到你的另一半',
        ans1: '梦里',
        ans2: '主图',
        ans3: '校车上',
        true: '梦里'
    },
    {
        num:0,
        problem: '华科哪里最容易卖出闲置物品?',
        ans1: '华科帮帮忙群',
        ans2: '校园二手街',
        ans3: '闲鱼',
        true: '华科帮帮忙群'
    },
    {
        num:0,
        problem: '哪句话是华科男搭讪的正确方式',
        ans1: '同学你吃了吗',
        ans2: '同学你牙上有菜',
        ans3: '你的微积分，我教',
        true: '你的微积分，我教'
    },
    {
        num:0,
        problem: '华科人春天踏青一般去哪里',
        ans1: '西操晒太阳 ',
        ans2: '武大看樱花 ',
        ans3: '图书馆约自习',
        true: '图书馆约自习'
    }];
// 24道判断题（两个）
var boolean = [
    {
        num:1,
        problem: '12点夜宵归来不能走南大门',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '南大门毛爷爷像后面的楼是南三楼',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '韵苑-紫菘校车中途一般有6个停靠站点',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '华科最高的建筑是启明学院',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '东九B101能坐200个人',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '华科妹子最多的学院是新闻学院',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '华科校内有一处红绿灯',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '华科（艺术团）招的是艺考生',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '下暴雨时， 紫菘比韵苑更易被淹没',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '华科所有男生都是直男',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '华科的猫比狗多',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '西小门10点关门',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '“ 四年顶个球 ”建筑位于青年园',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '第三届“互联网+”大赛在华科举行',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '小黄车是华科学生研发的',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '微派桌游助手是由华科学生开发的',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '东篱餐厅可以吃到牛排',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '研究生活动中心在东五楼',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '东边的食堂比西边的食堂更多',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: '南大门毛泽东像穿着的是中山装',
        ans1: '正确',
        ans2: '错误',
        true: '错误'
    },
    {
        num:1,
        problem: ' iKnow华科隶属于冰岩作坊',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    },
    {
        num:1,
        problem: '东九比西十二大',
        ans1: '正确',
        ans2: '错误',
        true: '正确'
    }];

var qaData = {
    study: study,
    food: food,
    scene: scene,
    allKnow: allKnow,
    funny: funny,
    boolean: boolean
}