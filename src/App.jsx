import { useState, useEffect } from "react";

// ============================================================
const LYRICS = {
  1: {
    parts: [
      { title: "七里香", en: "Common Jasmine Orange", lyrics: `窗外的麻雀
在电线杆上多嘴
你说这一句
很有夏天的感觉
手中的铅笔
在纸上来来回回
我用几行字形容你是我的谁
秋刀鱼的滋味
猫跟你都想了解
初恋的香味就这样被我们寻回
那温暖的阳光
像刚摘的鲜艳草莓
你说你舍不得吃掉这一种感觉
雨下整夜
我的爱溢出就像雨水
院子落叶
跟我的思念厚厚一叠
几句是非
也无法将我的热情冷却
你出现在我诗的每一页
那饱满的稻穗
幸福了这个季节
而你的脸颊像田里熟透的番茄
你突然对我说
七里香的名字很美
我此刻却只想亲吻你倔强的嘴
雨下整夜
我的爱溢出就像雨水
窗台蝴蝶
像诗里纷飞的美丽章节
我接着写
把永远爱你写进诗的结尾
你是我唯一想要的了解` },
      { title: "烟花易冷", en: "Fade Away", lyrics: `繁华声遁入空门
折煞了世人
梦偏冷
辗转一生
情债又几本
如你默认
生死枯等
枯等一圈又一圈的年轮
浮屠塔
断了几层
断了谁的魂
痛直奔
一盏残灯
倾塌的山门
容我再等
历史转身
等酒香醇
等你弹一曲古筝
雨纷纷
旧故里草木深
我听闻
你始终一个人
斑驳的城门
盘踞着老树根
石板上回荡的是再等
雨纷纷
旧故里草木深
我听闻
你仍守着孤城
城郊牧笛声
落在那座野村
缘分落地生根是我们` },
      { title: "兰亭序", en: "Orchid Pavilion Preface", lyrics: `兰亭临帖
行书如行云流水
月下门推
心细如你脚步碎
牧笛横吹
黄酒小菜又几碟
夕阳余晖
如你的羞怯似醉
无关风月
我题序等你回
悬笔一绝
那岸边浪千叠
情字何解
怎落笔都不对
我独缺你一生的了解` },
      { title: "可爱女人", en: "Adorable Woman", lyrics: `想要有直升机
想要和你飞到宇宙去
想要和你融化在一起
融化在银河里
我每天每天每天在想想想想着你
这样的甜蜜
让我开始相信命运
感谢地心引力
让我碰到你
漂亮的让我面红的可爱女人
温柔的让我心疼的可爱女人
聪明的让我感动的可爱女人
坏坏的让我疯狂的可爱女人
漂亮的让我面红的可爱女人
温柔的让我心疼的可爱女人
聪明的让我感动的可爱女人
坏坏的让我疯狂的可爱女人
漂亮的让我面红的可爱女人
温柔的让我心疼的可爱女人
聪明的让我感动的可爱女人
坏坏的让我疯狂的可爱女人` },
    ],
    en: "",
  },
  2: {
    cn: `滚烫的伤口会冷成月牙
灯火会牵引梦游的木马
涂鸦是一张白纸的繁华
她试着张张嘴巴
雪白的天色忽尔就炎夏
飞鸟想飞走甚至不喧哗
眼睛要流泪
蜡烛要融化
何必要不疑有他
谁去明天遇见我啊
别让今天叫住我了
每想到一些
天地都容纳不下的说法
心里就烧起烟霞
没去过
心上人流浪的白发天涯
哪里懂镜月水花
没看过感情
千万次面目全非的真假
珠玉早沉浮在泥沙
喜怒哀乐原来
多招摇
蹊跷
都无伤大雅
她是她
[SF]Scarborough Fair
Are you going to Scarborough Fair?
Parsley, sage, rosemary and thyme
Remember me to one who lives there
She once was a true love of mine[/SF]
雪白的天色忽尔就炎夏
飞鸟想飞走甚至不喧哗
眼睛要流泪
蜡烛要融化
何必要不疑有他
谁去明天遇见我啊
别让今天叫住我了
每想到一些
天地都容纳不下的说法
心里就烧起烟霞
没去过
心上人流浪的白发天涯
哪里懂镜月水花
没看过感情
千万次面目全非的真假
珠玉早沉浮在泥沙
喜怒哀乐原来
多招摇
蹊跷
都无伤大雅
她是她`,
    en: "",
  },
  3: {
    cn: `我不羡慕太阳
照不亮你过往
有些黑暗 我们都一样
我太嫉妒时光
能离开的大方
不用开口 也就无需躲藏
有一种悲伤
是你的名字停留在我的过往
陪伴我呼吸
决定我微笑模样
无法遗忘
有一种悲伤
是笑着与你分开
思念却背对背张望
剩下倔强
剩下合照一张
Oh Oh
成为彼此的路
多向往
怎会失去方向
有一种悲伤
是你的名字停留在我的过往
陪伴我呼吸
决定我微笑模样
无法遗忘
有一种悲伤
是笑着与你分开
思念却背对背张望
剩下倔强
剩下合照一张`,
    en: "",
  },
  4: {
    cn: `谁把谁的灵魂装进谁的身体
谁把谁的身体
变成囹圄囚禁自己
乱世总是最不缺耳语
哪种美丽会唤来妒忌
你并没有罪
有罪是这世界
生而为人无罪
你不需要道歉
One day I will be you baby boy and you gon' be me
喧哗如果不停
让我陪你安静
I wish I could hug you till you're really really being free
哪朵玫瑰没有荆棘？
最好的报复是美丽
最美的盛开是反击
别让谁去改变了你
你是你或是你都行
会有人全心的爱你
试着想象 you switched to his body
sexuality 当心什么会伤你
多少次的重伤
多少次的冷语
drowning 谁会拉你
dreaming 谁会陪你
Same shit happens every day.
你离开后世界可改变？
多少无知罪愆 事过不境迁
永志不忘记念 往事不如烟
生而为人无罪
你不需要道歉
One day I will be you baby boy and you gon' be me
喧哗如果不停
让我陪你安静
I wish I could hug you till you're really really being free
哪朵玫瑰没有荆棘？
最好的报复是美丽
最美的盛开是反击
别让谁去改变了你
你是你或是你都行
会有人全心的爱你
玫瑰少年
在我心里
绽放着绚丽的传奇
我们都从来没忘记
你的控诉没有声音
却倾诉更多的真理
却唤醒无数的真心`,
    en: "",
  },
  5: {
    cn: `若不是因为爱着你
怎么会夜深还没睡意
每个念头都关于你
我想你 想你 好想你
若不是因为爱着你
怎会有不安的情绪
每个莫名的日子里
我想你 想你 好想你
爱是折磨人的东西
却又舍不得这样放弃
不停揣测你的心理
可有我姓名
若不是因为爱着你
怎会不经意就叹息
有种不完整的心情
爱你 爱你
爱着你
爱是折磨人的东西
却又舍不得这样放弃
不停揣测你的心理
可有我姓名
爱是我唯一的秘密
让人心碎却又着迷
无论是用什么言语
只会 只会思念你
若不是因为爱着你
怎会不经意就叹息
有种不完整的心情
爱你
爱着你`,
    en: "",
  },
  6: {
    cn: `Yo Yo Cyndi baby~
(Dance~)
如果你突然打了个喷嚏
那一定就是我在想你
如果半夜被手机吵醒
啊 那是因为我关心
常常想
你说的话是不是别有用心
明明很想相信
却又忍不住怀疑
在你的心里
我是否就是唯一
爱就是有我常烦着你
Ho Baby
情话多说一点
想我就多看一眼
表现多一点点
让我能真的看见
Oh Bye
少说一点
想陪你不只一天
多一点
让我心甘情愿
爱你
喜欢在你的臂弯里胡闹
你的世界是一座城堡
在大头贴画满心号
贴在手机上对你微笑
常常想
我说的话你是否听得进去
明明很想生气
却又止不住笑意
在我的心里
你真的就是唯一
爱就是让我常赖着你
Ho Baby
情话多说一点
想我就多看一眼
表现多一点点
让我能真的看见
Oh Bye
少说一点
想陪你不只一天
多一点
让我心甘情愿
爱你
就这样
一天又一天
慢慢地累积感觉
两人的世界
就能够贴近一点
hey hey
Ho Baby
情话多说一点
想我就多看一眼
表现多一点点
让我能真的看见
Oh Bye
少说一点
想陪你不只一天
多一点
才会慢慢发现
Oh
因为你
让我心甘情愿
爱你`,
    en: "",
  },
  7: {
    cn: "",
    en: `Lately, I've been, I've been losing sleep
Dreaming about the things that we could be
But baby, I've been, I've been praying hard,
Said no more counting dollars
We'll be counting stars, yeah we'll be counting stars
I see this life like a swinging vine
Swing my heart across the line
And my face is flashing signs
Seek it out and you shall find
Old, but I'm not that old
Young, but I'm not that bold
I don't think the world is sold
I'm just doing what we're told
I feel something so right
Doing the wrong thing
I feel something so wrong
Doing the right thing
I couldn't lie, couldn't lie, couldn't lie
Everything that kills me makes me feel alive
Lately, I've been, I've been losing sleep
Dreaming about the things that we could be
But baby, I've been, I've been praying hard,
Said, no more counting dollars
We'll be counting stars
Lately, I've been, I've been losing sleep
Dreaming about the things that we could be
But baby, I've been, I've been praying hard,
Said, no more counting dollars
We'll be, we'll be counting stars
I feel the love and I feel it burn
Down this river, every turn
Hope is our four-letter word
Make that money, watch it burn
Old, but I'm not that old
Young, but I'm not that bold
I don't think the world is sold
On just doing what we're told
I feel something so wrong
Doing the right thing
I couldn't lie, couldn't lie, couldn't lie
Everything that drowns me makes me wanna fly
Lately, I've been, I've been losing sleep
Dreaming about the things that we could be
But baby, I've been, I've been praying hard,
Said no more counting dollars
We'll be counting stars
Lately, I've been, I've been losing sleep
Dreaming about the things that we could be
But baby, I've been, I've been praying hard,
Said, no more counting dollars
We'll be, we'll be counting stars
Take that money
Watch it burn
Sink in the river
The lessons I've learned
Take that money
Watch it burn
Sink in the river
The lessons I've learned
Take that money
Watch it burn
Sink in the river
The lessons I've learned
Take that money
Watch it burn
Sink in the river
The lessons I've learned`,
  },
  8: {
    cn: `雨停滞天空之间
像泪在眼眶盘旋
这也许是最后一次见面
沿途经过的从前
还来不及再重演
拥抱早已悄悄冷却
海潮声淹没了离别时的黄昏
只留下不舍的体温
星空下拥抱着快凋零的温存
爱只能在回忆里完整
想把你抱进身体里面
不敢让你看见
嘴角那颗没落下的泪
如果这是最后的一页
在你离开之前
能否让我把故事重写
雨停滞天空之间
像泪在眼眶盘旋
这也许是最后一次见面
沿途经过的从前
还来不及再重演
拥抱早已悄悄冷却
海潮声淹没了离别时的黄昏
只留下不舍的体温
星空下拥抱着快凋零的温存
爱只能在回忆里完整
想把你抱进身体里面
不敢让你看见
嘴角那颗没落下的泪
如果这是最后的一页
在你离开之前
能否让我把故事重写
想把你抱进身体里面
不敢让你看见
嘴角那颗没落下的泪
如果这是最后的一页
在你离开之前
能否让我把故事重写`,
    en: "",
  },
  9: {
    cn: "",
    en: `Ooh, ooh
I, I just woke up from a dream
Where you and I had to say goodbye
And I don't know what it all means
But since I survived I realized
Wherever you go, that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending
I'd wanna be next to you
If the party was over
And our time on earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you
Ooh, ooh
Ooh, lost, lost in the words that we scream
I don't even wanna do this anymore
'Cause you already know what you mean to me
And our love is the only war worth fighting for
Wherever you go that's where I'll follow
Nobody's promised tomorrow
So I'ma love you every night like it's the last night
Like it's the last night
If the world was ending
I'd wanna be next to you
If the party was over
And our time on earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you
Right next to you
Next to you
Right next to you
Ooh, ooh
If the world was ending
I'd wanna be next to you
If the party was over
And our time on earth was through
I'd wanna hold you just for a while
And die with a smile
If the world was ending
I'd wanna be next to you
If the world was ending
I'd wanna be next to you
Ooh, ooh
I'd wanna be next to you`,
  },
  10: {
    cn: `我在寻找
相遇发生意外转角
故事开始没有预兆
如何走到
完整了缘分的奇妙
音乐的城堡
就是刚好
感应你眼神的讯号
我们的默契在发酵
等下一秒
在飞旋音符里醉倒
完美的音调
你眼里带着笑
捕捉这一刻
我停拍的心跳
要你知道
喜欢看你傻傻笑
我一直奔跑
随你去天涯海角
想每次用力拥抱
怕永远太少
不再烦恼
无需言语传送暗号
安定的依靠
慢慢紧靠
我们的距离就刚好
也心有灵犀的美好
要你知道
喜欢看你傻傻笑
吵闹或笑在每分每秒
我一直奔跑
随你去天涯海角
想每次用力拥抱
怕永远太少
我总在祈祷
让时光停驻转角
任多少回忆喧嚣
再唱起歌谣`,
    en: "",
  }
};

