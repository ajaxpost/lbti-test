export interface Question {
  id: number;
  dimension: string;
  text: string;
  options: { value: number; label: string }[];
}

export const questions: Question[] = [
  // ===== A1 安全感需求 =====
  { id: 1, dimension: "A1", text: "TA半小时没回你消息，你的反应？", options: [
    { value: 1, label: "该干嘛干嘛，人家也有自己的事" },
    { value: 2, label: "会注意到，但不会多想" },
    { value: 3, label: "开始翻聊天记录，回忆最近有没有做错什么" },
  ]},
  { id: 2, dimension: "A1", text: "TA跟你说「我有话跟你说」，你的第一反应？", options: [
    { value: 1, label: "啥事？说呗" },
    { value: 2, label: "稍微紧张，但等TA说完再反应" },
    { value: 3, label: "完了完了，是不是要分手了" },
  ]},

  // ===== A2 独立程度 =====
  { id: 3, dimension: "A2", text: "周末TA跟朋友出去玩没带你，你？", options: [
    { value: 1, label: "太好了，我终于可以享受独处时光！" },
    { value: 2, label: "没关系，但希望TA玩得开心然后跟我分享" },
    { value: 3, label: "为什么不带我？是不是有什么不想让我知道的" },
  ]},
  { id: 4, dimension: "A2", text: "恋爱后你的个人爱好时间？", options: [
    { value: 1, label: "基本没变，恋爱和爱好两不误" },
    { value: 2, label: "少了一些，但还保留着核心爱好" },
    { value: 3, label: "爱好？我的爱好就是跟TA在一起" },
  ]},

  // ===== A3 信任基线 =====
  { id: 5, dimension: "A3", text: "TA和异性同事加班到很晚，你？", options: [
    { value: 1, label: "正常，工作嘛，我也经常加班" },
    { value: 2, label: "嘴上说没事，但会多关心几句" },
    { value: 3, label: "需要详细汇报：谁、在哪、几点回" },
  ]},
  { id: 6, dimension: "A3", text: "TA的手机突然响了一下，TA翻了个面，你？", options: [
    { value: 1, label: "可能是工作消息，没注意" },
    { value: 2, label: "注意到了但不会多想" },
    { value: 3, label: "那一刻空气都凝固了，谁发的？" },
  ]},

  // ===== E1 情感表达 =====
  { id: 7, dimension: "E1", text: "你多久会对TA说一次「我爱你」？", options: [
    { value: 1, label: "说不出口，但我的行动说明一切" },
    { value: 2, label: "特别有感触的时候会说" },
    { value: 3, label: "每天早安晚安我爱你，一个都不能少" },
  ]},
  { id: 8, dimension: "E1", text: "看了一部感人电影，你会？", options: [
    { value: 1, label: "内心有触动，但不会表现出来" },
    { value: 2, label: "跟TA分享一下感受" },
    { value: 3, label: "哭着发一大段话给TA说我好爱你" },
  ]},

  // ===== E2 冲突处理 =====
  { id: 9, dimension: "E2", text: "你们因为小事吵架了，你的处理方式？", options: [
    { value: 1, label: "冷处理，过几天自然就好了" },
    { value: 2, label: "各自冷静半小时，然后好好聊" },
    { value: 3, label: "当场讲清楚，不过夜，睡前必须和好" },
  ]},
  { id: 10, dimension: "E2", text: "发现TA做了让你不开心的事，你？", options: [
    { value: 1, label: "算了，不值得为这个起冲突" },
    { value: 2, label: "找个合适的时机委婉提出来" },
    { value: 3, label: "直说！不舒服就要表达出来" },
  ]},

  // ===== E3 浪漫指数 =====
  { id: 11, dimension: "E3", text: "关于纪念日，你的态度是？", options: [
    { value: 1, label: "就是普通一天，没必要搞特殊" },
    { value: 2, label: "简单庆祝一下，吃顿好的" },
    { value: 3, label: "提前一个月开始策划，仪式感拉满" },
  ]},
  { id: 12, dimension: "E3", text: "你会为TA做什么浪漫的事？", options: [
    { value: 1, label: "浪漫？把碗洗了算不算" },
    { value: 2, label: "偶尔送花、写小卡片" },
    { value: 3, label: "手写情书、策划惊喜、定制礼物样样来" },
  ]},

  // ===== P1 亲密频率 =====
  { id: 13, dimension: "P1", text: "你觉得情侣多久见一面最合适？", options: [
    { value: 1, label: "一周一两次就好，各自也有生活" },
    { value: 2, label: "两三天见一次比较舒服" },
    { value: 3, label: "最好每天都能见到！" },
  ]},
  { id: 14, dimension: "P1", text: "异地恋你能接受吗？", options: [
    { value: 1, label: "可以接受，感情好就行" },
    { value: 2, label: "短期可以，长期有点难" },
    { value: 3, label: "绝对不行，我需要TA在身边" },
  ]},

  // ===== P2 社交边界 =====
  { id: 15, dimension: "P2", text: "TA的朋友聚会，你？", options: [
    { value: 1, label: "TA去就好，我就不去社交了" },
    { value: 2, label: "偶尔参加，认识一下也不错" },
    { value: 3, label: "必须带我！我要融入TA的朋友圈" },
  ]},
  { id: 16, dimension: "P2", text: "发朋友圈会秀恩爱吗？", options: [
    { value: 1, label: "不发，恋爱又不是晒给别人看的" },
    { value: 2, label: "偶尔发发，低调撒糖" },
    { value: 3, label: "朋友圈已经变成我们的恋爱日记了" },
  ]},

  // ===== P3 生活融合度 =====
  { id: 17, dimension: "P3", text: "恋爱后的财务管理？", options: [
    { value: 1, label: "绝对AA制，亲兄弟明算账" },
    { value: 2, label: "日常AA，特殊日子互相请" },
    { value: 3, label: "我的钱就是你的钱，一起管" },
  ]},
  { id: 18, dimension: "P3", text: "你能接受共享手机密码吗？", options: [
    { value: 1, label: "不行，每个人都有隐私权" },
    { value: 2, label: "可以给但别频繁翻" },
    { value: 3, label: "当然！没什么需要隐藏的" },
  ]},

  // ===== F1 承诺态度 =====
  { id: 19, dimension: "F1", text: "恋爱多久会考虑「以后」的事？", options: [
    { value: 1, label: "现在开心就好，未来的事未来再说" },
    { value: 2, label: "半年左右开始考虑适不适合长期发展" },
    { value: 3, label: "第一个月就在想以后住哪个小区" },
  ]},
  { id: 20, dimension: "F1", text: "TA问你「你打算跟我在一起多久」，你说？", options: [
    { value: 1, label: "不知道诶，走一步看一步" },
    { value: 2, label: "希望能一直在一起" },
    { value: 3, label: "一辈子！已经想好孩子叫什么了" },
  ]},

  // ===== F2 家庭观念 =====
  { id: 21, dimension: "F2", text: "关于见家长这件事？", options: [
    { value: 1, label: "不急，等确定了再说" },
    { value: 2, label: "时机到了自然会安排" },
    { value: 3, label: "认真交往就应该早点见，这是态度" },
  ]},
  { id: 22, dimension: "F2", text: "你对婚礼的期待？", options: [
    { value: 1, label: "领个证就行，仪式不重要" },
    { value: 2, label: "简单温馨的小婚礼就好" },
    { value: 3, label: "梦想中的婚礼，每个细节都要完美" },
  ]},

  // ===== F3 成长意愿 =====
  { id: 23, dimension: "F3", text: "TA指出你的一个缺点，你？", options: [
    { value: 1, label: "我就是这样，喜欢就接受" },
    { value: 2, label: "如果说得对我会尝试改" },
    { value: 3, label: "谢谢你告诉我，我会努力变好" },
  ]},
  { id: 24, dimension: "F3", text: "为了这段感情，你愿意改变多少？", options: [
    { value: 1, label: "核心的我不会变，小习惯可以调整" },
    { value: 2, label: "重要的地方愿意磨合" },
    { value: 3, label: "只要是为了我们好，什么都愿意" },
  ]},

  // ===== L1 关怀方式 =====
  { id: 25, dimension: "L1", text: "TA生病了，你？", options: [
    { value: 1, label: "多喝热水，注意休息（微信）" },
    { value: 2, label: "买药送过去，陪TA一会儿" },
    { value: 3, label: "请假照顾，煲粥喂药全套服务" },
  ]},
  { id: 26, dimension: "L1", text: "日常生活中你会怎么照顾TA？", options: [
    { value: 1, label: "各自独立比较好，不用刻意照顾" },
    { value: 2, label: "力所能及的关心，但不过度" },
    { value: 3, label: "TA的一切我都想照顾到" },
  ]},

  // ===== L2 礼物态度 =====
  { id: 27, dimension: "L2", text: "情人节你会准备什么？", options: [
    { value: 1, label: "发个红包就好了，实在又方便" },
    { value: 2, label: "买个TA之前提到过想要的东西" },
    { value: 3, label: "手写信+定制礼物+鲜花+烛光晚餐" },
  ]},
  { id: 28, dimension: "L2", text: "看到TA可能喜欢的东西，你？", options: [
    { value: 1, label: "拍照给TA看看，TA自己决定买不买" },
    { value: 2, label: "犹豫一下，看价格再决定" },
    { value: 3, label: "直接买！看到TA开心就值了" },
  ]},

  // ===== L3 陪伴质量 =====
  { id: 29, dimension: "L3", text: "跟TA在一起时你的手机状态？", options: [
    { value: 1, label: "正常刷，各玩各的也很舒服" },
    { value: 2, label: "尽量少看，但有消息会回" },
    { value: 3, label: "静音倒扣！此刻你是我的全世界" },
  ]},
  { id: 30, dimension: "L3", text: "理想的约会是什么样的？", options: [
    { value: 1, label: "一起窝在家看剧就很好" },
    { value: 2, label: "出去走走逛逛吃吃" },
    { value: 3, label: "精心安排的行程，全程互动零冷场" },
  ]},
];

export const hiddenQuestions = [
  {
    id: 31,
    text: "答完啦！最后一个不计分的：你现在的感情状态？",
    options: [
      { value: "single", label: "单身（享受自由~）" },
      { value: "crush", label: "有暗恋的人" },
      { value: "dating", label: "恋爱中" },
      { value: "complex", label: "一言难尽..." },
    ],
  },
  {
    id: 32,
    text: "一言难尽是怎么个难尽法？",
    triggerPrev: "complex",
    options: [
      { value: "casual", label: "说不清关系但就是放不下" },
      { value: "drama", label: "分分合合第N次了" },
    ],
  },
];
