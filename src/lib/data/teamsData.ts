// src/lib/data/teamsData.ts
export interface Member {
  memberId: string;
  name: string;
  fullName?: string;
  englishName?: string;
  birthDate?: string;
  height?: number;
  zodiac?: string;
  number?: string;
  joinYear?: number;
  "schedule": string[];
  links: {
    facebook?: string;
    ig?: string;
    thread?: string;
    x?: string;
    official?: string;
  };
}

export interface Team {
  teamId: string;
  teamName: string;
  members: Member[];
  scheduleSourceLink: string;
}
const rkgGames = ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-23", "2025-04-24",];
const rkg: Member[] = [
    {
      "memberId": "RG01",
      "name": "曲曲",
      "fullName": "凃曲羿",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-11", "2025-04-18", "2025-04-19", "2025-04-24",]
    },
    {
      "memberId": "RG02",
      "name": "琳妲",
      "fullName": "林羿禎",
      "links": {},
      "schedule": ["2025-03-30","2025-04-11", "2025-04-12", "2025-04-13","2025-04-19", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG03",
      "name": "岱縈",
      "fullName": "林岱縈",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-19", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG04",
      "name": "卉妮",
      "fullName": "涂卉妮",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-20",]
    },
    {
      "memberId": "RG05",
      "name": "孟潔",
      "fullName": "林孟潔",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-23", ]
    },
    {
      "memberId": "RG06",
      "name": "若潼",
      "fullName": "李若潼",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-11", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG07",
      "name": "筠熹",
      "fullName": "鄭筠熹",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-23"]
    },
    {
      "memberId": "RG08",
      "name": "彩香",
      "fullName": "今井彩香",
      "links": {},
      "schedule": []
    },
    {
      "memberId": "RG09",
      "name": "陳伊",
      "fullName": "陳奕如",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-23",]
    },
    {
      "memberId": "RG10",
      "name": "小紫",
      "fullName": "邱紫庭",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-23",]
    },
    {
      "memberId": "RG11",
      "name": "熊霓",
      "fullName": "熊霓",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-12", "2025-04-18", "2025-04-19", "2025-04-20","2025-04-24",]
    },
    {
      "memberId": "RG12",
      "name": "林穎樂",
      "fullName": "林俞廷",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-18", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG13",
      "name": "宋宋",
      "fullName": "宋婉卉",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-19", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG14",
      "name": "嘎琳 GaLin",
      "fullName": "胡佳琳",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG15",
      "name": "貝佳頤",
      "fullName": "林儷軒",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-12", "2025-04-13", "2025-04-19", "2025-04-20",]
    },
    {
      "memberId": "RG16",
      "name": "李昀 Nikki",
      "fullName": "李昀芯",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-12", "2025-04-13", "2025-04-19", "2025-04-20", ]
    },
    {
      "memberId": "RG17",
      "name": "禹菡",
      "fullName": "黃詩涵",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-23", ]
    },
    {
      "memberId": "RG18",
      "name": "芷軒",
      "fullName": "陳芷軒",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG19",
      "name": "沈珈妤",
      "fullName": "沈珈妤",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-11", "2025-04-24",]
    },
    {
      "memberId": "RG20",
      "name": "溫妮",
      "fullName": "王名韻",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-19", "2025-04-24",]
    },
    {
      "memberId": "RG21",
      "name": "Kira",
      "fullName": "詹上真",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG22",
      "name": "丘薆",
      "fullName": "丘薆",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-11", "2025-04-13","2025-04-19", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG23",
      "name": "蜜卡登 Mika",
      "fullName": "徐青媞",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG24",
      "name": "崔荷潾",
      "fullName": "張梔呈",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-18", "2025-04-19", "2025-04-24",]
    },
    {
      "memberId": "RG25",
      "name": "小葳葳",
      "fullName": "洪葳",
      "links": {},
      "schedule":["2025-03-30", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-24",]
    },
    {
      "memberId": "RG26",
      "name": "佳帆",
      "fullName": "高橋佳帆",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-09", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-20",]
    },
    {
      "memberId": "RG27",
      "name": "笑笑",
      "fullName": "劉姿妤",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-08", "2025-04-09", "2025-04-12", "2025-04-13",]
    },
    {
      "memberId": "RG28",
      "name": "彭彭",
      "fullName": "彭柔旂",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-12", "2025-04-18", "2025-04-20", "2025-04-23",]
    },
    {
      "memberId": "RG29",
      "name": "廉世彬",
      "fullName": "염세빈",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-11", "2025-04-12", "2025-04-13", "2025-04-18", "2025-04-23", "2025-04-24",]
    },
    {
      "memberId": "RG30",
      "name": "禹洙漢",
      "fullName": "우수한",
      "links": {},
      "schedule": ["2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-23", "2025-04-24",]
    },
    {
      "memberId": "RG31",
      "name": "河智媛",
      "fullName": "하지원",
      "links": {},
      "schedule":["2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-23", "2025-04-24",]
    }
  ];

const psgirl: Member[] = [
  {
    "memberId": "PS01",
    "name": "貴貴",
    "fullName": "劉貴華",
    "englishName": "Sammy",
    "birthDate": "1991/10/05",
    "height": 169,
    "zodiac": "天秤座",
    "number": "14",
    "joinYear": 2014,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS02",
    "name": "凱蒂",
    "fullName": "謝珍永",
    "englishName": "Katy",
    "birthDate": "1988-07-03",
    "height": 169,
    "zodiac": "巨蟹座",
    "number": "73",
    "joinYear": 2014,
    "links": {},
    "schedule": ["2025-03-29",  "2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS03",
    "name": "峮峮",
    "fullName": "吳函峮",
    "englishName": "Qun",
    "birthDate": "1990-04-19",
    "height": 160,
    "zodiac": "牡羊座",
    "number": "77",
    "joinYear": 2016,
    "links": {},
    "schedule": ["2025-03-29",  "2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS04",
    "name": "短今",
    "fullName": "胡馨儀",
    "englishName": "Sammie",
    "birthDate": "1991-09-23",
    "height": 174,
    "zodiac": "處女座",
    "number": "23",
    "joinYear": 2016,
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06",]
  },
  {
    "memberId": "PS05",
    "name": "希希",
    "fullName": "",
    "englishName": "",
    "birthDate": "1994-08-05",
    "height": 168,
    "zodiac": "獅子座",
    "number": "1",
    "joinYear": 2016,
    "links": {},
    "schedule": ["2025-03-29", "2025-04-04", "2025-04-05", "2025-04-06",]
  },
  {
    "memberId": "PS06",
    "name": "小安",
    "fullName": "廖加惠",
    "englishName": "Ann",
    "birthDate": "1987-10-03",
    "height": 168,
    "zodiac": "天秤座",
    "number": "3",
    "joinYear": 2017,
    "links": {},
    "schedule": ["2025-04-18", "2025-04-19", "2025-04-20","2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS07",
    "name": "白白",
    "fullName": "陳蔓華",
    "englishName": "White",
    "birthDate": "1989-01-16",
    "height": 163,
    "zodiac": "摩羯座",
    "number": "16",
    "joinYear": 2017,
    "links": {},
    "schedule": []
  },
  {
    "memberId": "PS08",
    "name": "波波",
    "fullName": "陳柏蓉",
    "englishName": "Bobo",
    "birthDate": "1991-07-15",
    "height": 168,
    "zodiac": "巨蟹座",
    "number": "88",
    "joinYear": 2017,
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS09",
    "name": "晴兒",
    "fullName": "薛晴",
    "englishName": "Sunny",
    "birthDate": "1993-03-27",
    "height": 168,
    "zodiac": "白羊座",
    "number": "72",
    "joinYear": 2017,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-15", "2025-04-16"]
  },
  {
    "memberId": "PS10",
    "name": "畇二",
    "fullName": "曲霖達",
    "englishName": "Yuner",
    "birthDate": "1993-03-01",
    "height": 162,
    "zodiac": "雙魚座",
    "number": "22",
    "joinYear": 2019,
    "links": {},
    "schedule": ["2025-03-29","2025-03-30", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-10"]
  },
  {
    "memberId": "PS11",
    "name": "妮可",
    "fullName": "楊昀蓁",
    "englishName": "Nicole",
    "birthDate": "1995-06-29",
    "height": 168,
    "zodiac": "巨蟹座",
    "number": "6",
    "joinYear": 2021,
    "links": {},
    "schedule": ["2025-03-29", "2025-04-04",  "2025-04-15","2025-04-16","2025-04-18","2025-04-19","2025-04-20"]
  },
  {
    "memberId": "PS12",
    "name": "盈瑩",
    "fullName": "郭盈瑩",
    "englishName": "Dora",
    "birthDate": "1992-03-29",
    "height": 162,
    "zodiac": "牡羊座",
    "number": "33",
    "joinYear": 2022,
    "links": {},
    "schedule": ["2025-03-29","2025-03-30", "2025-04-09", "2025-04-10", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS13",
    "name": "林可",
    "fullName": "陳玟伶",
    "englishName": "Link",
    "birthDate": "1995-04-12",
    "height": 162,
    "zodiac": "牡羊座",
    "number": "12",
    "joinYear": 2022,
    "links": {},
    "schedule": ["2025-03-29","2025-03-30", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-10"]
  },
  {
    "memberId": "PS14",
    "name": "Julia",
    "fullName": "林忻怡",
    "englishName": "Julia",
    "birthDate": "1991-07-10",
    "height": 169,
    "zodiac": "巨蟹座",
    "number": "49",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-09", "2025-04-10", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS15",
    "name": "君白",
    "fullName": "謝君白",
    "englishName": "Pai",
    "birthDate": "1991-07-14",
    "height": 165,
    "zodiac": "巨蟹座",
    "number": "7",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-30", "2025-04-15","2025-04-16","2025-04-18","2025-04-19","2025-04-20"]
  },
  {
    "memberId": "PS16",
    "name": "曼容",
    "fullName": "高曼容",
    "englishName": "Manjung",
    "birthDate": "1997-02-17",
    "height": 168,
    "zodiac": "水瓶座",
    "number": "18",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-04","2025-04-05","2025-04-06",  "2025-04-15","2025-04-16","2025-04-18","2025-04-19","2025-04-20"]
  },
  {
    "memberId": "PS17",
    "name": "汶汶",
    "fullName": "王敬汶",
    "englishName": "Jessie",
    "birthDate": "1998-02-21",
    "height": 170,
    "zodiac": "雙魚座",
    "number": "21",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-30", "2025-04-04","2025-04-05","2025-04-06", "2025-04-15", "2025-04-16", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS18",
    "name": "怡琪",
    "fullName": "洪怡琪",
    "englishName": "Ichi",
    "birthDate": "1998-05-27",
    "height": 170,
    "zodiac": "雙子座",
    "number": "17",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-04-15", "2025-04-16", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS19",
    "name": "小迪",
    "fullName": "冼迪琦",
    "englishName": "Dic",
    "birthDate": "1999-02-13",
    "height": 165,
    "zodiac": "水瓶座",
    "number": "48",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-04","2025-04-05","2025-04-06", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS20",
    "name": "沛婕",
    "fullName": "謝儀諪",
    "englishName": "Yiting",
    "birthDate": "1999-04-21",
    "height": 162,
    "zodiac": "金牛座",
    "number": "27",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-09", "2025-04-10"]
  },
  {
    "memberId": "PS21",
    "name": "Wendy",
    "fullName": "葉昕爰",
    "englishName": "Wendy",
    "birthDate": "2001-01-10",
    "height": 164,
    "zodiac": "摩羯座",
    "number": "36",
    "joinYear": 2023,
    "links": {},
    "schedule": [ "2025-04-09", "2025-04-10", "2025-04-29", "2025-04-30"]
  },
  {
    "memberId": "PS22",
    "name": "夏蕾",
    "fullName": "林又橙",
    "englishName": "Abby",
    "birthDate": "2001-10-25",
    "height": 162,
    "zodiac": "天蠍座",
    "number": "2",
    "joinYear": 2023,
    "links": {},
    "schedule": ["2025-03-20","2025-03-30", "2025-04-09", "2025-04-10","2025-04-15","2025-04-16","2025-04-18","2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS23",
    "name": "少鹽",
    "fullName": "翁唯祐",
    "englishName": "Yenyen",
    "birthDate": "1999-02-09",
    "height": 160,
    "zodiac": "水瓶座",
    "number": "29",
    "joinYear": 2024,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-05", "2025-04-05", "2025-04-06"]
  },
  {
    "memberId": "PS24",
    "name": "李丹妃",
    "fullName": "이단비",
    "englishName": "Danbi",
    "birthDate": "1989-03-08",
    "height": 170,
    "zodiac": "雙魚座",
    "number": "24",
    "joinYear": 2024,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS25",
    "name": "邊荷律",
    "fullName": "변하율",
    "englishName": "Hayul",
    "birthDate": "1999-03-04",
    "height": 164,
    "zodiac": "雙魚座",
    "number": "34",
    "joinYear": 2024,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-18", "2025-04-19", "2025-04-20"]
  },
  {
    "memberId": "PS26",
    "name": "牛奶",
    "fullName": "王儷潔",
    "englishName": "Milk",
    "birthDate": "1993-11-25",
    "height": 160,
    "zodiac": "射手座",
    "number": "25",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-03-29", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-10"
    ]
  },
  {
    "memberId": "PS27",
    "name": "芊芊",
    "fullName": "王芊茵",
    "englishName": "Angel",
    "birthDate": "2000-05-12",
    "height": 158,
    "zodiac": "金牛座",
    "number": "20",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-03-29", "2025-03-30", "2025-04-09", "2025-04-10", "2025-04-15", "2025-04-16", "2025-04-29", "2025-04-30"
    ]
  },
  {
    "memberId": "PS28",
    "name": "衣宸",
    "fullName": "蔡衣宸",
    "englishName": "Angelia",
    "birthDate": "2002-04-17",
    "height": 164,
    "zodiac": "牡羊座",
    "number": "00",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-03-29", "2025-04-18", "2025-04-19", "2025-04-20"
    ]
  },
  {
    "memberId": "PS29",
    "name": "瑄瑄",
    "fullName": "郭如瑄",
    "englishName": "Jennifer",
    "birthDate": "2006-07-05",
    "height": 163,
    "zodiac": "巨蟹座",
    "number": "75",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-04-04",
      "2025-04-05",
      "2025-04-06"
    ]
  },
  {
    "memberId": "PS30",
    "name": "莎莎",
    "fullName": "張家綾",
    "englishName": "Alisa",
    "birthDate": "2002-05-05",
    "height": 167,
    "zodiac": "金牛座",
    "number": "8",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-15", "2025-04-16"
    ]
  },
  {
    "memberId": "PS31",
    "name": "維尼",
    "fullName": "鄭㚥晅",
    "englishName": "Winnie",
    "birthDate": "2000-02-17",
    "height": 161,
    "zodiac": "水瓶座",
    "number": "10",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-03-30","2025-04-09","2025-04-10", "2025-04-15","2025-04-16","2025-04-18","2025-04-19","2025-04-20","2025-04-29","2025-04-30"
    ]
  },
  {
    "memberId": "PS32",
    "name": "璇璇",
    "fullName": "林宛璇",
    "englishName": "Wendy",
    "birthDate": "1999-06-24",
    "height": 174,
    "zodiac": "巨蟹座",
    "number": "66",
    "joinYear": 2025,
    "links": {},
    "schedule": [
      "2025-03-30", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-29", "2025-04-30",
    ]
  },
  {
    "memberId": "PS33",
    "name": "桃子",
    "fullName": "菊池桃子",
    "englishName": "Momoko",
    "birthDate": "1998-01-05",
    "height": 165,
    "zodiac": "魔羯座",
    "number": "11",
    "joinYear": 2025,
    "links": {},
    "schedule": ["2025-03-29", "2025-03-30", "2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20"]
  }
];
const dgTeam=["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-06", "2025-04-15","2025-04-16","2025-04-25","2025-04-26","2025-04-27","2025-04-30",];
const dragonbeauties: Member[] = [
  {
    "memberId": "WS01",
    "name": "李多慧",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-06", "2025-04-16","2025-04-25","2025-04-26","2025-04-27"],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e6%9d%8e%e5%a4%9a%e6%85%a7/"
    }
  },
  {
    "memberId": "WS02",
    "name": "小映",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-15","2025-04-16","2025-04-26","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%b0%8f%e6%98%a0/"
    }
  },
  {
    "memberId": "WS03",
    "name": "霖霖",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-15","2025-04-16","2025-04-25","2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e9%9c%96%e9%9c%96/"
    }
  },
  {
    "memberId": "WS04",
    "name": "林襄",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-06", "2025-04-15","2025-04-16","2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e6%9e%97%e8%a5%84/"
    }
  },
  {
    "memberId": "WS05",
    "name": "Yuri",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-16", "2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/yuri/"
    }
  },
  {
    "memberId": "WS06",
    "name": "菲菲",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-06", "2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e8%8f%b2%e8%8f%b2/"
    }
  },
  {
    "memberId": "WS07",
    "name": "琪琪",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-06", "2025-04-25","2025-04-26","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%90%aa%e7%90%aa/"
    }
  },
  {
    "memberId": "WS08",
    "name": "心璇",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-16","2025-04-25","2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%bf%83%e7%92%87/"
    }
  },
  {
    "memberId": "WS09",
    "name": "米奇",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-16", "2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/mickey%e5%90%b3%e7%b1%b3%e5%a5%87/"
    }
  },
  {
    "memberId": "WS10",
    "name": "星岑",
    "schedule":["2025-04-02","2025-04-03", "2025-04-06", "2025-04-15","2025-04-25","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e6%98%9f%e5%b2%91/"
    }
  },
  {
    "memberId": "WS11",
    "name": "口水",
    "schedule":["2025-04-03","2025-04-04", "2025-04-15","2025-04-25","2025-04-26","2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%8f%a3%e6%b0%b4/"
    }
  },
  {
    "memberId": "WS12",
    "name": "賴可",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-06", "2025-04-15","2025-04-25","2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/like/"
    }
  },
  {
    "memberId": "WS13",
    "name": "馬妹",
    "schedule":["2025-04-02","2025-04-03","2025-04-05", "2025-04-06", "2025-04-16","2025-04-25","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e9%a6%ac%e5%a6%b9/"
    }
  },
  {
    "memberId": "WS14",
    "name": "張晴",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-05", "2025-04-06", "2025-04-25",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%bc%b5%e6%99%b4/"
    }
  },
  {
    "memberId": "WS15",
    "name": "蘿拉",
    "schedule":["2025-04-02","2025-04-03","2025-04-04","2025-04-16","2025-04-26","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e8%98%bf%e6%8b%89/"
    }
  },
  {
    "memberId": "WS16",
    "name": "芮妮",
    "schedule":["2025-04-02","2025-04-03","2025-04-04","2025-04-16","2025-04-25","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e8%8a%ae%e5%a6%ae/"
    }
  },
  {
    "memberId": "WS17",
    "name": "小蛙",
    "schedule":["2025-04-02","2025-04-03","2025-04-04","2025-04-15","2025-04-25","2025-04-26","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%b0%8f%e8%9b%99/"
    }
  },
  {
    "memberId": "WS18",
    "name": "Queena",
    "schedule":["2025-04-02","2025-04-03", "2025-04-15","2025-04-16", "2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/queena/"
    }
  },
  {
    "memberId": "WS19",
    "name": "寧寧",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-06", "2025-04-15", "2025-04-25", "2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%af%a7%e5%af%a7/"
    }
  },
  {
    "memberId": "WS20",
    "name": "璦昀",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-06", "2025-04-15","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%92%a6%e6%98%80/"
    }
  },
  {
    "memberId": "WS21",
    "name": "詩雅",
    "schedule":["2025-04-02","2025-04-03","2025-04-25","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e8%a9%a9%e9%9b%85/"
    }
  },
  {
    "memberId": "WS22",
    "name": "沛沛",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-06", "2025-04-15","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e6%b2%9b%e6%b2%9b/"
    }
  },
  {
    "memberId": "WS23",
    "name": "小珍奶",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-06","2025-04-16","2025-04-25","2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e5%b0%8f%e7%8f%8d%e5%a5%b6/"
    }
  },
  {
    "memberId": "WS24",
    "name": "靜靜",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-06","2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e9%9d%9c%e9%9d%9c/"
    }
  },
  {
    "memberId": "WS25",
    "name": "柳柳",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-06","2025-04-25", "2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e6%9f%b3%e6%9f%b3/"
    }
  },
  {
    "memberId": "WS26",
    "name": "群群",
    "schedule":["2025-04-02","2025-04-03","2025-04-04", "2025-04-06", "2025-04-27",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%be%a4%e7%be%a4/"
    }
  },
  {
    "memberId": "WS27",
    "name": "佩霓",
    "schedule":["2025-04-02","2025-04-03", "2025-04-05", "2025-04-15", "2025-04-25", "2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e4%bd%a9%e9%9c%93/"
    }
  },
  {
    "memberId": "WS28",
    "name": "練習生 姵宸",
    "schedule":["2025-04-03","2025-04-05", "2025-04-15","2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%b7%b4%e7%bf%92%e7%94%9f-%e5%a7%b5%e5%ae%b8/"
    }
  },
  {
    "memberId": "WS29",
    "name": "練習生 貝拉",
    "schedule":["2025-04-04","2025-04-25","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%b7%b4%e7%bf%92%e7%94%9f-%e8%b2%9d%e6%8b%89/"
    }
  },
  {
    "memberId": "WS30",
    "name": "練習生 掌沛",
    "schedule":["2025-04-03","2025-04-06", "2025-04-15","2025-04-16",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%b7%b4%e7%bf%92%e7%94%9f-%e6%8e%8c%e6%b2%9b/"
    }
  },
  {
    "memberId": "WS31",
    "name": "練習生 瑄瑄",
    "schedule":["2025-04-02", "2025-04-06",  "2025-04-16","2025-04-25","2025-04-26",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%b7%b4%e7%bf%92%e7%94%9f-%e7%91%84%e7%91%84/"
    }
  },
  {
    "memberId": "WS32",
    "name": "練習生 各務禮美奈",
    "schedule":["2025-04-02","2025-04-04", "2025-04-05","2025-04-27","2025-04-30",],
    "links": {
      "official": "https://www.wdragons.com/beauty/%e7%b7%b4%e7%bf%92%e7%94%9f-%e5%90%84%e5%8b%99%e7%a6%ae%e7%be%8e%e5%a5%88/"
    }
  }
];

