/* ============================================================
 *  网站内容配置文件  content.js
 *  ------------------------------------------------------------
 *  想改网站上的任何文字 / 数据 / 链接，只改这一个文件即可。
 *  改完保存 -> 刷新浏览器（Ctrl + Shift + R）就能看到效果。
 *  ------------------------------------------------------------
 *  写法说明：
 *   · 加粗：把文字包起来，写成  <b>要加粗的字</b>
 *   · 高亮：写成  <span class='hl'>要高亮的字</span>
 *   · 链接：网址填在 link 字段里；linkText 是链接上显示的文字
 *   · 一行 = 一条内容。可以自由增加 / 删除数组里的行。
 *   · 每行末尾多一个逗号没关系（这是 JS，比 JSON 宽松）。
 *   · 头尾这两行别动：  window.SITE_CONTENT =   ...   };
 * ============================================================ */
window.SITE_CONTENT = {
  "profile": {
    "name": "宋柯颖",
    "nameEn": "Carlene Song",
    "avatarText": "宋",
    "role": "商业化增长 × 产品运营",
    "affiliation": "美团 · 外卖事业部 · 产品运营",
    "email": "songkeying666@163.com",
    "wechat": "hytmrzln"
  },

  /* 首页大图区：照片 + 擅长 + 爱好 */
  "hero": {
    "photo": "photo.jpg",
    "role": "商业化增长 × 产品运营 · 美团外卖",
    "strengths": [
      "B 端商业化增长",
      "PLG 转化闭环",
      "补贴与商品策略",
      "数据分析（SQL / Python / R）",
      "Vibe Coding / AI Agent",
      "用户洞察"
    ],
    "hobbies": "滑板 · 攀岩 · 羽毛球 · 剧本杀 · 推理解谜 · 象棋 · 阅读 · 旅行 · 摄影 · 美食——兴趣广泛，热衷探索世界，也是一个胆大的美食冒险家。"
  },

  "about": [
    "美团外卖产品运营，负责 B 端付费产品的<b>商业化运营与增长策略</b>。",
    "香港中文大学硕士（市场营销 · 大数据方向），浙江大学本科（政治学与行政学）。工作经历覆盖游戏直播、电商、OTA、海外投放、O2O，方向集中于<span class='hl'>商业化增长、补贴与商品策略、B 端产品运营</span>。在业务中基于 Vibe Coding 独立落地 3 个运营提效工具。",
    "工具：SQL / Python / R 数据分析，Cursor / Figma。"
  ],

  "jobs": [
    {
      "period": "2025.08 — 至今",
      "company": "美团",
      "dept": "外卖事业部",
      "position": "产品运营 · 商业化增长 / 策略运营 / AI 赋能",
      "highlights": [
        "<b>B 端产品运营</b>——拼单宝商业化：商户调研、PLG 驱动增长、分层定价体系",
        "<b>补贴与商品策略</b>——自取业务：商业模式探索、商品分层模型搭建、补贴分配体系搭建并实现自动化",
        "<b>AI 赋能</b>——独立落地竞对监控 Agent、补贴自查平台、选品工作台"
      ],
      "stats": [
        "产品渗透率 +9.5pp",
        "产品日均增收 75 万（环比 +28%）",
        "自取补贴ROI 0.91 → 1.64",
        "自取业务减亏 33 万同时订单增长 +66%"
      ]
    },
    {
      "period": "2024.12 — 2025.03",
      "company": "Depology",
      "dept": "北美 K-Beauty 院线护肤品牌",
      "position": "北美市场增长运营实习生 · 广告投放体系搭建 / 数据归因 / A/B 测试",
      "highlights": [
        "<b>广告投流策略</b>——Meta / TikTok / Google 广告投流，PGC Ads；Spark Ads &amp; SEO",
        "<b>竞品调研</b>——ForePlay、Facebook Library",
        "<b>网页设计</b>——landing page 网页设计及 A/B test"
      ],
      "stats": [
        "ROAS 提高 20%，跑出 5 个 winning ads"
      ]
    },
    {
      "period": "2023.11 — 2024.03",
      "company": "快手",
      "dept": "电商事业部",
      "position": "电商运营实习生 · 行业运营 / 货架运营",
      "highlights": [
        "<b>行业运营</b>——女装大盘分析、商家诊断，总结流量下降排查 SOP",
        "<b>货架运营</b>——女装、母婴品类招商入驻（0→1），打造女装 Showcase"
      ],
      "stats": [
        "3 家商家稳定女装 TOP 8",
        "品类货架 0→1 搭建"
      ]
    },
    {
      "period": "2022.09 — 2022.12",
      "company": "网易",
      "dept": "游戏事业部",
      "position": "直播营销实习生 · 营销策划 / 主播激励增长",
      "highlights": [
        "<b>营销策划</b>——独立策划 4 场节点营销活动，全流程闭环",
        "<b>主播增长</b>——拉新促活活动、梯度激励方案、核心资源位上线"
      ],
      "stats": [
        "场均 PV 100 万+",
        "同类活动 PV +235%",
        "新开播 +11.5%",
        "主播总曝光 2.9 亿+"
      ]
    },
    {
      "period": "2022.06 — 2022.09",
      "company": "滴滴",
      "dept": "代驾事业部",
      "position": "策略运营实习生 · 数据异动分析 / 数据监控",
      "highlights": [
        "<b>数据异动分析</b>——AARRR 模型定位获取-激活 gap，协同产品改版",
        "<b>数据监控体系</b>——数据播报机器人，自动化日报"
      ],
      "stats": [
        "下单转化率 +52%",
        "日报效率 +84%"
      ]
    }
  ],

  "aiNote": "前三项在美团业务中长期使用，最后一项为自己探索的小产品。",

  "aiProjects": [
    {
      "icon": "🤖",
      "name": "竞对监控 Agent",
      "tag": "AI Agent · 竞争情报",
      "desc": "实时追踪竞品定价与活动信号，支撑选品定价决策。"
    },
    {
      "icon": "🔍",
      "name": "补贴自查平台",
      "tag": "内部平台 · 数据治理",
      "desc": "内部补贴纠查工具，兼一线反馈渠道。"
    },
    {
      "icon": "🧰",
      "name": "选品工作台",
      "tag": "工作流工具 · 协同",
      "desc": "打通月度选品策略与采购的信息同步。"
    },
    {
      "icon": "🎁",
      "name": "生日互动小产品",
      "tag": "开源项目 · 生活场景",
      "desc": "刮刮乐 + 趣味答题赢生日礼物。",
      "link": "https://carlenesong.github.io/happy-birthday-scratch-off",
      "linkText": "在线 Demo "
    }
  ],

  "education": [
    {
      "period": "2024.09 — 2025.11",
      "school": "香港中文大学",
      "sideShort": "M.S. 市场营销（大数据方向）",
      "sideYear": "2025",
      "degree": "硕士 · 市场营销（大数据方向）",
      "items": [
        "GPA <b>3.61 / 4.0</b>，Dean's Honor List（院长荣誉名单）毕业",
        "消费者行为、商业分析、数字营销、机器学习等 <b>7 门课程 A / A-</b>"
      ]
    },
    {
      "period": "2020.09 — 2024.06",
      "school": "浙江大学",
      "sideShort": "B.A. 政治学与行政学",
      "sideYear": "2024",
      "degree": "本科 · 政治学与行政学",
      "items": [
        "GPA <b>3.97 / 4.0</b>，浙江大学优秀毕业生",
        "周大福奖学金、校三等奖学金",
        "国家社科重大课题子课题第一负责人",
        "校学生会部长 · 本科生院新闻媒体中心秘书长"
      ]
    }
  ],

  "works": [
    {
      "cat": "行业白皮书",
      "name": "《企业数智驱动白皮书》合著",
      "desc": "联合编撰的行业深度白皮书，梳理企业数智化转型中的数据驱动链路与落地路径。",
      "link": "https://www.digiwin.com/marketing/event/whitebook.pdf",
      "linkText": "阅读白皮书 PDF "
    },
    {
      "cat": "创新项目",
      "name": "《太虚之境》元宇宙文化变现",
      "desc": "基于飞猪平台的虚拟元宇宙世界设计，NFT + LBS 玩法实现非遗文化变现。获阿里 CMO、埃森哲中华区 CEO 公开褒奖。",
      "link": "",
      "linkText": "阿里高校创新挑战赛 · 华东赛区第二名"
    },
    {
      "cat": "整合营销提案",
      "name": "华润三九「999 皮炎平」营销提案",
      "desc": "Social Listening + Focus Group 挖掘消费群体痛点，重新定义产品沟通场景。",
      "link": "",
      "linkText": "获华润项目组高分评价"
    },
    {
      "cat": "自主开源项目",
      "name": "生日互动小产品",
      "desc": "刮刮乐 + 趣味答题赢生日礼物的互动小产品。",
      "link": "https://carlenesong.github.io/happy-birthday-scratch-off",
      "linkText": "在线 Demo →（GitHub: CarleneSong/happy-birthday-scratch-off）"
    }
  ],

  "skills": [
    { "key": "Data",      "value": "<b>SQL</b> · <b>Python</b> · <b>R</b>（数据分析）" },
    { "key": "AI",        "value": "<b>Vibe Coding</b> · <b>AI Agent</b>" },
    { "key": "Growth",    "value": "<b>PLG 商业化模式探索</b> · <b>商品与补贴策略</b> · <b>用户调研分析</b>" },
    { "key": "Interests", "value": "滑板 · 攀岩 · 羽毛球 · 剧本杀 · 推理解谜 · 象棋 · 阅读 · 旅行 · 美食" }
  ],

  "languages": [
    { "name": "中文", "level": "母语" },
    { "name": "英文", "level": "流利" }
  ],

  "footer": {
    "left": "© Carlene Song",
    "right": "本站最终解释权归 Carlene 所有"
  }
};
