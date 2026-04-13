/**
 * LBTI 维度体系
 * 5 大行为模型 × 3 个子维度 = 15 个评估维度
 * 每维度 L/M/H 三档
 */

export interface DimensionDef {
  code: string;
  name: string;
  model: string;
  modelName: string;
  levels: {
    L: string;
    M: string;
    H: string;
  };
}

export const dimensionDefs: DimensionDef[] = [
  // ===== 依恋模式 (Attachment Style) =====
  {
    code: "A1",
    name: "安全感需求",
    model: "A",
    modelName: "依恋模式",
    levels: {
      L: "你不回消息也行，我刷剧去了",
      M: "偶尔需要确认一下你还在",
      H: "三分钟没回消息，开始编排分手剧情",
    },
  },
  {
    code: "A2",
    name: "独立程度",
    model: "A",
    modelName: "依恋模式",
    levels: {
      L: "我的世界只有你，连密码都是你的生日",
      M: "你是我的重要组成部分，但不是全部",
      H: "我爱你但我更爱我自己的空间",
    },
  },
  {
    code: "A3",
    name: "信任基线",
    model: "A",
    modelName: "依恋模式",
    levels: {
      L: "TA跟异性说话就开始脑补连续剧",
      M: "基本信任但偶尔也会在意",
      H: "绝对信任，除非你自己交代了什么",
    },
  },

  // ===== 表达风格 (Expression Style) =====
  {
    code: "E1",
    name: "情感表达",
    model: "E",
    modelName: "表达风格",
    levels: {
      L: "我爱你？说出来会死",
      M: "重要节日会表达，平时靠行动",
      H: "每天说八百遍我爱你，还附带小作文",
    },
  },
  {
    code: "E2",
    name: "冲突处理",
    model: "E",
    modelName: "表达风格",
    levels: {
      L: "吵架？不存在的，冷战到天荒地老",
      M: "冷静一下再聊",
      H: "有问题当场说清楚，吵完还是好朋友",
    },
  },
  {
    code: "E3",
    name: "浪漫指数",
    model: "E",
    modelName: "表达风格",
    levels: {
      L: "纪念日是什么？能吃吗？",
      M: "重要日子会准备，但不搞太花哨的",
      H: "每月14号都是情人节，惊喜永不嫌多",
    },
  },

  // ===== 相处节奏 (Pace & Rhythm) =====
  {
    code: "P1",
    name: "亲密频率",
    model: "P",
    modelName: "相处节奏",
    levels: {
      L: "一周见一次挺好，距离产生美",
      M: "工作日各忙各的，周末约会刚好",
      H: "恨不得24小时黏在一起",
    },
  },
  {
    code: "P2",
    name: "社交边界",
    model: "P",
    modelName: "相处节奏",
    levels: {
      L: "我的朋友圈你别翻，你的我也不看",
      M: "互相认识彼此朋友就好",
      H: "你的朋友就是我的朋友，合体社交！",
    },
  },
  {
    code: "P3",
    name: "生活融合度",
    model: "P",
    modelName: "相处节奏",
    levels: {
      L: "AA制，各有各的银行卡",
      M: "部分共享，各留私房钱",
      H: "钱包手机密码全透明",
    },
  },

  // ===== 未来规划 (Future Vision) =====
  {
    code: "F1",
    name: "承诺态度",
    model: "F",
    modelName: "未来规划",
    levels: {
      L: "活在当下，想那么远干嘛",
      M: "有考虑但不急，顺其自然",
      H: "三个月就想讨论结婚生子养老",
    },
  },
  {
    code: "F2",
    name: "家庭观念",
    model: "F",
    modelName: "未来规划",
    levels: {
      L: "二人世界就够了，别的以后再说",
      M: "该有的仪式感要有，但不盲从传统",
      H: "见家长、婚礼、孩子，一步步规划好",
    },
  },
  {
    code: "F3",
    name: "成长意愿",
    model: "F",
    modelName: "未来规划",
    levels: {
      L: "我就是这样，爱我就接受我",
      M: "愿意为你做些改变，但别太过分",
      H: "为了我们共同成长，一起变更好",
    },
  },

  // ===== 爱的语言 (Love Language) =====
  {
    code: "L1",
    name: "关怀方式",
    model: "L",
    modelName: "爱的语言",
    levels: {
      L: "你渴了？水在冰箱自己拿",
      M: "天冷提醒你穿衣服，生病买药",
      H: "衣食住行全包，把你当宝宝养",
    },
  },
  {
    code: "L2",
    name: "礼物态度",
    model: "L",
    modelName: "爱的语言",
    levels: {
      L: "红包不香吗？送什么礼物",
      M: "节日送礼，平时随缘",
      H: "隔三岔五就想给你买东西、做手工",
    },
  },
  {
    code: "L3",
    name: "陪伴质量",
    model: "L",
    modelName: "爱的语言",
    levels: {
      L: "各玩各的手机也算在一起",
      M: "偶尔一起做点有意义的事",
      H: "在一起就要全神贯注，手机放一边",
    },
  },
];