const fubonGames = ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"];
const fubonangels: Member[] = [
  {
    "memberId": "FBA01",
    "name": "潔米",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-13"],
  },
  {
    "memberId": "FBA02",
    "name": "慈妹",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA03",
    "name": "檸檬",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA04",
    "name": "丹丹",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12",],
  },
  {
    "memberId": "FBA05",
    "name": "蓁蓁",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "FBA06",
    "name": "秀秀子",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-13"],
  },
  {
    "memberId": "FBA07",
    "name": "安娜",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-13"],
  },
  {
    "memberId": "FBA08",
    "name": "Jessy",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03","2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA09",
    "name": "Tiffany",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA10",
    "name": "奶昔",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA11",
    "name": "維心",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12",],
  },
  {
    "memberId": "FBA12",
    "name": "Kesha",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA13",
    "name": "沁沁",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12",],
  },
  {
    "memberId": "FBA14",
    "name": "卡洛琳",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12",],
  },
  {
    "memberId": "FBA15",
    "name": "大頭",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-13"],
  },
  {
    "memberId": "FBA16",
    "name": "栗子",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA17",
    "name": "寶兒",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03",],
  },
  {
    "memberId": "FBA18",
    "name": "南珉貞",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA19",
    "name": "李雅英",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03",  "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA20",
    "name": "金渡娥",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "FBA21",
    "name": "金子仁",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "FBA22",
    "name": "李珠珢",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03",],
  },
  {
    "memberId": "FBA23",
    "name": "禾羽",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA24",
    "name": "雅惟",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA25",
    "name": "潔潔",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03", "2025-04-11", "2025-04-12", "2025-04-13"],
  },
  {
    "memberId": "FBA26",
    "name": "Kapo",
    "links": {},
    "schedule": ["2025-04-02", "2025-04-03",],
  }
];

