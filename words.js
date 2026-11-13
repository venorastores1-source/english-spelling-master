const vocabularyPacks = [
{
  pack: 1,
  start: 1,
  end: 700,
  words: [
    {id:1,word:"about",sound:"අබවුට්",meaning:"ගැන / පිළිබඳව",ipa:["/ə/","/b/","/aʊ/","/t/"]},
{id:2,word:"above",sound:"අබව්",meaning:"ඉහළින්",ipa:["/ə/","/b/","/ʌ/","/v/"]},
{id:3,word:"accept",sound:"අක්සෙප්ට්",meaning:"පිළිගන්නවා",ipa:["/ə/","/k/","/s/","/e/","/p/","/t/"]},
{id:4,word:"accident",sound:"ඇක්සිඩන්ට්",meaning:"අනතුර",ipa:["/æ/","/k/","/s/","/ɪ/","/d/","/ə/","/n/","/t/"]},
{id:5,word:"account",sound:"අකවුන්ට්",meaning:"ගිණුම",ipa:["/ə/","/k/","/aʊ/","/n/","/t/"]},
    {id:6,word:"achieve",sound:"අචීව්",meaning:"සාර්ථක කරගන්නවා",ipa:["/ə/","/tʃ/","/iː/","/v/"]},
{id:7,word:"across",sound:"අක්‍රොස්",meaning:"හරහා",ipa:["/ə/","/k/","/r/","/ɒ/","/s/"]},
{id:8,word:"action",sound:"ඇක්ෂන්",meaning:"ක්‍රියාව",ipa:["/æ/","/k/","/ʃ/","/ə/","/n/"]},
{id:9,word:"active",sound:"ඇක්ටිව්",meaning:"ක්‍රියාශීලී",ipa:["/æ/","/k/","/t/","/ɪ/","/v/"]},
{id:10,word:"address",sound:"අඩ්‍රෙස්",meaning:"ලිපිනය",ipa:["/ə/","/d/","/r/","/e/","/s/"]},
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
    {id:100,word:"city",sound:"සිටි",meaning:"නගරය"},
    {id:101,word:"class",sound:"ක්ලාස්",meaning:"පන්තිය"}
    ,{id:102,word:"clean",sound:"ක්ලීන්",meaning:"පිරිසිදු"},
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
    ,{id:700,word:"decision",sound:"ඩිසිෂන්",meaning:"තීරණය"},
    {id:701,word:"business",sound:"බිස්නස්",meaning:"ව්‍යාපාරය"},
{id:702,word:"company",sound:"කම්පනි",meaning:"සමාගම"},
{id:703,word:"office",sound:"ඔෆිස්",meaning:"කාර්යාලය"},
{id:704,word:"employee",sound:"එම්ප්ලොයි-ඊ",meaning:"සේවකයා"},
{id:705,word:"employer",sound:"එම්ප්ලොයර්",meaning:"සේවායෝජකයා"},
{id:706,word:"manager",sound:"මැනිජර්",meaning:"කළමනාකරු"},
{id:707,word:"management",sound:"මැනේජ්මන්ට්",meaning:"කළමනාකරණය"},
{id:708,word:"director",sound:"ඩිරෙක්ටර්",meaning:"අධ්‍යක්ෂවරයා"},
{id:709,word:"department",sound:"ඩිපාර්ට්මන්ට්",meaning:"දෙපාර්තමේන්තුව"},
{id:710,word:"staff",sound:"ස්ටාෆ්",meaning:"කාර්ය මණ්ඩලය"},
{id:711,word:"customer",sound:"කස්ටමර්",meaning:"පාරිභෝගිකයා"},
{id:712,word:"client",sound:"ක්ලයන්ට්",meaning:"සේවාලාභියා"},
{id:713,word:"supplier",sound:"සප්ලයර්",meaning:"සැපයුම්කරු"},
{id:714,word:"vendor",sound:"වෙන්ඩර්",meaning:"වෙළෙන්දා / සැපයුම්කරු"},
{id:715,word:"partner",sound:"පාට්නර්",meaning:"හවුල්කරු"},
{id:716,word:"meeting",sound:"මීටින්",meaning:"රැස්වීම"},
{id:717,word:"appointment",sound:"අපොයින්ට්මන්ට්",meaning:"හමුවීම සඳහා වේලාවක් වෙන් කිරීම"},
{id:718,word:"schedule",sound:"ෂෙඩ්යූල්",meaning:"කාලසටහන"},
{id:719,word:"deadline",sound:"ඩෙඩ්ලයින්",meaning:"අවසන් කළ යුතු දිනය"},
{id:720,word:"agenda",sound:"අජෙන්ඩා",meaning:"රැස්වීමේ න්‍යාය පත්‍රය"},
{id:721,word:"discussion",sound:"ඩිස්කෂන්",meaning:"සාකච්ඡාව"},
{id:722,word:"proposal",sound:"ප්‍රපෝසල්",meaning:"යෝජනාව"},
{id:723,word:"agreement",sound:"අග්‍රීමන්ට්",meaning:"ගිවිසුම / එකඟතාව"},
{id:724,word:"contract",sound:"කොන්ට්‍රැක්ට්",meaning:"කොන්ත්‍රාත්තුව"},
{id:725,word:"document",sound:"ඩොකියුමන්ට්",meaning:"ලේඛනය"},
{id:726,word:"report",sound:"රිපෝට්",meaning:"වාර්තාව"},
{id:727,word:"invoice",sound:"ඉන්වොයිස්",meaning:"ඉන්වොයිසිය / බිල්පත"},
{id:728,word:"quotation",sound:"ක්වෝටේෂන්",meaning:"මිල ගණන් ඉදිරිපත් කිරීම"},
{id:729,word:"purchase",sound:"පර්චස්",meaning:"මිලදී ගැනීම"},
{id:730,word:"order",sound:"ඕඩර්",meaning:"ඇණවුම"},
{id:731,word:"payment",sound:"පේමන්ට්",meaning:"ගෙවීම"},
{id:732,word:"receipt",sound:"රිසීට්",meaning:"ලදුපත"},
{id:733,word:"budget",sound:"බජට්",meaning:"අයවැය"},
{id:734,word:"expense",sound:"එක්ස්පෙන්ස්",meaning:"වියදම"},
{id:735,word:"revenue",sound:"රෙවෙනියූ",meaning:"ආදායම"},
{id:736,word:"profit",sound:"ප්‍රොෆිට්",meaning:"ලාභය"},
{id:737,word:"loss",sound:"ලොස්",meaning:"පාඩුව"},
{id:738,word:"salary",sound:"සැලරි",meaning:"වැටුප"},
{id:739,word:"commission",sound:"කමිෂන්",meaning:"කොමිස් මුදල"},
{id:740,word:"discount",sound:"ඩිස්කවුන්ට්",meaning:"වට්ටම"},
{id:741,word:"delivery",sound:"ඩිලිවරි",meaning:"භාණ්ඩ බෙදාහැරීම"},
{id:742,word:"shipment",sound:"ෂිප්මන්ට්",meaning:"නැව්ගත කළ භාණ්ඩ තොගය"},
{id:743,word:"inventory",sound:"ඉන්වෙන්ටරි",meaning:"තොග භාණ්ඩ ලේඛනය"},
{id:744,word:"warehouse",sound:"වෙයාර්හවුස්",meaning:"ගබඩාව"},
{id:745,word:"stock",sound:"ස්ටොක්",meaning:"තොගය"},
{id:746,word:"quantity",sound:"ක්වොන්ටිටි",meaning:"ප්‍රමාණය"},
{id:747,word:"quality",sound:"ක්වොලිටි",meaning:"ගුණාත්මකභාවය"},
{id:748,word:"product",sound:"ප්‍රොඩක්ට්",meaning:"නිෂ්පාදනය / භාණ්ඩය"},
{id:749,word:"service",sound:"සර්විස්",meaning:"සේවාව"},
{id:750,word:"businessman",sound:"බිස්නස්මෑන්",meaning:"ව්‍යාපාරිකයා"},
    {id:751,word:"businesswoman",sound:"බිස්නස්වුමන්",meaning:"ව්‍යාපාරික කාන්තාව"},
{id:752,word:"entrepreneur",sound:"ඔන්ට්‍රප්‍රනර්",meaning:"ව්‍යවසායකයා"},
{id:753,word:"enterprise",sound:"එන්ටර්ප්‍රයිස්",meaning:"ව්‍යාපාරික ආයතනය"},
{id:754,word:"industry",sound:"ඉන්ඩස්ට්‍රි",meaning:"කර්මාන්තය"},
{id:755,word:"operation",sound:"ඔපරේෂන්",meaning:"මෙහෙයුම / ක්‍රියාකාරිත්වය"},
{id:756,word:"strategy",sound:"ස්ට්‍රැටජි",meaning:"උපායමාර්ගය"},
{id:757,word:"objective",sound:"ඔබ්ජෙක්ටිව්",meaning:"අරමුණ"},
{id:758,word:"target",sound:"ටාගට්",meaning:"ඉලක්කය"},
{id:759,word:"performance",sound:"පර්ෆෝමන්ස්",meaning:"කාර්ය සාධනය"},
{id:760,word:"productivity",sound:"ප්‍රඩක්ටිවිටි",meaning:"ඵලදායිතාව"},
{id:761,word:"efficiency",sound:"එෆිෂන්සි",meaning:"කාර්යක්ෂමතාව"},
{id:762,word:"responsibility",sound:"රිස්පොන්සිබිලිටි",meaning:"වගකීම"},
{id:763,word:"authority",sound:"අතෝරිටි",meaning:"බලය / අධිකාරිය"},
{id:764,word:"supervisor",sound:"සුපර්වයිසර්",meaning:"අධීක්ෂකවරයා"},
{id:765,word:"assistant",sound:"අසිස්ටන්ට්",meaning:"සහායකයා"},
{id:766,word:"colleague",sound:"කොලීග්",meaning:"සහකාර සේවකයා"},
{id:767,word:"recruitment",sound:"රිකෲට්මන්ට්",meaning:"සේවක බඳවා ගැනීම"},
{id:768,word:"interview",sound:"ඉන්ටර්වියූ",meaning:"සම්මුඛ පරීක්ෂණය"},
{id:769,word:"vacancy",sound:"වේකන්සි",meaning:"පුරප්පාඩුව"},
{id:770,word:"qualification",sound:"ක්වොලිෆිකේෂන්",meaning:"සුදුසුකම"},
{id:771,word:"experience",sound:"එක්ස්පීරියන්ස්",meaning:"පළපුරුද්ද"},
{id:772,word:"training",sound:"ට්‍රේනින්",meaning:"පුහුණුව"},
{id:773,word:"promotion",sound:"ප්‍රමෝෂන්",meaning:"උසස්වීම / ප්‍රවර්ධනය"},
{id:774,word:"resignation",sound:"රෙසිග්නේෂන්",meaning:"ඉල්ලා අස්වීම"},
{id:775,word:"attendance",sound:"අටෙන්ඩන්ස්",meaning:"පැමිණීම"},
{id:776,word:"overtime",sound:"ඕවර්ටයිම්",meaning:"අතිකාල සේවය"},
{id:777,word:"leave",sound:"ලීව්",meaning:"නිවාඩුව"},
{id:778,word:"policy",sound:"පොලිසි",meaning:"ප්‍රතිපත්තිය"},
{id:779,word:"procedure",sound:"ප්‍රසීජර්",meaning:"ක්‍රියා පටිපාටිය"},
{id:780,word:"process",sound:"ප්‍රොසෙස්",meaning:"ක්‍රියාවලිය"},
{id:781,word:"system",sound:"සිස්ටම්",meaning:"පද්ධතිය"},
{id:782,word:"facility",sound:"ෆසිලිටි",meaning:"පහසුකම"},
{id:783,word:"equipment",sound:"ඉක්විප්මන්ට්",meaning:"උපකරණ"},
{id:784,word:"material",sound:"මටීරියල්",meaning:"ද්‍රව්‍ය"},
{id:785,word:"resource",sound:"රිසෝස්",meaning:"සම්පත"},
{id:786,word:"maintenance",sound:"මේන්ටනන්ස්",meaning:"නඩත්තුව"},
{id:787,word:"safety",sound:"සේෆ්ටි",meaning:"ආරක්ෂාව"},
{id:788,word:"security",sound:"සිකියුරිටි",meaning:"ආරක්ෂක විධිවිධාන"},
{id:789,word:"risk",sound:"රිස්ක්",meaning:"අවදානම"},
{id:790,word:"issue",sound:"ඉෂූ",meaning:"ගැටලුව / කාරණය"},
{id:791,word:"solution",sound:"සලූෂන්",meaning:"විසඳුම"},
{id:792,word:"improvement",sound:"ඉම්ප්‍රූව්මන්ට්",meaning:"වැඩිදියුණු කිරීම"},
{id:793,word:"development",sound:"ඩිවෙලොප්මන්ට්",meaning:"සංවර්ධනය"},
{id:794,word:"innovation",sound:"ඉනවේෂන්",meaning:"නවෝත්පාදනය"},
{id:795,word:"research",sound:"රිසර්ච්",meaning:"පර්යේෂණය"},
{id:796,word:"analysis",sound:"අනැලිසිස්",meaning:"විශ්ලේෂණය"},
{id:797,word:"evaluation",sound:"ඉවැලියුවේෂන්",meaning:"ඇගයීම"},
{id:798,word:"feedback",sound:"ෆීඩ්බැක්",meaning:"ප්‍රතිචාරය"},
{id:799,word:"decision",sound:"ඩිසිෂන්",meaning:"තීරණය"},
{id:800,word:"priority",sound:"ප්‍රයෝරිටි",meaning:"ප්‍රමුඛතාව"},
    {id:801,word:"communication",sound:"කමියුනිකේෂන්",meaning:"සන්නිවේදනය"},
{id:802,word:"correspondence",sound:"කොරස්පොන්ඩන්ස්",meaning:"ලිපි හුවමාරුව"},
{id:803,word:"email",sound:"ඊමේල්",meaning:"විද්‍යුත් තැපෑල"},
{id:804,word:"attachment",sound:"අටැච්මන්ට්",meaning:"ඇමුණුම"},
{id:805,word:"recipient",sound:"රිසිපියන්ට්",meaning:"ලබන්නා"},
{id:806,word:"sender",sound:"සෙන්ඩර්",meaning:"යවන්නා"},
{id:807,word:"subject",sound:"සබ්ජෙක්ට්",meaning:"විෂයය"},
{id:808,word:"message",sound:"මෙසිජ්",meaning:"පණිවිඩය"},
{id:809,word:"notification",sound:"නෝටිෆිකේෂන්",meaning:"දැනුම්දීම"},
{id:810,word:"confirmation",sound:"කන්ෆර්මේෂන්",meaning:"තහවුරු කිරීම"},
{id:811,word:"request",sound:"රික්වෙස්ට්",meaning:"ඉල්ලීම"},
{id:812,word:"response",sound:"රිස්පොන්ස්",meaning:"පිළිතුර / ප්‍රතිචාරය"},
{id:813,word:"inquiry",sound:"ඉන්ක්වයරි",meaning:"විමසීම"},
{id:814,word:"complaint",sound:"කම්ප්ලේන්ට්",meaning:"පැමිණිල්ල"},
{id:815,word:"feedback",sound:"ෆීඩ්බැක්",meaning:"ප්‍රතිචාරය"},
{id:816,word:"reminder",sound:"රිමයින්ඩර්",meaning:"මතක් කිරීම"},
{id:817,word:"announcement",sound:"අනවුන්ස්මන්ට්",meaning:"නිවේදනය"},
{id:818,word:"instruction",sound:"ඉන්ස්ට්‍රක්ෂන්",meaning:"උපදෙස්"},
{id:819,word:"approval",sound:"අප්‍රූවල්",meaning:"අනුමැතිය"},
{id:820,word:"rejection",sound:"රිජෙක්ෂන්",meaning:"ප්‍රතික්ෂේප කිරීම"},
{id:821,word:"signature",sound:"සිග්නචර්",meaning:"අත්සන"},
{id:822,word:"draft",sound:"ඩ්‍රාෆ්ට්",meaning:"කෙටුම්පත"},
{id:823,word:"revision",sound:"රිවිෂන්",meaning:"සංශෝධනය"},
{id:824,word:"version",sound:"වර්ෂන්",meaning:"අනුවාදය"},
{id:825,word:"record",sound:"රෙකෝඩ්",meaning:"වාර්තාව / සටහන"},
{id:826,word:"archive",sound:"ආර්කයිව්",meaning:"ලේඛනාගාරය"},
{id:827,word:"database",sound:"ඩේටාබේස්",meaning:"දත්ත සමුදාය"},
{id:828,word:"spreadsheet",sound:"ස්ප්‍රෙඩ්ෂීට්",meaning:"පැතුරුම්පත"},
{id:829,word:"worksheet",sound:"වර්ක්ෂීට්",meaning:"වැඩ පත්‍රිකාව"},
{id:830,word:"formula",sound:"ෆෝමියුලා",meaning:"සූත්‍රය"},
{id:831,word:"calculation",sound:"කැල්කියුලේෂන්",meaning:"ගණනය කිරීම"},
{id:832,word:"accuracy",sound:"ඇකියුරසි",meaning:"නිවැරදිභාවය"},
{id:833,word:"verification",sound:"වෙරිෆිකේෂන්",meaning:"සත්‍යාපනය"},
{id:834,word:"validation",sound:"වැලිඩේෂන්",meaning:"වලංගුභාවය පරීක්ෂා කිරීම"},
{id:835,word:"information",sound:"ඉන්ෆොමේෂන්",meaning:"තොරතුරු"},
{id:836,word:"data",sound:"ඩේටා",meaning:"දත්ත"},
{id:837,word:"confidential",sound:"කොන්ෆිඩෙන්ෂල්",meaning:"රහස්‍ය"},
{id:838,word:"permission",sound:"පර්මිෂන්",meaning:"අවසරය"},
{id:839,word:"access",sound:"ඇක්සස්",meaning:"ප්‍රවේශය"},
{id:840,word:"update",sound:"අප්ඩේට්",meaning:"යාවත්කාලීන කිරීම"},
{id:841,word:"submit",sound:"සබ්මිට්",meaning:"ඉදිරිපත් කිරීම"},
{id:842,word:"forward",sound:"ෆෝවර්ඩ්",meaning:"ඉදිරියට යොමු කිරීම"},
{id:843,word:"reply",sound:"රිප්ලයි",meaning:"පිළිතුරු දීම"},
{id:844,word:"enquiry",sound:"ඉන්ක්වයරි",meaning:"විමසීම"},
{id:845,word:"remittance",sound:"රිමිටන්ස්",meaning:"මුදල් ප්‍රේෂණය"},
{id:846,word:"transaction",sound:"ට්‍රැන්සැක්ෂන්",meaning:"ගනුදෙනුව"},
{id:847,word:"balance",sound:"බැලන්ස්",meaning:"ශේෂය"},
{id:848,word:"statement",sound:"ස්ටේට්මන්ට්",meaning:"ගිණුම් ප්‍රකාශය"},
{id:849,word:"payment terms",sound:"පේමන්ට් ටර්ම්ස්",meaning:"ගෙවීම් කොන්දේසි"},
{id:850,word:"due date",sound:"ඩියු ඩේට්",meaning:"ගෙවිය යුතු දිනය"},
    {id:851,word:"account",sound:"අකවුන්ට්",meaning:"ගිණුම"},
{id:852,word:"accounting",sound:"අකවුන්ටින්",meaning:"ගිණුම්කරණය"},
{id:853,word:"accountant",sound:"අකවුන්ටන්ට්",meaning:"ගණකාධිකාරී"},
{id:854,word:"finance",sound:"ෆයිනෑන්ස්",meaning:"මූල්‍ය කටයුතු"},
{id:855,word:"financial",sound:"ෆයිනැන්ෂල්",meaning:"මූල්‍යමය"},
{id:856,word:"capital",sound:"කැපිටල්",meaning:"ප්‍රාග්ධනය"},
{id:857,word:"investment",sound:"ඉන්වෙස්ට්මන්ට්",meaning:"ආයෝජනය"},
{id:858,word:"investor",sound:"ඉන්වෙස්ටර්",meaning:"ආයෝජකයා"},
{id:859,word:"asset",sound:"ඇසට්",meaning:"වත්කම"},
{id:860,word:"liability",sound:"ලයබිලිටි",meaning:"වගකීම / ණය බැඳීම"},
{id:861,word:"debt",sound:"ඩෙට්",meaning:"ණය"},
{id:862,word:"credit",sound:"ක්‍රෙඩිට්",meaning:"ණය පහසුකම / බැර"},
{id:863,word:"debit",sound:"ඩෙබිට්",meaning:"හර"},
{id:864,word:"tax",sound:"ටැක්ස්",meaning:"බද්ද"},
{id:865,word:"taxation",sound:"ටැක්සේෂන්",meaning:"බදු අය කිරීම"},
{id:866,word:"audit",sound:"ඕඩිට්",meaning:"විගණනය"},
{id:867,word:"auditor",sound:"ඕඩිටර්",meaning:"විගණකවරයා"},
{id:868,word:"insurance",sound:"ඉන්ෂුවරන්ස්",meaning:"රක්ෂණය"},
{id:869,word:"interest",sound:"ඉන්ට්‍රස්ට්",meaning:"පොලිය"},
{id:870,word:"installment",sound:"ඉන්ස්ටෝල්මන්ට්",meaning:"වාරිකය"},
{id:871,word:"refund",sound:"රීෆන්ඩ්",meaning:"මුදල් ආපසු ගෙවීම"},
{id:872,word:"reimbursement",sound:"රීඉම්බර්ස්මන්ට්",meaning:"වියදම් ප්‍රතිපූරණය"},
{id:873,word:"forecast",sound:"ෆෝකාස්ට්",meaning:"පුරෝකථනය"},
{id:874,word:"estimate",sound:"එස්ටිමේට්",meaning:"ඇස්තමේන්තුව"},
{id:875,word:"expenditure",sound:"එක්ස්පෙන්ඩිචර්",meaning:"වියදම් කිරීම"},
{id:876,word:"income",sound:"ඉන්කම්",meaning:"ආදායම"},
{id:877,word:"turnover",sound:"ටර්න්ඕවර්",meaning:"මුළු විකුණුම් ආදායම"},
{id:878,word:"margin",sound:"මාජින්",meaning:"ලාභ ආන්තිකය"},
{id:879,word:"cash flow",sound:"කෑෂ් ෆ්ලෝ",meaning:"මුදල් ප්‍රවාහය"},
{id:880,word:"payroll",sound:"පේරෝල්",meaning:"වැටුප් ලේඛනය"},
{id:881,word:"procurement",sound:"ප්‍රොකියුර්මන්ට්",meaning:"ප්‍රසම්පාදනය"},
{id:882,word:"purchasing",sound:"පර්චසිං",meaning:"මිලදී ගැනීමේ කටයුතු"},
{id:883,word:"requisition",sound:"රෙක්විසිෂන්",meaning:"අවශ්‍යතා ඉල්ලීම"},
{id:884,word:"purchase order",sound:"පර්චස් ඕඩර්",meaning:"මිලදී ගැනීමේ ඇණවුම"},
{id:885,word:"supplier evaluation",sound:"සප්ලයර් ඉවැලියුවේෂන්",meaning:"සැපයුම්කරු ඇගයීම"},
{id:886,word:"lead time",sound:"ලීඩ් ටයිම්",meaning:"ඇණවුම ලබාදීමේ සිට ලැබීම දක්වා කාලය"},
{id:887,word:"shortage",sound:"ෂෝටේජ්",meaning:"හිඟය"},
{id:888,word:"surplus",sound:"සර්ප්ලස්",meaning:"අතිරික්තය"},
{id:889,word:"reorder",sound:"රීඕඩර්",meaning:"නැවත ඇණවුම් කිරීම"},
{id:890,word:"minimum stock",sound:"මිනිමම් ස්ටොක්",meaning:"අවම තොගය"},
{id:891,word:"maximum stock",sound:"මැක්සිමම් ස්ටොක්",meaning:"උපරිම තොගය"},
{id:892,word:"stocktaking",sound:"ස්ටොක්ටේකින්",meaning:"භාණ්ඩ තොග ගණනය කිරීම"},
{id:893,word:"dispatch",sound:"ඩිස්පැච්",meaning:"භාණ්ඩ පිටත් කිරීම"},
{id:894,word:"consignment",sound:"කන්සයින්මන්ට්",meaning:"භාරදීම සඳහා යවන භාණ්ඩ තොගය"},
{id:895,word:"packing",sound:"පැකින්",meaning:"ඇසුරුම් කිරීම"},
{id:896,word:"packaging",sound:"පැකේජින්",meaning:"ඇසුරුම්කරණය"},
{id:897,word:"warehouse management",sound:"වෙයාර්හවුස් මැනේජ්මන්ට්",meaning:"ගබඩා කළමනාකරණය"},
{id:898,word:"logistics",sound:"ලජිස්ටික්ස්",meaning:"ප්‍රවාහන හා සැපයුම් කළමනාකරණය"},
{id:899,word:"supply chain",sound:"සප්ලයි චේන්",meaning:"සැපයුම් දාමය"},
{id:900,word:"demand",sound:"ඩිමාන්ඩ්",meaning:"ඉල්ලුම"},
    ,{id:901,word:"supply",sound:"සප්ලයි",meaning:"සැපයුම"}
,{id:902,word:"market",sound:"මාකට්",meaning:"වෙළඳපොළ"}
,{id:903,word:"marketing",sound:"මාකටින්",meaning:"අලෙවිකරණය"}
,{id:904,word:"sales",sound:"සේල්ස්",meaning:"විකුණුම්"}
,{id:905,word:"salesperson",sound:"සේල්ස්පර්සන්",meaning:"විකුණුම් නියෝජිතයා"}
,{id:906,word:"retail",sound:"රීටේල්",meaning:"සිල්ලර වෙළඳාම"}
,{id:907,word:"wholesale",sound:"හෝල්සේල්",meaning:"තොග වෙළඳාම"}
,{id:908,word:"retailer",sound:"රීටේලර්",meaning:"සිල්ලර වෙළෙන්දා"}
,{id:909,word:"wholesaler",sound:"හෝල්සේලර්",meaning:"තොග වෙළෙන්දා"}
,{id:910,word:"advertisement",sound:"ඇඩ්වර්ටයිස්මන්ට්",meaning:"දැන්වීම"}
,{id:911,word:"advertising",sound:"ඇඩ්වර්ටයිසිං",meaning:"ප්‍රචාරණය"}
,{id:912,word:"campaign",sound:"කැම්පේන්",meaning:"ප්‍රචාරක වැඩසටහන"}
,{id:913,word:"brand",sound:"බ්‍රෑන්ඩ්",meaning:"වෙළඳ නාමය"}
,{id:914,word:"branding",sound:"බ්‍රැන්ඩිං",meaning:"වෙළඳ නාමයක් ගොඩනැගීම"}
,{id:915,word:"promotion",sound:"ප්‍රමෝෂන්",meaning:"ප්‍රවර්ධනය / විශේෂ දීමනාව"}
,{id:916,word:"marketplace",sound:"මාකට්ප්ලේස්",meaning:"වෙළඳ වේදිකාව"}
,{id:917,word:"competitor",sound:"කම්පෙටිටර්",meaning:"තරඟකරුවා"}
,{id:918,word:"competition",sound:"කම්පෙටිෂන්",meaning:"තරඟය"}
,{id:919,word:"consumer",sound:"කන්සියුමර්",meaning:"පාරිභෝගිකයා"}
,{id:920,word:"audience",sound:"ඕඩියන්ස්",meaning:"ඉලක්කගත ප්‍රේක්ෂක පිරිස"}
,{id:921,word:"demand forecast",sound:"ඩිමාන්ඩ් ෆෝකාස්ට්",meaning:"ඉල්ලුම් පුරෝකථනය"}
,{id:922,word:"market research",sound:"මාකට් රිසර්ච්",meaning:"වෙළඳපොළ පර්යේෂණය"}
,{id:923,word:"market share",sound:"මාකට් ෂෙයාර්",meaning:"වෙළඳපොළ කොටස"}
,{id:924,word:"sales target",sound:"සේල්ස් ටාගට්",meaning:"විකුණුම් ඉලක්කය"}
,{id:925,word:"sales volume",sound:"සේල්ස් වොලියුම්",meaning:"විකුණුම් ප්‍රමාණය"}
,{id:926,word:"revenue stream",sound:"රෙවෙනියු ස්ට්‍රීම්",meaning:"ආදායම් මාර්ගය"}
,{id:927,word:"customer service",sound:"කස්ටමර් සර්විස්",meaning:"පාරිභෝගික සේවාව"}
,{id:928,word:"customer satisfaction",sound:"කස්ටමර් සැටිස්ෆැක්ෂන්",meaning:"පාරිභෝගික තෘප්තිය"}
,{id:929,word:"customer retention",sound:"කස්ටමර් රිටෙන්ෂන්",meaning:"පාරිභෝගිකයන් රඳවා ගැනීම"}
,{id:930,word:"loyalty",sound:"ලෝයල්ටි",meaning:"විශ්වාසවන්තභාවය"}
,{id:931,word:"feedback form",sound:"ෆීඩ්බැක් ෆෝම්",meaning:"ප්‍රතිචාර පෝරමය"}
,{id:932,word:"complaint handling",sound:"කම්ප්ලේන්ට් හැන්ඩ්ලින්",meaning:"පැමිණිලි කළමනාකරණය"}
,{id:933,word:"after-sales service",sound:"ආෆ්ටර් සේල්ස් සර්විස්",meaning:"අලෙවියෙන් පසු සේවාව"}
,{id:934,word:"warranty",sound:"වොරන්ටි",meaning:"වගකීම් සහතිකය"}
,{id:935,word:"guarantee",sound:"ගැරන්ටී",meaning:"සහතිකය"}
,{id:936,word:"return policy",sound:"රිටර්න් පොලිසි",meaning:"භාණ්ඩ ආපසු භාරගැනීමේ ප්‍රතිපත්තිය"}
,{id:937,word:"exchange",sound:"එක්ස්චේන්ජ්",meaning:"මාරු කිරීම"}
,{id:938,word:"replacement",sound:"රිප්ලේස්මන්ට්",meaning:"ආදේශකය"}
,{id:939,word:"product launch",sound:"ප්‍රොඩක්ට් ලෝන්ච්",meaning:"නව භාණ්ඩයක් වෙළඳපොළට හඳුන්වාදීම"}
,{id:940,word:"product range",sound:"ප්‍රොඩක්ට් රේන්ජ්",meaning:"භාණ්ඩ වර්ග පරාසය"}
,{id:941,word:"catalogue",sound:"කැටලොග්",meaning:"භාණ්ඩ නාමාවලිය"}
,{id:942,word:"brochure",sound:"බ්‍රෝෂර්",meaning:"තොරතුරු පත්‍රිකාව"}
,{id:943,word:"leaflet",sound:"ලීෆ්ලට්",meaning:"කුඩා ප්‍රචාරක පත්‍රිකාව"}
,{id:944,word:"slogan",sound:"ස්ලෝගන්",meaning:"ප්‍රචාරක පාඨය"}
,{id:945,word:"logo",sound:"ලෝගෝ",meaning:"ලාංඡනය"}
,{id:946,word:"website",sound:"වෙබ්සයිට්",meaning:"වෙබ් අඩවිය"}
,{id:947,word:"online",sound:"ඔන්ලයින්",meaning:"මාර්ගගත"}
,{id:948,word:"digital marketing",sound:"ඩිජිටල් මාකටින්",meaning:"ඩිජිටල් අලෙවිකරණය"}
,{id:949,word:"social media",sound:"සෝෂල් මීඩියා",meaning:"සමාජ මාධ්‍ය"}
,{id:950,word:"negotiation",sound:"නිගෝෂියේෂන්",meaning:"සාකච්ඡා කර එකඟතාවකට පැමිණීම"}
,{id:951,word:"negotiate",sound:"නිගෝෂියේට්",meaning:"සාකච්ඡා කර එකඟතාවකට පැමිණෙනවා"}
,{id:952,word:"bargain",sound:"බාගන්",meaning:"මිල ගණන් කේවල් කිරීම"}
,{id:953,word:"price list",sound:"ප්‍රයිස් ලිස්ට්",meaning:"මිල ලැයිස්තුව"}
,{id:954,word:"unit price",sound:"යුනිට් ප්‍රයිස්",meaning:"ඒකක මිල"}
,{id:955,word:"total cost",sound:"ටෝටල් කොස්ට්",meaning:"මුළු පිරිවැය"}
,{id:956,word:"selling price",sound:"සෙලිං ප්‍රයිස්",meaning:"විකුණුම් මිල"}
,{id:957,word:"cost price",sound:"කොස්ට් ප්‍රයිස්",meaning:"පිරිවැය මිල"}
,{id:958,word:"markup",sound:"මාක්අප්",meaning:"පිරිවැයට එකතු කරන මිල වැඩිවීම"}
,{id:959,word:"profit margin",sound:"ප්‍රොෆිට් මාජින්",meaning:"ලාභ ආන්තිකය"}
,{id:960,word:"break-even",sound:"බ්‍රේක් ඊවන්",meaning:"ලාභයක් හෝ පාඩුවක් නොමැති මට්ටම"}
,{id:961,word:"cash",sound:"කෑෂ්",meaning:"මුදල්"}
,{id:962,word:"cashier",sound:"කෑෂියර්",meaning:"මුදල් අයකැමි"}
,{id:963,word:"bank transfer",sound:"බෑන්ක් ට්‍රාන්ස්ෆර්",meaning:"බැංකු මාරු කිරීම"}
,{id:964,word:"deposit",sound:"ඩිපොසිට්",meaning:"තැන්පතුව"}
,{id:965,word:"withdrawal",sound:"විත්ඩ්‍රෝවල්",meaning:"මුදල් ආපසු ගැනීම"}
,{id:966,word:"overdraft",sound:"ඕවර්ඩ්‍රාෆ්ට්",meaning:"ගිණුමේ ශේෂයට වඩා මුදල් ගැනීමේ පහසුකම"}
,{id:967,word:"loan",sound:"ලෝන්",meaning:"ණය මුදල"}
,{id:968,word:"lender",sound:"ලෙන්ඩර්",meaning:"ණය දෙන්නා"}
,{id:969,word:"borrower",sound:"බොරෝවර්",meaning:"ණය ගන්නා පුද්ගලයා"}
,{id:970,word:"repayment",sound:"රිපේමන්ට්",meaning:"ණය ආපසු ගෙවීම"}
,{id:971,word:"principal",sound:"ප්‍රින්සිපල්",meaning:"ණය මුදලේ මූලික මුදල"}
,{id:972,word:"maturity date",sound:"මැචුරිටි ඩේට්",meaning:"කල් පිරෙන දිනය"}
,{id:973,word:"financial year",sound:"ෆයිනැන්ෂල් ඉයර්",meaning:"මූල්‍ය වර්ෂය"}
,{id:974,word:"fiscal year",sound:"ෆිස්කල් ඉයර්",meaning:"ගිණුම් වර්ෂය"}
,{id:975,word:"balance sheet",sound:"බැලන්ස් ෂීට්",meaning:"ශේෂ පත්‍රය"}
,{id:976,word:"income statement",sound:"ඉන්කම් ස්ටේට්මන්ට්",meaning:"ආදායම් ප්‍රකාශය"}
,{id:977,word:"cash book",sound:"කෑෂ් බුක්",meaning:"මුදල් පොත"}
,{id:978,word:"general ledger",sound:"ජෙනරල් ලෙජර්",meaning:"ප්‍රධාන ලෙජරය"}
,{id:979,word:"journal entry",sound:"ජර්නල් එන්ට්‍රි",meaning:"ජර්නල් සටහන"}
,{id:980,word:"accounts payable",sound:"අකවුන්ට්ස් පේබල්",meaning:"ගෙවිය යුතු ගිණුම්"}
,{id:981,word:"accounts receivable",sound:"අකවුන්ට්ස් රිසීවබල්",meaning:"ලැබිය යුතු ගිණුම්"}
,{id:982,word:"credit note",sound:"ක්‍රෙඩිට් නෝට්",meaning:"ණය සටහන"}
,{id:983,word:"debit note",sound:"ඩෙබිට් නෝට්",meaning:"හර සටහන"}
,{id:984,word:"petty cash",sound:"පෙටි කෑෂ්",meaning:"සුළු මුදල් අරමුදල"}
,{id:985,word:"bank reconciliation",sound:"බෑන්ක් රෙකන්සිලියේෂන්",meaning:"බැංකු ගිණුම් සැසඳීම"}
,{id:986,word:"financial statement",sound:"ෆයිනැන්ෂල් ස්ටේට්මන්ට්",meaning:"මූල්‍ය ප්‍රකාශය"}
,{id:987,word:"gross profit",sound:"ග්‍රෝස් ප්‍රොෆිට්",meaning:"දළ ලාභය"}
,{id:988,word:"net profit",sound:"නෙට් ප්‍රොෆිට්",meaning:"ශුද්ධ ලාභය"}
,{id:989,word:"gross loss",sound:"ග්‍රෝස් ලොස්",meaning:"දළ පාඩුව"}
,{id:990,word:"net loss",sound:"නෙට් ලොස්",meaning:"ශුද්ධ පාඩුව"}
,{id:991,word:"operating cost",sound:"ඔපරේටින් කොස්ට්",meaning:"මෙහෙයුම් පිරිවැය"}
,{id:992,word:"fixed cost",sound:"ෆික්ස්ඩ් කොස්ට්",meaning:"ස්ථාවර පිරිවැය"}
,{id:993,word:"variable cost",sound:"වේරියබල් කොස්ට්",meaning:"විචල්‍ය පිරිවැය"}
,{id:994,word:"direct cost",sound:"ඩිරෙක්ට් කොස්ට්",meaning:"සෘජු පිරිවැය"}
,{id:995,word:"indirect cost",sound:"ඉන්ඩිරෙක්ට් කොස්ට්",meaning:"වක්‍ර පිරිවැය"}
,{id:996,word:"cost centre",sound:"කොස්ට් සෙන්ටර්",meaning:"පිරිවැය මධ්‍යස්ථානය"}
,{id:997,word:"budget allocation",sound:"බජට් ඇලොකේෂන්",meaning:"අයවැය වෙන් කිරීම"}
,{id:998,word:"budget variance",sound:"බජට් වේරියන්ස්",meaning:"අයවැය වෙනස"}
,{id:999,word:"financial control",sound:"ෆයිනැන්ෂල් කන්ට්‍රෝල්",meaning:"මූල්‍ය පාලනය"}
,{id:1000,word:"financial planning",sound:"ෆයිනැන්ෂල් ප්ලෑනින්",meaning:"මූල්‍ය සැලසුම්කරණය"}
,{id:1001,word:"procurement",sound:"ප්‍රොකියුර්මන්ට්",meaning:"ප්‍රසම්පාදනය"}
,{id:1002,word:"purchasing",sound:"පර්චසිං",meaning:"මිලදී ගැනීමේ කටයුතු"}
,{id:1003,word:"requisition",sound:"රෙක්විසිෂන්",meaning:"අවශ්‍යතා ඉල්ලීම"}
,{id:1004,word:"purchase order",sound:"පර්චස් ඕඩර්",meaning:"මිලදී ගැනීමේ ඇණවුම"}
,{id:1005,word:"supplier evaluation",sound:"සප්ලයර් ඉවැලියුවේෂන්",meaning:"සැපයුම්කරු ඇගයීම"}
,{id:1006,word:"lead time",sound:"ලීඩ් ටයිම්",meaning:"ඇණවුම ලබාදීමේ සිට ලැබීම දක්වා කාලය"}
,{id:1007,word:"shortage",sound:"ෂෝටේජ්",meaning:"හිඟය"}
,{id:1008,word:"surplus",sound:"සර්ප්ලස්",meaning:"අතිරික්තය"}
,{id:1009,word:"reorder",sound:"රීඕඩර්",meaning:"නැවත ඇණවුම් කිරීම"}
,{id:1010,word:"minimum stock",sound:"මිනිමම් ස්ටොක්",meaning:"අවම තොගය"}
,{id:1011,word:"maximum stock",sound:"මැක්සිමම් ස්ටොක්",meaning:"උපරිම තොගය"}
,{id:1012,word:"stocktaking",sound:"ස්ටොක්ටේකින්",meaning:"භාණ්ඩ තොග ගණනය කිරීම"}
,{id:1013,word:"dispatch",sound:"ඩිස්පැච්",meaning:"භාණ්ඩ පිටත් කිරීම"}
,{id:1014,word:"consignment",sound:"කන්සයින්මන්ට්",meaning:"භාරදීම සඳහා යවන භාණ්ඩ තොගය"}
,{id:1015,word:"packing",sound:"පැකින්",meaning:"ඇසුරුම් කිරීම"}
,{id:1016,word:"packaging",sound:"පැකේජින්",meaning:"ඇසුරුම්කරණය"}
,{id:1017,word:"warehouse management",sound:"වෙයාර්හවුස් මැනේජ්මන්ට්",meaning:"ගබඩා කළමනාකරණය"}
,{id:1018,word:"logistics",sound:"ලජිස්ටික්ස්",meaning:"ප්‍රවාහන හා සැපයුම් කළමනාකරණය"}
,{id:1019,word:"supply chain",sound:"සප්ලයි චේන්",meaning:"සැපයුම් දාමය"}
,{id:1020,word:"demand planning",sound:"ඩිමාන්ඩ් ප්ලෑනින්",meaning:"ඉල්ලුම් සැලසුම්කරණය"}
,{id:1021,word:"stock control",sound:"ස්ටොක් කන්ට්‍රෝල්",meaning:"තොග පාලනය"}
,{id:1022,word:"stock level",sound:"ස්ටොක් ලෙවල්",meaning:"තොග මට්ටම"}
,{id:1023,word:"safety stock",sound:"සේෆ්ටි ස්ටොක්",meaning:"ආරක්ෂිත අමතර තොගය"}
,{id:1024,word:"buffer stock",sound:"බෆර් ස්ටොක්",meaning:"අතිරේක සංචිත තොගය"}
,{id:1025,word:"stock movement",sound:"ස්ටොක් මූව්මන්ට්",meaning:"තොග චලනය"}
,{id:1026,word:"stock adjustment",sound:"ස්ටොක් අජස්ට්මන්ට්",meaning:"තොග සංශෝධනය"}
,{id:1027,word:"stock discrepancy",sound:"ස්ටොක් ඩිස්ක්‍රෙපන්සි",meaning:"තොග නොගැළපීම"}
,{id:1028,word:"physical stock",sound:"ෆිසිකල් ස්ටොක්",meaning:"භෞතික තොගය"}
,{id:1029,word:"system stock",sound:"සිස්ටම් ස්ටොක්",meaning:"පද්ධතියේ සටහන් තොගය"}
,{id:1030,word:"stock report",sound:"ස්ටොක් රිපෝට්",meaning:"තොග වාර්තාව"}
,{id:1031,word:"goods received",sound:"ගුඩ්ස් රිසීව්ඩ්",meaning:"ලැබුණු භාණ්ඩ"}
,{id:1032,word:"goods issued",sound:"ගුඩ්ස් ඉෂූඩ්",meaning:"නිකුත් කළ භාණ්ඩ"}
,{id:1033,word:"goods returned",sound:"ගුඩ්ස් රිටර්න්ඩ්",meaning:"ආපසු ලැබුණු භාණ්ඩ"}
,{id:1034,word:"goods in transit",sound:"ගුඩ්ස් ඉන් ට්‍රාන්සිට්",meaning:"ප්‍රවාහනයේ පවතින භාණ්ඩ"}
,{id:1035,word:"delivery note",sound:"ඩිලිවරි නෝට්",meaning:"භාණ්ඩ භාරදීමේ සටහන"}
,{id:1036,word:"goods received note",sound:"ගුඩ්ස් රිසීව්ඩ් නෝට්",meaning:"භාණ්ඩ ලැබීමේ සටහන"}
,{id:1037,word:"material issue",sound:"මටීරියල් ඉෂූ",meaning:"ද්‍රව්‍ය නිකුත් කිරීම"}
,{id:1038,word:"material return",sound:"මටීරියල් රිටර්න්",meaning:"ද්‍රව්‍ය ආපසු භාරදීම"}
,{id:1039,word:"bin location",sound:"බින් ලොකේෂන්",meaning:"ගබඩාවේ භාණ්ඩ තබන ස්ථානය"}
,{id:1040,word:"storage area",sound:"ස්ටෝරේජ් ඒරියා",meaning:"ගබඩා ප්‍රදේශය"}
,{id:1041,word:"rack",sound:"රැක්",meaning:"රාක්කය"}
,{id:1042,word:"shelf",sound:"ෂෙල්ෆ්",meaning:"තට්ටුව / රාක්ක පුවරුව"}
,{id:1043,word:"pallet",sound:"පැලට්",meaning:"භාණ්ඩ තැබීමේ පදනම"}
,{id:1044,word:"forklift",sound:"ෆෝක්ලිෆ්ට්",meaning:"භාණ්ඩ එසවීමේ වාහනය"}
,{id:1045,word:"handling",sound:"හැන්ඩ්ලින්",meaning:"භාණ්ඩ හැසිරවීම"}
,{id:1046,word:"loading",sound:"ලෝඩින්",meaning:"භාණ්ඩ පැටවීම"}
,{id:1047,word:"unloading",sound:"අන්ලෝඩින්",meaning:"භාණ්ඩ බෑම"}
,{id:1048,word:"transportation",sound:"ට්‍රාන්ස්පෝටේෂන්",meaning:"ප්‍රවාහනය"}
,{id:1049,word:"freight",sound:"ෆ්‍රේට්",meaning:"ප්‍රවාහන භාණ්ඩ / ප්‍රවාහන ගාස්තුව"}
,{id:1050,word:"carrier",sound:"කැරියර්",meaning:"භාණ්ඩ ප්‍රවාහකයා"}
,{id:1051,word:"consignee",sound:"කන්සයිනී",meaning:"භාණ්ඩ භාරගන්නා තැනැත්තා"}
,{id:1052,word:"consignor",sound:"කන්සයිනර්",meaning:"භාණ්ඩ යවන්නා"}
,{id:1053,word:"tracking",sound:"ට්‍රැකින්",meaning:"ගමන් තත්ත්වය සොයා බැලීම"}
,{id:1054,word:"tracking number",sound:"ට්‍රැකින් නම්බර්",meaning:"භාණ්ඩ සොයා බැලීමේ අංකය"}
,{id:1055,word:"arrival",sound:"අරයිවල්",meaning:"පැමිණීම"}
,{id:1056,word:"departure",sound:"ඩිපාර්චර්",meaning:"පිටත්වීම"}
,{id:1057,word:"delay",sound:"ඩිලේ",meaning:"ප්‍රමාදය"}
,{id:1058,word:"on time",sound:"ඔන් ටයිම්",meaning:"නියමිත වේලාවට"}
,{id:1059,word:"backorder",sound:"බැක්ඕඩර්",meaning:"තොග නොමැති නිසා පසුව සැපයීමට ඇති ඇණවුම"}
,{id:1060,word:"order fulfilment",sound:"ඕඩර් ෆුල්ෆිල්මන්ට්",meaning:"ඇණවුම සම්පූර්ණ කිරීම"}
,{id:1061,word:"quality control",sound:"ක්වොලිටි කන්ට්‍රෝල්",meaning:"ගුණාත්මකභාවය පාලනය"}
,{id:1062,word:"quality assurance",sound:"ක්වොලිටි ඇෂුවරන්ස්",meaning:"ගුණාත්මකභාවය සහතික කිරීම"}
,{id:1063,word:"inspection",sound:"ඉන්ස්පෙක්ෂන්",meaning:"පරීක්ෂාව"}
,{id:1064,word:"defect",sound:"ඩිෆෙක්ට්",meaning:"දෝෂය"}
,{id:1065,word:"damaged goods",sound:"ඩැමජ්ඩ් ගුඩ්ස්",meaning:"හානි වූ භාණ්ඩ"}
,{id:1066,word:"rejected goods",sound:"රිජෙක්ටඩ් ගුඩ්ස්",meaning:"ප්‍රතික්ෂේප කළ භාණ්ඩ"}
,{id:1067,word:"acceptable",sound:"ඇක්සෙප්ටබල්",meaning:"පිළිගත හැකි"}
,{id:1068,word:"nonconformity",sound:"නොන්කන්ෆෝමිටි",meaning:"ප්‍රමිතියට අනුකූල නොවීම"}
,{id:1069,word:"corrective action",sound:"කරෙක්ටිව් ඇක්ෂන්",meaning:"නිවැරදි කිරීමේ ක්‍රියාමාර්ගය"}
,{id:1070,word:"preventive action",sound:"ප්‍රිවෙන්ටිව් ඇක්ෂන්",meaning:"වැළැක්වීමේ ක්‍රියාමාර්ගය"}
,{id:1071,word:"standard",sound:"ස්ටෑන්ඩර්ඩ්",meaning:"ප්‍රමිතිය"}
,{id:1072,word:"compliance",sound:"කම්ප්ලයන්ස්",meaning:"නීති හා ප්‍රමිතීන්ට අනුකූල වීම"}
,{id:1073,word:"requirement",sound:"රික්වයර්මන්ට්",meaning:"අවශ්‍යතාව"}
,{id:1074,word:"specification",sound:"ස්පෙසිෆිකේෂන්",meaning:"පිරිවිතර"}
,{id:1075,word:"tolerance",sound:"ටොලරන්ස්",meaning:"අනුමත වෙනස්වීමේ සීමාව"}
,{id:1076,word:"measurement",sound:"මෙෂර්මන්ට්",meaning:"මිනුම් කිරීම"}
,{id:1077,word:"sample",sound:"සැම්පල්",meaning:"නියැදිය"}
,{id:1078,word:"batch",sound:"බැච්",meaning:"නිෂ්පාදන කාණ්ඩය"}
,{id:1079,word:"batch number",sound:"බැච් නම්බර්",meaning:"කාණ්ඩ අංකය"}
,{id:1080,word:"serial number",sound:"සීරියල් නම්බර්",meaning:"අනුක්‍රමික අංකය"}
,{id:1081,word:"expiry date",sound:"එක්ස්පයරි ඩේට්",meaning:"කල් ඉකුත් වන දිනය"}
,{id:1082,word:"manufacturing date",sound:"මැනියුෆැක්චරින් ඩේට්",meaning:"නිෂ්පාදිත දිනය"}
,{id:1083,word:"shelf life",sound:"ෂෙල්ෆ් ලයිෆ්",meaning:"භාණ්ඩය භාවිතයට සුදුසු කාලය"}
,{id:1084,word:"raw material",sound:"රෝ මටීරියල්",meaning:"අමුද්‍රව්‍ය"}
,{id:1085,word:"finished goods",sound:"ෆිනිෂ්ඩ් ගුඩ්ස්",meaning:"නිමි භාණ්ඩ"}
,{id:1086,word:"work in progress",sound:"වර්ක් ඉන් ප්‍රොග්‍රෙස්",meaning:"නිෂ්පාදනය වෙමින් පවතින වැඩ"}
,{id:1087,word:"production",sound:"ප්‍රඩක්ෂන්",meaning:"නිෂ්පාදනය"}
,{id:1088,word:"manufacturer",sound:"මැනියුෆැක්චරර්",meaning:"නිෂ්පාදකයා"}
,{id:1089,word:"manufacturing",sound:"මැනියුෆැක්චරින්",meaning:"නිෂ්පාදන ක්‍රියාවලිය"}
,{id:1090,word:"assembly",sound:"අසෙම්බ්ලි",meaning:"එකලස් කිරීම"}
,{id:1091,word:"component",sound:"කම්පෝනන්ට්",meaning:"සංරචකය"}
,{id:1092,word:"spare part",sound:"ස්පෙයාර් පාට්",meaning:"අමතර කොටස"}
,{id:1093,word:"tool",sound:"ටූල්",meaning:"මෙවලම"}
,{id:1094,word:"machine",sound:"මෂීන්",meaning:"යන්ත්‍රය"}
,{id:1095,word:"machinery",sound:"මෂිනරි",meaning:"යන්ත්‍රෝපකරණ"}
,{id:1096,word:"maintenance schedule",sound:"මේන්ටනන්ස් ෂෙඩ්යූල්",meaning:"නඩත්තු කාලසටහන"}
,{id:1097,word:"work order",sound:"වර්ක් ඕඩර්",meaning:"වැඩ කිරීමේ නියෝගය"}
,{id:1098,word:"job card",sound:"ජොබ් කාඩ්",meaning:"වැඩ කාඩ්පත"}
,{id:1099,word:"production plan",sound:"ප්‍රඩක්ෂන් ප්ලෑන්",meaning:"නිෂ්පාදන සැලැස්ම"}
,{id:1100,word:"capacity",sound:"කැපැසිටි",meaning:"ධාරිතාව"}
 ,{id:1101,word:"capacity planning",sound:"කැපැසිටි ප්ලෑනින්",meaning:"ධාරිතා සැලසුම්කරණය"}
,{id:1102,word:"workflow",sound:"වර්ක්ෆ්ලෝ",meaning:"වැඩ ක්‍රියාවලිය"}
,{id:1103,word:"workload",sound:"වර්ක්ලෝඩ්",meaning:"වැඩ ප්‍රමාණය"}
,{id:1104,word:"productivity",sound:"ප්‍රඩක්ටිවිටි",meaning:"ඵලදායිතාව"}
,{id:1105,word:"efficiency",sound:"එෆිෂන්සි",meaning:"කාර්යක්ෂමතාව"}
,{id:1106,word:"effectiveness",sound:"ඉෆෙක්ටිව්නස්",meaning:"සඵලදායීතාව"}
,{id:1107,word:"resource allocation",sound:"රිසෝස් ඇලොකේෂන්",meaning:"සම්පත් වෙන් කිරීම"}
,{id:1108,word:"manpower",sound:"මෑන්පවර්",meaning:"මානව ශ්‍රමය"}
,{id:1109,word:"labour",sound:"ලේබර්",meaning:"ශ්‍රමය"}
,{id:1110,word:"workforce",sound:"වර්ක්ෆෝස්",meaning:"ශ්‍රම බලකාය"}
,{id:1111,word:"shift",sound:"ෂිෆ්ට්",meaning:"සේවා මුරය"}
,{id:1112,word:"shift supervisor",sound:"ෂිෆ්ට් සුපර්වයිසර්",meaning:"සේවා මුර අධීක්ෂක"}
,{id:1113,word:"workstation",sound:"වර්ක්ස්ටේෂන්",meaning:"වැඩ කරන ස්ථානය"}
,{id:1114,word:"workplace",sound:"වර්ක්ප්ලේස්",meaning:"සේවා ස්ථානය"}
,{id:1115,word:"work environment",sound:"වර්ක් එන්වයරන්මන්ට්",meaning:"සේවා පරිසරය"}
,{id:1116,word:"job description",sound:"ජොබ් ඩිස්ක්‍රිප්ෂන්",meaning:"රැකියා විස්තරය"}
,{id:1117,word:"job title",sound:"ජොබ් ටයිටල්",meaning:"රැකියා තනතුර"}
,{id:1118,word:"job vacancy",sound:"ජොබ් වේකන්සි",meaning:"රැකියා පුරප්පාඩුව"}
,{id:1119,word:"employment",sound:"එම්ප්ලොයිමන්ට්",meaning:"රැකියාව / සේවා නියුක්තිය"}
,{id:1120,word:"unemployment",sound:"අන්එම්ප්ලොයිමන්ට්",meaning:"රැකියා විරහිතභාවය"}
,{id:1121,word:"probation",sound:"ප්‍රබේෂන්",meaning:"පරිවාස කාලය"}
,{id:1122,word:"permanent",sound:"පර්මනන්ට්",meaning:"ස්ථිර"}
,{id:1123,word:"temporary",sound:"ටෙම්පරරි",meaning:"තාවකාලික"}
,{id:1124,word:"contract employee",sound:"කොන්ට්‍රැක්ට් එම්ප්ලොයි",meaning:"කොන්ත්‍රාත් සේවකයා"}
,{id:1125,word:"full-time",sound:"ෆුල් ටයිම්",meaning:"පූර්ණකාලීන"}
,{id:1126,word:"part-time",sound:"පාට් ටයිම්",meaning:"අර්ධකාලීන"}
,{id:1127,word:"resignation letter",sound:"රෙසිග්නේෂන් ලෙටර්",meaning:"ඉල්ලා අස්වීමේ ලිපිය"}
,{id:1128,word:"appointment letter",sound:"අපොයින්ට්මන්ට් ලෙටර්",meaning:"පත්වීම් ලිපිය"}
,{id:1129,word:"employment contract",sound:"එම්ප්ලොයිමන්ට් කොන්ට්‍රැක්ට්",meaning:"සේවා ගිවිසුම"}
,{id:1130,word:"salary scale",sound:"සැලරි ස්කේල්",meaning:"වැටුප් පරිමාණය"}
,{id:1131,word:"allowance",sound:"අලවුන්ස්",meaning:"දීමනාව"}
,{id:1132,word:"bonus",sound:"බෝනස්",meaning:"ප්‍රසාද දීමනාව"}
,{id:1133,word:"deduction",sound:"ඩිඩක්ෂන්",meaning:"අඩු කිරීම"}
,{id:1134,word:"benefit",sound:"බෙනිෆිට්",meaning:"ප්‍රතිලාභය"}
,{id:1135,word:"incentive",sound:"ඉන්සෙන්ටිව්",meaning:"දිරිගැන්වීමේ දීමනාව"}
,{id:1136,word:"appraisal",sound:"අප්‍රේසල්",meaning:"කාර්ය සාධන ඇගයීම"}
,{id:1137,word:"promotion criteria",sound:"ප්‍රමෝෂන් ක්‍රයිටීරියා",meaning:"උසස්වීම් නිර්ණායක"}
,{id:1138,word:"disciplinary action",sound:"ඩිසිප්ලිනරි ඇක්ෂන්",meaning:"විනය ක්‍රියාමාර්ගය"}
,{id:1139,word:"misconduct",sound:"මිස්කන්ඩක්ට්",meaning:"විෂමාචාරය"}
,{id:1140,word:"grievance",sound:"ග්‍රීවන්ස්",meaning:"සේවක පැමිණිල්ල"}
,{id:1141,word:"human resources",sound:"හියුමන් රිසෝසස්",meaning:"මානව සම්පත්"}
,{id:1142,word:"human resource management",sound:"හියුමන් රිසෝස් මැනේජ්මන්ට්",meaning:"මානව සම්පත් කළමනාකරණය"}
,{id:1143,word:"orientation",sound:"ඔරියන්ටේෂන්",meaning:"නව සේවක හඳුන්වාදීම"}
,{id:1144,word:"induction",sound:"ඉන්ඩක්ෂන්",meaning:"සේවයට හඳුන්වාදීම"}
,{id:1145,word:"competency",sound:"කම්පිටන්සි",meaning:"නිපුණතාව"}
,{id:1146,word:"skill development",sound:"ස්කිල් ඩිවෙලොප්මන්ට්",meaning:"කුසලතා සංවර්ධනය"}
,{id:1147,word:"leadership",sound:"ලීඩර්ෂිප්",meaning:"නායකත්වය"}
,{id:1148,word:"teamwork",sound:"ටීම්වර්ක්",meaning:"කණ්ඩායම් වැඩ"}
,{id:1149,word:"delegation",sound:"ඩෙලිගේෂන්",meaning:"වගකීම් පැවරීම"}
,{id:1150,word:"motivation",sound:"මෝටිවේෂන්",meaning:"අභිප්‍රේරණය"}
,{id:1151,word:"accountability",sound:"අකවුන්ටබිලිටි",meaning:"වගවීම"}
,{id:1152,word:"commitment",sound:"කමිට්මන්ට්",meaning:"කැපවීම"}
,{id:1153,word:"collaboration",sound:"කොලැබරේෂන්",meaning:"සහයෝගීතාව"}
,{id:1154,word:"coordination",sound:"කෝඕඩිනේෂන්",meaning:"සම්බන්ධීකරණය"}
,{id:1155,word:"conflict resolution",sound:"කොන්ෆ්ලික්ට් රෙසලූෂන්",meaning:"ගැටුම් විසඳීම"}
,{id:1156,word:"problem-solving",sound:"ප්‍රොබ්ලම් සොල්වින්",meaning:"ගැටලු විසඳීම"}
,{id:1157,word:"time management",sound:"ටයිම් මැනේජ්මන්ට්",meaning:"කාල කළමනාකරණය"}
,{id:1158,word:"decision-making",sound:"ඩිසිෂන් මේකින්",meaning:"තීරණ ගැනීම"}
,{id:1159,word:"planning",sound:"ප්ලෑනින්",meaning:"සැලසුම් කිරීම"}
,{id:1160,word:"organising",sound:"ඔගනයිසිං",meaning:"සංවිධානය කිරීම"}
,{id:1161,word:"monitoring",sound:"මොනිටරින්",meaning:"අධීක්ෂණය"}
,{id:1162,word:"controlling",sound:"කන්ට්‍රෝලින්",meaning:"පාලනය කිරීම"}
,{id:1163,word:"implementation",sound:"ඉම්ප්ලිමෙන්ටේෂන්",meaning:"ක්‍රියාත්මක කිරීම"}
,{id:1164,word:"execution",sound:"එක්සිකියුෂන්",meaning:"ක්‍රියාත්මක කිරීම"}
,{id:1165,word:"milestone",sound:"මයිල්ස්ටෝන්",meaning:"ප්‍රධාන සන්ධිස්ථානය"}
,{id:1166,word:"project scope",sound:"ප්‍රොජෙක්ට් ස්කෝප්",meaning:"ව්‍යාපෘතියේ විෂය පථය"}
,{id:1167,word:"project timeline",sound:"ප්‍රොජෙක්ට් ටයිම්ලයින්",meaning:"ව්‍යාපෘති කාලසටහන"}
,{id:1168,word:"project budget",sound:"ප්‍රොජෙක්ට් බජට්",meaning:"ව්‍යාපෘති අයවැය"}
,{id:1169,word:"project manager",sound:"ප්‍රොජෙක්ට් මැනේජර්",meaning:"ව්‍යාපෘති කළමනාකරු"}
,{id:1170,word:"stakeholder",sound:"ස්ටේක්හෝල්ඩර්",meaning:"ව්‍යාපෘතියට සම්බන්ධ පාර්ශ්වකරුවා"}
,{id:1171,word:"deliverable",sound:"ඩිලිවරබල්",meaning:"භාරදිය යුතු ප්‍රතිඵලය"}
,{id:1172,word:"project status",sound:"ප්‍රොජෙක්ට් ස්ටේටස්",meaning:"ව්‍යාපෘතියේ තත්ත්වය"}
,{id:1173,word:"progress report",sound:"ප්‍රොග්‍රෙස් රිපෝට්",meaning:"ප්‍රගති වාර්තාව"}
,{id:1174,word:"action plan",sound:"ඇක්ෂන් ප්ලෑන්",meaning:"ක්‍රියාකාරී සැලැස්ම"}
,{id:1175,word:"contingency plan",sound:"කන්ටින්ජන්සි ප්ලෑන්",meaning:"හදිසි අවස්ථා සැලැස්ම"}
,{id:1176,word:"business continuity",sound:"බිස්නස් කන්ටිනියුටි",meaning:"ව්‍යාපාර අඛණ්ඩතාව"}
,{id:1177,word:"business objective",sound:"බිස්නස් ඔබ්ජෙක්ටිව්",meaning:"ව්‍යාපාරික අරමුණ"}
,{id:1178,word:"business plan",sound:"බිස්නස් ප්ලෑන්",meaning:"ව්‍යාපාර සැලැස්ම"}
,{id:1179,word:"business model",sound:"බිස්නස් මොඩල්",meaning:"ව්‍යාපාර ආකෘතිය"}
,{id:1180,word:"business growth",sound:"බිස්නස් ග්‍රෝත්",meaning:"ව්‍යාපාර වර්ධනය"}
,{id:1181,word:"expansion",sound:"එක්ස්පැන්ෂන්",meaning:"ව්‍යාප්තිය"}
,{id:1182,word:"diversification",sound:"ඩයිවර්සිෆිකේෂන්",meaning:"විවිධාංගීකරණය"}
,{id:1183,word:"sustainability",sound:"සස්ටේනබිලිටි",meaning:"තිරසාරභාවය"}
,{id:1184,word:"corporate",sound:"කෝපරට්",meaning:"සමාගම් සම්බන්ධ"}
,{id:1185,word:"corporation",sound:"කෝපරේෂන්",meaning:"සංස්ථාව"}
,{id:1186,word:"shareholder",sound:"ෂෙයාර්හෝල්ඩර්",meaning:"කොටස් හිමියා"}
,{id:1187,word:"board of directors",sound:"බෝඩ් ඔෆ් ඩිරෙක්ටර්ස්",meaning:"අධ්‍යක්ෂ මණ්ඩලය"}
,{id:1188,word:"executive",sound:"එග්සිකියුටිව්",meaning:"විධායක නිලධාරියා"}
,{id:1189,word:"chief executive officer",sound:"චීෆ් එග්සිකියුටිව් ඔෆිසර්",meaning:"ප්‍රධාන විධායක නිලධාරියා"}
,{id:1190,word:"head office",sound:"හෙඩ් ඔෆිස්",meaning:"ප්‍රධාන කාර්යාලය"}
,{id:1191,word:"branch office",sound:"බ්‍රාන්ච් ඔෆිස්",meaning:"ශාඛා කාර්යාලය"}
,{id:1192,word:"subsidiary",sound:"සබ්සිඩියරි",meaning:"අනුබද්ධ සමාගම"}
,{id:1193,word:"franchise",sound:"ෆ්‍රැන්චයිස්",meaning:"බලපත්‍රය මත ව්‍යාපාර පවත්වාගෙන යාම"}
,{id:1194,word:"merger",sound:"මර්ජර්",meaning:"සමාගම් ඒකාබද්ධ කිරීම"}
,{id:1195,word:"acquisition",sound:"ඇක්විසිෂන්",meaning:"සමාගමක් හෝ වත්කමක් අත්පත් කර ගැනීම"}
,{id:1196,word:"partnership",sound:"පාට්නර්ෂිප්",meaning:"හවුල් ව්‍යාපාරය"}
,{id:1197,word:"sole proprietorship",sound:"සෝල් ප්‍රොප්‍රයටර්ෂිප්",meaning:"තනි පුද්ගල ව්‍යාපාරය"}
,{id:1198,word:"joint venture",sound:"ජොයින්ට් වෙන්චර්",meaning:"හවුල් ව්‍යාපෘතිය"}
,{id:1199,word:"start-up",sound:"ස්ටාට්අප්",meaning:"නව ආරම්භක ව්‍යාපාරය"}
,{id:1200,word:"small business",sound:"ස්මෝල් බිස්නස්",meaning:"කුඩා ව්‍යාපාරය"}
,{id:1201,word:"medium-sized enterprise",sound:"මීඩියම් සයිස්ඩ් එන්ටර්ප්‍රයිස්",meaning:"මධ්‍යම ප්‍රමාණයේ ව්‍යාපාරය"}
,{id:1202,word:"large enterprise",sound:"ලාජ් එන්ටර්ප්‍රයිස්",meaning:"විශාල ව්‍යාපාරික ආයතනය"}
,{id:1203,word:"business owner",sound:"බිස්නස් ඕනර්",meaning:"ව්‍යාපාර හිමිකරු"}
,{id:1204,word:"founder",sound:"ෆවුන්ඩර්",meaning:"ආරම්භකයා"}
,{id:1205,word:"co-founder",sound:"කෝ ෆවුන්ඩර්",meaning:"සම-ආරම්භකයා"}
,{id:1206,word:"investor relations",sound:"ඉන්වෙස්ටර් රිලේෂන්ස්",meaning:"ආයෝජක සබඳතා"}
,{id:1207,word:"corporate governance",sound:"කෝපරට් ගවර්නන්ස්",meaning:"සමාගම් පාලන ක්‍රමවේදය"}
,{id:1208,word:"code of conduct",sound:"කෝඩ් ඔෆ් කන්ඩක්ට්",meaning:"හැසිරීම් නීති මාලාව"}
,{id:1209,word:"ethics",sound:"එතික්ස්",meaning:"ආචාරධර්ම"}
,{id:1210,word:"integrity",sound:"ඉන්ටෙග්‍රිටි",meaning:"අවංකභාවය"}
,{id:1211,word:"transparency",sound:"ට්‍රාන්ස්පැරන්සි",meaning:"විනිවිදභාවය"}
,{id:1212,word:"conflict of interest",sound:"කොන්ෆ්ලික්ට් ඔෆ් ඉන්ට්‍රස්ට්",meaning:"हित ගැටුම"}
,{id:1213,word:"fraud",sound:"ෆ්‍රෝඩ්",meaning:"වංචාව"}
,{id:1214,word:"corruption",sound:"කරප්ෂන්",meaning:"දූෂණය"}
,{id:1215,word:"internal control",sound:"ඉන්ටර්නල් කන්ට්‍රෝල්",meaning:"අභ්‍යන්තර පාලනය"}
,{id:1216,word:"internal audit",sound:"ඉන්ටර්නල් ඕඩිට්",meaning:"අභ්‍යන්තර විගණනය"}
,{id:1217,word:"external audit",sound:"එක්ස්ටර්නල් ඕඩිට්",meaning:"බාහිර විගණනය"}
,{id:1218,word:"audit trail",sound:"ඕඩිට් ට්‍රේල්",meaning:"විගණන සටහන් අනුපිළිවෙළ"}
,{id:1219,word:"audit finding",sound:"ඕඩිට් ෆයින්ඩින්",meaning:"විගණන නිරීක්ෂණය"}
,{id:1220,word:"risk assessment",sound:"රිස්ක් ඇසෙස්මන්ට්",meaning:"අවදානම් තක්සේරුව"}
,{id:1221,word:"risk management",sound:"රිස්ක් මැනේජ්මන්ට්",meaning:"අවදානම් කළමනාකරණය"}
,{id:1222,word:"risk mitigation",sound:"රිස්ක් මිටිගේෂන්",meaning:"අවදානම අවම කිරීම"}
,{id:1223,word:"insurance policy",sound:"ඉන්ෂුවරන්ස් පොලිසි",meaning:"රක්ෂණ ඔප්පුව"}
,{id:1224,word:"claim",sound:"ක්ලේම්",meaning:"හිමිකම් ඉල්ලීම"}
,{id:1225,word:"liability insurance",sound:"ලයබිලිටි ඉන්ෂුවරන්ස්",meaning:"වගකීම් රක්ෂණය"}
,{id:1226,word:"legal requirement",sound:"ලීගල් රික්වයර්මන්ට්",meaning:"නීතිමය අවශ්‍යතාව"}
,{id:1227,word:"regulation",sound:"රෙගියුලේෂන්",meaning:"නියාමනය"}
,{id:1228,word:"legislation",sound:"ලෙජිස්ලේෂන්",meaning:"නීති සම්පාදනය"}
,{id:1229,word:"licence",sound:"ලයිසන්ස්",meaning:"බලපත්‍රය"}
,{id:1230,word:"permit",sound:"පර්මිට්",meaning:"අවසර පත්‍රය"}
,{id:1231,word:"certification",sound:"සර්ටිෆිකේෂන්",meaning:"සහතික කිරීම"}
,{id:1232,word:"accreditation",sound:"ඇක්‍රෙඩිටේෂන්",meaning:"ප්‍රතීතනය"}
,{id:1233,word:"standardisation",sound:"ස්ටෑන්ඩර්ඩයිසේෂන්",meaning:"ප්‍රමිතිකරණය"}
,{id:1234,word:"quality management system",sound:"ක්වොලිටි මැනේජ්මන්ට් සිස්ටම්",meaning:"ගුණාත්මක කළමනාකරණ පද්ධතිය"}
,{id:1235,word:"continuous improvement",sound:"කන්ටිනියුවස් ඉම්ප්‍රූව්මන්ට්",meaning:"අඛණ්ඩ වැඩිදියුණු කිරීම"}
,{id:1236,word:"corrective measure",sound:"කරෙක්ටිව් මෙෂර්",meaning:"නිවැරදි කිරීමේ පියවර"}
,{id:1237,word:"preventive measure",sound:"ප්‍රිවෙන්ටිව් මෙෂර්",meaning:"වැළැක්වීමේ පියවර"}
,{id:1238,word:"root cause",sound:"රූට් කෝස්",meaning:"මූලික හේතුව"}
,{id:1239,word:"root cause analysis",sound:"රූට් කෝස් අනැලිසිස්",meaning:"මූලික හේතු විශ්ලේෂණය"}
,{id:1240,word:"non-compliance",sound:"නොන් කම්ප්ලයන්ස්",meaning:"අනුකූල නොවීම"}
,{id:1241,word:"documentation",sound:"ඩොකියුමෙන්ටේෂන්",meaning:"ලේඛනගත කිරීම"}
,{id:1242,word:"record keeping",sound:"රෙකෝඩ් කීපින්",meaning:"වාර්තා පවත්වාගෙන යාම"}
,{id:1243,word:"document control",sound:"ඩොකියුමන්ට් කන්ට්‍රෝල්",meaning:"ලේඛන පාලනය"}
,{id:1244,word:"revision history",sound:"රිවිෂන් හිස්ට්‍රි",meaning:"සංශෝධන ඉතිහාසය"}
,{id:1245,word:"document register",sound:"ඩොකියුමන්ට් රෙජිස්ටර්",meaning:"ලේඛන ලේඛනය"}
,{id:1246,word:"filing system",sound:"ෆයිලින් සිස්ටම්",meaning:"ගොනු පවත්වාගෙන යාමේ පද්ධතිය"}
,{id:1247,word:"retention period",sound:"රිටෙන්ෂන් පීරියඩ්",meaning:"වාර්තා රඳවා තබාගත යුතු කාලය"}
,{id:1248,word:"confidentiality",sound:"කොන්ෆිඩෙන්ෂියැලිටි",meaning:"රහස්‍යභාවය"}
,{id:1249,word:"data protection",sound:"ඩේටා ප්‍රොටෙක්ෂන්",meaning:"දත්ත ආරක්ෂාව"}
,{id:1250,word:"privacy",sound:"ප්‍රයිවසි",meaning:"පෞද්ගලිකත්වය"}
,{id:1251,word:"cybersecurity",sound:"සයිබර් සිකියුරිටි",meaning:"සයිබර් ආරක්ෂාව"}
,{id:1252,word:"password",sound:"පාස්වර්ඩ්",meaning:"මුරපදය"}
,{id:1253,word:"user account",sound:"යූසර් අකවුන්ට්",meaning:"පරිශීලක ගිණුම"}
,{id:1254,word:"database management",sound:"ඩේටාබේස් මැනේජ්මන්ට්",meaning:"දත්ත සමුදා කළමනාකරණය"}
,{id:1255,word:"data entry",sound:"ඩේටා එන්ට්‍රි",meaning:"දත්ත ඇතුළත් කිරීම"}
,{id:1256,word:"data processing",sound:"ඩේටා ප්‍රොසෙසින්",meaning:"දත්ත සැකසීම"}
,{id:1257,word:"data analysis",sound:"ඩේටා අනැලිසිස්",meaning:"දත්ත විශ්ලේෂණය"}
,{id:1258,word:"data accuracy",sound:"ඩේටා ඇකියුරසි",meaning:"දත්තවල නිවැරදිභාවය"}
,{id:1259,word:"data validation",sound:"ඩේටා වැලිඩේෂන්",meaning:"දත්ත වලංගුභාවය පරීක්ෂා කිරීම"}
,{id:1260,word:"data backup",sound:"ඩේටා බැකප්",meaning:"දත්ත උපස්ථ පිටපත"}
,{id:1261,word:"cloud storage",sound:"ක්ලවුඩ් ස්ටෝරේජ්",meaning:"වලාකුළු දත්ත ගබඩාව"}
,{id:1262,word:"software",sound:"සොෆ්ට්වෙයාර්",meaning:"මෘදුකාංග"}
,{id:1263,word:"hardware",sound:"හාඩ්වෙයාර්",meaning:"දෘඩාංග"}
,{id:1264,word:"application",sound:"ඇප්ලිකේෂන්",meaning:"යෙදුම"}
,{id:1265,word:"automation",sound:"ඔටෝමේෂන්",meaning:"ස්වයංක්‍රීයකරණය"}
,{id:1266,word:"integration",sound:"ඉන්ටිග්‍රේෂන්",meaning:"ඒකාබද්ධ කිරීම"}
,{id:1267,word:"system upgrade",sound:"සිස්ටම් අප්ග්‍රේඩ්",meaning:"පද්ධතිය වැඩිදියුණු කිරීම"}
,{id:1268,word:"technical support",sound:"ටෙක්නිකල් සපෝට්",meaning:"තාක්ෂණික සහාය"}
,{id:1269,word:"troubleshooting",sound:"ට්‍රබල්ෂූටින්",meaning:"තාක්ෂණික දෝෂ හඳුනාගෙන විසඳීම"}
,{id:1270,word:"user manual",sound:"යූසර් මැනුවල්",meaning:"පරිශීලක අත්පොත"}
,{id:1271,word:"subscription",sound:"සබ්ස්ක්‍රිප්ෂන්",meaning:"දායකත්වය"}
,{id:1272,word:"licence fee",sound:"ලයිසන්ස් ෆී",meaning:"බලපත්‍ර ගාස්තුව"}
,{id:1273,word:"service provider",sound:"සර්විස් ප්‍රොවයිඩර්",meaning:"සේවා සපයන්නා"}
,{id:1274,word:"technical specification",sound:"ටෙක්නිකල් ස්පෙසිෆිකේෂන්",meaning:"තාක්ෂණික පිරිවිතර"}
,{id:1275,word:"system requirement",sound:"සිස්ටම් රික්වයර්මන්ට්",meaning:"පද්ධති අවශ්‍යතාව"}
,{id:1276,word:"user requirement",sound:"යූසර් රික්වයර්මන්ට්",meaning:"පරිශීලක අවශ්‍යතාව"}
,{id:1277,word:"testing",sound:"ටෙස්ටින්",meaning:"පරීක්ෂා කිරීම"}
,{id:1278,word:"test report",sound:"ටෙස්ට් රිපෝට්",meaning:"පරීක්ෂණ වාර්තාව"}
,{id:1279,word:"error",sound:"එරර්",meaning:"දෝෂය"}
,{id:1280,word:"bug",sound:"බග්",meaning:"මෘදුකාංග දෝෂය"}
,{id:1281,word:"backup plan",sound:"බැකප් ප්ලෑන්",meaning:"විකල්ප සැලැස්ම"}
,{id:1282,word:"recovery",sound:"රිකවරි",meaning:"ප්‍රතිසාධනය"}
,{id:1283,word:"disaster recovery",sound:"ඩිසාස්ටර් රිකවරි",meaning:"විපත්ති අවස්ථාවක පද්ධති යථා තත්ත්වයට පත් කිරීම"}
,{id:1284,word:"business intelligence",sound:"බිස්නස් ඉන්ටෙලිජන්ස්",meaning:"ව්‍යාපාරික දත්ත මත පදනම් වූ තීරණ ගැනීමේ තොරතුරු"}
,{id:1285,word:"dashboard",sound:"ඩෑෂ්බෝඩ්",meaning:"දත්ත සාරාංශ පුවරුව"}
,{id:1286,word:"key performance indicator",sound:"කී පර්ෆෝමන්ස් ඉන්ඩිකේටර්",meaning:"ප්‍රධාන කාර්ය සාධන දර්ශකය"}
,{id:1287,word:"metric",sound:"මෙට්‍රික්",meaning:"මිනුම් දර්ශකය"}
,{id:1288,word:"benchmark",sound:"බෙන්ච්මාක්",meaning:"සංසන්දනාත්මක ප්‍රමිතිය"}
,{id:1289,word:"trend",sound:"ට්‍රෙන්ඩ්",meaning:"ප්‍රවණතාව"}
,{id:1290,word:"forecasting",sound:"ෆෝකාස්ටින්",meaning:"පුරෝකථනය කිරීම"}
,{id:1291,word:"business analytics",sound:"බිස්නස් අනලිටික්ස්",meaning:"ව්‍යාපාරික දත්ත විශ්ලේෂණය"}
,{id:1292,word:"reporting",sound:"රිපෝටින්",meaning:"වාර්තා සකස් කිරීම"}
,{id:1293,word:"summary",sound:"සමරි",meaning:"සාරාංශය"}
,{id:1294,word:"comparison",sound:"කම්පැරිසන්",meaning:"සංසන්දනය"}
,{id:1295,word:"variance analysis",sound:"වේරියන්ස් අනැලිසිස්",meaning:"වෙනස්කම් විශ්ලේෂණය"}
,{id:1296,word:"performance review",sound:"පර්ෆෝමන්ස් රිවියූ",meaning:"කාර්ය සාධන සමාලෝචනය"}
,{id:1297,word:"business review",sound:"බිස්නස් රිවියූ",meaning:"ව්‍යාපාර සමාලෝචනය"}
,{id:1298,word:"management review",sound:"මැනේජ්මන්ට් රිවියූ",meaning:"කළමනාකරණ සමාලෝචනය"}
,{id:1299,word:"strategic planning",sound:"ස්ට්‍රැටජික් ප්ලෑනින්",meaning:"උපායමාර්ගික සැලසුම්කරණය"}
,{id:1300,word:"long-term goal",sound:"ලෝන්ග් ටර්ම් ගෝල්",meaning:"දිගුකාලීන ඉලක්කය"}
    ]
  }
];
