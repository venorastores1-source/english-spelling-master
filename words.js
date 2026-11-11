const vocabularyPacks = [
{
  pack: 1,
  start: 1,
  end: 700,
  words: [
    {id:1,word:"about",sound:"අබවුට්",meaning:"ගැන / පිළිබඳව"},
    {id:2,word:"above",sound:"අබව්",meaning:"ඉහළින්"},
    {id:3,word:"accept",sound:"අක්සෙප්ට්",meaning:"පිළිගන්නවා"},
    {id:4,word:"accident",sound:"ඇක්සිඩන්ට්",meaning:"අනතුර"},
    {id:5,word:"account",sound:"අකවුන්ට්",meaning:"ගිණුම"},
    {id:6,word:"achieve",sound:"අචීව්",meaning:"සාර්ථක කරගන්නවා"},
    {id:7,word:"across",sound:"අක්‍රොස්",meaning:"හරහා"},
    {id:8,word:"action",sound:"ඇක්ෂන්",meaning:"ක්‍රියාව"},
    {id:9,word:"active",sound:"ඇක්ටිව්",meaning:"ක්‍රියාශීලී"},
    {id:10,word:"address",sound:"අඩ්‍රෙස්",meaning:"ලිපිනය"},
    {id:11,word:"advice",sound:"අඩ්වයිස්",meaning:"උපදෙස්"},
    {id:12,word:"advise",sound:"අඩ්වයිස්",meaning:"උපදෙස් දෙනවා"},
    {id:13,word:"afraid",sound:"අෆ්‍රේඩ්",meaning:"බිය වූ"},
    {id:14,word:"after",sound:"ආෆ්ටර්",meaning:"පසුව"},
    {id:15,word:"afternoon",sound:"ආෆ්ටනූන්",meaning:"හවස් වරුව"},
    {id:16,word:"again",sound:"අගෙන්",meaning:"නැවත"},
    {id:17,word:"against",sound:"අගෙන්ස්ට්",meaning:"විරුද්ධව"},
    {id:18,word:"age",sound:"ඒජ්",meaning:"වයස"},
    {id:19,word:"agree",sound:"අග්‍රී",meaning:"එකඟ වෙනවා"},
    {id:20,word:"air",sound:"එයර්",meaning:"වාතය"},
    {id:21,word:"all",sound:"ඕල්",meaning:"සියල්ල"},
    {id:22,word:"allow",sound:"අලව්",meaning:"අවසර දෙනවා"},
    {id:23,word:"almost",sound:"ඕල්මෝස්ට්",meaning:"බොහෝ දුරට"},
    {id:24,word:"alone",sound:"අලෝන්",meaning:"තනිව"},
    {id:25,word:"along",sound:"අලොං",meaning:"දිගේ"},
    {id:26,word:"already",sound:"ඕල්රෙඩි",meaning:"දැනටමත්"},
    {id:27,word:"also",sound:"ඕල්සෝ",meaning:"එසේම"},
    {id:28,word:"always",sound:"ඕල්වේස්",meaning:"සෑම විටම"},
    {id:29,word:"amazing",sound:"අමේසිං",meaning:"පුදුමාකාර"},
    {id:30,word:"among",sound:"අමං",meaning:"අතර"},
    {id:31,word:"amount",sound:"අමවුන්ට්",meaning:"ප්‍රමාණය"},
    {id:32,word:"and",sound:"ඇන්ඩ්",meaning:"සහ"},
    {id:33,word:"angry",sound:"ඇංග්‍රි",meaning:"කෝප වූ"},
    {id:34,word:"animal",sound:"ඇනිමල්",meaning:"සත්වයා"},
    {id:35,word:"another",sound:"අනදර්",meaning:"තවත් එකක්"},
    {id:36,word:"answer",sound:"ආන්සර්",meaning:"පිළිතුර"},
    {id:37,word:"any",sound:"එනි",meaning:"ඕනෑම"},
    {id:38,word:"anyone",sound:"එනිවන්",meaning:"ඕනෑම කෙනෙක්"},
    {id:39,word:"anything",sound:"එනිතිං",meaning:"ඕනෑම දෙයක්"},
    {id:40,word:"appear",sound:"අපියර්",meaning:"පෙනී සිටිනවා"},
    {id:41,word:"apple",sound:"ඇපල්",meaning:"ඇපල් ගෙඩිය"},
    {id:42,word:"area",sound:"එරියා",meaning:"ප්‍රදේශය"},
    {id:43,word:"around",sound:"අරවුන්ඩ්",meaning:"වටා"},
    {id:44,word:"arrange",sound:"අරේන්ජ්",meaning:"සකස් කරනවා"},
    {id:45,word:"arrive",sound:"අරයිව්",meaning:"පැමිණෙනවා"},
    {id:46,word:"ask",sound:"ආස්ක්",meaning:"අහනවා"},
    {id:47,word:"available",sound:"අවේලබල්",meaning:"ලබාගත හැකි"},
    {id:48,word:"avoid",sound:"අවොයිඩ්",meaning:"මඟහරිනවා"},
    {id:49,word:"away",sound:"අවේ",meaning:"ඈතට"},
    {id:50,word:"baby",sound:"බේබි",meaning:"ළදරුවා"},
    {id:51,word:"back",sound:"බැක්",meaning:"පිටුපස"},
    {id:52,word:"bad",sound:"බැඩ්",meaning:"නරක"},
    {id:53,word:"bag",sound:"බැග්",meaning:"බෑගය"},
    {id:54,word:"balance",sound:"බැලන්ස්",meaning:"ශේෂය / සමතුලිතතාව"},
    {id:55,word:"bank",sound:"බැංක්",meaning:"බැංකුව"},
    {id:56,word:"basic",sound:"බේසික්",meaning:"මූලික"},
    {id:57,word:"beautiful",sound:"බියුටිෆුල්",meaning:"ලස්සන"},
    {id:58,word:"because",sound:"බිකොස්",meaning:"නිසා"},
    {id:59,word:"become",sound:"බිකම්",meaning:"බවට පත්වෙනවා"},
    {id:60,word:"before",sound:"බිෆෝර්",meaning:"පෙර"},
    {id:61,word:"begin",sound:"බිගින්",meaning:"ආරම්භ කරනවා"},
    {id:62,word:"beginning",sound:"බිගිනිං",meaning:"ආරම්භය"},
    {id:63,word:"believe",sound:"බිලීව්",meaning:"විශ්වාස කරනවා"},
    {id:64,word:"below",sound:"බිලෝ",meaning:"පහළින්"},
    {id:65,word:"best",sound:"බෙස්ට්",meaning:"හොඳම"},
    {id:66,word:"better",sound:"බෙටර්",meaning:"වඩා හොඳ"},
    {id:67,word:"between",sound:"බිට්වීන්",meaning:"අතර"},
    {id:68,word:"big",sound:"බිග්",meaning:"විශාල"},
    {id:69,word:"bill",sound:"බිල්",meaning:"බිල්පත"},
    {id:70,word:"birthday",sound:"බර්ත්ඩේ",meaning:"උපන් දිනය"},
    {id:71,word:"black",sound:"බ්ලැක්",meaning:"කළු"},
    {id:72,word:"body",sound:"බොඩි",meaning:"ශරීරය"},
    {id:73,word:"book",sound:"බුක්",meaning:"පොත"},
    {id:74,word:"both",sound:"බෝත්",meaning:"දෙකම"},
    {id:75,word:"break",sound:"බ්‍රේක්",meaning:"කඩනවා / විවේකය"},
    {id:76,word:"breakfast",sound:"බ්‍රෙක්ෆස්ට්",meaning:"උදෑසන ආහාරය"},
    {id:77,word:"bring",sound:"බ්‍රිං",meaning:"ගෙන එනවා"},
    {id:78,word:"brother",sound:"බ්‍රදර්",meaning:"සහෝදරයා"},
    {id:79,word:"build",sound:"බිල්ඩ්",meaning:"ගොඩනඟනවා"},
    {id:80,word:"business",sound:"බිස්නස්",meaning:"ව්‍යාපාරය"},
    {id:81,word:"busy",sound:"බිසි",meaning:"කාර්යබහුල"},
    {id:82,word:"buy",sound:"බයි",meaning:"මිලදී ගන්නවා"},
    {id:83,word:"call",sound:"කෝල්",meaning:"අමතනවා"},
    {id:84,word:"calm",sound:"කාම්",meaning:"සන්සුන්"},
    {id:85,word:"camera",sound:"කැමරා",meaning:"කැමරාව"},
    {id:86,word:"can",sound:"කැන්",meaning:"හැකියි"},
    {id:87,word:"cancel",sound:"කැන්සල්",meaning:"අවලංගු කරනවා"},
    {id:88,word:"capital",sound:"කැපිටල්",meaning:"අගනුවර / ප්‍රාග්ධනය"},
    {id:89,word:"car",sound:"කාර්",meaning:"මෝටර් රථය"},
    {id:90,word:"care",sound:"කෙයර්",meaning:"සැලකිල්ල"},
    {id:91,word:"careful",sound:"කෙයර්ෆුල්",meaning:"ප්‍රවේශම් සහගත"},
    {id:92,word:"carry",sound:"කැරි",meaning:"ගෙන යනවා"},
    {id:93,word:"case",sound:"කේස්",meaning:"අවස්ථාව / නඩුව"},
    {id:94,word:"cash",sound:"කෑෂ්",meaning:"මුදල්"},
    {id:95,word:"cause",sound:"කෝස්",meaning:"හේතුව"},
    {id:96,word:"change",sound:"චේන්ජ්",meaning:"වෙනස් කරනවා"},
    {id:97,word:"check",sound:"චෙක්",meaning:"පරීක්ෂා කරනවා"},
    {id:98,word:"child",sound:"චයිල්ඩ්",meaning:"දරුවා"},
    {id:99,word:"choose",sound:"චූස්",meaning:"තෝරාගන්නවා"},
    {id:100,word:"city",sound:"සිටි",meaning:"නගරය"}
  ]
    ,{id:101,word:"class",sound:"ක්ලාස්",meaning:"පන්තිය"}
    ,{id:102,word:"clean",sound:"ක්ලීන්",meaning:"පිරිසිදු"}
    ,{id:103,word:"clear",sound:"ක්ලියර්",meaning:"පැහැදිලි"}
    ,{id:104,word:"close",sound:"ක්ලෝස්",meaning:"වසා දමනවා / ළඟ"}
    ,{id:105,word:"clothes",sound:"ක්ලෝදස්",meaning:"ඇඳුම්"}
    ,{id:106,word:"cloud",sound:"ක්ලවුඩ්",meaning:"වලාකුළ"}
    ,{id:107,word:"coffee",sound:"කොෆී",meaning:"කෝපි"}
    ,{id:108,word:"cold",sound:"කෝල්ඩ්",meaning:"සීතල"}
    ,{id:109,word:"collect",sound:"කලෙක්ට්",meaning:"එකතු කරනවා"}
    ,{id:110,word:"colour",sound:"කලර්",meaning:"වර්ණය"}
    ,{id:111,word:"come",sound:"කම්",meaning:"එනවා"}
    ,{id:112,word:"common",sound:"කොමන්",meaning:"පොදු / සාමාන්‍ය"}
    ,{id:113,word:"company",sound:"කම්පනි",meaning:"සමාගම"}
    ,{id:114,word:"compare",sound:"කම්පෙයර්",meaning:"සසඳනවා"}
    ,{id:115,word:"complete",sound:"කම්ප්ලීට්",meaning:"සම්පූර්ණ කරනවා"}
    ,{id:116,word:"computer",sound:"කම්පියුටර්",meaning:"පරිගණකය"}
    ,{id:117,word:"condition",sound:"කන්ඩිෂන්",meaning:"තත්ත්වය"}
    ,{id:118,word:"confirm",sound:"කන්ෆර්ම්",meaning:"තහවුරු කරනවා"}
    ,{id:119,word:"connect",sound:"කනෙක්ට්",meaning:"සම්බන්ධ කරනවා"}
    ,{id:120,word:"consider",sound:"කන්සිඩර්",meaning:"සලකා බලනවා"}
    ,{id:121,word:"contact",sound:"කොන්ටැක්ට්",meaning:"සම්බන්ධතාව / අමතනවා"}
    ,{id:122,word:"continue",sound:"කන්ටිනියු",meaning:"දිගටම කරගෙන යනවා"}
    ,{id:123,word:"control",sound:"කන්ට්‍රෝල්",meaning:"පාලනය කරනවා"}
    ,{id:124,word:"cook",sound:"කුක්",meaning:"උයනවා"}
    ,{id:125,word:"correct",sound:"කරෙක්ට්",meaning:"නිවැරදි"}
    ,{id:126,word:"cost",sound:"කොස්ට්",meaning:"පිරිවැය"}
    ,{id:127,word:"could",sound:"කුඩ්",meaning:"හැකි වුණා / හැකි වේවි"}
    ,{id:128,word:"country",sound:"කන්ට්‍රි",meaning:"රට"}
    ,{id:129,word:"course",sound:"කෝර්ස්",meaning:"පාඨමාලාව"}
    ,{id:130,word:"cover",sound:"කවර්",meaning:"ආවරණය කරනවා"}
    ,{id:131,word:"create",sound:"ක්‍රියේට්",meaning:"නිර්මාණය කරනවා"}
    ,{id:132,word:"customer",sound:"කස්ටමර්",meaning:"පාරිභෝගිකයා"}
    ,{id:133,word:"daily",sound:"ඩේලි",meaning:"දිනපතා"}
    ,{id:134,word:"damage",sound:"ඩැමිජ්",meaning:"හානිය"}
    ,{id:135,word:"danger",sound:"ඩේන්ජර්",meaning:"අනතුර / අවදානම"}
    ,{id:136,word:"dark",sound:"ඩාක්",meaning:"අඳුරු"}
    ,{id:137,word:"data",sound:"ඩේටා",meaning:"දත්ත"}
    ,{id:138,word:"date",sound:"ඩේට්",meaning:"දිනය"}
    ,{id:139,word:"day",sound:"ඩේ",meaning:"දවස"}
    ,{id:140,word:"deal",sound:"ඩීල්",meaning:"ගනුදෙනුව"}
    ,{id:141,word:"decide",sound:"ඩිසයිඩ්",meaning:"තීරණය කරනවා"}
    ,{id:142,word:"deliver",sound:"ඩිලිවර්",meaning:"භාර දෙනවා"}
    ,{id:143,word:"delivery",sound:"ඩිලිවරි",meaning:"බෙදාහැරීම"}
    ,{id:144,word:"department",sound:"ඩිපාර්ට්මන්ට්",meaning:"දෙපාර්තමේන්තුව"}
    ,{id:145,word:"depend",sound:"ඩිපෙන්ඩ්",meaning:"මත රඳා පවතිනවා"}
    ,{id:146,word:"describe",sound:"ඩිස්ක්‍රයිබ්",meaning:"විස්තර කරනවා"}
    ,{id:147,word:"design",sound:"ඩිසයින්",meaning:"සැලසුම / නිර්මාණය"}
    ,{id:148,word:"detail",sound:"ඩීටේල්",meaning:"විස්තරය"}
    ,{id:149,word:"develop",sound:"ඩිවෙලප්",meaning:"සංවර්ධනය කරනවා"}
    ,{id:150,word:"different",sound:"ඩිෆරන්ට්",meaning:"වෙනස්"}
    ,{id:151,word:"difficult",sound:"ඩිෆිකල්ට්",meaning:"අමාරු"}
    ,{id:152,word:"dinner",sound:"ඩිනර්",meaning:"රාත්‍රී ආහාරය"}
    ,{id:153,word:"direction",sound:"ඩිරෙක්ෂන්",meaning:"දිශාව"}
    ,{id:154,word:"discuss",sound:"ඩිස්කස්",meaning:"සාකච්ඡා කරනවා"}
    ,{id:155,word:"document",sound:"ඩොකියුමන්ට්",meaning:"ලේඛනය"}
    ,{id:156,word:"door",sound:"ඩෝර්",meaning:"දොර"}
    ,{id:157,word:"download",sound:"ඩවුන්ලෝඩ්",meaning:"බාගත කරනවා"}
    ,{id:158,word:"draw",sound:"ඩ්‍රෝ",meaning:"අඳිනවා"}
    ,{id:159,word:"dream",sound:"ඩ්‍රීම්",meaning:"සිහිනය"}
    ,{id:160,word:"drink",sound:"ඩ්‍රිංක්",meaning:"බොනවා / පානය"}
    ,{id:161,word:"drive",sound:"ඩ්‍රයිව්",meaning:"වාහනය පදවනවා"}
    ,{id:162,word:"during",sound:"ඩියුරිං",meaning:"අතරතුර"}
    ,{id:163,word:"each",sound:"ඊච්",meaning:"එක් එක්"}
    ,{id:164,word:"early",sound:"අර්ලි",meaning:"කලින් / වේලාසනින්"}
    ,{id:165,word:"easy",sound:"ඊසි",meaning:"පහසු"}
    ,{id:166,word:"education",sound:"එඩ්‍යුකේෂන්",meaning:"අධ්‍යාපනය"}
    ,{id:167,word:"effect",sound:"ඉෆෙක්ට්",meaning:"බලපෑම"}
    ,{id:168,word:"effort",sound:"එෆර්ට්",meaning:"උත්සාහය"}
    ,{id:169,word:"either",sound:"අයිදර්",meaning:"දෙකෙන් එකක්"}
    ,{id:170,word:"email",sound:"ඊමේල්",meaning:"විද්‍යුත් තැපෑල"}
    ,{id:171,word:"employee",sound:"එම්ප්ලොයි",meaning:"සේවකයා"}
    ,{id:172,word:"employer",sound:"එම්ප්ලොයර්",meaning:"සේවායෝජකයා"}
    ,{id:173,word:"empty",sound:"එම්ප්ටි",meaning:"හිස්"}
    ,{id:174,word:"end",sound:"එන්ඩ්",meaning:"අවසානය"}
    ,{id:175,word:"energy",sound:"එනර්ජි",meaning:"ශක්තිය"}
    ,{id:176,word:"enjoy",sound:"එන්ජොයි",meaning:"විනෝද වෙනවා"}
    ,{id:177,word:"enough",sound:"ඉනෆ්",meaning:"ප්‍රමාණවත්"}
    ,{id:178,word:"enter",sound:"එන්ටර්",meaning:"ඇතුළු වෙනවා"}
    ,{id:179,word:"equipment",sound:"ඉක්විප්මන්ට්",meaning:"උපකරණ"}
    ,{id:180,word:"error",sound:"එරර්",meaning:"දෝෂය"}
    ,{id:181,word:"especially",sound:"ඉස්පෙෂලි",meaning:"විශේෂයෙන්"}
    ,{id:182,word:"even",sound:"ඊවන්",meaning:"පවා"}
    ,{id:183,word:"evening",sound:"ඊව්නිං",meaning:"සවස"}
    ,{id:184,word:"every",sound:"එව්රි",meaning:"සෑම"}
    ,{id:185,word:"everyone",sound:"එව්රිවන්",meaning:"සෑම කෙනෙක්ම"}
    ,{id:186,word:"everything",sound:"එව්රිතිං",meaning:"සියල්ලම"}
    ,{id:187,word:"example",sound:"ඉග්සාම්පල්",meaning:"උදාහරණය"}
    ,{id:188,word:"excellent",sound:"එක්සලන්ට්",meaning:"විශිෂ්ට"}
    ,{id:189,word:"excuse",sound:"ඉක්ස්කියුස්",meaning:"සමාව / නිදහසට කරුණ"}
    ,{id:190,word:"exercise",sound:"එක්සසයිස්",meaning:"ව්‍යායාමය"}
    ,{id:191,word:"expect",sound:"ඉක්ස්පෙක්ට්",meaning:"අපේක්ෂා කරනවා"}
    ,{id:192,word:"experience",sound:"ඉක්ස්පීරියන්ස්",meaning:"අත්දැකීම"}
    ,{id:193,word:"explain",sound:"ඉක්ස්ප්ලේන්",meaning:"පැහැදිලි කරනවා"}
    ,{id:194,word:"express",sound:"ඉක්ස්ප්‍රෙස්",meaning:"ප්‍රකාශ කරනවා"}
    ,{id:195,word:"extra",sound:"එක්ස්ට්‍රා",meaning:"අමතර"}
    ,{id:196,word:"face",sound:"ෆේස්",meaning:"මුහුණ"}
    ,{id:197,word:"fact",sound:"ෆැක්ට්",meaning:"සත්‍ය කරුණ"}
    ,{id:198,word:"fail",sound:"ෆේල්",meaning:"අසමත් වෙනවා"}
    ,{id:199,word:"family",sound:"ෆැමිලි",meaning:"පවුල"}
    ,{id:200,word:"famous",sound:"ෆේමස්",meaning:"ප්‍රසිද්ධ"}  
      ,{id:201,word:"far",sound:"ෆා",meaning:"දුර"}
    ,{id:202,word:"fast",sound:"ෆාස්ට්",meaning:"වේගවත්"}
    ,{id:203,word:"father",sound:"ෆාදර්",meaning:"පියා"}
    ,{id:204,word:"favourite",sound:"ෆේවරිට්",meaning:"ප්‍රියතම"}
    ,{id:205,word:"feel",sound:"ෆීල්",meaning:"දැනෙනවා"}
    ,{id:206,word:"feeling",sound:"ෆීලිං",meaning:"හැඟීම"}
    ,{id:207,word:"few",sound:"ෆියු",meaning:"ස්වල්පයක්"}
    ,{id:208,word:"field",sound:"ෆීල්ඩ්",meaning:"ක්ෂේත්‍රය"}
    ,{id:209,word:"file",sound:"ෆයිල්",meaning:"ගොනුව"}
    ,{id:210,word:"fill",sound:"ෆිල්",meaning:"පුරවනවා"}
    ,{id:211,word:"final",sound:"ෆයිනල්",meaning:"අවසාන"}
    ,{id:212,word:"finally",sound:"ෆයිනලි",meaning:"අවසානයේ"}
    ,{id:213,word:"find",sound:"ෆයින්ඩ්",meaning:"සොයාගන්නවා"}
    ,{id:214,word:"fine",sound:"ෆයින්",meaning:"හොඳ / දඩ මුදල"}
    ,{id:215,word:"finish",sound:"ෆිනිෂ්",meaning:"අවසන් කරනවා"}
    ,{id:216,word:"fire",sound:"ෆයර්",meaning:"ගින්න"}
    ,{id:217,word:"first",sound:"ෆර්ස්ට්",meaning:"පළමු"}
    ,{id:218,word:"fish",sound:"ෆිෂ්",meaning:"මාළුවා"}
    ,{id:219,word:"fit",sound:"ෆිට්",meaning:"ගැළපෙනවා / යෝග්‍ය"}
    ,{id:220,word:"floor",sound:"ෆ්ලෝ",meaning:"බිම / මහල"}
    ,{id:221,word:"follow",sound:"ෆොලෝ",meaning:"අනුගමනය කරනවා"}
    ,{id:222,word:"food",sound:"ෆූඩ්",meaning:"ආහාර"}
    ,{id:223,word:"foot",sound:"ෆුට්",meaning:"පාදය"}
    ,{id:224,word:"for",sound:"ෆෝ",meaning:"සඳහා"}
    ,{id:225,word:"forget",sound:"ෆගෙට්",meaning:"අමතක කරනවා"}
    ,{id:226,word:"form",sound:"ෆෝම්",meaning:"ආකෘතිය / පෝරමය"}
    ,{id:227,word:"forward",sound:"ෆෝවඩ්",meaning:"ඉදිරියට"}
    ,{id:228,word:"free",sound:"ෆ්‍රී",meaning:"නොමිලේ / නිදහස්"}
    ,{id:229,word:"friend",sound:"ෆ්‍රෙන්ඩ්",meaning:"මිතුරා"}
    ,{id:230,word:"friendly",sound:"ෆ්‍රෙන්ඩ්ලි",meaning:"හිතවත්"}
    ,{id:231,word:"from",sound:"ෆ්‍රම්",meaning:"සිට"}
    ,{id:232,word:"front",sound:"ෆ්‍රන්ට්",meaning:"ඉදිරිපස"}
    ,{id:233,word:"full",sound:"ෆුල්",meaning:"පිරුණු"}
    ,{id:234,word:"fun",sound:"ෆන්",meaning:"විනෝදය"}
    ,{id:235,word:"future",sound:"ෆියුචර්",meaning:"අනාගතය"}
    ,{id:236,word:"game",sound:"ගේම්",meaning:"ක්‍රීඩාව"}
    ,{id:237,word:"general",sound:"ජෙනරල්",meaning:"සාමාන්‍ය"}
    ,{id:238,word:"get",sound:"ගෙට්",meaning:"ලබාගන්නවා"}
    ,{id:239,word:"give",sound:"ගිව්",meaning:"දෙනවා"}
    ,{id:240,word:"glad",sound:"ග්ලැඩ්",meaning:"සතුටු"}
    ,{id:241,word:"go",sound:"ගෝ",meaning:"යනවා"}
    ,{id:242,word:"goal",sound:"ගෝල්",meaning:"ඉලක්කය"}
    ,{id:243,word:"good",sound:"ගුඩ්",meaning:"හොඳ"}
    ,{id:244,word:"government",sound:"ගවන්මන්ට්",meaning:"රජය"}
    ,{id:245,word:"great",sound:"ග්‍රේට්",meaning:"විශිෂ්ට / විශාල"}
    ,{id:246,word:"green",sound:"ග්‍රීන්",meaning:"කොළ පාට"}
    ,{id:247,word:"group",sound:"ග්‍රූප්",meaning:"කණ්ඩායම"}
    ,{id:248,word:"grow",sound:"ග්‍රෝ",meaning:"වැඩෙනවා"}
    ,{id:249,word:"guess",sound:"ගෙස්",meaning:"අනුමාන කරනවා"}
    ,{id:250,word:"habit",sound:"හැබිට්",meaning:"පුරුද්ද"}
    ,{id:251,word:"happen",sound:"හැපන්",meaning:"සිදුවෙනවා"}
    ,{id:252,word:"happy",sound:"හැපි",meaning:"සතුටු"}
    ,{id:253,word:"hard",sound:"හාඩ්",meaning:"අමාරු / තද"}
    ,{id:254,word:"hardly",sound:"හාඩ්ලි",meaning:"අමාරුවෙන් / යන්තමින්"}
    ,{id:255,word:"health",sound:"හෙල්ත්",meaning:"සෞඛ්‍යය"}
    ,{id:256,word:"healthy",sound:"හෙල්ති",meaning:"සෞඛ්‍ය සම්පන්න"}
    ,{id:257,word:"hear",sound:"හියර්",meaning:"ඇසෙනවා"}
    ,{id:258,word:"help",sound:"හෙල්ප්",meaning:"උදව් කරනවා"}
    ,{id:259,word:"helpful",sound:"හෙල්ප්ෆුල්",meaning:"උපකාරී"}
    ,{id:260,word:"here",sound:"හියර්",meaning:"මෙහි"}
    ,{id:261,word:"high",sound:"හායි",meaning:"ඉහළ"}
    ,{id:262,word:"history",sound:"හිස්ට්‍රි",meaning:"ඉතිහාසය"}
    ,{id:263,word:"hold",sound:"හෝල්ඩ්",meaning:"අල්ලාගෙන සිටිනවා"}
    ,{id:264,word:"home",sound:"හෝම්",meaning:"නිවස"}
    ,{id:265,word:"hope",sound:"හෝප්",meaning:"බලාපොරොත්තුව"}
    ,{id:266,word:"hospital",sound:"හොස්පිටල්",meaning:"රෝහල"}
    ,{id:267,word:"hot",sound:"හොට්",meaning:"උණුසුම්"}
    ,{id:268,word:"hotel",sound:"හෝටෙල්",meaning:"හෝටලය"}
    ,{id:269,word:"hour",sound:"අවර්",meaning:"පැය"}
    ,{id:270,word:"house",sound:"හවුස්",meaning:"නිවස"}
    ,{id:271,word:"how",sound:"හවු",meaning:"කෙසේද"}
    ,{id:272,word:"however",sound:"හවුඑවර්",meaning:"කෙසේ වෙතත්"}
    ,{id:273,word:"human",sound:"හියුමන්",meaning:"මිනිසා"}
    ,{id:274,word:"hundred",sound:"හන්ඩ්‍රඩ්",meaning:"සියය"}
    ,{id:275,word:"hungry",sound:"හන්ග්‍රි",meaning:"බඩගිනි"}
    ,{id:276,word:"idea",sound:"අයිඩියා",meaning:"අදහස"}
    ,{id:277,word:"important",sound:"ඉම්පෝටන්ට්",meaning:"වැදගත්"}
    ,{id:278,word:"improve",sound:"ඉම්ප්‍රූව්",meaning:"දියුණු කරනවා"}
    ,{id:279,word:"include",sound:"ඉන්ක්ලූඩ්",meaning:"ඇතුළත් කරනවා"}
    ,{id:280,word:"increase",sound:"ඉන්ක්‍රීස්",meaning:"වැඩි කරනවා"}
    ,{id:281,word:"information",sound:"ඉන්ෆමේශන්",meaning:"තොරතුරු"}
    ,{id:282,word:"inside",sound:"ඉන්සයිඩ්",meaning:"ඇතුළත"}
    ,{id:283,word:"instead",sound:"ඉන්ස්ටෙඩ්",meaning:"වෙනුවට"}
    ,{id:284,word:"interest",sound:"ඉන්ට්‍රස්ට්",meaning:"උනන්දුව"}
    ,{id:285,word:"interesting",sound:"ඉන්ට්‍රස්ටිං",meaning:"රසවත්"}
    ,{id:286,word:"internet",sound:"ඉන්ටනෙට්",meaning:"අන්තර්ජාලය"}
    ,{id:287,word:"interview",sound:"ඉන්ටවියූ",meaning:"සම්මුඛ පරීක්ෂණය"}
    ,{id:288,word:"introduce",sound:"ඉන්ට්‍රඩියූස්",meaning:"හඳුන්වා දෙනවා"}
    ,{id:289,word:"invite",sound:"ඉන්වයිට්",meaning:"ආරාධනා කරනවා"}
    ,{id:290,word:"island",sound:"අයිලන්ඩ්",meaning:"දූපත"}
    ,{id:291,word:"issue",sound:"ඉෂූ",meaning:"ගැටලුව / නිකුත් කිරීම"}
    ,{id:292,word:"job",sound:"ජොබ්",meaning:"රැකියාව"}
    ,{id:293,word:"join",sound:"ජොයින්",meaning:"එකතු වෙනවා"}
    ,{id:294,word:"journey",sound:"ජර්නි",meaning:"ගමන"}
    ,{id:295,word:"just",sound:"ජස්ට්",meaning:"පමණක් / දැන්ම"}
    ,{id:296,word:"keep",sound:"කීප්",meaning:"තබාගන්නවා"}
    ,{id:297,word:"key",sound:"කී",meaning:"යතුර / ප්‍රධාන"}
    ,{id:298,word:"kind",sound:"කයින්ඩ්",meaning:"වර්ගය / කරුණාවන්ත"}
    ,{id:299,word:"kitchen",sound:"කිචන්",meaning:"මුළුතැන්ගෙය"}
    ,{id:300,word:"know",sound:"නෝ",meaning:"දන්නවා"}
      ,{id:301,word:"knowledge",sound:"නොලිජ්",meaning:"දැනුම"}
    ,{id:302,word:"large",sound:"ලාජ්",meaning:"විශාල"}
    ,{id:303,word:"last",sound:"ලාස්ට්",meaning:"අවසාන / පසුගිය"}
    ,{id:304,word:"late",sound:"ලේට්",meaning:"ප්‍රමාද"}
    ,{id:305,word:"later",sound:"ලේටර්",meaning:"පසුව"}
    ,{id:306,word:"learn",sound:"ලර්න්",meaning:"ඉගෙනගන්නවා"}
    ,{id:307,word:"leave",sound:"ලීව්",meaning:"පිටව යනවා / අත්හරිනවා"}
    ,{id:308,word:"left",sound:"ලෙෆ්ට්",meaning:"වම / ඉතිරි වූ"}
    ,{id:309,word:"lesson",sound:"ලෙසන්",meaning:"පාඩම"}
    ,{id:310,word:"let",sound:"ලෙට්",meaning:"ඉඩ දෙනවා"}
    ,{id:311,word:"letter",sound:"ලෙටර්",meaning:"අකුර / ලිපිය"}
    ,{id:312,word:"level",sound:"ලෙවල්",meaning:"මට්ටම"}
    ,{id:313,word:"library",sound:"ලයිබ්‍රරි",meaning:"පුස්තකාලය"}
    ,{id:314,word:"life",sound:"ලයිෆ්",meaning:"ජීවිතය"}
    ,{id:315,word:"light",sound:"ලයිට්",meaning:"ආලෝකය / සැහැල්ලු"}
    ,{id:316,word:"like",sound:"ලයික්",meaning:"කැමති වෙනවා / වැනි"}
    ,{id:317,word:"likely",sound:"ලයික්ලි",meaning:"සිදුවීමට ඉඩ ඇති"}
    ,{id:318,word:"limit",sound:"ලිමිට්",meaning:"සීමාව"}
    ,{id:319,word:"line",sound:"ලයින්",meaning:"රේඛාව / පේළිය"}
    ,{id:320,word:"list",sound:"ලිස්ට්",meaning:"ලැයිස්තුව"}
    ,{id:321,word:"listen",sound:"ලිස්න්",meaning:"සවන් දෙනවා"}
    ,{id:322,word:"little",sound:"ලිට්ල්",meaning:"කුඩා / ටිකක්"}
    ,{id:323,word:"live",sound:"ලිව්",meaning:"ජීවත් වෙනවා"}
    ,{id:324,word:"local",sound:"ලෝකල්",meaning:"දේශීය"}
    ,{id:325,word:"long",sound:"ලොං",meaning:"දිගු"}
    ,{id:326,word:"look",sound:"ලුක්",meaning:"බලනවා"}
    ,{id:327,word:"lose",sound:"ලූස්",meaning:"අහිමි කරගන්නවා"}
    ,{id:328,word:"lot",sound:"ලොට්",meaning:"බොහෝ / ප්‍රමාණයක්"}
    ,{id:329,word:"love",sound:"ලව්",meaning:"ආදරය"}
    ,{id:330,word:"low",sound:"ලෝ",meaning:"පහළ"}
    ,{id:331,word:"lucky",sound:"ලකි",meaning:"වාසනාවන්ත"}
    ,{id:332,word:"machine",sound:"මෂීන්",meaning:"යන්ත්‍රය"}
    ,{id:333,word:"main",sound:"මේන්",meaning:"ප්‍රධාන"}
    ,{id:334,word:"make",sound:"මේක්",meaning:"සාදනවා"}
    ,{id:335,word:"manage",sound:"මැනිජ්",meaning:"කළමනාකරණය කරනවා"}
    ,{id:336,word:"manager",sound:"මැනිජර්",meaning:"කළමනාකරු"}
    ,{id:337,word:"many",sound:"මෙනි",meaning:"බොහෝ"}
    ,{id:338,word:"market",sound:"මාකට්",meaning:"වෙළඳපොළ"}
    ,{id:339,word:"matter",sound:"මැටර්",meaning:"කාරණය / ද්‍රව්‍යය"}
    ,{id:340,word:"maybe",sound:"මේබි",meaning:"සමහරවිට"}
    ,{id:341,word:"mean",sound:"මීන්",meaning:"අදහස් කරනවා"}
    ,{id:342,word:"meaning",sound:"මීනිං",meaning:"තේරුම"}
    ,{id:343,word:"measure",sound:"මෙෂර්",meaning:"මනිනවා / මිනුම"}
    ,{id:344,word:"meet",sound:"මීට්",meaning:"හමුවෙනවා"}
    ,{id:345,word:"meeting",sound:"මීටිං",meaning:"රැස්වීම"}
    ,{id:346,word:"member",sound:"මෙම්බර්",meaning:"සාමාජිකයා"}
    ,{id:347,word:"message",sound:"මෙසිජ්",meaning:"පණිවිඩය"}
    ,{id:348,word:"method",sound:"මෙත්ඩ්",meaning:"ක්‍රමය"}
    ,{id:349,word:"middle",sound:"මිඩ්ල්",meaning:"මැද"}
    ,{id:350,word:"minute",sound:"මිනිට්",meaning:"විනාඩිය"}
    ,{id:351,word:"mistake",sound:"මිස්ටේක්",meaning:"වැරැද්ද"}
    ,{id:352,word:"mobile",sound:"මොබයිල්",meaning:"ජංගම දුරකථනය"}
    ,{id:353,word:"modern",sound:"මොඩන්",meaning:"නවීන"}
    ,{id:354,word:"moment",sound:"මෝමන්ට්",meaning:"මොහොත"}
    ,{id:355,word:"money",sound:"මනි",meaning:"මුදල්"}
    ,{id:356,word:"month",sound:"මන්ත්",meaning:"මාසය"}
    ,{id:357,word:"more",sound:"මෝ",meaning:"තවත් / වැඩිපුර"}
    ,{id:358,word:"morning",sound:"මෝනිං",meaning:"උදෑසන"}
    ,{id:359,word:"most",sound:"මෝස්ට්",meaning:"බොහෝමයක්"}
    ,{id:360,word:"mother",sound:"මදර්",meaning:"මව"}
    ,{id:361,word:"move",sound:"මූව්",meaning:"චලනය වෙනවා"}
    ,{id:362,word:"much",sound:"මච්",meaning:"බොහෝ / වැඩි ප්‍රමාණයක්"}
    ,{id:363,word:"music",sound:"මියුසික්",meaning:"සංගීතය"}
    ,{id:364,word:"must",sound:"මස්ට්",meaning:"අනිවාර්යයෙන් කළ යුතු"}
    ,{id:365,word:"name",sound:"නේම්",meaning:"නම"}
    ,{id:366,word:"necessary",sound:"නෙසෙසරි",meaning:"අත්‍යවශ්‍ය"}
    ,{id:367,word:"need",sound:"නීඩ්",meaning:"අවශ්‍ය වෙනවා"}
    ,{id:368,word:"never",sound:"නෙවර්",meaning:"කිසිදාක නැත"}
    ,{id:369,word:"new",sound:"නියූ",meaning:"අලුත්"}
    ,{id:370,word:"news",sound:"නියූස්",meaning:"ප්‍රවෘත්ති"}
    ,{id:371,word:"next",sound:"නෙක්ස්ට්",meaning:"ඊළඟ"}
    ,{id:372,word:"nice",sound:"නයිස්",meaning:"හොඳ / ප්‍රියමනාප"}
    ,{id:373,word:"night",sound:"නයිට්",meaning:"රාත්‍රිය"}
    ,{id:374,word:"no",sound:"නෝ",meaning:"නැහැ"}
    ,{id:375,word:"noise",sound:"නොයිස්",meaning:"ශබ්දය / ඝෝෂාව"}
    ,{id:376,word:"normal",sound:"නෝමල්",meaning:"සාමාන්‍ය"}
    ,{id:377,word:"normally",sound:"නෝමලි",meaning:"සාමාන්‍යයෙන්"}
    ,{id:378,word:"note",sound:"නෝට්",meaning:"සටහන"}
    ,{id:379,word:"notice",sound:"නෝටිස්",meaning:"දැනුම්දීම / අවධානයට ගන්නවා"}
    ,{id:380,word:"number",sound:"නම්බර්",meaning:"අංකය"}
    ,{id:381,word:"object",sound:"ඔබ්ජෙක්ට්",meaning:"වස්තුව"}
    ,{id:382,word:"office",sound:"ඔෆිස්",meaning:"කාර්යාලය"}
    ,{id:383,word:"often",sound:"ඔෆ්න්",meaning:"නිතර"}
    ,{id:384,word:"old",sound:"ඕල්ඩ්",meaning:"පැරණි / වයසක"}
    ,{id:385,word:"once",sound:"වන්ස්",meaning:"එක් වරක්"}
    ,{id:386,word:"only",sound:"ඕන්ලි",meaning:"පමණක්"}
    ,{id:387,word:"open",sound:"ඕපන්",meaning:"විවෘත කරනවා"}
    ,{id:388,word:"opinion",sound:"ඔපිනියන්",meaning:"මතය"}
    ,{id:389,word:"opportunity",sound:"ඔපචූනිටි",meaning:"අවස්ථාව"}
    ,{id:390,word:"order",sound:"ඕඩර්",meaning:"ඇණවුම / පිළිවෙළ"}
    ,{id:391,word:"organise",sound:"ඕගනයිස්",meaning:"සංවිධානය කරනවා"}
    ,{id:392,word:"other",sound:"අදර්",meaning:"වෙනත්"}
    ,{id:393,word:"outside",sound:"අවුට්සයිඩ්",meaning:"පිටත"}
    ,{id:394,word:"over",sound:"ඕවර්",meaning:"ඉහළින් / අවසන්"}
    ,{id:395,word:"own",sound:"ඕන්",meaning:"තමන්ගේ"}
    ,{id:396,word:"owner",sound:"ඕනර්",meaning:"හිමිකරු"}
    ,{id:397,word:"page",sound:"පේජ්",meaning:"පිටුව"}
    ,{id:398,word:"paper",sound:"පේපර්",meaning:"කඩදාසි"}
    ,{id:399,word:"parent",sound:"පේරන්ට්",meaning:"මව්පියන්ගෙන් කෙනෙක්"}
    ,{id:400,word:"part",sound:"පාට්",meaning:"කොටස"}
      ,{id:401,word:"partner",sound:"පාට්නර්",meaning:"හවුල්කරු"}
    ,{id:402,word:"party",sound:"පාටි",meaning:"සාදය / කණ්ඩායම"}
    ,{id:403,word:"pass",sound:"පාස්",meaning:"සමත් වෙනවා / පසුකර යනවා"}
    ,{id:404,word:"past",sound:"පාස්ට්",meaning:"අතීතය"}
    ,{id:405,word:"pay",sound:"පේ",meaning:"ගෙවනවා"}
    ,{id:406,word:"payment",sound:"පේමන්ට්",meaning:"ගෙවීම"}
    ,{id:407,word:"people",sound:"පීපල්",meaning:"මිනිසුන්"}
    ,{id:408,word:"perfect",sound:"පර්ෆෙක්ට්",meaning:"පරිපූර්ණ"}
    ,{id:409,word:"perhaps",sound:"පර්හැප්ස්",meaning:"සමහරවිට"}
    ,{id:410,word:"person",sound:"පර්සන්",meaning:"පුද්ගලයා"}
    ,{id:411,word:"personal",sound:"පර්සනල්",meaning:"පුද්ගලික"}
    ,{id:412,word:"phone",sound:"ෆෝන්",meaning:"දුරකථනය"}
    ,{id:413,word:"photo",sound:"ෆෝටෝ",meaning:"ඡායාරූපය"}
    ,{id:414,word:"place",sound:"ප්ලේස්",meaning:"ස්ථානය"}
    ,{id:415,word:"plan",sound:"ප්ලෑන්",meaning:"සැලැස්ම"}
    ,{id:416,word:"plant",sound:"ප්ලාන්ට්",meaning:"ශාකය / කර්මාන්තශාලාව"}
    ,{id:417,word:"play",sound:"ප්ලේ",meaning:"සෙල්ලම් කරනවා"}
    ,{id:418,word:"please",sound:"ප්ලීස්",meaning:"කරුණාකර"}
    ,{id:419,word:"point",sound:"පොයින්ට්",meaning:"ලක්ෂ්‍යය / කරුණ"}
    ,{id:420,word:"polite",sound:"පලයිට්",meaning:"ආචාරශීලී"}
    ,{id:421,word:"possible",sound:"පොසිබල්",meaning:"හැකි"}
    ,{id:422,word:"power",sound:"පවර්",meaning:"බලය"}
    ,{id:423,word:"practical",sound:"ප්‍රැක්ටිකල්",meaning:"ප්‍රායෝගික"}
    ,{id:424,word:"prepare",sound:"ප්‍රිපෙයර්",meaning:"සූදානම් කරනවා"}
    ,{id:425,word:"present",sound:"ප්‍රෙෂන්ට්",meaning:"වර්තමානය / තෑග්ග"}
    ,{id:426,word:"pretty",sound:"ප්‍රිටි",meaning:"ලස්සන"}
    ,{id:427,word:"price",sound:"ප්‍රයිස්",meaning:"මිල"}
    ,{id:428,word:"problem",sound:"ප්‍රොබ්ලම්",meaning:"ගැටලුව"}
    ,{id:429,word:"process",sound:"ප්‍රොසෙස්",meaning:"ක්‍රියාවලිය"}
    ,{id:430,word:"produce",sound:"ප්‍රඩියූස්",meaning:"නිෂ්පාදනය කරනවා"}
    ,{id:431,word:"product",sound:"ප්‍රොඩක්ට්",meaning:"නිෂ්පාදනය"}
    ,{id:432,word:"production",sound:"ප්‍රඩක්ෂන්",meaning:"නිෂ්පාදනය කිරීම"}
    ,{id:433,word:"professional",sound:"ප්‍රෆෙෂනල්",meaning:"වෘත්තීයමය"}
    ,{id:434,word:"profit",sound:"ප්‍රොෆිට්",meaning:"ලාභය"}
    ,{id:435,word:"programme",sound:"ප්‍රෝග්‍රෑම්",meaning:"වැඩසටහන"}
    ,{id:436,word:"project",sound:"ප්‍රොජෙක්ට්",meaning:"ව්‍යාපෘතිය"}
    ,{id:437,word:"promise",sound:"ප්‍රොමිස්",meaning:"පොරොන්දුව"}
    ,{id:438,word:"provide",sound:"ප්‍රවයිඩ්",meaning:"සපයනවා"}
    ,{id:439,word:"public",sound:"පබ්ලික්",meaning:"මහජන"}
    ,{id:440,word:"purchase",sound:"පර්චස්",meaning:"මිලදී ගැනීම"}
    ,{id:441,word:"purpose",sound:"පර්පස්",meaning:"අරමුණ"}
    ,{id:442,word:"quality",sound:"ක්වොලිටි",meaning:"ගුණාත්මකභාවය"}
    ,{id:443,word:"quantity",sound:"ක්වොන්ටිටි",meaning:"ප්‍රමාණය"}
    ,{id:444,word:"question",sound:"ක්වෙස්චන්",meaning:"ප්‍රශ්නය"}
    ,{id:445,word:"quick",sound:"ක්වික්",meaning:"ඉක්මන්"}
    ,{id:446,word:"quickly",sound:"ක්වික්ලි",meaning:"ඉක්මනින්"}
    ,{id:447,word:"quiet",sound:"ක්වයට්",meaning:"නිහඬ"}
    ,{id:448,word:"quite",sound:"ක්වයිට්",meaning:"තරමක් / සම්පූර්ණයෙන්"}
    ,{id:449,word:"read",sound:"රීඩ්",meaning:"කියවනවා"}
    ,{id:450,word:"ready",sound:"රෙඩි",meaning:"සූදානම්"}
    ,{id:451,word:"real",sound:"රියල්",meaning:"සැබෑ"}
    ,{id:452,word:"really",sound:"රියලි",meaning:"ඇත්තටම"}
    ,{id:453,word:"reason",sound:"රීසන්",meaning:"හේතුව"}
    ,{id:454,word:"receive",sound:"රිසීව්",meaning:"ලබාගන්නවා"}
    ,{id:455,word:"recent",sound:"රීසන්ට්",meaning:"මෑතකාලීන"}
    ,{id:456,word:"record",sound:"රෙකෝඩ්",meaning:"වාර්තාව / සටහන් කරනවා"}
    ,{id:457,word:"reduce",sound:"රිඩියූස්",meaning:"අඩු කරනවා"}
    ,{id:458,word:"refer",sound:"රිෆර්",meaning:"යොමු කරනවා"}
    ,{id:459,word:"regular",sound:"රෙගියුලර්",meaning:"නිතිපතා / සාමාන්‍ය"}
    ,{id:460,word:"relationship",sound:"රිලේෂන්ෂිප්",meaning:"සම්බන්ධතාව"}
    ,{id:461,word:"remember",sound:"රිමෙම්බර්",meaning:"මතක තබාගන්නවා"}
    ,{id:462,word:"remove",sound:"රිමූව්",meaning:"ඉවත් කරනවා"}
    ,{id:463,word:"repair",sound:"රිපෙයර්",meaning:"අලුත්වැඩියා කරනවා"}
    ,{id:464,word:"repeat",sound:"රිපීට්",meaning:"නැවත කියනවා"}
    ,{id:465,word:"reply",sound:"රිප්ලයි",meaning:"පිළිතුරු දෙනවා"}
    ,{id:466,word:"report",sound:"රිපෝට්",meaning:"වාර්තාව"}
    ,{id:467,word:"request",sound:"රික්වෙස්ට්",meaning:"ඉල්ලීම"}
    ,{id:468,word:"require",sound:"රික්වයර්",meaning:"අවශ්‍ය වෙනවා"}
    ,{id:469,word:"research",sound:"රීසර්ච්",meaning:"පර්යේෂණය"}
    ,{id:470,word:"respect",sound:"රිස්පෙක්ට්",meaning:"ගෞරවය"}
    ,{id:471,word:"responsible",sound:"රිස්පොන්සිබල්",meaning:"වගකිවයුතු"}
    ,{id:472,word:"result",sound:"රිසල්ට්",meaning:"ප්‍රතිඵලය"}
    ,{id:473,word:"return",sound:"රිටර්න්",meaning:"ආපසු දෙනවා / පැමිණෙනවා"}
    ,{id:474,word:"review",sound:"රිවියූ",meaning:"සමාලෝචනය"}
    ,{id:475,word:"right",sound:"රයිට්",meaning:"නිවැරදි / දකුණ"}
    ,{id:476,word:"room",sound:"රූම්",meaning:"කාමරය"}
    ,{id:477,word:"rule",sound:"රූල්",meaning:"නීතිය / රීතිය"}
    ,{id:478,word:"safe",sound:"සේෆ්",meaning:"ආරක්ෂිත"}
    ,{id:479,word:"same",sound:"සේම්",meaning:"එකම"}
    ,{id:480,word:"save",sound:"සේව්",meaning:"සුරකිනවා / ඉතිරි කරනවා"}
    ,{id:481,word:"say",sound:"සේ",meaning:"කියනවා"}
    ,{id:482,word:"school",sound:"ස්කූල්",meaning:"පාසල"}
    ,{id:483,word:"search",sound:"සර්ච්",meaning:"සොයනවා"}
    ,{id:484,word:"season",sound:"සීසන්",meaning:"කාලය / ඍතුව"}
    ,{id:485,word:"second",sound:"සෙකන්ඩ්",meaning:"දෙවන / තත්පරය"}
    ,{id:486,word:"select",sound:"සිලෙක්ට්",meaning:"තෝරාගන්නවා"}
    ,{id:487,word:"send",sound:"සෙන්ඩ්",meaning:"යවනවා"}
    ,{id:488,word:"service",sound:"සර්විස්",meaning:"සේවාව"}
    ,{id:489,word:"share",sound:"ෂෙයර්",meaning:"බෙදාගන්නවා"}
    ,{id:490,word:"short",sound:"ෂෝට්",meaning:"කෙටි"}
    ,{id:491,word:"should",sound:"ෂුඩ්",meaning:"කළ යුතුයි"}
    ,{id:492,word:"show",sound:"ෂෝ",meaning:"පෙන්වනවා"}
    ,{id:493,word:"simple",sound:"සිම්පල්",meaning:"සරල"}
    ,{id:494,word:"since",sound:"සින්ස්",meaning:"සිට / බැවින්"}
    ,{id:495,word:"single",sound:"සිංගල්",meaning:"තනි"}
    ,{id:496,word:"sister",sound:"සිස්ටර්",meaning:"සහෝදරිය"}
    ,{id:497,word:"skill",sound:"ස්කිල්",meaning:"කුසලතාව"}
    ,{id:498,word:"small",sound:"ස්මෝල්",meaning:"කුඩා"}
    ,{id:499,word:"smart",sound:"ස්මාට්",meaning:"දක්ෂ / බුද්ධිමත්"}
    ,{id:500,word:"something",sound:"සම්තිං",meaning:"යමක්"}
      ,{id:501,word:"sometimes",sound:"සම්ටයිම්ස්",meaning:"සමහර විට"}
    ,{id:502,word:"soon",sound:"සූන්",meaning:"ඉක්මනින්"}
    ,{id:503,word:"sorry",sound:"සොරි",meaning:"කණගාටුයි"}
    ,{id:504,word:"sound",sound:"සවුන්ඩ්",meaning:"ශබ්දය"}
    ,{id:505,word:"speak",sound:"ස්පීක්",meaning:"කතා කරනවා"}
    ,{id:506,word:"special",sound:"ස්පෙෂල්",meaning:"විශේෂ"}
    ,{id:507,word:"spell",sound:"ස්පෙල්",meaning:"අකුරු කියනවා / අක්ෂර වින්‍යාසය"}
    ,{id:508,word:"spelling",sound:"ස්පෙලිං",meaning:"අක්ෂර වින්‍යාසය"}
    ,{id:509,word:"spend",sound:"ස්පෙන්ඩ්",meaning:"වියදම් කරනවා / කාලය ගත කරනවා"}
    ,{id:510,word:"start",sound:"ස්ටාට්",meaning:"ආරම්භ කරනවා"}
    ,{id:511,word:"state",sound:"ස්ටේට්",meaning:"තත්ත්වය / ප්‍රකාශ කරනවා"}
    ,{id:512,word:"stay",sound:"ස්ටේ",meaning:"රැඳී සිටිනවා"}
    ,{id:513,word:"step",sound:"ස්ටෙප්",meaning:"පියවර"}
    ,{id:514,word:"still",sound:"ස්ටිල්",meaning:"තවමත් / නිශ්චල"}
    ,{id:515,word:"stop",sound:"ස්ටොප්",meaning:"නවත්වනවා"}
    ,{id:516,word:"store",sound:"ස්ටෝ",meaning:"ගබඩාව / ගබඩා කරනවා"}
    ,{id:517,word:"straight",sound:"ස්ට්‍රේට්",meaning:"කෙළින්"}
    ,{id:518,word:"strange",sound:"ස්ට්‍රේන්ජ්",meaning:"අමුතු"}
    ,{id:519,word:"strong",sound:"ස්ට්‍රොං",meaning:"ශක්තිමත්"}
    ,{id:520,word:"student",sound:"ස්ටියුඩන්ට්",meaning:"ශිෂ්‍යයා"}
    ,{id:521,word:"study",sound:"ස්ටඩි",meaning:"අධ්‍යයනය කරනවා"}
    ,{id:522,word:"success",sound:"සක්සෙස්",meaning:"සාර්ථකත්වය"}
    ,{id:523,word:"successful",sound:"සක්සෙස්ෆුල්",meaning:"සාර්ථක"}
    ,{id:524,word:"such",sound:"සච්",meaning:"එවැනි"}
    ,{id:525,word:"suggest",sound:"සජෙස්ට්",meaning:"යෝජනා කරනවා"}
    ,{id:526,word:"suitable",sound:"සූටබල්",meaning:"සුදුසු"}
    ,{id:527,word:"support",sound:"සපෝට්",meaning:"සහාය දෙනවා"}
    ,{id:528,word:"sure",sound:"ෂුවර්",meaning:"විශ්වාසයි / සහතිකයි"}
    ,{id:529,word:"system",sound:"සිස්ටම්",meaning:"පද්ධතිය"}
    ,{id:530,word:"table",sound:"ටේබල්",meaning:"මේසය / වගුව"}
    ,{id:531,word:"take",sound:"ටේක්",meaning:"ගන්නවා"}
    ,{id:532,word:"talk",sound:"ටෝක්",meaning:"කතා කරනවා"}
    ,{id:533,word:"task",sound:"ටාස්ක්",meaning:"කාර්යය"}
    ,{id:534,word:"team",sound:"ටීම්",meaning:"කණ්ඩායම"}
    ,{id:535,word:"tell",sound:"ටෙල්",meaning:"කියනවා"}
    ,{id:536,word:"temperature",sound:"ටෙම්පරචර්",meaning:"උෂ්ණත්වය"}
    ,{id:537,word:"term",sound:"ටර්ම්",meaning:"කාලසීමාව / පදය"}
    ,{id:538,word:"test",sound:"ටෙස්ට්",meaning:"පරීක්ෂණය"}
    ,{id:539,word:"than",sound:"දෑන්",meaning:"වඩා"}
    ,{id:540,word:"thank",sound:"තෑන්ක්",meaning:"ස්තුති කරනවා"}
    ,{id:541,word:"that",sound:"දැට්",meaning:"එය / එම"}
    ,{id:542,word:"their",sound:"දෙයර්",meaning:"ඔවුන්ගේ"}
    ,{id:543,word:"them",sound:"දෙම්",meaning:"ඔවුන්ට / ඔවුන්ව"}
    ,{id:544,word:"then",sound:"දෙන්",meaning:"ඉන්පසු"}
    ,{id:545,word:"there",sound:"දෙයර්",meaning:"එහි"}
    ,{id:546,word:"these",sound:"දීස්",meaning:"මේවා"}
    ,{id:547,word:"thing",sound:"තිං",meaning:"දෙය"}
    ,{id:548,word:"think",sound:"තිංක්",meaning:"සිතනවා"}
    ,{id:549,word:"this",sound:"දිස්",meaning:"මෙය"}
    ,{id:550,word:"those",sound:"දෝස්",meaning:"ඒවා"}
    ,{id:551,word:"though",sound:"දෝ",meaning:"නමුත් / වුවද"}
    ,{id:552,word:"thought",sound:"තෝට්",meaning:"සිතුවිල්ල"}
    ,{id:553,word:"through",sound:"ත්‍රූ",meaning:"හරහා"}
    ,{id:554,word:"time",sound:"ටයිම්",meaning:"කාලය"}
    ,{id:555,word:"today",sound:"ටුඩේ",meaning:"අද"}
    ,{id:556,word:"together",sound:"ටගෙදර්",meaning:"එකට"}
    ,{id:557,word:"tomorrow",sound:"ටමොරෝ",meaning:"හෙට"}
    ,{id:558,word:"tonight",sound:"ටනයිට්",meaning:"අද රාත්‍රියේ"}
    ,{id:559,word:"too",sound:"ටූ",meaning:"ද / අධික ලෙස"}
    ,{id:560,word:"tool",sound:"ටූල්",meaning:"මෙවලම"}
    ,{id:561,word:"total",sound:"ටෝටල්",meaning:"එකතුව"}
    ,{id:562,word:"touch",sound:"ටච්",meaning:"ස්පර්ශ කරනවා"}
    ,{id:563,word:"town",sound:"ටවුන්",meaning:"නගරය"}
    ,{id:564,word:"trade",sound:"ට්‍රේඩ්",meaning:"වෙළඳාම"}
    ,{id:565,word:"train",sound:"ට්‍රේන්",meaning:"දුම්රිය / පුහුණු කරනවා"}
    ,{id:566,word:"training",sound:"ට්‍රේනිං",meaning:"පුහුණුව"}
    ,{id:567,word:"travel",sound:"ට්‍රැවල්",meaning:"සංචාරය කරනවා"}
    ,{id:568,word:"treat",sound:"ට්‍රීට්",meaning:"සලකනවා / ප්‍රතිකාර කරනවා"}
    ,{id:569,word:"tree",sound:"ට්‍රී",meaning:"ගස"}
    ,{id:570,word:"true",sound:"ට්‍රූ",meaning:"සත්‍ය"}
    ,{id:571,word:"trust",sound:"ට්‍රස්ට්",meaning:"විශ්වාස කරනවා"}
    ,{id:572,word:"try",sound:"ට්‍රයි",meaning:"උත්සාහ කරනවා"}
    ,{id:573,word:"turn",sound:"ටර්න්",meaning:"හැරෙනවා / වාරය"}
    ,{id:574,word:"type",sound:"ටයිප්",meaning:"වර්ගය / ටයිප් කරනවා"}
    ,{id:575,word:"under",sound:"අන්ඩර්",meaning:"යට"}
    ,{id:576,word:"understand",sound:"අන්ඩර්ස්ටෑන්ඩ්",meaning:"තේරුම් ගන්නවා"}
    ,{id:577,word:"unit",sound:"යුනිට්",meaning:"ඒකකය"}
    ,{id:578,word:"university",sound:"යුනිවර්සිටි",meaning:"විශ්වවිද්‍යාලය"}
    ,{id:579,word:"until",sound:"අන්ටිල්",meaning:"තෙක්"}
    ,{id:580,word:"update",sound:"අප්ඩේට්",meaning:"යාවත්කාලීන කරනවා"}
    ,{id:581,word:"upload",sound:"අප්ලෝඩ්",meaning:"උඩුගත කරනවා"}
    ,{id:582,word:"use",sound:"යූස්",meaning:"භාවිත කරනවා"}
    ,{id:583,word:"useful",sound:"යූස්ෆුල්",meaning:"ප්‍රයෝජනවත්"}
    ,{id:584,word:"usually",sound:"යූෂුවලි",meaning:"සාමාන්‍යයෙන්"}
    ,{id:585,word:"value",sound:"වැලියු",meaning:"වටිනාකම"}
    ,{id:586,word:"various",sound:"වෙරියස්",meaning:"විවිධ"}
    ,{id:587,word:"very",sound:"වෙරි",meaning:"ඉතා"}
    ,{id:588,word:"view",sound:"වියූ",meaning:"දර්ශනය / අදහස"}
    ,{id:589,word:"visit",sound:"විසිට්",meaning:"සංචාරය කරනවා"}
    ,{id:590,word:"voice",sound:"වොයිස්",meaning:"කටහඬ"}
    ,{id:591,word:"wait",sound:"වේට්",meaning:"බලා සිටිනවා"}
    ,{id:592,word:"walk",sound:"වෝක්",meaning:"ඇවිදිනවා"}
    ,{id:593,word:"want",sound:"වොන්ට්",meaning:"අවශ්‍යයි"}
    ,{id:594,word:"warm",sound:"වෝම්",meaning:"උණුසුම්"}
    ,{id:595,word:"watch",sound:"වොච්",meaning:"නරඹනවා / ඔරලෝසුව"}
    ,{id:596,word:"water",sound:"වෝටර්",meaning:"ජලය"}
    ,{id:597,word:"way",sound:"වේ",meaning:"මාර්ගය / ක්‍රමය"}
    ,{id:598,word:"wear",sound:"වෙයර්",meaning:"අඳිනවා"}
    ,{id:599,word:"weather",sound:"වෙදර්",meaning:"කාලගුණය"}
    ,{id:600,word:"week",sound:"වීක්",meaning:"සතිය"}
      ,{id:601,word:"weekend",sound:"වීකෙන්ඩ්",meaning:"සති අන්තය"}
    ,{id:602,word:"welcome",sound:"වෙල්කම්",meaning:"සාදරයෙන් පිළිගන්නවා"}
    ,{id:603,word:"well",sound:"වෙල්",meaning:"හොඳින් / ළිඳ"}
    ,{id:604,word:"west",sound:"වෙස්ට්",meaning:"බටහිර"}
    ,{id:605,word:"what",sound:"වොට්",meaning:"කුමක්ද"}
    ,{id:606,word:"when",sound:"වෙන්",meaning:"කවදාද"}
    ,{id:607,word:"where",sound:"වෙයර්",meaning:"කොහේද"}
    ,{id:608,word:"whether",sound:"වෙදර්",meaning:"යන්න / ද යන්න"}
    ,{id:609,word:"which",sound:"විච්",meaning:"කුමන"}
    ,{id:610,word:"while",sound:"වයිල්",meaning:"අතරතුර"}
    ,{id:611,word:"white",sound:"වයිට්",meaning:"සුදු"}
    ,{id:612,word:"who",sound:"හූ",meaning:"කවුද"}
    ,{id:613,word:"whole",sound:"හෝල්",meaning:"සම්පූර්ණ"}
    ,{id:614,word:"whose",sound:"හූස්",meaning:"කාගේද"}
    ,{id:615,word:"why",sound:"වයි",meaning:"ඇයි"}
    ,{id:616,word:"wide",sound:"වයිඩ්",meaning:"පළල"}
    ,{id:617,word:"wife",sound:"වයිෆ්",meaning:"බිරිඳ"}
    ,{id:618,word:"will",sound:"විල්",meaning:"කරනු ඇත"}
    ,{id:619,word:"win",sound:"වින්",meaning:"ජයග්‍රහණය කරනවා"}
    ,{id:620,word:"window",sound:"වින්ඩෝ",meaning:"කවුළුව"}
    ,{id:621,word:"wish",sound:"විෂ්",meaning:"ප්‍රාර්ථනා කරනවා"}
    ,{id:622,word:"with",sound:"විත්",meaning:"සමඟ"}
    ,{id:623,word:"within",sound:"විදින්",meaning:"ඇතුළත / තුළ"}
    ,{id:624,word:"without",sound:"විදවුට්",meaning:"නැතිව"}
    ,{id:625,word:"woman",sound:"වුමන්",meaning:"කාන්තාව"}
    ,{id:626,word:"wonder",sound:"වන්ඩර්",meaning:"පුදුම වෙනවා"}
    ,{id:627,word:"wonderful",sound:"වන්ඩෆුල්",meaning:"අපූරු"}
    ,{id:628,word:"word",sound:"වර්ඩ්",meaning:"වචනය"}
    ,{id:629,word:"work",sound:"වර්ක්",meaning:"වැඩ"}
    ,{id:630,word:"worker",sound:"වර්කර්",meaning:"සේවකයා"}
    ,{id:631,word:"working",sound:"වර්කිං",meaning:"වැඩ කරමින්"}
    ,{id:632,word:"world",sound:"වර්ල්ඩ්",meaning:"ලෝකය"}
    ,{id:633,word:"worry",sound:"වරි",meaning:"කනස්සලු වෙනවා"}
    ,{id:634,word:"write",sound:"රයිට්",meaning:"ලියනවා"}
    ,{id:635,word:"writer",sound:"රයිටර්",meaning:"ලේඛකයා"}
    ,{id:636,word:"writing",sound:"රයිටිං",meaning:"ලිවීම"}
    ,{id:637,word:"wrong",sound:"රොං",meaning:"වැරදි"}
    ,{id:638,word:"year",sound:"යියර්",meaning:"වසර"}
    ,{id:639,word:"yellow",sound:"යෙලෝ",meaning:"කහ"}
    ,{id:640,word:"yes",sound:"යෙස්",meaning:"ඔව්"}
    ,{id:641,word:"yesterday",sound:"යෙස්ටඩේ",meaning:"ඊයේ"}
    ,{id:642,word:"yet",sound:"යෙට්",meaning:"තවම / එහෙත්"}
    ,{id:643,word:"young",sound:"යං",meaning:"තරුණ"}
    ,{id:644,word:"your",sound:"යෝ",meaning:"ඔබගේ"}
    ,{id:645,word:"yourself",sound:"යෝසෙල්ෆ්",meaning:"ඔබම"}
    ,{id:646,word:"ability",sound:"අබිලිටි",meaning:"හැකියාව"}
    ,{id:647,word:"absence",sound:"ඇබ්සන්ස්",meaning:"නොපැමිණීම"}
    ,{id:648,word:"absolute",sound:"ඇබ්සලූට්",meaning:"නිරපේක්ෂ / සම්පූර්ණ"}
    ,{id:649,word:"academic",sound:"ඇකඩෙමික්",meaning:"අධ්‍යාපනික"}
    ,{id:650,word:"access",sound:"ඇක්සෙස්",meaning:"ප්‍රවේශය"}
    ,{id:651,word:"accurate",sound:"ඇක්‍යුරට්",meaning:"නිවැරදි"}
    ,{id:652,word:"achieve",sound:"අචීව්",meaning:"ළඟා කරගන්නවා"}
    ,{id:653,word:"achievement",sound:"අචීව්මන්ට්",meaning:"ජයග්‍රහණය"}
    ,{id:654,word:"additional",sound:"අඩිෂනල්",meaning:"අමතර"}
    ,{id:655,word:"administration",sound:"අඩ්මිනිස්ට්‍රේෂන්",meaning:"පරිපාලනය"}
    ,{id:656,word:"advantage",sound:"අඩ්වාන්ටිජ්",meaning:"වාසිය"}
    ,{id:657,word:"advertise",sound:"ඇඩ්වටයිස්",meaning:"දැන්වීම් පළ කරනවා"}
    ,{id:658,word:"advertisement",sound:"ඇඩ්වටයිස්මන්ට්",meaning:"දැන්වීම"}
    ,{id:659,word:"affect",sound:"අෆෙක්ට්",meaning:"බලපෑම් කරනවා"}
    ,{id:660,word:"afford",sound:"අෆෝඩ්",meaning:"දරාගත හැකි වීම"}
    ,{id:661,word:"agreement",sound:"අග්‍රීමන්ට්",meaning:"ගිවිසුම / එකඟතාව"}
    ,{id:662,word:"analysis",sound:"අනැලිසිස්",meaning:"විශ්ලේෂණය"}
    ,{id:663,word:"annual",sound:"ඇන්යුවල්",meaning:"වාර්ෂික"}
    ,{id:664,word:"application",sound:"ඇප්ලිකේෂන්",meaning:"අයදුම්පත / යෙදුම"}
    ,{id:665,word:"appointment",sound:"අපොයින්ට්මන්ට්",meaning:"හමුවීමක් සඳහා නියමිත වේලාව"}
    ,{id:666,word:"approval",sound:"අප්‍රූවල්",meaning:"අනුමැතිය"}
    ,{id:667,word:"approve",sound:"අප්‍රූව්",meaning:"අනුමත කරනවා"}
    ,{id:668,word:"arrangement",sound:"අරේන්ජ්මන්ට්",meaning:"සැලසුම / පිළිවෙළ"}
    ,{id:669,word:"assessment",sound:"අසෙස්මන්ට්",meaning:"ඇගයීම"}
    ,{id:670,word:"assistance",sound:"අසිස්ටන්ස්",meaning:"උපකාරය"}
    ,{id:671,word:"available",sound:"අවේලබල්",meaning:"ලබාගත හැකි"}
    ,{id:672,word:"average",sound:"ඇවරේජ්",meaning:"සාමාන්‍යය"}
    ,{id:673,word:"balance",sound:"බැලන්ස්",meaning:"ශේෂය / සමබරතාව"}
    ,{id:674,word:"benefit",sound:"බෙනිෆිට්",meaning:"ප්‍රතිලාභය"}
    ,{id:675,word:"calculate",sound:"කැල්කියුලේට්",meaning:"ගණනය කරනවා"}
    ,{id:676,word:"calculation",sound:"කැල්කියුලේෂන්",meaning:"ගණනය කිරීම"}
    ,{id:677,word:"capacity",sound:"කපැසිටි",meaning:"ධාරිතාව"}
    ,{id:678,word:"category",sound:"කැටගරි",meaning:"වර්ගය"}
    ,{id:679,word:"certificate",sound:"සටিফිකට්",meaning:"සහතිකය"}
    ,{id:680,word:"challenge",sound:"චැලින්ජ්",meaning:"අභියෝගය"}
    ,{id:681,word:"character",sound:"කැරැක්ටර්",meaning:"චරිතය / අක්ෂරය"}
    ,{id:682,word:"commercial",sound:"කමර්ෂල්",meaning:"වාණිජ"}
    ,{id:683,word:"communication",sound:"කමියුනිකේෂන්",meaning:"සන්නිවේදනය"}
    ,{id:684,word:"comparison",sound:"කම්පැරිසන්",meaning:"සැසඳීම"}
    ,{id:685,word:"competition",sound:"කම්පෙටිෂන්",meaning:"තරගය"}
    ,{id:686,word:"complaint",sound:"කම්ප්ලේන්ට්",meaning:"පැමිණිල්ල"}
    ,{id:687,word:"conclusion",sound:"කන්ක්ලූෂන්",meaning:"නිගමනය"}
    ,{id:688,word:"conference",sound:"කොන්ෆරන්ස්",meaning:"සම්මන්ත්‍රණය"}
    ,{id:689,word:"confident",sound:"කොන්ෆිඩන්ට්",meaning:"ආත්මවිශ්වාසයෙන් යුත්"}
    ,{id:690,word:"consequence",sound:"කොන්සික්වන්ස්",meaning:"ප්‍රතිවිපාකය"}
    ,{id:691,word:"construction",sound:"කන්ස්ට්‍රක්ෂන්",meaning:"ඉදිකිරීම"}
    ,{id:692,word:"consult",sound:"කන්සල්ට්",meaning:"උපදෙස් ලබාගන්නවා"}
    ,{id:693,word:"consumer",sound:"කන්සියුමර්",meaning:"පාරිභෝගිකයා"}
    ,{id:694,word:"convenient",sound:"කන්වීනියන්ට්",meaning:"පහසු"}
    ,{id:695,word:"cooperation",sound:"කෝඔපරේෂන්",meaning:"සහයෝගීතාව"}
    ,{id:696,word:"corporate",sound:"කෝපරට්",meaning:"ආයතනික"}
    ,{id:697,word:"correspondence",sound:"කොරස්පොන්ඩන්ස්",meaning:"ලිපි හුවමාරුව"}
    ,{id:698,word:"criteria",sound:"ක්‍රයිටීරියා",meaning:"නිර්ණායක"}
    ,{id:699,word:"deadline",sound:"ඩෙඩ්ලයින්",meaning:"අවසන් දිනය / කාලසීමාව"}
    ,{id:700,word:"decision",sound:"ඩිසිෂන්",meaning:"තීරණය"}}
];