const unigirl: Member[] = [
  {
    "memberId": "UG01",
    "name": "妮妮",
    "links": {},
    "schedule": ["2025-04-23", "2025-04-22"],
  },
  {
    "memberId": "UG02",
    "name": "幼齒",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG03",
    "name": "Yovia",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-17"],
  },
  {
    "memberId": "UG04",
    "name": "Mina",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG05",
    "name": "詩詩",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-17"],
  },
  {
    "memberId": "UG06",
    "name": "芮絲",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-23", "2025-04-22"],
  },
  {
    "memberId": "UG07",
    "name": "少少",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22", "2025-04-17"],
  },
  {
    "memberId": "UG08",
    "name": "賴賴",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22"],
  },
  {
    "memberId": "UG09",
    "name": "曼萍",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-25", "2025-04-23", "2025-04-22", "2025-04-17"],
  },
  {
    "memberId": "UG10",
    "name": "瑟七",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22", "2025-04-17"],
  },
  {
    "memberId": "UG11",
    "name": "Joy",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-17"],
  },
  {
    "memberId": "UG12",
    "name": "小美",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG13",
    "name": "斐棋",
    "links": {},
    "schedule": ["2025-04-23", "2025-04-22"],
  },
  {
    "memberId": "UG14",
    "name": "柔一",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-23", "2025-04-22", "2025-04-17"],
  },
  {
    "memberId": "UG15",
    "name": "一七",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22", "2025-04-17"],
  },
  {
    "memberId": "UG16",
    "name": "包子",
    "links": {},
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-17"],
  },
  {
    "memberId": "UG17",
    "name": "侯莉娜",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG18",
    "name": "千紘",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG19",
    "name": "希美",
    "links": {},
    "schedule": [],
  },
  {
    "memberId": "UG20",
    "name": "趙娟週",
    "links": {},
    "schedule": ["2025-04-23"],
  }
];

