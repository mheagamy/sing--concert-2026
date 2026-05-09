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
你是我唯一想要的了解`, enLyrics: `Sparrows outside the window
Chatter on the telephone wires
You said that one line
Felt so much like summer
The pencil in my hand
Moves back and forth across the page
I use a few lines to describe who you are to me
The taste of saury
Both you and the cat want to understand
The scent of first love is found by us again, just like that
That warm sunlight
Like strawberries freshly picked and bright
You say you cannot bear to eat up this feeling
The rain falls all night
My love overflows like rainwater
Fallen leaves in the courtyard
Pile thick as my longing
A few words of gossip
Still cannot cool down my passion
You appear on every page of my poems
The full heads of rice
Make this season feel blessed
And your cheeks are like tomatoes ripening in the field
Suddenly, you say to me
The name Common Jasmine Orange is beautiful
But in this moment, I only want to kiss your stubborn lips
The rain falls all night
My love overflows like rainwater
Butterflies by the windowsill
Like beautiful chapters fluttering through a poem
I keep writing
Writing my forever love for you into the poem’s ending
You are the only understanding I long for` },
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
缘分落地生根是我们`, enLyrics: `The clamor of splendor slips into the temple gate
Leaving the world undone
The dream is colder than it should be
A lifetime spent tossing and turning
How many debts of love remain?
If your silence is consent
I will wait through life and death
Waiting through ring after ring of years
The pagoda
Has broken level by level
Whose soul was severed with it?
Pain runs straight toward
A single dying lamp
And the collapsing mountain gate
Let me wait a little longer
Until history turns back around
Until the wine grows mellow
Until you play one song on the guzheng
Rain falls and falls
In the old hometown, the grasses and trees grow deep
I have heard
You have always been alone
The mottled city gate
Is gripped by old tree roots
What echoes on the stone slabs is still: wait
Rain falls and falls
In the old hometown, the grasses and trees grow deep
I have heard
You still guard that lonely city
A shepherd’s flute from the outskirts
Falls upon that wild village
The fate that takes root in the earth is us` },
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
我独缺你一生的了解`, enLyrics: `At the Orchid Pavilion, I copy the model text
My running script flows like clouds and water
The door opens beneath the moon
Your footsteps are delicate and soft
A shepherd’s flute plays sideways
With rice wine and a few small dishes
The afterglow of sunset
Is like your shy, wine-blushed grace
Beyond romance and moonlight
I write this preface and wait for your return
My brush pauses at the final stroke
As waves gather in a thousand layers by the shore
How can the word love be understood?
No matter how I set down the brush, it feels wrong
What I alone lack is a lifetime of being understood by you` },
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
坏坏的让我疯狂的可爱女人`, enLyrics: `I want a helicopter
I want to fly into space with you
I want to melt together with you
And melt into the Milky Way
Every day, every day, every day, I am thinking, thinking, thinking of you
This sweetness
Makes me start believing in fate
Thank you, gravity
For letting me run into you
Adorable woman, so beautiful you make me blush
Adorable woman, so gentle you make my heart ache
Adorable woman, so clever you move me
Adorable woman, so mischievous you drive me wild
Adorable woman, so beautiful you make me blush
Adorable woman, so gentle you make my heart ache
Adorable woman, so clever you move me
Adorable woman, so mischievous you drive me wild
Adorable woman, so beautiful you make me blush
Adorable woman, so gentle you make my heart ache
Adorable woman, so clever you move me
Adorable woman, so mischievous you drive me wild` },
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
    en: `The burning wound cools into a crescent moon
The lamplight guides a sleepwalking carousel
Graffiti is the splendor of a blank sheet of paper
She tries to part her lips
The snow-white sky suddenly turns to midsummer
Birds long to fly away, without even making a sound
Eyes are about to cry
Candles are about to melt
Why insist on doubting what is there?
Who will go into tomorrow and meet me?
Do not let today call me back
Whenever I think of words
Too vast for heaven and earth to hold
A rosy haze catches fire in my heart
Having never been
To the white-haired horizon where the beloved wanders
How could one understand moonlit reflections and flowers on water?
Having never seen love
Become unrecognizable through thousands of truths and lies
Pearls and jade have long sunk and risen in the mud and sand
Joy, anger, sorrow, and delight, it turns out,
No matter how flamboyant,
How strange,
Are harmless in the end
She is herself
[SF]Scarborough Fair
Are you going to Scarborough Fair?
Parsley, sage, rosemary and thyme
Remember me to one who lives there
She once was a true love of mine[/SF]
The snow-white sky suddenly turns to midsummer
Birds long to fly away, without even making a sound
Eyes are about to cry
Candles are about to melt
Why insist on doubting what is there?
Who will go into tomorrow and meet me?
Do not let today call me back
Whenever I think of words
Too vast for heaven and earth to hold
A rosy haze catches fire in my heart
Having never been
To the white-haired horizon where the beloved wanders
How could one understand moonlit reflections and flowers on water?
Having never seen love
Become unrecognizable through thousands of truths and lies
Pearls and jade have long sunk and risen in the mud and sand
Joy, anger, sorrow, and delight, it turns out,
No matter how flamboyant,
How strange,
Are harmless in the end
She is herself`,
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
    en: `I do not envy the sun
It cannot light up your past
Some kinds of darkness are the same for both of us
I envy time too much
For leaving with such ease
No words are needed, and so there is no need to hide
There is a kind of sorrow
Your name staying in my past
Keeping me breathing
Shaping the way I smile
Impossible to forget
There is a kind of sorrow
Smiling as I part from you
While longing looks away, back to back
All that remains is stubbornness
And one photo of us
Oh, oh
To become each other’s path
How deeply we longed for it
How could we lose our way?
There is a kind of sorrow
Your name staying in my past
Keeping me breathing
Shaping the way I smile
Impossible to forget
There is a kind of sorrow
Smiling as I part from you
While longing looks away, back to back
All that remains is stubbornness
And one photo of us`,
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
    en: `Who placed whose soul inside whose body?
Who turned whose body
Into a prison that confines the self?
In chaotic times, whispers are never in short supply
What kind of beauty calls forth envy?
You are not at fault
The fault belongs to this world
There is no guilt in being born human
You do not need to apologize
One day I will be you baby boy and you gon' be me
If the noise never stops
Let me keep you company in silence
I wish I could hug you till you're really really being free
What rose has no thorns?
The best revenge is beauty
The most beautiful bloom is resistance
Do not let anyone change who you are
You can be you, however you are
There will be someone who loves you wholeheartedly
Try to imagine you switched to his body
Sexuality — be careful what may hurt you
How many heavy wounds
How many cold words
Drowning — who will pull you up?
Dreaming — who will stay with you?
Same shit happens every day.
After you left, could the world change?
So many ignorant wrongs; though the moment has passed, the world should not simply move on
Remember forever — the past does not fade like smoke
There is no guilt in being born human
You do not need to apologize
One day I will be you baby boy and you gon' be me
If the noise never stops
Let me keep you company in silence
I wish I could hug you till you're really really being free
What rose has no thorns?
The best revenge is beauty
The most beautiful bloom is resistance
Do not let anyone change who you are
You can be you, however you are
There will be someone who loves you wholeheartedly
Rose boy
Lives in my heart
Blooming into a radiant legend
We have never forgotten
Your accusation had no sound
Yet it spoke more truth
And awakened countless sincere hearts`,
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
    en: `If it were not because I love you
Why would I still be sleepless deep into the night?
Every thought is about you
I miss you, miss you, miss you so much
If it were not because I love you
Why would I feel so unsettled?
In every nameless day
I miss you, miss you, miss you so much
Love is a thing that torments
Yet I cannot bear to give it up
I keep guessing at your heart
Wondering whether my name is there
If it were not because I love you
Why would I sigh without meaning to?
There is a feeling left incomplete
Loving you, loving you
Loving you
Love is a thing that torments
Yet I cannot bear to give it up
I keep guessing at your heart
Wondering whether my name is there
Love is my only secret
It breaks the heart and still fascinates
No matter what words I try to use
They only, only turn into missing you
If it were not because I love you
Why would I sigh without meaning to?
There is a feeling left incomplete
Loving you
Loving you`,
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
    en: `Yo Yo Cyndi baby~
(Dance~)
If you suddenly sneeze
It must be because I am thinking of you
If your phone wakes you in the middle of the night
Ah, that is because I care about you
I often wonder
Whether your words carry another meaning
I clearly want to believe
Yet cannot help but doubt
In your heart
Am I the only one?
Love means I am always bothering you
Ho Baby
Say a little more sweet talk
If you miss me, look at me one more time
Show me just a little more
So I can truly see it
Oh Bye
Say goodbye a little less
I want to be with you for more than just one day
A little more
And I will willingly
Love you
I like making a mess in the crook of your arm
Your world is a castle
I cover our photo stickers with hearts
And place them on my phone, smiling at you
I often wonder
Whether you really hear what I say
I clearly want to be angry
Yet cannot hold back my smile
In my heart
You truly are the only one
Love means I am always leaning on you
Ho Baby
Say a little more sweet talk
If you miss me, look at me one more time
Show me just a little more
So I can truly see it
Oh Bye
Say goodbye a little less
I want to be with you for more than just one day
A little more
And I will willingly
Love you
Just like this
Day after day
Feelings slowly build
The world of the two of us
Can move a little closer
Hey hey
Ho Baby
Say a little more sweet talk
If you miss me, look at me one more time
Show me just a little more
So I can truly see it
Oh Bye
Say goodbye a little less
I want to be with you for more than just one day
A little more
And I will slowly realize
Oh
Because of you
I am willing, wholeheartedly,
To love you`,
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
    en: `The rain hangs suspended in the sky
Like tears circling in my eyes
Perhaps this is the last time we will meet
The past we passed along the way
Is already too late to replay
Our embrace has quietly turned cold
The sound of the tide drowns out the dusk of our farewell
Leaving only the warmth we cannot bear to let go
Beneath the stars, holding the tenderness about to fade
Love can only remain whole inside memory
I want to hold you inside my body
But I do not dare let you see
The tear at the corner of my mouth that has not yet fallen
If this is the final page
Before you leave
Can you let me rewrite the story?
The rain hangs suspended in the sky
Like tears circling in my eyes
Perhaps this is the last time we will meet
The past we passed along the way
Is already too late to replay
Our embrace has quietly turned cold
The sound of the tide drowns out the dusk of our farewell
Leaving only the warmth we cannot bear to let go
Beneath the stars, holding the tenderness about to fade
Love can only remain whole inside memory
I want to hold you inside my body
But I do not dare let you see
The tear at the corner of my mouth that has not yet fallen
If this is the final page
Before you leave
Can you let me rewrite the story?
I want to hold you inside my body
But I do not dare let you see
The tear at the corner of my mouth that has not yet fallen
If this is the final page
Before you leave
Can you let me rewrite the story?`,
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
    en: `I have been searching
An unexpected corner brought our meeting
The story began without a sign
How did we arrive
At the wonder of a fate made whole
At this castle of music?
It was just right
Catching the signal in your eyes
Our quiet chemistry begins to bloom
Waiting for the next second
To fall dizzy among spinning notes
The perfect pitch
There is a smile in your eyes
Capturing this moment
My heartbeat skips a beat
I want you to know
I love watching your silly smile
I keep running
Following you to the ends of the world
Wanting every hug to be tight
Afraid that forever is still too little
No more worries
No words are needed to send our secret sign
A steady place to lean on
Slowly drawing closer
The distance between us is just right
And even our unspoken understanding is beautiful
I want you to know
I love watching your silly smile
Through every noisy or laughing second
I keep running
Following you to the ends of the world
Wanting every hug to be tight
Afraid that forever is still too little
I am always praying
That time will pause at the corner
No matter how many memories clamor around us
We will sing this song again`,
  }
};