const CONCERT = {
  title: "花样年华",
  titleEn: "Mood4Love++",
  group: "Sing++",
  subtitle: "11th Anniversary Annual Concert",
  date: "Saturday, May 9, 2026 · 7:00 PM",
  venue: "Toyon Hall",
  address: "455 Arguello Way, Stanford, CA 94305",
  members: [
    { cn: "黄铂聆", en: "Pauline Huang", part: "Soprano" },
    { cn: "吴溪源", en: "Xiyuan Wu", part: "Soprano" },
    { cn: "徐心语", en: "Alyssa Xu", part: "Soprano" },
    { cn: "陈鑫烨", en: "Paprika Chen", part: "Alto" },
    { cn: "范藜", en: "Tiffany Fan", part: "Alto" },
    { cn: "方炜宁", en: "Weining Fang", part: "Alto" },
    { cn: "何苗", en: "Amy He", part: "Alto" },
    { cn: "胡艳澜", en: "Yanlan Hu", part: "Alto" },
    { cn: "李浦银", en: "Puyin Li", part: "Alto" },
    { cn: "田园", en: "Yuan Tian", part: "Alto" },
    { cn: "高浩然", en: "Haoran Gao", part: "Tenor" },
    { cn: "金文瀚", en: "Tiger Jin", part: "Tenor" },
    { cn: "罗贤铭", en: "Xianming Luo", part: "Tenor" },
    { cn: "孙国钦", en: "Steve Sun", part: "Tenor" },
    { cn: "代树言", en: "Shuyan Dai", part: "Bass" },
    { cn: "蒋涛睿", en: "Charlie Jiang", part: "Bass" },
    { cn: "王若沣", en: "Edison Wang", part: "Bass" },
    { cn: "魏逸凡", en: "Yifan Wei", part: "Bass" },
    { cn: "赵奕涵", en: "Yihan Zhao", part: "Bass" },
    { cn: "蒋子曰", en: "Ziyue Jiang", part: "VP" },
    { cn: "毛晨恺", en: "Chenkai Mao", part: "VP" },
    { cn: "宋雯琪", en: "Ailsa Song", part: "Guest" },
  ],
  songs: [
    { id: 1, title: "周杰伦组曲", en: "Jay Chou Medley", sub: "七里香 · 烟花易冷 · 兰亭序 · 可爱女人", lyricist: "方文山、徐若瑄", lyricistEn: "Vincent Fang, Vivian Hsu", composer: "周杰伦", composerEn: "Jay Chou", arranger: "徐心语、范藜、吴子奇、小北Roy", arrangerEn: "Alyssa Xu, Tiffany Fan, Finn Wurtz, Roy" },
    { id: 2, title: "珠玉", en: "Pearls and Jade", sub: "融合 Scarborough Fair", lyricist: "李聪", lyricistEn: "Cong Li", composer: "陈建骐", composerEn: "Jianqi Chen", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 3, title: "有一种悲伤", en: "A Kind of Sorrow", lyricist: "林孝谦", lyricistEn: "Lin Xiao Qian", composer: "张简君伟", composerEn: "Zhang Jianjunwei", arranger: "陈奕成、徐心语", arrangerEn: "Chen Yi-Cheng, Alyssa Xu" },
    { id: 4, title: "玫瑰少年", en: "Womxnly", lyricist: "蔡依林、阿信", lyricistEn: "Jolin Tsai, Ashin", composer: "剃刀蒋、蔡依林", composerEn: "Razoredge Jiang, Jolin Tsai", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 5, title: "爱情", en: "Love", note: "独唱 Solo", lyricist: "姚谦、张洪量", lyricistEn: "Yao Qian, Chang Hung-liang", composer: "张洪量", composerEn: "Chang Hung-liang", arranger: "董运昌", arrangerEn: "Yunchang Dong", performer: "宋雯琪 Ailsa Song" },
    { id: 6, title: "爱你", en: "Love You", lyricist: "潘瑛、谈晓珍", lyricistEn: "Pan Ying, Vivian Hsu", composer: "Hwang Se-jun", composerEn: "Hwang Se-jun", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 7, title: "Counting Stars", en: "Counting Stars", lyricist: "Ryan Tedder", lyricistEn: "Ryan Tedder", composer: "Ryan Tedder", composerEn: "Ryan Tedder", arranger: "陈奕成、徐心语", arrangerEn: "Chen Yi-Cheng, Alyssa Xu" },
    { id: 8, title: "最后一页", en: "The Last Page", lyricist: "宋健彰", lyricistEn: "Devon Song", composer: "詹宇豪", composerEn: "Yuhao Zhan", arranger: "孙国钦", arrangerEn: "Steve Sun" },
    { id: 9, title: "Die With a Smile", en: "Die With a Smile", lyricist: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", lyricistEn: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", composer: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", composerEn: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", arranger: "Kali Mason", arrangerEn: "Kali Mason" },
    { id: 10, title: "星加加之歌", en: "Sing Plus Plus", note: "原创 Original", lyricist: "刘雪莹", lyricistEn: "Xueying Liu", composer: "刘雪莹", composerEn: "Xueying Liu", arranger: "刘雪莹、Tiffany", arrangerEn: "Xueying Liu, Tiffany" },
  ],
};