// 找不到匹配名稱的人員
const unmatched: {name: string, schedule: string[]}[] = [
  {
    "name": "YUKI",
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22", "2025-04-17"]
  },
  {
    "name": "妞妞",
    "schedule": ["2025-04-27", "2025-04-26", "2025-04-25", "2025-04-23", "2025-04-22"]
  },
  {
    "name": "Maggie",
    "schedule": ["2025-04-27", "2025-04-25", "2025-04-23", "2025-04-22"]
  },
  {
    "name": "Nozomi",
    "schedule": ["2025-04-27", "2025-04-23", "2025-04-22", "2025-04-17"]
  },
  {
    "name": "Chihiro",
    "schedule": ["2025-04-27", "2025-04-25", "2025-04-22"]
  },
  {
    "name": "侯芳",
    "schedule": ["2025-04-17"]
  }
];
const wingGames = ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",];
const wingstar: Member[] = [
  {
    "memberId": "WS01",
    "name": "安芝儇",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-29",],
  },
  {
    "memberId": "WS02",
    "name": "朴旻曙 Mingo",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-20", ],
  },
  {
    "memberId": "WS03",
    "name": "螢螢",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20",],
  },
  {
    "memberId": "WS04",
    "name": "林浠",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", ],
  },
  {
    "memberId": "WS05",
    "name": "圈圈",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS06",
    "name": "恬魚",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-30",],
  },
  {
    "memberId": "WS07",
    "name": "昆昆",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS08",
    "name": "李樂",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20",],
  },
  {
    "memberId": "WS09",
    "name": "JC",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", ],
  },
  {
    "memberId": "WS10",
    "name": "黃澄澄",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS11",
    "name": "妡0",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20",],
  },
  {
    "memberId": "WS12",
    "name": "艾琳",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS13",
    "name": "一粒",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-19", "2025-04-20", "2025-04-30",],
  },
  {
    "memberId": "WS14",
    "name": "瑈瑈",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20", ],
  },
  {
    "memberId": "WS15",
    "name": "筱雯",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09","2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS16",
    "name": "毛毛",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-29", ],
  },
  {
    "memberId": "WS17",
    "name": "芃芃",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-09", "2025-04-18", "2025-04-19", "2025-04-20",],
  },
  {
    "memberId": "WS18",
    "name": "玖玖",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-18",  "2025-04-29", ],
  },
  {
    "memberId": "WS19",
    "name": "米亞",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-18", "2025-04-19", "2025-04-20", "2025-04-29", ],
  },
  {
    "memberId": "WS20",
    "name": "米妮",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-20", ],
  },
  {
    "memberId": "WS21",
    "name": "尼莫",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-18", "2025-04-29",],
  },
  {
    "memberId": "WS22",
    "name": "千千",
    "links": {},
    "schedule":["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-18", "2025-04-20", "2025-04-30",],
  },
  {
    "memberId": "WS23",
    "name": "ET",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-19", "2025-04-20", "2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS24",
    "name": "會晴",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-09", "2025-04-18","2025-04-20", ],
  },
  {
    "memberId": "WS25",
    "name": "芋頭",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06",  "2025-04-09", "2025-04-18","2025-04-29", "2025-04-30",],
  },
  {
    "memberId": "WS26",
    "name": "Nina",
    "links": {},
    "schedule": ["2025-04-04", "2025-04-05", "2025-04-06", "2025-04-08", "2025-04-19", "2025-04-30",],
  }
];

