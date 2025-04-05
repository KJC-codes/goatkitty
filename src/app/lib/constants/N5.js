"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var kanjiToNumber = {
    '一': 1,
    '二': 2,
    '三': 3,
    '四': 4,
    '五': 5,
    '六': 6,
    '七': 7,
    '八': 8,
    '九': 9,
    '十': 10,
    '百': 100,
    '千': 1000,
    '万': 10000
};
var N5_KANJI = [
    {
        "kanji": "時",
        "meaning": ["time", "hour"],
        "concept": ["time"],
        "strokes": 10,
        "readings": {
            "kunyomi": ["とき", "どき"],
            "onyomi": ["ジ"]
        }
    },
    {
        "kanji": "分",
        "meaning": ["minute", "part"],
        "concept": ["time"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["わける", "わかる"],
            "onyomi": ["ブン", "フン", "ブ"]
        }
    },
    {
        "kanji": "年",
        "meaning": ["year"],
        "concept": ["time"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["とし"],
            "onyomi": ["ネン"]
        }
    },
    {
        "kanji": "週",
        "meaning": ["week"],
        "concept": ["time"],
        "strokes": 11,
        "readings": {
            "kunyomi": [],
            "onyomi": ["シュウ"]
        }
    },
    {
        "kanji": "今",
        "meaning": ["now", "the present"],
        "concept": ["time"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["いま"],
            "onyomi": ["コン", "キン"]
        }
    },
    {
        "kanji": "一",
        "meaning": ["one"],
        "concept": ["number"],
        "strokes": 1,
        "readings": {
            "kunyomi": ["ひとつ"],
            "onyomi": ["イチ"]
        }
    },
    {
        "kanji": "二",
        "meaning": ["two"],
        "concept": ["number"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["ふたつ"],
            "onyomi": ["ニ"]
        }
    },
    {
        "kanji": "三",
        "meaning": ["three"],
        "concept": ["number"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["みっつ"],
            "onyomi": ["サン"]
        }
    },
    {
        "kanji": "四",
        "meaning": ["four"],
        "concept": ["number"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["よっつ"],
            "onyomi": ["シ", "ヨン"]
        }
    },
    {
        "kanji": "五",
        "meaning": ["five"],
        "concept": ["number"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["いつつ"],
            "onyomi": ["ゴ"]
        }
    },
    {
        "kanji": "六",
        "meaning": ["six"],
        "concept": ["number"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["むっつ"],
            "onyomi": ["ロク"]
        }
    },
    {
        "kanji": "七",
        "meaning": ["seven"],
        "concept": ["number"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["ななつ"],
            "onyomi": ["シチ"]
        }
    },
    {
        "kanji": "八",
        "meaning": ["eight"],
        "concept": ["number"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["やっつ"],
            "onyomi": ["ハチ"]
        }
    },
    {
        "kanji": "九",
        "meaning": ["nine"],
        "concept": ["number"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["ここのつ"],
            "onyomi": ["キュウ", "ク"]
        }
    },
    {
        "kanji": "十",
        "meaning": ["ten"],
        "concept": ["number"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["とお"],
            "onyomi": ["ジュウ"]
        }
    },
    {
        "kanji": "百",
        "meaning": ["hundred"],
        "concept": ["number"],
        "strokes": 6,
        "readings": {
            "kunyomi": [],
            "onyomi": ["ヒャク"]
        }
    },
    {
        "kanji": "千",
        "meaning": ["thousand"],
        "concept": ["number"],
        "strokes": 3,
        "readings": {
            "kunyomi": [],
            "onyomi": ["セン"]
        }
    },
    {
        "kanji": "万",
        "meaning": ["ten thousand"],
        "concept": ["number"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["よろず"],
            "onyomi": ["マン"]
        }
    },
    {
        "kanji": "円",
        "meaning": ["yen", "circle"],
        "concept": ["money"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["まる"],
            "onyomi": ["エン"]
        }
    },
    {
        "kanji": "貝",
        "meaning": ["shellfish", "money (historically used as currency)"],
        "concept": ["money"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["かい"],
            "onyomi": ["バイ"]
        }
    },
    {
        "kanji": "間",
        "meaning": ["interval", "between", "space"],
        "concept": ["time", "interval"],
        "strokes": 12,
        "readings": {
            "kunyomi": ["あいだ", "ま"],
            "onyomi": ["カン", "ケン"]
        }
    },
    {
        "kanji": "半",
        "meaning": ["half"],
        "concept": ["time", "interval"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["なかば"],
            "onyomi": ["ハン"]
        }
    },
    {
        "kanji": "前",
        "meaning": ["before", "front"],
        "concept": ["time", "direction"],
        "strokes": 9,
        "readings": {
            "kunyomi": ["まえ"],
            "onyomi": ["ゼン"]
        }
    },
    {
        "kanji": "後",
        "meaning": ["after", "behind"],
        "concept": ["time", "direction"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["あと", "うしろ"],
            "onyomi": ["ゴ", "コウ"]
        }
    },
    {
        "kanji": "小",
        "meaning": ["small", "little"],
        "concept": ["size", "degree"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["ちいさい", "こ"],
            "onyomi": ["ショウ"]
        }
    },
    {
        "kanji": "少",
        "meaning": ["few", "little"],
        "concept": ["size", "quantity"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["すくない", "すこし"],
            "onyomi": ["ショウ"]
        }
    },
    {
        "kanji": "大",
        "meaning": ["big", "large", "great"],
        "concept": ["size", "degree"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["おおきい"],
            "onyomi": ["ダイ", "タイ"]
        }
    },
    {
        "kanji": "多",
        "meaning": ["many", "much"],
        "concept": ["quantity"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["おおい"],
            "onyomi": ["タ"]
        }
    },
    {
        "kanji": "高",
        "meaning": ["high", "tall", "expensive"],
        "concept": ["size", "degree"],
        "strokes": 10,
        "readings": {
            "kunyomi": ["たかい"],
            "onyomi": ["コウ"]
        }
    },
    {
        "kanji": "安",
        "meaning": ["cheap", "safe"],
        "concept": ["price", "degree"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["やすい"],
            "onyomi": ["アン"]
        }
    },
    {
        "kanji": "長",
        "meaning": ["long", "chief", "leader"],
        "concept": ["size", "degree"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["ながい"],
            "onyomi": ["チョウ"]
        }
    },
    {
        "kanji": "白",
        "meaning": ["white"],
        "concept": ["color"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["しろ", "しろい"],
            "onyomi": ["ハク", "ビャク"]
        }
    },
    {
        "kanji": "食",
        "meaning": ["eat"],
        "concept": ["action"],
        "strokes": 9,
        "readings": {
            "kunyomi": ["たべる"],
            "onyomi": ["ショク"]
        }
    },
    {
        "kanji": "行",
        "meaning": ["go", "conduct"],
        "concept": ["action"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["いく", "ゆく", "おこなう"],
            "onyomi": ["コウ", "ギョウ"]
        }
    },
    {
        "kanji": "書",
        "meaning": ["write"],
        "concept": ["action"],
        "strokes": 10,
        "readings": {
            "kunyomi": ["かく"],
            "onyomi": ["ショ"]
        }
    },
    {
        "kanji": "聞",
        "meaning": ["hear", "listen"],
        "concept": ["action"],
        "strokes": 14,
        "readings": {
            "kunyomi": ["きく"],
            "onyomi": ["ブン", "モン"]
        }
    },
    {
        "kanji": "語",
        "meaning": ["language", "word", "speech"],
        "concept": ["language"],
        "strokes": 14,
        "readings": {
            "kunyomi": ["かたる"],
            "onyomi": ["ゴ"]
        }
    },
    {
        "kanji": "舌",
        "meaning": ["tongue"],
        "concept": ["body"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["した"],
            "onyomi": ["ゼツ"]
        }
    },
    {
        "kanji": "口",
        "meaning": ["mouth"],
        "concept": ["body"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["くち"],
            "onyomi": ["コウ", "ク"]
        }
    },
    {
        "kanji": "田",
        "meaning": ["rice field"],
        "concept": ["nature"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["た"],
            "onyomi": ["デン"]
        }
    },
    {
        "kanji": "山",
        "meaning": ["mountain"],
        "concept": ["nature"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["やま"],
            "onyomi": ["サン"]
        }
    },
    {
        "kanji": "目",
        "meaning": ["eye"],
        "concept": ["body"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["め", "ま"],
            "onyomi": ["モク", "ボク"]
        }
    },
    {
        "kanji": "日",
        "meaning": ["day", "sun", "Sunday"],
        "concept": ["weekdays", "time"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["ひ", "び"],
            "onyomi": ["ニチ", "ジツ"]
        }
    },
    {
        "kanji": "月",
        "meaning": ["month", "moon", "Monday"],
        "concept": ["weekdays", "time"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["つき"],
            "onyomi": ["ゲツ", "ガツ"]
        }
    },
    {
        "kanji": "火",
        "meaning": ["fire", "Tuesday"],
        "concept": ["weekdays", "time", "nature"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["ひ"],
            "onyomi": ["カ"]
        }
    },
    {
        "kanji": "水",
        "meaning": ["water", "Wednesday"],
        "concept": ["weekdays", "time", "nature"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["みず"],
            "onyomi": ["スイ"]
        }
    },
    {
        "kanji": "木",
        "meaning": ["tree", "Thursday"],
        "concept": ["weekdays", "time", "nature"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["き"],
            "onyomi": ["モク", "ボク"]
        }
    },
    {
        "kanji": "金",
        "meaning": ["gold", "money", "Friday"],
        "concept": ["weekdays", "time", "shopping"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["かね", "かな"],
            "onyomi": ["キン", "コン"]
        }
    },
    {
        "kanji": "土",
        "meaning": ["earth", "soil", "Saturday"],
        "concept": ["weekdays", "time", "nature"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["つち"],
            "onyomi": ["ド", "ト"]
        }
    },
    {
        "kanji": "川",
        "meaning": ["river"],
        "concept": ["nature"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["かわ"],
            "onyomi": ["セン"]
        }
    },
    {
        "kanji": "花",
        "meaning": ["flower"],
        "concept": ["nature"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["はな"],
            "onyomi": ["カ"]
        }
    },
    {
        "kanji": "魚",
        "meaning": ["fish"],
        "concept": ["animal", "nature", "water"],
        "strokes": 11,
        "readings": {
            "kunyomi": ["さかな"],
            "onyomi": ["ギョ"]
        }
    },
    {
        "kanji": "天",
        "meaning": ["heaven", "sky"],
        "concept": ["nature"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["あま"],
            "onyomi": ["テン"]
        }
    },
    {
        "kanji": "空",
        "meaning": ["sky", "empty"],
        "concept": ["nature"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["そら", "あく"],
            "onyomi": ["クウ"]
        }
    },
    {
        "kanji": "雨",
        "meaning": ["rain"],
        "concept": ["nature", "water"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["あめ"],
            "onyomi": ["ウ"]
        }
    },
    {
        "kanji": "電",
        "meaning": ["electricity"],
        "concept": ["technology"],
        "strokes": 12,
        "readings": {
            "kunyomi": [],
            "onyomi": ["デン"]
        }
    },
    {
        "kanji": "車",
        "meaning": ["car"],
        "concept": ["technology", "transportation"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["くるま"],
            "onyomi": ["シャ"]
        }
    },
    {
        "kanji": "本",
        "meaning": ["book", "origin"],
        "concept": ["object"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["もと"],
            "onyomi": ["ホン"]
        }
    },
    {
        "kanji": "林",
        "meaning": ["forest"],
        "concept": ["nature"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["はやし"],
            "onyomi": ["リン"]
        }
    },
    {
        "kanji": "森",
        "meaning": ["forest"],
        "concept": ["nature"],
        "strokes": 12,
        "readings": {
            "kunyomi": ["もり"],
            "onyomi": ["シン"]
        }
    },
    {
        "kanji": "石",
        "meaning": ["stone"],
        "concept": ["nature"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["いし"],
            "onyomi": ["セキ"]
        }
    },
    {
        "kanji": "門",
        "meaning": ["gate"],
        "concept": ["structure"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["かど"],
            "onyomi": ["モン"]
        }
    },
    {
        "kanji": "上",
        "meaning": ["up", "above"],
        "concept": ["position", "direction"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["うえ", "あげる"],
            "onyomi": ["ジョウ"]
        }
    },
    {
        "kanji": "下",
        "meaning": ["down", "below"],
        "concept": ["position", "direction"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["した", "さげる"],
            "onyomi": ["カ", "ゲ"]
        }
    },
    {
        "kanji": "中",
        "meaning": ["middle", "inside"],
        "concept": ["position"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["なか"],
            "onyomi": ["チュウ"]
        }
    },
    {
        "kanji": "北",
        "meaning": ["north"],
        "concept": ["direction"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["きた"],
            "onyomi": ["ホク"]
        }
    },
    {
        "kanji": "西",
        "meaning": ["west"],
        "concept": ["direction"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["にし"],
            "onyomi": ["セイ"]
        }
    },
    {
        "kanji": "東",
        "meaning": ["east"],
        "concept": ["direction"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["ひがし"],
            "onyomi": ["トウ"]
        }
    },
    {
        "kanji": "南",
        "meaning": ["south"],
        "concept": ["direction"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["みなみ"],
            "onyomi": ["ナン"]
        }
    },
    {
        "kanji": "右",
        "meaning": ["right"],
        "concept": ["direction"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["みぎ"],
            "onyomi": ["ウ"]
        }
    },
    {
        "kanji": "左",
        "meaning": ["left"],
        "concept": ["direction"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["ひだり"],
            "onyomi": ["サ"]
        }
    },
    {
        "kanji": "駅",
        "meaning": ["station"],
        "concept": ["place", "transportation"],
        "strokes": 23,
        "readings": {
            "kunyomi": [],
            "onyomi": ["エキ"]
        }
    },
    {
        "kanji": "道",
        "meaning": ["road", "way"],
        "concept": ["place"],
        "strokes": 12,
        "readings": {
            "kunyomi": ["みち"],
            "onyomi": ["ドウ"]
        }
    },
    {
        "kanji": "社",
        "meaning": ["company", "shrine"],
        "concept": ["place"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["やしろ"],
            "onyomi": ["シャ"]
        }
    },
    {
        "kanji": "国",
        "meaning": ["country"],
        "concept": ["place"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["くに"],
            "onyomi": ["コク"]
        }
    },
    {
        "kanji": "外",
        "meaning": ["outside"],
        "concept": ["place"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["そと"],
            "onyomi": ["ガイ"]
        }
    },
    {
        "kanji": "学",
        "meaning": ["study"],
        "concept": ["school"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["まなぶ"],
            "onyomi": ["ガク"]
        }
    },
    {
        "kanji": "校",
        "meaning": ["school"],
        "concept": ["place", "school"],
        "strokes": 10,
        "readings": {
            "kunyomi": [],
            "onyomi": ["コウ"]
        }
    },
    {
        "kanji": "店",
        "meaning": ["store"],
        "concept": ["place", "shopping"],
        "strokes": 10,
        "readings": {
            "kunyomi": ["みせ"],
            "onyomi": ["テン"]
        }
    },
    {
        "kanji": "午",
        "meaning": ["noon"],
        "concept": ["time"],
        "strokes": 6,
        "readings": {
            "kunyomi": [],
            "onyomi": ["ゴ"]
        }
    },
    {
        "kanji": "先",
        "meaning": ["previous", "ahead"],
        "concept": ["time"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["さき"],
            "onyomi": ["セン"]
        }
    },
    {
        "kanji": "毎",
        "meaning": ["every"],
        "concept": ["time"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["ごと"],
            "onyomi": ["マイ"]
        }
    },
    {
        "kanji": "何",
        "meaning": ["what"],
        "concept": ["question"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["なに", "なん"],
            "onyomi": ["カ"]
        }
    },
    {
        "kanji": "朝",
        "meaning": ["morning"],
        "concept": ["time"],
        "strokes": 12,
        "readings": {
            "kunyomi": ["あさ"],
            "onyomi": ["チョウ"]
        }
    },
    {
        "kanji": "昼",
        "meaning": ["noon", "daytime"],
        "concept": ["time"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["ひる"],
            "onyomi": ["チュウ"]
        }
    },
    {
        "kanji": "夕",
        "meaning": ["evening"],
        "concept": ["time"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["ゆう"],
            "onyomi": []
        }
    },
    {
        "kanji": "見",
        "meaning": ["see", "look"],
        "concept": ["action"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["みる"],
            "onyomi": ["ケン"]
        }
    },
    {
        "kanji": "読",
        "meaning": ["read"],
        "concept": ["action"],
        "strokes": 11,
        "readings": {
            "kunyomi": ["よむ"],
            "onyomi": ["ドク"]
        }
    },
    {
        "kanji": "話",
        "meaning": ["talk", "speak"],
        "concept": ["action"],
        "strokes": 13,
        "readings": {
            "kunyomi": ["はなす"],
            "onyomi": ["ワ"]
        }
    },
    {
        "kanji": "言",
        "meaning": ["say", "word"],
        "concept": ["action"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["いう"],
            "onyomi": ["ゲン", "ゴン"]
        }
    },
    {
        "kanji": "飲",
        "meaning": ["drink"],
        "concept": ["action"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["のむ"],
            "onyomi": ["イン"]
        }
    },
    {
        "kanji": "出",
        "meaning": ["exit", "go out"],
        "concept": ["action"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["でる", "だす"],
            "onyomi": ["シュツ", "スイ"]
        }
    },
    {
        "kanji": "入",
        "meaning": ["enter"],
        "concept": ["action"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["いる"],
            "onyomi": ["ニュウ"]
        }
    },
    {
        "kanji": "買",
        "meaning": ["buy"],
        "concept": ["action", "shopping"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["かう"],
            "onyomi": ["バイ"]
        }
    },
    {
        "kanji": "立",
        "meaning": ["stand"],
        "concept": ["action"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["たつ"],
            "onyomi": ["リツ"]
        }
    },
    {
        "kanji": "会",
        "meaning": ["meet", "gather"],
        "concept": ["action"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["あう"],
            "onyomi": ["カイ"]
        }
    },
    {
        "kanji": "新",
        "meaning": ["new"],
        "concept": ["quality"],
        "strokes": 9,
        "readings": {
            "kunyomi": ["あたらしい"],
            "onyomi": ["シン"]
        }
    },
    {
        "kanji": "来",
        "meaning": ["come"],
        "concept": ["arrival"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["くる", "きたる"],
            "onyomi": ["ライ"]
        }
    },
    {
        "kanji": "古",
        "meaning": ["old"],
        "concept": ["quality"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["ふるい"],
            "onyomi": ["コ"]
        }
    },
    {
        "kanji": "色",
        "meaning": ["color"],
        "concept": ["quality"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["いろ"],
            "onyomi": ["ショク", "シキ"]
        }
    },
    {
        "kanji": "赤",
        "meaning": ["red"],
        "concept": ["color"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["あか"],
            "onyomi": ["セキ"]
        }
    },
    {
        "kanji": "青",
        "meaning": ["blue", "green"],
        "concept": ["color"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["あお"],
            "onyomi": ["セイ", "ショウ"]
        }
    },
    {
        "kanji": "明",
        "meaning": ["bright"],
        "concept": ["quality"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["あかるい"],
            "onyomi": ["メイ", "ミョウ"]
        }
    },
    {
        "kanji": "好",
        "meaning": ["like"],
        "concept": ["emotion"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["すき"],
            "onyomi": ["コウ"]
        }
    },
    {
        "kanji": "人",
        "meaning": ["person"],
        "concept": ["human"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["ひと"],
            "onyomi": ["ジン", "ニン"]
        }
    },
    {
        "kanji": "男",
        "meaning": ["man"],
        "concept": ["human"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["おとこ"],
            "onyomi": ["ダン", "ナン"]
        }
    },
    {
        "kanji": "女",
        "meaning": ["woman"],
        "concept": ["human"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["おんな"],
            "onyomi": ["ジョ"]
        }
    },
    {
        "kanji": "子",
        "meaning": ["child"],
        "concept": ["human"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["こ"],
            "onyomi": ["シ"]
        }
    },
    {
        "kanji": "父",
        "meaning": ["father"],
        "concept": ["family"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["ちち"],
            "onyomi": ["フ"]
        }
    },
    {
        "kanji": "母",
        "meaning": ["mother"],
        "concept": ["family"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["はは"],
            "onyomi": ["ボ"]
        }
    },
    {
        "kanji": "友",
        "meaning": ["friend"],
        "concept": ["human"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["とも"],
            "onyomi": ["ユウ"]
        }
    },
    {
        "kanji": "名",
        "meaning": ["name"],
        "concept": ["human"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["な"],
            "onyomi": ["メイ", "ミョウ"]
        }
    },
    {
        "kanji": "気",
        "meaning": ["spirit", "mood"],
        "concept": ["emotion"],
        "strokes": 8,
        "readings": {
            "kunyomi": ["き"],
            "onyomi": ["キ", "ケ"]
        }
    },
    {
        "kanji": "生",
        "meaning": ["life", "birth"],
        "concept": ["human"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["いきる"],
            "onyomi": ["セイ"]
        }
    },
    {
        "kanji": "耳",
        "meaning": ["ear"],
        "concept": ["body"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["みみ"],
            "onyomi": ["ジ"]
        }
    },
    {
        "kanji": "手",
        "meaning": ["hand"],
        "concept": ["body"],
        "strokes": 4,
        "readings": {
            "kunyomi": ["て"],
            "onyomi": ["シュ"]
        }
    },
    {
        "kanji": "足",
        "meaning": ["foot", "leg"],
        "concept": ["body"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["あし"],
            "onyomi": ["ソク"]
        }
    },
    {
        "kanji": "私",
        "meaning": ["I", "me"],
        "concept": ["human"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["わたし"],
            "onyomi": ["シ"]
        }
    },
    {
        "kanji": "兄",
        "meaning": ["older brother"],
        "concept": ["family"],
        "strokes": 5,
        "readings": {
            "kunyomi": ["あに"],
            "onyomi": ["ケイ"]
        }
    },
    {
        "kanji": "弟",
        "meaning": ["younger brother"],
        "concept": ["family"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["おとうと"],
            "onyomi": ["ダイ"]
        }
    },
    {
        "kanji": "姉",
        "meaning": ["older sister"],
        "concept": ["family"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["あね"],
            "onyomi": ["シ"]
        }
    },
    {
        "kanji": "妹",
        "meaning": ["younger sister"],
        "concept": ["family"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["いもうと"],
            "onyomi": ["マイ"]
        }
    },
    {
        "kanji": "体",
        "meaning": ["body"],
        "concept": ["body"],
        "strokes": 7,
        "readings": {
            "kunyomi": ["からだ"],
            "onyomi": ["タイ"]
        }
    },
    {
        "kanji": "力",
        "meaning": ["strength"],
        "concept": ["human"],
        "strokes": 2,
        "readings": {
            "kunyomi": ["ちから"],
            "onyomi": ["リョク"]
        }
    },
    {
        "kanji": "家",
        "meaning": ["house", "home", "family"],
        "concept": ["place", "home"],
        "strokes": 10,
        "readings": {
            "kunyomi": ["いえ", "うち"],
            "onyomi": ["カ", "ケ"]
        }
    },
    {
        "kanji": "休",
        "meaning": ["rest", "take a break"],
        "concept": ["action"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["やすむ"],
            "onyomi": ["キュウ"]
        }
    },
    {
        "kanji": "早",
        "meaning": ["early", "fast"],
        "concept": ["time", "speed"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["はやい"],
            "onyomi": ["ソウ", "サッ"]
        }
    },
    {
        "kanji": "犬",
        "meaning": ["dog"],
        "concept": ["animal"],
        "strokes": 3,
        "readings": {
            "kunyomi": ["いぬ"],
            "onyomi": []
        }
    },
    {
        "kanji": "虫",
        "meaning": ["insect"],
        "concept": ["animal", "nature"],
        "strokes": 6,
        "readings": {
            "kunyomi": ["むし"],
            "onyomi": ["チュウ"]
        }
    }
]
    .sort(function (a, b) {
    var conceptComparison = a.concept[0].localeCompare(b.concept[0]);
    if (conceptComparison === 0) {
        return a.strokes - b.strokes;
    }
    return conceptComparison;
}).sort(function (a, b) {
    var numA = kanjiToNumber[a.kanji];
    var numB = kanjiToNumber[b.kanji];
    return numA - numB; // Sort by numeric value
});
exports.default = N5_KANJI;