const CONCERT = {
  title: "花樣年華",
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
    { id: 1, title: "周杰伦组曲", en: "Jay Chou Medley", sub: "七里香 · 烟花易冷 · 兰亭序 · 可爱女人", subEn: "Common Jasmine Orange · Fade Away · Orchid Pavilion Preface · Adorable Woman", lyricist: "方文山、徐若瑄", lyricistEn: "Vincent Fang, Vivian Hsu", composer: "周杰伦", composerEn: "Jay Chou", arranger: "徐心语、范藜、吴子奇、小北Roy", arrangerEn: "Alyssa Xu, Tiffany Fan, Finn Wurtz, Roy" },
    { id: 2, title: "珠玉", en: "Pearls and Jade", sub: "融合 Scarborough Fair", subEn: "featuring Scarborough Fair", lyricist: "李聪", lyricistEn: "Cong Li", composer: "陈建骐", composerEn: "Jianqi Chen", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 3, title: "有一种悲伤", en: "A Kind of Sorrow", lyricist: "林孝谦", lyricistEn: "Lin Xiao Qian", composer: "张简君伟", composerEn: "Zhang Jianjunwei", arranger: "陈奕成、徐心语", arrangerEn: "Chen Yi-Cheng, Alyssa Xu" },
    { id: 4, title: "玫瑰少年", en: "Womxnly", lyricist: "蔡依林、阿信", lyricistEn: "Jolin Tsai, Ashin", composer: "剃刀蒋、蔡依林", composerEn: "Razoredge Jiang, Jolin Tsai", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 5, title: "爱情", en: "Love", note: "独唱 Solo", noteEn: "Solo", lyricist: "姚谦、张洪量", lyricistEn: "Yao Qian, Chang Hung-liang", composer: "张洪量", composerEn: "Chang Hung-liang", arranger: "董运昌", arrangerEn: "Yunchang Dong", performer: "宋雯琪 Ailsa Song", performerEn: "Ailsa Song" },
    { id: 6, title: "爱你", en: "Love You", lyricist: "潘瑛、谈晓珍", lyricistEn: "Pan Ying, Vivian Hsu", composer: "Hwang Se-jun", composerEn: "Hwang Se-jun", arranger: "徐心语", arrangerEn: "Alyssa Xu" },
    { id: 7, title: "Counting Stars", en: "Counting Stars", lyricist: "Ryan Tedder", lyricistEn: "Ryan Tedder", composer: "Ryan Tedder", composerEn: "Ryan Tedder", arranger: "陈奕成、徐心语", arrangerEn: "Chen Yi-Cheng, Alyssa Xu" },
    { id: 8, title: "最后一页", en: "The Last Page", lyricist: "宋健彰", lyricistEn: "Devon Song", composer: "詹宇豪", composerEn: "Yuhao Zhan", arranger: "孙国钦", arrangerEn: "Steve Sun" },
    { id: 9, title: "Die With a Smile", en: "Die With a Smile", lyricist: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", lyricistEn: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", composer: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", composerEn: "Lady Gaga, Bruno Mars, D\'Mile, James Fauntleroy", arranger: "Kali Mason", arrangerEn: "Kali Mason" },
    { id: 10, title: "星加加之歌", en: "Sing Plus Plus", note: "原创 Original", noteEn: "Original", lyricist: "刘雪莹", lyricistEn: "Xueying Liu", composer: "刘雪莹", composerEn: "Xueying Liu", arranger: "刘雪莹、范藜", arrangerEn: "Xueying Liu, Tiffany Fan" },
  ],
};