export const teamsData: Team[] = [
  {
    teamId: 'T1',
    teamName: 'Passion Sisters (中信兄弟)', // Shorter name for tabs
    scheduleSourceLink: "https://www.facebook.com/Passionsisters/posts/pfbid0ct6kAbEyCYP5T7k4pnk1oWJqRoo8hPyE1Df5DT4UPtSYmxUvx22dpfr5LQ9jQ7Ryl",
    members: psgirl,
  },
  {
    teamId: 'T2',
    teamName: 'Dragon Beauties (味全龍)',
    scheduleSourceLink: "https://www.facebook.com/permalink.php?story_fbid=pfbid0YsGG2W9TuyYSmjukWBcVDNUWrz3Pndf3SoQs8JH9NuLbPvEi5cU1fNyjBYuM5v91l&id=100069085601345",
    members: dragonbeauties,
  },
  {
    teamId: 'T3',
    teamName: 'Rakuten Girls (樂天桃猿)',
    scheduleSourceLink: "https://www.facebook.com/RakutenGirls.official/posts/pfbid0e8qK7ZtsVZiNrA2sumCsN4PuVyAWokHQeetob8p9M4QBC9PCLpMobSXANVLGHbKDl",
    members: rkg,
  },
  {
    teamId: 'T4',
    teamName: 'Fubon Angels (富邦悍將)',
    scheduleSourceLink: "https://www.facebook.com/FubonAngels/posts/pfbid02gh95VZvendm1rcRLq5krURsGLwG8FBhLKMLPnQrwWCzqijKgnRVDvtFzeATKy7wpl",
    members: fubonangels,
  },
  {
    teamId: 'T5',
    teamName: 'Uni Girls (統一7-ELEVEn獅)',
    scheduleSourceLink: "https://www.facebook.com/loveunigirls/posts/pfbid029N6rxM1JjUiuaxqDDy3cK6sEfnAvMM3d2t9gpTtCKfmDdrHHUfULekzA7R38GfRRl",
    members: unigirl,
  },
  {
    teamId: 'T6',
    teamName: 'Wing Stars (台鋼雄鷹)',
    scheduleSourceLink: "https://www.facebook.com/tsgwingstars/posts/pfbid0evhftgtDQduhLvAXceXeSdE14YCF2AfTDX3YSnk2GMNQBNoqvEbaVT4vmUvyAFGKl",
    members: wingstar
  }
];