const PL = { Soprano: "女高音 Soprano", Alto: "女低音 Alto", Tenor: "男高音 Tenor", Bass: "低音 Bass", VP: "人声打击 VP", Guest: "特邀嘉宾 Guest" };
const PO = ["Soprano", "Alto", "Tenor", "Bass", "VP", "Guest"];

function Waveform({ n = 20, h = 28 }) {
  return (
    <div style={{ display: "flex", gap: 2.5, alignItems: "center", justifyContent: "center", height: h }}>
      {Array.from({ length: n }, (_, i) => (
        <div key={i} style={{
          width: 2.5, borderRadius: 1.5, background: "var(--ac)", opacity: 0.45,
          height: Math.abs(10 + Math.sin(i * 0.7) * 8 + Math.cos(i * 1.3) * 6),
          animation: `wave 1.2s ease-in-out ${i * 0.06}s infinite alternate`,
        }} />
      ))}
    </div>
  );
}

function Cover({ onEnter }) {
  const [v, setV] = useState(false);
  useEffect(() => { setTimeout(() => setV(true), 100); }, []);
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "40px 24px", textAlign: "center", position: "relative", overflow: "hidden",
    }}>
      {[{ top: -100, right: -100, s: 360 }, { bottom: -150, left: -80, s: 440 }].map((r, i) => (
        <div key={i} style={{ position: "absolute", top: r.top, right: r.right, bottom: r.bottom, left: r.left, width: r.s, height: r.s, borderRadius: "50%", border: "1px solid rgba(200,150,100,.15)", opacity: 0.2, pointerEvents: "none" }} />
      ))}
      <div style={{
        opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(40px)",
        transition: "all 1.2s cubic-bezier(.22,1,.36,1)",
      }}>
        <div style={{ fontSize: 12, letterSpacing: 8, color: "var(--ac)", fontFamily: "var(--fb)", fontWeight: 500, marginBottom: 44 }}>
          {CONCERT.group}
        </div>
        <h1 style={{
          fontFamily: "var(--fc)", fontSize: "clamp(46px,12vw,76px)", fontWeight: 600,
          lineHeight: 1.15, margin: "0 0 12px", color: "var(--t1)", letterSpacing: 6,
        }}>
          {CONCERT.title}
        </h1>
        <p style={{
          fontFamily: "var(--fd)", fontSize: "clamp(18px,4vw,26px)",
          color: "var(--ac)", margin: "8px 0 0", letterSpacing: 4, fontWeight: 300, fontStyle: "italic",
        }}>
          {CONCERT.titleEn}
        </p>
      </div>
      <div style={{ opacity: v ? 1 : 0, transition: "opacity 1.5s ease .6s", marginTop: 52 }}>
        <Waveform n={26} h={32} />
      </div>
      <div style={{ opacity: v ? 1 : 0, transition: "opacity 1.5s ease .9s", marginTop: 48, display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--ac)", letterSpacing: 3 }}>{CONCERT.subtitle}</div>
        <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--t2)", letterSpacing: 1 }}>{CONCERT.date}</div>
        <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--t3)", letterSpacing: 1 }}>{CONCERT.venue} · {CONCERT.address}</div>
        <a href="https://instagram.com/singplusplus" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4, color: "var(--ac)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 12, letterSpacing: 1, opacity: .6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
          @singplusplus
        </a>
      </div>
      <button onClick={onEnter} style={{
        opacity: v ? 1 : 0, transition: "all 1.5s ease 1.3s", marginTop: 56,
        padding: "14px 56px", background: "transparent", border: "1px solid var(--ac)",
        color: "var(--ac)", fontFamily: "var(--fb)", fontSize: 12, letterSpacing: 5,
        cursor: "pointer", borderRadius: 0, position: "relative", zIndex: 10,
      }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--ac)"; e.currentTarget.style.color = "var(--bg)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ac)"; }}>
        ENTER
      </button>
    </div>
  );
}