const PL = { Soprano: "女高音 Soprano", Alto: "女低音 Alto", Tenor: "男高音 Tenor", Bass: "低音 Bass", VP: "人声打击 VP", Guest: "特邀嘉宾 Guest" };
const PLE = { Soprano: "Soprano", Alto: "Alto", Tenor: "Tenor", Bass: "Bass", VP: "Vocal Percussion", Guest: "Guest" };
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

function Cover({ onEnter, lang, setLang }) {
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
        <div style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", letterSpacing: 3 }}>11th Anniversary Concert</div>
        <div style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--t2)", letterSpacing: 1, marginTop: 8 }}>{CONCERT.date}</div>
        <a href="https://maps.google.com/?q=Toyon+Hall+455+Arguello+Way+Stanford+CA+94305" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--fb)", fontSize: 12, color: "var(--t3)", letterSpacing: 1, textDecoration: "none" }}>{CONCERT.venue} · {CONCERT.address}</a>
        <a href="https://instagram.com/singplusplus" target="_blank" rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 4, color: "var(--ac)", textDecoration: "none", fontFamily: "var(--fb)", fontSize: 12, letterSpacing: 1, opacity: .6 }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
          @singplusplus
        </a>
      </div>
      <div style={{ opacity: v ? 1 : 0, transition: "all 1.5s ease 1.3s", marginTop: 48, display: "flex", gap: 16, position: "relative", zIndex: 10 }}>
        <button onClick={() => { setLang("cn"); onEnter(); }} style={{
          padding: "14px 0", width: 100, background: "transparent", border: "1px solid var(--ac)",
          color: "var(--ac)", fontFamily: "var(--fc)", fontSize: 14, letterSpacing: 3,
          cursor: "pointer", borderRadius: 0, transition: "all .2s", textAlign: "center",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--ac)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ac)"; }}>
          中文
        </button>
        <button onClick={() => { setLang("en"); onEnter(); }} style={{
          padding: "14px 0", width: 100, background: "transparent", border: "1px solid var(--ac)",
          color: "var(--ac)", fontFamily: "var(--fb)", fontSize: 13, letterSpacing: 4,
          cursor: "pointer", borderRadius: 0, transition: "all .2s", textAlign: "center",
        }}
          onMouseEnter={e => { e.currentTarget.style.background = "var(--ac)"; e.currentTarget.style.color = "var(--bg)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--ac)"; }}>
          EN
        </button>
      </div>
    </div>
  );
}