function Program({ songs, onSelect }) {
  return (
    <div style={{ padding: "0 24px 40px" }}>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "var(--ac)", fontFamily: "var(--fb)", marginBottom: 24 }}>
        PROGRAM · 曲目
      </div>
      {songs.map((s, i) => (
        <button key={s.id} onClick={() => onSelect(s.id)} style={{
          display: "flex", alignItems: "center", gap: 14, padding: "18px 8px 18px 12px",
          background: "transparent", border: "none", borderBottom: "1px solid var(--bd)",
          cursor: "pointer", textAlign: "left", width: "100%", transition: "background .2s",
        }}
          onMouseEnter={e => e.currentTarget.style.background = "rgba(200,164,110,.1)"}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
          <span style={{ fontFamily: "var(--fd)", fontSize: 24, fontWeight: 300, color: "var(--ac)", minWidth: 32, lineHeight: 1, opacity: .45 }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--fc)", fontSize: 17, fontWeight: 500, color: "var(--t1)", marginBottom: 3, letterSpacing: 1 }}>
              {s.title}
              {s.note && <span style={{ fontSize: 10, color: "var(--ac)", marginLeft: 8, fontFamily: "var(--fb)", letterSpacing: 1, fontWeight: 400 }}>{s.note}</span>}
            </div>
            {s.en !== s.title && (
              <div style={{ fontFamily: "var(--fd)", fontSize: 13, color: "var(--t2)", fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.en}</div>
            )}
          </div>
          <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--ac)", opacity: .5, flexShrink: 0 }}>→</span>
        </button>
      ))}
    </div>
  );
}

function SongDetail({ song, onBack }) {
  const [v, setV] = useState(false);
  const [lyricsTab, setLyricsTab] = useState("cn");
  const [medleyIdx, setMedleyIdx] = useState(0);
  useEffect(() => { setV(false); setMedleyIdx(0); setTimeout(() => setV(true), 50); }, [song.id]);

  const lyrics = LYRICS[song.id] || {};
  const isMedley = !!lyrics.parts;
  const hasCn = !isMedley && lyrics.cn && !lyrics.cn.startsWith("（");
  const hasEn = !isMedley && lyrics.en && !lyrics.en.startsWith("（");
  const hasLyrics = hasCn || hasEn || isMedley;

  useEffect(() => {
    if (hasCn) setLyricsTab("cn");
    else if (hasEn) setLyricsTab("en");
  }, [song.id, hasCn, hasEn]);

  const info = [
    song.performer && { l: "演唱", v: song.performer, ve: "" },
    song.lyricist && { l: "作词", v: song.lyricist, ve: song.lyricistEn },
    song.composer && { l: "作曲", v: song.composer, ve: song.composerEn },
    song.arranger && { l: "编曲", v: song.arranger, ve: song.arrangerEn },
  ].filter(Boolean);

  return (
    <div style={{ padding: "0 24px 60px", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: "all .5s cubic-bezier(.22,1,.36,1)" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--ac)", fontFamily: "var(--fb)", fontSize: 13, cursor: "pointer", padding: "4px 0", marginBottom: 28, letterSpacing: 1 }}>
        ← 返回
      </button>
      <span style={{ fontFamily: "var(--fd)", fontSize: 64, fontWeight: 300, color: "var(--ac)", lineHeight: 1, opacity: .3, position: "absolute", right: 24, marginTop: -10 }}>
        {String(song.id).padStart(2, "0")}
      </span>
      <h2 style={{ fontFamily: "var(--fc)", fontSize: 30, fontWeight: 600, color: "var(--t1)", margin: "0 0 6px", letterSpacing: 2 }}>{song.title}</h2>
      {song.en !== song.title && (
        <p style={{ fontFamily: "var(--fd)", fontSize: 16, color: "var(--t2)", margin: "0 0 4px", fontStyle: "italic", letterSpacing: 1 }}>{song.en}</p>
      )}
      {song.sub && <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--ac)", margin: "10px 0 0", lineHeight: 1.8, letterSpacing: .5 }}>{song.sub}</p>}
      {song.note && <div style={{ display: "inline-block", marginTop: 14, padding: "5px 14px", background: "var(--acd)", borderRadius: 2, fontFamily: "var(--fb)", fontSize: 11, color: "var(--ac)", letterSpacing: 2 }}>{song.note}</div>}

      <div style={{ marginTop: 28, borderTop: "1px solid var(--bd)", paddingTop: 16 }}>
        {info.map((x, i) => (
          <div key={i} style={{ display: "flex", gap: 16, padding: "12px 0", borderBottom: "1px solid var(--bd)", alignItems: "baseline" }}>
            <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", letterSpacing: 2, minWidth: 40 }}>{x.l}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t1)", lineHeight: 1.6 }}>{x.v}</div>
              {x.ve && x.ve !== x.v && <div style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--t3)", marginTop: 2 }}>{x.ve}</div>}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 28 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", letterSpacing: 2 }}>LYRICS · 歌词</span>
          {!isMedley && hasLyrics && hasCn && hasEn && (
            <div style={{ display: "flex", marginLeft: "auto", border: "1px solid var(--bd)", borderRadius: 2, overflow: "hidden" }}>
              {[{ k: "cn", l: "中文" }, { k: "en", l: "EN" }].map(t => (
                <button key={t.k} onClick={() => setLyricsTab(t.k)} style={{
                  padding: "4px 14px", border: "none", cursor: "pointer",
                  fontFamily: "var(--fb)", fontSize: 11, letterSpacing: 1,
                  background: lyricsTab === t.k ? "var(--acd)" : "transparent",
                  color: lyricsTab === t.k ? "var(--ac)" : "var(--t3)", transition: "all .2s",
                }}>{t.l}</button>
              ))}
            </div>
          )}
        </div>

        {isMedley && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>
            {lyrics.parts.map((p, i) => (
              <button key={i} onClick={() => setMedleyIdx(i)} style={{
                padding: "6px 14px", border: "1px solid var(--bd)", borderRadius: 2, cursor: "pointer",
                fontFamily: "var(--fb)", fontSize: 12, letterSpacing: 1,
                background: medleyIdx === i ? "var(--acd)" : "transparent",
                color: medleyIdx === i ? "var(--ac)" : "var(--t3)", transition: "all .2s",
              }}>{p.title}</button>
            ))}
          </div>
        )}

        <div style={{ padding: "20px 0 0", borderLeft: "2px solid var(--acd)", paddingLeft: 20 }}>
          {isMedley ? (
            <div>
              <div style={{ fontFamily: "var(--fc)", fontSize: 16, fontWeight: 600, color: "var(--t1)", letterSpacing: 2, marginBottom: 4 }}>{lyrics.parts[medleyIdx].title}</div>
              <div style={{ fontFamily: "var(--fd)", fontSize: 13, color: "var(--t3)", fontStyle: "italic", marginBottom: 16 }}>{lyrics.parts[medleyIdx].en}</div>
              <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t2)", lineHeight: 2.2, whiteSpace: "pre-line" }}>{lyrics.parts[medleyIdx].lyrics}</div>
            </div>
          ) : hasLyrics ? (
            <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t2)", lineHeight: 2.2 }}>
              {(() => {
                const raw = lyricsTab === "cn" && hasCn ? lyrics.cn : lyrics.en;
                const parts = raw.split(/\[SF\]|\[\/SF\]/);
                return parts.map((part, pi) => {
                  if (pi === 1) {
                    const lines = part.split("\n").filter(l => l);
                    return (
                      <div key={pi} style={{ background: "rgba(255,255,255,.04)", borderRadius: 4, padding: "16px 16px", margin: "16px -16px", borderLeft: "2px solid var(--acd)" }}>
                        <div style={{ fontFamily: "var(--fb)", fontSize: 14, fontWeight: 600, color: "var(--ac)", letterSpacing: 2, marginBottom: 10, opacity: .8 }}>— {lines[0]} —</div>
                        {lines.slice(1).map((line, li) => <div key={li}>{line}</div>)}
                      </div>
                    );
                  }
                  return part.split("\n").map((line, i) =>
                    line.startsWith("—") && line.endsWith("—") ? (
                      <div key={`${pi}-${i}`} style={{ fontFamily: "var(--fc)", fontSize: 15, fontWeight: 600, color: "var(--ac)", letterSpacing: 2, margin: "12px 0 4px", opacity: .8 }}>{line}</div>
                    ) : line === "" ? <div key={`${pi}-${i}`} style={{ height: 8 }} /> : <div key={`${pi}-${i}`}>{line}</div>
                  );
                });
              })()}
            </div>
          ) : (
            <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t3)", fontStyle: "italic", lineHeight: 2 }}>歌词待添加…</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Members() {
  const grouped = PO.map(p => ({ part: p, m: CONCERT.members.filter(x => x.part === p) })).filter(g => g.m.length > 0);
  return (
    <div style={{ padding: "0 24px 40px" }}>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "var(--ac)", fontFamily: "var(--fb)", marginBottom: 32 }}>
        PERFORMERS · 参演人员
      </div>
      {grouped.map(({ part, m }) => (
        <div key={part} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 8, marginBottom: 4, borderBottom: "1px solid var(--acd)" }}>
            <div style={{ width: 6, height: 1, background: "var(--ac)", opacity: .5 }} />
            <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--ac)", letterSpacing: 3, fontWeight: 400 }}>{PL[part]}</span>
          </div>
          {m.map((x, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0 8px 18px", borderBottom: i < m.length - 1 ? "1px solid var(--bd)" : "none" }}>
              <span style={{ fontFamily: "var(--fc)", fontSize: 14, color: "var(--t1)", letterSpacing: 1.5, fontWeight: 500 }}>{x.cn}</span>
              <span style={{ fontFamily: "var(--fd)", fontSize: 14, color: "var(--t2)", fontStyle: "italic", letterSpacing: 0.5 }}>{x.en}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Nav({ tab, setTab, onHome }) {
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--bg)", borderBottom: "none", boxShadow: "0 4px 20px rgba(0,0,0,.3)", padding: "0 24px", display: "flex", alignItems: "center" }}>
      <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", padding: "14px 12px 14px 0", fontFamily: "var(--fc)", fontSize: 15, fontWeight: 500, color: "var(--t1)", marginRight: "auto", letterSpacing: 2 }}>
        {CONCERT.title}
        <span style={{ color: "var(--ac)", fontSize: 12, marginLeft: 8, fontStyle: "italic", fontFamily: "var(--fd)", fontWeight: 300 }}>{CONCERT.titleEn}</span>
      </button>
      {[{ id: "program", l: "曲目" }, { id: "members", l: "人员" }].map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          padding: "14px 14px", background: "none", border: "none",
          borderBottom: tab === t.id ? "2px solid var(--ac)" : "2px solid transparent",
          color: tab === t.id ? "var(--ac)" : "var(--t3)",
          fontFamily: "var(--fb)", fontSize: 12, cursor: "pointer", letterSpacing: 1, transition: "all .2s",
        }}>{t.l}</button>
      ))}
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("cover");
  const [tab, setTab] = useState("program");
  const [sel, setSel] = useState(null);
  const song = CONCERT.songs.find(s => s.id === sel);

  return (
    <div style={{
      "--bg": "oklch(0.18 0.06 25)", "--cb": "rgba(180,90,70,.06)", "--t1": "#ece4de",
      "--t2": "#c4b5ab", "--t3": "#8a7068", "--ac": "#c8a46e",
      "--acd": "rgba(200,164,110,.25)", "--bd": "rgba(200,164,110,.1)",
      "--fd": "'Cormorant Garamond',Georgia,serif",
      "--fc": "'Noto Serif SC','STSong',serif",
      "--fb": "'Noto Sans SC','Helvetica Neue',sans-serif",
      background: "var(--bg)", color: "var(--t1)",
      minHeight: "100vh", maxWidth: 540, margin: "0 auto",
      position: "relative",
    }}>
      {/* Atmospheric gradient overlay */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 0,
        background: "radial-gradient(ellipse 80% 50% at 50% 0%, oklch(0.28 0.1 24 / 0.6) 0%, transparent 70%), radial-gradient(ellipse 80% 50% at 50% 100%, oklch(0.22 0.08 30 / 0.5) 0%, transparent 70%)",
      }} />
      {/* Film grain noise */}
      <div style={{
        position: "fixed", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none", zIndex: 1,
        opacity: 0.05, mixBlendMode: "overlay",
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        backgroundSize: "128px 128px",
      }} />
      <div style={{ position: "relative", zIndex: 2 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Sans+SC:wght@300;400;500&family=Noto+Serif+SC:wght@400;500;600&display=swap');
        @keyframes wave{0%{transform:scaleY(.3)}100%{transform:scaleY(1)}}
        *{box-sizing:border-box;margin:0;padding:0}
        ::-webkit-scrollbar{width:3px}
        ::-webkit-scrollbar-track{background:transparent}
        ::-webkit-scrollbar-thumb{background:rgba(200,164,110,.15);border-radius:2px}
      `}</style>

      {page === "cover" ? (
        <Cover onEnter={() => setPage("main")} />
      ) : (
        <div>
          <Nav tab={tab} setTab={t => { setTab(t); setSel(null); }} onHome={() => setPage("cover")} />
          <div style={{ paddingTop: 28 }}>
            {tab === "program" && !sel && (
              <Program songs={CONCERT.songs} onSelect={id => { setSel(id); window.scrollTo?.({ top: 0, behavior: "smooth" }); }} />
            )}
            {tab === "program" && sel && song && (
              <SongDetail song={song} onBack={() => { setSel(null); window.scrollTo?.({ top: 0, behavior: "smooth" }); }} />
            )}
            {tab === "members" && <Members />}
          </div>
          <div style={{ padding: "40px 24px 28px", textAlign: "center", borderTop: "1px solid var(--bd)", marginTop: 32 }}>
            <Waveform n={18} h={20} />
            <div style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", marginTop: 14, letterSpacing: 3 }}>
              {CONCERT.group} · {CONCERT.subtitle}
            </div>
            <a href="https://instagram.com/singplusplus" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 14, color: "var(--ac)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 12, letterSpacing: 1, opacity: .7, transition: "opacity .2s" }}
              onMouseEnter={e => e.currentTarget.style.opacity = 1}
              onMouseLeave={e => e.currentTarget.style.opacity = .7}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
              </svg>
              @singplusplus
            </a>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