function Program({ songs, onSelect, lang }) {
  return (
    <div style={{ padding: "0 24px 40px" }}>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "var(--ac)", fontFamily: "var(--fb)", marginBottom: 24 }}>
        {lang === "cn" ? "曲目 · PROGRAM" : "PROGRAM"}
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
            <div style={{ fontFamily: lang === "cn" ? "var(--fc)" : "var(--fd)", fontSize: 17, fontWeight: 500, color: "var(--t1)", marginBottom: 3, letterSpacing: lang === "cn" ? 1 : 0 }}>
              {lang === "cn" ? s.title : s.en}
              {s.note && <span style={{ fontSize: 10, color: "var(--ac)", marginLeft: 8, fontFamily: "var(--fb)", letterSpacing: 1, fontWeight: 400 }}>{lang === "en" && s.noteEn ? s.noteEn : s.note}</span>}
            </div>
            {s.en !== s.title && lang === "cn" && (
              <div style={{ fontFamily: "var(--fd)", fontSize: 13, color: "var(--t2)", fontStyle: "italic", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.en}</div>
            )}
            {lang === "en" && s.title !== s.en && (
              <div style={{ fontFamily: "var(--fc)", fontSize: 13, color: "var(--t2)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</div>
            )}
          </div>
          <span style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--ac)", opacity: .5, flexShrink: 0 }}>→</span>
        </button>
      ))}
    </div>
  );
}

function SongDetail({ song, onBack, lang }) {
  const [v, setV] = useState(false);
  const [medleyIdx, setMedleyIdx] = useState(0);
  useEffect(() => { setV(false); setMedleyIdx(0); setTimeout(() => setV(true), 50); }, [song.id]);

  const lyrics = LYRICS[song.id] || {};
  const isMedley = !!lyrics.parts;
  const hasCn = !isMedley && lyrics.cn && !lyrics.cn.startsWith("（");
  const hasEn = !isMedley && lyrics.en && !lyrics.en.startsWith("（");
  const hasLyrics = hasCn || hasEn || isMedley;

  const info = [
    song.performer && { l: lang === "cn" ? "演唱" : "Performer", v: lang === "en" && song.performerEn ? song.performerEn : song.performer, ve: "" },
    song.lyricist && { l: lang === "cn" ? "作词" : "Lyrics", v: lang === "cn" ? song.lyricist : (song.lyricistEn || song.lyricist), ve: lang === "cn" ? song.lyricistEn : "" },
    song.composer && { l: lang === "cn" ? "作曲" : "Music", v: lang === "cn" ? song.composer : (song.composerEn || song.composer), ve: lang === "cn" ? song.composerEn : "" },
    song.arranger && { l: lang === "cn" ? "编曲" : "Arr.", v: lang === "cn" ? song.arranger : (song.arrangerEn || song.arranger), ve: lang === "cn" ? song.arrangerEn : "" },
  ].filter(Boolean);

  return (
    <div style={{ padding: "0 24px 60px", opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(20px)", transition: "all .5s cubic-bezier(.22,1,.36,1)" }}>
      <button onClick={onBack} style={{ background: "none", border: "none", color: "var(--ac)", fontFamily: "var(--fb)", fontSize: 13, cursor: "pointer", padding: "4px 0", marginBottom: 28, letterSpacing: 1 }}>
        {lang === "cn" ? "← 返回" : "← Back"}
      </button>
      <span style={{ fontFamily: "var(--fd)", fontSize: 64, fontWeight: 300, color: "var(--ac)", lineHeight: 1, opacity: .3, position: "absolute", right: 24, marginTop: -10 }}>
        {String(song.id).padStart(2, "0")}
      </span>
      <h2 style={{ fontFamily: lang === "cn" ? "var(--fc)" : "var(--fd)", fontSize: 28, fontWeight: lang === "cn" ? 600 : 400, color: "var(--t1)", margin: "0 0 6px", letterSpacing: lang === "cn" ? 2 : 1, fontStyle: lang === "en" ? "italic" : "normal" }}>{lang === "cn" ? song.title : song.en}</h2>
      {song.en !== song.title && (
        <p style={{ fontFamily: lang === "cn" ? "var(--fd)" : "var(--fc)", fontSize: 15, color: "var(--t2)", margin: "0 0 4px", fontStyle: lang === "cn" ? "italic" : "normal", letterSpacing: 1 }}>{lang === "cn" ? song.en : song.title}</p>
      )}
      {song.sub && <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--ac)", margin: "10px 0 0", lineHeight: 1.8, letterSpacing: .5 }}>{lang === "en" && song.subEn ? song.subEn : song.sub}</p>}
      {song.note && <div style={{ display: "inline-block", marginTop: 14, padding: "5px 14px", background: "var(--acd)", borderRadius: 2, fontFamily: "var(--fb)", fontSize: 11, color: "var(--ac)", letterSpacing: 2 }}>{lang === "en" && song.noteEn ? song.noteEn : song.note}</div>}

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
          <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", letterSpacing: 2 }}>{lang === "cn" ? "歌词 · LYRICS" : "LYRICS"}</span>
        </div>

        {isMedley && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6, marginBottom: 16 }}>
            {lyrics.parts.map((p, i) => (
              <button key={i} onClick={() => setMedleyIdx(i)} style={{
                padding: "8px 6px", border: "1px solid var(--bd)", borderRadius: 2, cursor: "pointer",
                fontFamily: "var(--fb)", fontSize: 11, letterSpacing: 0, textAlign: "center",
                background: medleyIdx === i ? "var(--acd)" : "transparent",
                color: medleyIdx === i ? "var(--ac)" : "var(--t3)", transition: "all .2s",
                display: "flex", alignItems: "center", justifyContent: "center", minHeight: 44,
              }}>{lang === "en" ? p.en : p.title}</button>
            ))}
          </div>
        )}

        <div style={{ padding: "20px 0 0", borderLeft: "2px solid var(--acd)", paddingLeft: 20 }}>
          {isMedley ? (
            <div>
              <div style={{ fontFamily: lang === "cn" ? "var(--fc)" : "var(--fd)", fontSize: 16, fontWeight: lang === "cn" ? 600 : 400, color: "var(--t1)", letterSpacing: lang === "cn" ? 2 : 1, marginBottom: 4, fontStyle: lang === "en" ? "italic" : "normal" }}>{lang === "cn" ? lyrics.parts[medleyIdx].title : lyrics.parts[medleyIdx].en}</div>
              <div style={{ fontFamily: lang === "cn" ? "var(--fd)" : "var(--fc)", fontSize: 13, color: "var(--t3)", fontStyle: lang === "cn" ? "italic" : "normal", marginBottom: 16 }}>{lang === "cn" ? lyrics.parts[medleyIdx].en : lyrics.parts[medleyIdx].title}</div>
              <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t2)", lineHeight: 2.2, whiteSpace: "pre-line" }}>{lang === "en" && lyrics.parts[medleyIdx].enLyrics ? lyrics.parts[medleyIdx].enLyrics : lyrics.parts[medleyIdx].lyrics}</div>
            </div>
          ) : hasLyrics ? (
            <div style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--t2)", lineHeight: 2.2 }}>
              {(() => {
                const raw = lang === "en" && hasEn ? lyrics.en : (hasCn ? lyrics.cn : lyrics.en);
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

function Members({ lang }) {
  const grouped = PO.map(p => ({ part: p, m: CONCERT.members.filter(x => x.part === p) })).filter(g => g.m.length > 0);
  return (
    <div style={{ padding: "0 24px 40px" }}>
      <div style={{ fontSize: 11, letterSpacing: 4, color: "var(--ac)", fontFamily: "var(--fb)", marginBottom: 32 }}>
        {lang === "cn" ? "参演人员 · PERFORMERS" : "PERFORMERS"}
      </div>
      {grouped.map(({ part, m }) => (
        <div key={part} style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, paddingBottom: 8, marginBottom: 4, borderBottom: "1px solid var(--acd)" }}>
            <div style={{ width: 6, height: 1, background: "var(--ac)", opacity: .5 }} />
            <span style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--ac)", letterSpacing: 3, fontWeight: 400 }}>{lang === "en" ? PLE[part] : PL[part]}</span>
          </div>
          {m.map((x, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0 8px 18px", borderBottom: i < m.length - 1 ? "1px solid var(--bd)" : "none" }}>
              <span style={{ fontFamily: lang === "cn" ? "var(--fc)" : "var(--fd)", fontSize: 14, color: "var(--t1)", letterSpacing: lang === "cn" ? 1.5 : 0.5, fontWeight: 500, fontStyle: lang === "en" ? "italic" : "normal" }}>{lang === "cn" ? x.cn : x.en}</span>
              <span style={{ fontFamily: lang === "cn" ? "var(--fd)" : "var(--fc)", fontSize: 14, color: "var(--t2)", fontStyle: lang === "cn" ? "italic" : "normal", letterSpacing: 0.5 }}>{lang === "cn" ? x.en : x.cn}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Nav({ tab, setTab, onHome, lang, setLang }) {
  const [langOpen, setLangOpen] = useState(false);
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--bg)", borderBottom: "none", boxShadow: "0 4px 20px rgba(0,0,0,.3)", padding: "0 24px", display: "flex", alignItems: "center" }}>
      <button onClick={onHome} style={{ background: "none", border: "none", cursor: "pointer", padding: "14px 12px 14px 0", fontFamily: "var(--fc)", fontSize: 15, fontWeight: 500, color: "var(--t1)", marginRight: "auto", letterSpacing: 2 }}>
        {CONCERT.title}
        <span style={{ color: "var(--ac)", fontSize: 12, marginLeft: 8, fontStyle: "italic", fontFamily: "var(--fd)", fontWeight: 300 }}>{CONCERT.titleEn}</span>
      </button>
      {[{ id: "program", l: lang === "cn" ? "曲目" : "Program" }, { id: "members", l: lang === "cn" ? "人员" : "Cast" }].map(t => (
        <button key={t.id} onClick={() => setTab(t.id)} style={{
          padding: "14px 14px", background: "none", border: "none",
          borderBottom: tab === t.id ? "2px solid var(--ac)" : "2px solid transparent",
          color: tab === t.id ? "var(--ac)" : "var(--t3)",
          fontFamily: "var(--fb)", fontSize: 12, cursor: "pointer", letterSpacing: 1, transition: "all .2s",
        }}>{t.l}</button>
      ))}
      <div style={{ position: "relative", marginLeft: 8 }}>
        <button onClick={() => setLangOpen(!langOpen)} style={{
          padding: "6px 8px", background: "none", border: "none", cursor: "pointer",
          color: "var(--ac)", display: "flex", alignItems: "center", opacity: .7, transition: "opacity .2s",
        }}
          onMouseEnter={e => e.currentTarget.style.opacity = 1}
          onMouseLeave={e => e.currentTarget.style.opacity = .7}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
        </button>
        {langOpen && <>
          <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }} onClick={() => setLangOpen(false)} />
          <div style={{
            position: "absolute", top: "100%", right: 0, marginTop: 4, zIndex: 999,
            background: "var(--bg)", border: "1px solid var(--bd)",
            borderRadius: 4, overflow: "hidden", boxShadow: "0 8px 24px rgba(0,0,0,.4)",
            minWidth: 100,
          }}>
            {[{ k: "cn", l: "中文" }, { k: "en", l: "English" }].map(opt => (
              <button key={opt.k} onClick={() => { setLang(opt.k); setLangOpen(false); }} style={{
                display: "block", width: "100%", padding: "10px 16px", border: "none",
                background: lang === opt.k ? "var(--acd)" : "transparent",
                color: lang === opt.k ? "var(--ac)" : "var(--t2)",
                fontFamily: "var(--fb)", fontSize: 13, cursor: "pointer",
                textAlign: "left", transition: "background .2s",
              }}
                onMouseEnter={e => { if (lang !== opt.k) e.currentTarget.style.background = "rgba(255,255,255,.03)"; }}
                onMouseLeave={e => { if (lang !== opt.k) e.currentTarget.style.background = "transparent"; }}>
                {opt.l}
              </button>
            ))}
          </div>
        </>}
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("cover");
  const [tab, setTab] = useState("program");
  const [sel, setSel] = useState(null);
  const [lang, setLang] = useState("cn");
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
        <Cover onEnter={() => setPage("main")} lang={lang} setLang={setLang} />
      ) : (
        <div>
          <Nav tab={tab} setTab={t => { setTab(t); setSel(null); }} onHome={() => setPage("cover")} lang={lang} setLang={setLang} />
          <div style={{ paddingTop: 28 }}>
            {tab === "program" && !sel && (
              <Program songs={CONCERT.songs} lang={lang} onSelect={id => { setSel(id); window.scrollTo?.({ top: 0, behavior: "smooth" }); }} />
            )}
            {tab === "program" && sel && song && (
              <SongDetail song={song} lang={lang} onBack={() => { setSel(null); window.scrollTo?.({ top: 0, behavior: "smooth" }); }} />
            )}
            {tab === "members" && <Members lang={lang} />}
          </div>
          <div style={{ padding: "40px 24px 28px", textAlign: "center", borderTop: "1px solid var(--bd)", marginTop: 32 }}>
            <Waveform n={18} h={20} />
            <div style={{ fontFamily: "var(--fb)", fontSize: 11, color: "var(--t3)", marginTop: 14, letterSpacing: 3 }}>
              {CONCERT.group} · {lang === "cn" ? CONCERT.subtitle : "11th Anniversary Annual Concert"}
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
