const chars=[
["ANIME","Naruto","TRÈS OP","Madara Uchiha","Naruto",98],["ANIME","Naruto","TRÈS OP","Naruto Uzumaki","Naruto",96],["ANIME","Naruto","FORT","Sasuke Uchiha","Naruto",91],["ANIME","Naruto","FORT","Itachi Uchiha","Naruto",89],["ANIME","Naruto","MOYENNEMENT FORT","Kakashi Hatake","Naruto",78],["ANIME","Naruto","MOYENNEMENT FORT","Might Guy","Naruto",80],["ANIME","Naruto","TRÈS OP","Kaguya Otsutsuki","Naruto",100],["ANIME","Naruto","TRÈS OP","Hagoromo Otsutsuki","Naruto",100],["ANIME","Naruto","TRÈS OP","Obito Jinchuriki","Naruto",98],["ANIME","Naruto","TRÈS OP","Hashirama Senju","Naruto",96],["ANIME","Naruto","FORT","Minato Namikaze","Naruto",93],
["ANIME","Dragon Ball","TRÈS OP","Goku","Dragon Ball",100],["ANIME","Dragon Ball","TRÈS OP","Vegeta","Dragon Ball",98],["ANIME","Dragon Ball","TRÈS OP","Broly","Dragon Ball",99],["ANIME","Dragon Ball","FORT","Gohan","Dragon Ball",91],["ANIME","Dragon Ball","FORT","Frieza","Dragon Ball",90],["ANIME","Dragon Ball","MOYENNEMENT FORT","Piccolo","Dragon Ball",79],["ANIME","Dragon Ball","TRÈS OP","Zeno","Dragon Ball",100],["ANIME","Dragon Ball","TRÈS OP","Grand Prêtre","Dragon Ball",100],["ANIME","Dragon Ball","FORT","Jiren","Dragon Ball",96],["ANIME","Dragon Ball","MOYENNEMENT FORT","Majin Buu","Dragon Ball",86],
["ANIME","One Piece","TRÈS OP","Kaido","One Piece",99],["ANIME","One Piece","TRÈS OP","Shanks","One Piece",97],["ANIME","One Piece","TRÈS OP","Luffy","One Piece",96],["ANIME","One Piece","FORT","Blackbeard","One Piece",94],["ANIME","One Piece","FORT","Zoro","One Piece",88],["ANIME","One Piece","MOYENNEMENT FORT","Sanji","One Piece",83],["ANIME","One Piece","TRÈS OP","Dracule Mihawk","One Piece",97],["ANIME","One Piece","TRÈS OP","Monkey D. Dragon","One Piece",96],["ANIME","One Piece","FORT","Monkey D. Garp","One Piece",96],["ANIME","One Piece","FORT","Gol D. Roger","One Piece",99],
["ANIME","Jujutsu Kaisen","TRÈS OP","Sukuna","Jujutsu Kaisen",100],["ANIME","Jujutsu Kaisen","TRÈS OP","Gojo Satoru","Jujutsu Kaisen",99],["ANIME","Jujutsu Kaisen","FORT","Yuta Okkotsu","Jujutsu Kaisen",91],["ANIME","Jujutsu Kaisen","FORT","Toji Fushiguro","Jujutsu Kaisen",89],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Maki Zenin","Jujutsu Kaisen",82],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Yuji Itadori","Jujutsu Kaisen",80],["ANIME","Jujutsu Kaisen","TRÈS OP","Kenjaku","Jujutsu Kaisen",95],["ANIME","Jujutsu Kaisen","TRÈS OP","Yuki Tsukumo","Jujutsu Kaisen",93],["ANIME","Jujutsu Kaisen","TRÈS OP","Hajime Kashimo","Jujutsu Kaisen",92],["ANIME","Jujutsu Kaisen","FORT","Kinji Hakari","Jujutsu Kaisen",89],
["ANIME","Demon Slayer","TRÈS OP","Yoriichi","Demon Slayer",99],["ANIME","Demon Slayer","TRÈS OP","Muzan Kibutsuji","Demon Slayer",98],["ANIME","Demon Slayer","FORT","Kokushibo","Demon Slayer",94],["ANIME","Demon Slayer","FORT","Akaza","Demon Slayer",90],["ANIME","Demon Slayer","MOYENNEMENT FORT","Tanjiro Kamado","Demon Slayer",82],["ANIME","Demon Slayer","MOYENNEMENT FORT","Giyu Tomioka","Demon Slayer",80],["ANIME","Demon Slayer","TRÈS OP","Doma","Demon Slayer",96],["ANIME","Demon Slayer","TRÈS OP","Obanai Iguro","Demon Slayer",97],["ANIME","Demon Slayer","FORT","Gyomei Himejima","Demon Slayer",94],["ANIME","Demon Slayer","FORT","Sanemi Shinazugawa","Demon Slayer",90],
["ANIME","Solo Leveling","TRÈS OP","Sung Jinwoo","Solo Leveling",100],["ANIME","Solo Leveling","TRÈS OP","Antares","Solo Leveling",99],["ANIME","Solo Leveling","FORT","Beru","Solo Leveling",89],["ANIME","Solo Leveling","FORT","Igris","Solo Leveling",86],["ANIME","Solo Leveling","MOYENNEMENT FORT","Thomas Andre","Solo Leveling",84],["ANIME","Solo Leveling","MOYENNEMENT FORT","Cha Hae-In","Solo Leveling",76],["ANIME","Solo Leveling","TRÈS OP","Ashborn","Solo Leveling",100],["ANIME","Solo Leveling","TRÈS OP","Bellion","Solo Leveling",96],["ANIME","Solo Leveling","TRÈS OP","Rakan","Solo Leveling",95],["ANIME","Solo Leveling","FORT","Liu Zhigang","Solo Leveling",93],
["ANIME","My Hero Academia","TRÈS OP","All Might","My Hero Academia",97],["ANIME","My Hero Academia","TRÈS OP","Shigaraki","My Hero Academia",98],["ANIME","My Hero Academia","FORT","Deku","My Hero Academia",91],["ANIME","My Hero Academia","FORT","Endeavor","My Hero Academia",84],["ANIME","My Hero Academia","MOYENNEMENT FORT","Bakugo","My Hero Academia",82],["ANIME","My Hero Academia","MOYENNEMENT FORT","Todoroki","My Hero Academia",79],["ANIME","My Hero Academia","TRÈS OP","Star and Stripe","My Hero Academia",95],["ANIME","My Hero Academia","TRÈS OP","Gigantomachia","My Hero Academia",94],["ANIME","My Hero Academia","TRÈS OP","All For One","My Hero Academia",98],["ANIME","My Hero Academia","FORT","Overhaul","My Hero Academia",87],
["ANIME","Attack on Titan","TRÈS OP","Eren Yeager","Attack on Titan",94],["ANIME","Attack on Titan","TRÈS OP","Levi Ackerman","Attack on Titan",92],["ANIME","Attack on Titan","FORT","Reiner Braun","Attack on Titan",82],["ANIME","Attack on Titan","FORT","Annie Leonhart","Attack on Titan",81],["ANIME","Attack on Titan","MOYENNEMENT FORT","Mikasa Ackerman","Attack on Titan",80],["ANIME","Attack on Titan","MOYENNEMENT FORT","Armin Arlert","Attack on Titan",73],["ANIME","Attack on Titan","TRÈS OP","Titan colossal de Bertholdt","Attack on Titan",91],["ANIME","Attack on Titan","TRÈS OP","Titan marteau d'armes","Attack on Titan",89],["ANIME","Attack on Titan","FORT","Zeke Yeager","Attack on Titan",90],["ANIME","Attack on Titan","FORT","Kenny Ackerman","Attack on Titan",81],["ANIME","Bleach","TRÈS OP","Genryusai Yamamoto","Bleach",99],["ANIME","Bleach","TRÈS OP","Ichigo Kurosaki","Bleach",99],["ANIME","Bleach","TRÈS OP","Aizen Sosuke","Bleach",100],["ANIME","Bleach","TRÈS OP","Ichibe Hyosube","Bleach",99],
["ANIME","Bleach","TRÈS OP","Gerard Valkyrie","Bleach",97],["ANIME","Bleach","TRÈS OP","Yhwach","Bleach",100],["ANIME","Bleach","FORT","Kenpachi Zaraki","Bleach",94],["ANIME","Bleach","FORT","Kisuke Urahara","Bleach",93],["ANIME","Bleach","FORT","Shunsui Kyoraku","Bleach",94],["ANIME","Bleach","MOYENNEMENT FORT","Toshiro Hitsugaya","Bleach",82],
["ANIME","Black Clover","TRÈS OP","Asta","Black Clover",96],["ANIME","Black Clover","TRÈS OP","Lucius Zogratis","Black Clover",99],["ANIME","Black Clover","FORT","Yuno","Black Clover",93],["ANIME","Black Clover","FORT","Yami Sukehiro","Black Clover",88],["ANIME","Black Clover","MOYENNEMENT FORT","Noelle Silva","Black Clover",80],["ANIME","Black Clover","MOYENNEMENT FORT","Mereoleona Vermillion","Black Clover",84],["ANIME","Black Clover","TRÈS OP","Lucifero","Black Clover",98],["ANIME","Black Clover","TRÈS OP","Megicula","Black Clover",95],["ANIME","Black Clover","TRÈS OP","Morris Libardirt","Black Clover",90],["ANIME","Black Clover","FORT","Zenon Zogratis","Black Clover",92],
["ANIME","7 Deadly Sins","TRÈS OP","Meliodas","7 Deadly Sins",99],["ANIME","7 Deadly Sins","TRÈS OP","Escanor","7 Deadly Sins",98],["ANIME","7 Deadly Sins","TRÈS OP","Demon King","7 Deadly Sins",100],["ANIME","7 Deadly Sins","FORT","Ban","7 Deadly Sins",91],["ANIME","7 Deadly Sins","FORT","King","7 Deadly Sins",87],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Diane","7 Deadly Sins",80],["ANIME","7 Deadly Sins","TRÈS OP","Chaos Arthur","7 Deadly Sins",100],["ANIME","7 Deadly Sins","TRÈS OP","Mael","7 Deadly Sins",96],["ANIME","7 Deadly Sins","TRÈS OP","Zeldris","7 Deadly Sins",94],["ANIME","7 Deadly Sins","FORT","Ludociel","7 Deadly Sins",91],
["MARVEL","","TRÈS OP","Thanos","Marvel",100],["MARVEL","","TRÈS OP","Hulk","Marvel",97],["MARVEL","","TRÈS OP","Thor","Marvel",95],["MARVEL","","FORT","Doctor Strange","Marvel",93],["MARVEL","","FORT","Spider-Man","Marvel",82],["MARVEL","","MOYENNEMENT FORT","Black Panther","Marvel",76],["MARVEL","","MOYENNEMENT FORT","Wolverine","Marvel",84],["MARVEL","","TRÈS OP","Doctor Doom","Marvel",97],["MARVEL","","FORT","Silver Surfer","Marvel",96],["MARVEL","","FORT","Captain Marvel","Marvel",91],
["DC","","TRÈS OP","Superman","DC",100],["DC","","TRÈS OP","Darkseid","DC",99],["DC","","TRÈS OP","Flash","DC",97],["DC","","FORT","Wonder Woman","DC",90],["DC","","FORT","Batman","DC",77],["DC","","MOYENNEMENT FORT","Green Arrow","DC",69],["DC","","TRÈS OP","The Presence","DC",100],["DC","","TRÈS OP","Anti-Monitor","DC",100],["DC","","TRÈS OP","Doctor Manhattan","DC",100],["DC","","TRÈS OP","Spectre","DC",99],
["ANIMAUX TERRESTRES","","TRÈS OP","Éléphant d'Afrique","Animal terrestre",91],["ANIMAUX TERRESTRES","","TRÈS OP","Ours polaire","Animal terrestre",88],["ANIMAUX TERRESTRES","","FORT","Tigre","Animal terrestre",82],["ANIMAUX TERRESTRES","","FORT","Gorille","Animal terrestre",78],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Loup","Animal terrestre",69],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Hyène","Animal terrestre",65],["ANIMAUX TERRESTRES","","TRÈS OP","Rhinocéros blanc","Animal terrestre",89],["ANIMAUX TERRESTRES","","FORT","Ours brun","Animal terrestre",86],["ANIMAUX TERRESTRES","","FORT","Lion","Animal terrestre",82],
["ANIMAUX AQUATIQUES","","TRÈS OP","Orque","Animal aquatique",94],["ANIMAUX AQUATIQUES","","TRÈS OP","Cachalot","Animal aquatique",90],["ANIMAUX AQUATIQUES","","FORT","Grand requin blanc","Animal aquatique",85],["ANIMAUX AQUATIQUES","","FORT","Hippopotame","Animal aquatique",80],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Crocodile marin","Animal aquatique",74],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Poulpe géant","Animal aquatique",65],["ANIMAUX AQUATIQUES","","TRÈS OP","Phoque léopard","Animal aquatique",89],["ANIMAUX AQUATIQUES","","FORT","Éléphant de mer","Animal aquatique",82],["ANIMAUX AQUATIQUES","","FORT","Calmar géant","Animal aquatique",80],["ANIMAUX AQUATIQUES","","FORT","Requin-tigre","Animal aquatique",79]
];

// Ultimate Power Auction v9 — enchères secrètes + simulation de combat
const $=id=>document.getElementById(id);
const state={cash:{a:20,b:20},roster:{a:[],b:[]},turn:'a',current:null,currentBid:0,highBidder:null,used:[],round:1,priority:null,ended:false};
const PRIME = {
  // NARUTO
  'Naruto Uzumaki':{power:96,speed:94,skill:93,hax:87,team:92},
  'Madara Uchiha':{power:96,speed:91,skill:97,hax:96,team:91},
  'Sasuke Uchiha':{power:92,speed:95,skill:94,hax:91,team:89},
  'Itachi Uchiha':{power:88,speed:87,skill:99,hax:95,team:93},
  'Kakashi Hatake':{power:82,speed:87,skill:97,hax:87,team:94},
  'Might Guy':{power:93,speed:99,skill:88,hax:55,team:78},
  'Kaguya Otsutsuki':{power:100,speed:96,skill:91,hax:100,team:75},
  'Hagoromo Otsutsuki':{power:99,speed:94,skill:98,hax:99,team:96},
  'Obito Jinchuriki':{power:98,speed:94,skill:95,hax:98,team:88},
  'Hashirama Senju':{power:96,speed:91,skill:96,hax:91,team:97},
  'Minato Namikaze':{power:93,speed:100,skill:98,hax:91,team:96},

  // DRAGON BALL
  'Goku':{power:100,speed:100,skill:96,hax:85,team:90},
  'Vegeta':{power:99,speed:99,skill:96,hax:82,team:88},
  'Broly':{power:100,speed:95,skill:82,hax:72,team:76},
  'Gohan':{power:96,speed:95,skill:91,hax:75,team:89},
  'Frieza':{power:96,speed:95,skill:93,hax:79,team:82},
  'Piccolo':{power:86,speed:84,skill:91,hax:77,team:91},
  'Zeno':{power:100,speed:70,skill:80,hax:100,team:70},
  'Grand Prêtre':{power:100,speed:100,skill:100,hax:100,team:98},
  'Jiren':{power:98,speed:95,skill:96,hax:80,team:85},
  'Majin Buu':{power:91,speed:82,skill:78,hax:94,team:72},

  // ONE PIECE
  'Kaido':{power:98,speed:89,skill:91,hax:80,team:84},
  'Shanks':{power:96,speed:94,skill:99,hax:90,team:93},
  'Luffy':{power:97,speed:98,skill:94,hax:91,team:94},
  'Blackbeard':{power:95,speed:82,skill:88,hax:99,team:79},
  'Zoro':{power:91,speed:92,skill:92,hax:73,team:88},
  'Sanji':{power:88,speed:97,skill:89,hax:69,team:91},
  'Dracule Mihawk':{power:96,speed:93,skill:100,hax:75,team:82},
  'Monkey D. Dragon':{power:97,speed:94,skill:96,hax:92,team:90},
  'Monkey D. Garp':{power:97,speed:91,skill:96,hax:76,team:91},
  'Gol D. Roger':{power:99,speed:96,skill:100,hax:85,team:96},

  // JUJUTSU KAISEN
  'Sukuna':{power:98,speed:94,skill:99,hax:98,team:75},
  'Gojo Satoru':{power:98,speed:96,skill:98,hax:100,team:85},
  'Yuta Okkotsu':{power:93,speed:89,skill:91,hax:96,team:94},
  'Toji Fushiguro':{power:86,speed:96,skill:97,hax:78,team:78},
  'Maki Zenin':{power:85,speed:94,skill:91,hax:70,team:85},
  'Yuji Itadori':{power:87,speed:90,skill:85,hax:72,team:89},
  'Kenjaku':{power:94,speed:89,skill:99,hax:98,team:94},
  'Yuki Tsukumo':{power:94,speed:89,skill:94,hax:91,team:87},
  'Hajime Kashimo':{power:93,speed:96,skill:94,hax:91,team:78},
  'Kinji Hakari':{power:91,speed:92,skill:90,hax:95,team:86},

  // DEMON SLAYER
  'Yoriichi':{power:91,speed:98,skill:100,hax:65,team:87},
  'Muzan Kibutsuji':{power:91,speed:89,skill:91,hax:94,team:68},
  'Kokushibo':{power:92,speed:93,skill:97,hax:83,team:75},
  'Akaza':{power:84,speed:90,skill:94,hax:79,team:77},
  'Tanjiro Kamado':{power:81,speed:87,skill:90,hax:63,team:90},
  'Giyu Tomioka':{power:79,speed:83,skill:91,hax:57,team:87},
  'Doma':{power:90,speed:91,skill:93,hax:94,team:70},
  'Obanai Iguro':{power:83,speed:91,skill:96,hax:63,team:91},
  'Gyomei Himejima':{power:92,speed:86,skill:98,hax:65,team:94},
  'Sanemi Shinazugawa':{power:88,speed:91,skill:94,hax:62,team:87},

  // SOLO LEVELING
  'Sung Jinwoo':{power:100,speed:100,skill:96,hax:98,team:100},
  'Antares':{power:99,speed:95,skill:90,hax:91,team:79},
  'Beru':{power:88,speed:96,skill:88,hax:75,team:93},
  'Igris':{power:85,speed:85,skill:94,hax:63,team:94},
  'Thomas Andre':{power:86,speed:77,skill:83,hax:64,team:80},
  'Cha Hae-In':{power:79,speed:94,skill:90,hax:55,team:88},
  'Ashborn':{power:100,speed:100,skill:99,hax:100,team:100},
  'Bellion':{power:96,speed:95,skill:98,hax:84,team:98},
  'Rakan':{power:96,speed:94,skill:90,hax:86,team:78},
  'Liu Zhigang':{power:93,speed:91,skill:94,hax:77,team:89},

  // MY HERO ACADEMIA
  'All Might':{power:92,speed:86,skill:84,hax:55,team:90},
  'Shigaraki':{power:97,speed:89,skill:88,hax:99,team:67},
  'Deku':{power:94,speed:96,skill:93,hax:80,team:92},
  'Endeavor':{power:85,speed:79,skill:85,hax:72,team:82},
  'Bakugo':{power:86,speed:92,skill:88,hax:68,team:88},
  'Todoroki':{power:85,speed:82,skill:87,hax:82,team:90},
  'Star and Stripe':{power:95,speed:87,skill:96,hax:98,team:94},
  'Gigantomachia':{power:96,speed:72,skill:72,hax:65,team:70},
  'All For One':{power:98,speed:87,skill:97,hax:99,team:91},
  'Overhaul':{power:88,speed:82,skill:91,hax:97,team:80},

  // ATTACK ON TITAN
  'Eren Yeager':{power:91,speed:75,skill:80,hax:90,team:84},
  'Levi Ackerman':{power:76,speed:96,skill:99,hax:30,team:92},
  'Reiner Braun':{power:79,speed:63,skill:76,hax:50,team:82},
  'Annie Leonhart':{power:77,speed:83,skill:92,hax:45,team:85},
  'Mikasa Ackerman':{power:75,speed:92,skill:93,hax:28,team:90},
  'Armin Arlert':{power:83,speed:50,skill:81,hax:89,team:94},
  'Titan colossal de Bertholdt':{power:94,speed:35,skill:65,hax:90,team:75},
  "Titan marteau d'armes":{power:89,speed:68,skill:88,hax:85,team:80},
  'Zeke Yeager':{power:88,speed:69,skill:91,hax:91,team:91},
  'Kenny Ackerman':{power:75,speed:91,skill:96,hax:35,team:80},

  // BLEACH
  'Genryusai Yamamoto':{power:99,speed:94,skill:100,hax:99,team:95},
  'Ichigo Kurosaki':{power:99,speed:99,skill:93,hax:94,team:92},
  'Aizen Sosuke':{power:99,speed:96,skill:100,hax:100,team:98},
  'Ichibe Hyosube':{power:99,speed:93,skill:99,hax:100,team:95},
  'Gerard Valkyrie':{power:98,speed:90,skill:87,hax:99,team:82},
  'Yhwach':{power:100,speed:96,skill:99,hax:100,team:95},
  'Kenpachi Zaraki':{power:96,speed:90,skill:85,hax:75,team:78},
  'Kisuke Urahara':{power:92,speed:90,skill:100,hax:98,team:100},
  'Shunsui Kyoraku':{power:94,speed:92,skill:99,hax:97,team:96},
  'Toshiro Hitsugaya':{power:90,speed:90,skill:94,hax:89,team:92},

  // BLACK CLOVER
  'Asta':{power:96,speed:97,skill:94,hax:98,team:91},
  'Lucius Zogratis':{power:99,speed:91,skill:98,hax:99,team:96},
  'Yuno':{power:94,speed:97,skill:94,hax:88,team:93},
  'Yami Sukehiro':{power:91,speed:87,skill:97,hax:91,team:92},
  'Noelle Silva':{power:86,speed:86,skill:87,hax:80,team:92},
  'Mereoleona Vermillion':{power:91,speed:92,skill:94,hax:75,team:85},
  'Lucifero':{power:98,speed:91,skill:96,hax:97,team:83},
  'Megicula':{power:95,speed:87,skill:95,hax:99,team:85},
  'Morris Libardirt':{power:90,speed:78,skill:94,hax:96,team:82},
  'Zenon Zogratis':{power:93,speed:92,skill:95,hax:93,team:88},

  // 7 DEADLY SINS
  'Meliodas':{power:98,speed:96,skill:96,hax:94,team:94},
  'Escanor':{power:98,speed:91,skill:87,hax:72,team:80},
  'Demon King':{power:99,speed:89,skill:94,hax:96,team:77},
  'Ban':{power:91,speed:91,skill:93,hax:76,team:90},
  'King':{power:89,speed:88,skill:92,hax:88,team:94},
  'Diane':{power:83,speed:69,skill:78,hax:71,team:88},
  'Chaos Arthur':{power:100,speed:95,skill:97,hax:100,team:95},
  'Mael':{power:96,speed:96,skill:97,hax:94,team:94},
  'Zeldris':{power:94,speed:94,skill:95,hax:91,team:89},
  'Ludociel':{power:92,speed:96,skill:97,hax:90,team:95},

  // MARVEL
  'Thanos':{power:99,speed:85,skill:91,hax:97,team:87},
  'Hulk':{power:97,speed:75,skill:70,hax:58,team:73},
  'Thor':{power:96,speed:87,skill:92,hax:88,team:90},
  'Doctor Strange':{power:90,speed:73,skill:99,hax:99,team:98},
  'Spider-Man':{power:80,speed:93,skill:92,hax:68,team:96},
  'Black Panther':{power:76,speed:85,skill:92,hax:60,team:91},
  'Wolverine':{power:83,speed:82,skill:89,hax:74,team:87},
  'Doctor Doom':{power:97,speed:85,skill:100,hax:99,team:94},
  'Silver Surfer':{power:97,speed:100,skill:96,hax:97,team:90},
  'Captain Marvel':{power:93,speed:94,skill:89,hax:86,team:88},

  // DC
  'Superman':{power:100,speed:99,skill:87,hax:80,team:87},
  'Darkseid':{power:99,speed:89,skill:94,hax:98,team:88},
  'Flash':{power:97,speed:100,skill:88,hax:89,team:94},
  'Wonder Woman':{power:91,speed:90,skill:97,hax:70,team:94},
  'Batman':{power:72,speed:80,skill:100,hax:79,team:100},
  'Green Arrow':{power:63,speed:77,skill:93,hax:40,team:87},
  'The Presence':{power:100,speed:100,skill:100,hax:100,team:100},
  'Anti-Monitor':{power:100,speed:92,skill:95,hax:100,team:85},
  'Doctor Manhattan':{power:100,speed:95,skill:100,hax:100,team:90},
  'Spectre':{power:100,speed:95,skill:98,hax:100,team:90},

  // ANIMAUX TERRESTRES
  'Éléphant d’Afrique':{power:91,speed:58,skill:65,hax:20,team:78},
  'Ours polaire':{power:88,speed:75,skill:72,hax:20,team:65},
  'Tigre':{power:82,speed:88,skill:78,hax:20,team:60},
  'Gorille':{power:78,speed:68,skill:65,hax:15,team:75},
  'Loup':{power:69,speed:82,skill:75,hax:15,team:90},
  'Hyène':{power:65,speed:76,skill:69,hax:15,team:85},
  'Rhinocéros blanc':{power:89,speed:65,skill:60,hax:15,team:55},
  'Ours brun':{power:86,speed:72,skill:69,hax:15,team:60},
  'Lion':{power:82,speed:83,skill:79,hax:15,team:65},

  // ANIMAUX AQUATIQUES
  'Orque':{power:94,speed:91,skill:90,hax:20,team:96},
  'Cachalot':{power:91,speed:74,skill:76,hax:20,team:88},
  'Grand requin blanc':{power:86,speed:88,skill:78,hax:20,team:45},
  'Hippopotame':{power:81,speed:55,skill:65,hax:15,team:50},
  'Crocodile marin':{power:84,speed:66,skill:75,hax:20,team:35},
  'Poulpe géant':{power:67,speed:65,skill:90,hax:25,team:30},
  'Phoque léopard':{power:89,speed:85,skill:85,hax:20,team:55},
  'Éléphant de mer':{power:83,speed:58,skill:68,hax:15,team:60},
  'Calmar géant':{power:81,speed:72,skill:84,hax:25,team:35},
  'Requin-tigre':{power:81,speed:86,skill:78,hax:20,team:40}
};
function stats(c){return PRIME[c[3]]||{power:Number(c[5]||70),speed:Number(c[5]||70)-4,skill:75,hax:65,team:75}}
function players(t){return Number($(t==='a'?'playersA':'playersB').value)}
function total(){return players('a')+players('b')}
function name(t){return $(t==='a'?'inputA':'inputB').value.trim()||`Équipe ${t.toUpperCase()}`}
function pool(){const subject=$('subject').value, anime=$('anime').value;return chars.filter(c=>c[0]===subject&&(subject!=='ANIME'||c[1]===anime))}
function roster(t){return state.roster[t]}
function render(){
 $('nameA').textContent=name('a');$('nameB').textContent=name('b');$('budgetA').textContent='$'+state.cash.a;$('budgetB').textContent='$'+state.cash.b;
 $('sizeA').textContent=`${roster('a').length}/${players('a')}`;$('sizeB').textContent=`${roster('b').length}/${players('b')}`;
 $('players').textContent=`${players('a')} vs ${players('b')}`;$('formatText').textContent=`${players('a')} vs ${players('b')}`;$('charTotal').textContent=total()+' personnages';
 $('round').textContent=state.round;$('count').textContent=state.used.length+' / '+total();$('turn').textContent=name(state.turn);$('bid').textContent='$'+state.currentBid;
 $('status').textContent=state.ended?'COMBAT TERMINÉ':state.current?'ENCHÈRE':'PRÊT';
 $('rosterA').innerHTML=roster('a').map(x=>`<div class="player"><b>${x[3]}</b><small>ACHETÉ</small></div>`).join('')||'<div class="empty">Aucun personnage acheté</div>';
 $('rosterB').innerHTML=roster('b').map(x=>`<div class="player"><b>${x[3]}</b><small>ACHETÉ</small></div>`).join('')||'<div class="empty">Aucun personnage acheté</div>';
 $('minimum').textContent='Minimum : $'+(state.currentBid+1);
 $('bidBtn').disabled=!state.current||state.ended;$('pass').disabled=!state.current||state.ended;$('draw').disabled=!!state.current||state.ended;
}
function say(m){$('feed').textContent=m}
function resolveBrokePriority(){
 if(!state.current||state.ended)return;
 const aBroke=state.cash.a<=0,bBroke=state.cash.b<=0;
 // Priorité uniquement lorsqu'une seule équipe n'a plus d'argent.
 if(aBroke===bBroke)return;
 const poor=aBroke?'a':'b',rich=poor==='a'?'b':'a';
 const poorHasRoom=roster(poor).length<players(poor);
 const richHasRoom=roster(rich).length<players(rich);

 // Si l'équipe avec de l'argent a déjà son effectif complet, elle ne peut pas prendre le personnage.
 if(!richHasRoom){
   if(poorHasRoom){
     roster(poor).push(state.current);
     say(`🎁 ${name(rich)} a déjà complété son équipe : ${state.current[3]} est donné gratuitement à ${name(poor)}.`);
   }else{
     say(`⏭️ Les deux équipes ont complété leur effectif. ${state.current[3]} est ignoré.`);
   }
   next();
   return;
 }

 const take=confirm(
   `PRIORITÉ À ${name(rich)}\n\n`+
   `${name(poor)} n'a plus d'argent.\n`+
   `Que veux-tu faire avec ${state.current[3]} ?\n\n`+
   `OK = prendre le personnage pour 1 $\n`+
   `Annuler = ${poorHasRoom?'le donner gratuitement à '+name(poor):'passer ce personnage'}`
 );

 if(take){
   state.cash[rich]-=1;
   roster(rich).push(state.current);
   say(`🔨 Priorité utilisée : ${state.current[3]} rejoint ${name(rich)} pour 1 $.`);
 }else if(poorHasRoom){
   roster(poor).push(state.current);
   say(`🎁 ${name(rich)} donne gratuitement ${state.current[3]} à ${name(poor)}.`);
 }else{
   say(`⏭️ ${name(rich)} passe ${state.current[3]} : l'autre équipe a déjà complété son effectif.`);
 }
 next();
}

function draw(){if(state.ended)return;if(state.used.length>=total()||roster('a').length>=players('a')&&roster('b').length>=players('b'))return finishDraft();
 const eligible=pool().filter(c=>!state.used.includes(c[3]));if(!eligible.length){say('Il ne reste plus assez de personnages dans cet univers.');return}
 const c=eligible[Math.floor(Math.random()*eligible.length)];state.current=c;state.used.push(c[3]);state.currentBid=0;state.highBidder=null;state.turn=state.turn==='a'?'b':'a';
 $('topic').textContent=c[0]==='ANIME'?'ANIME • '+c[1]:c[0];$('rarity').textContent='PUISSANCE SECRÈTE';$('charname').textContent=c[3];$('universe').textContent=c[4]+' • Version PRIME';$('portrait').textContent=c[3].split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase();$('powernum').textContent='???';$('powerbar').style.width='0%';$('bidInput').value='';say(`🔥 ${c[3]} est aux enchères. ${name(state.turn)} commence !`);render();resolveBrokePriority();}
function bid(){if(!state.current||state.ended)return;const t=state.turn, amount=Number($('bidInput').value), min=state.currentBid+1;if(roster(t).length>=players(t)){state.turn=t==='a'?'b':'a';say(`${name(t)} a déjà complété son équipe. ${name(state.turn)} peut miser.`);render();return}
 if(!Number.isInteger(amount)||amount<min){say(`Mise invalide : le minimum est ${min} $.`);return}if(amount>state.cash[t]){say(`${name(t)} n'a pas assez d'argent.`);return}
 state.currentBid=amount;state.highBidder=t;state.turn=t==='a'?'b':'a';if(roster(state.turn).length>=players(state.turn)||state.cash[state.turn]===0){sell();return}say(`${name(t)} mise ${amount} $. À ${name(state.turn)} de répondre.`);$('bidInput').value='';render();}
function sell(){if(!state.current)return;if(state.currentBid===0){say('Personne ne mise : personnage ignoré.');next();return}const winner=state.highBidder;if(!winner)return;state.cash[winner]-=state.currentBid;roster(winner).push(state.current);say(`🔨 ${state.current[3]} rejoint ${name(winner)} pour ${state.currentBid} $.`);next()}
function next(){state.current=null;state.currentBid=0;state.highBidder=null;state.round++;render();if(roster('a').length>=players('a')&&roster('b').length>=players('b'))finishDraft()}
function pass(){if(!state.current)return;if(state.currentBid===0){next();return}const t=state.turn; if(roster(t).length>=players(t)||state.cash[t]===0){sell();return}sell()}
function finishDraft(){state.current=null;render();say('Enchères terminées ! Préparez-vous au combat simulé.');$('draw').textContent='⚔️ SIMULER LE COMBAT';$('draw').disabled=false;$('draw').onclick=battle;state.ended=false}
function teamPower(t){return roster(t).reduce((sum,c)=>{const x=stats(c);return sum+x.power*.34+x.speed*.14+x.skill*.17+x.hax*.2+x.team*.15},0)}
function battle(){if(!roster('a').length||!roster('b').length){say('Les deux équipes doivent avoir au moins un personnage.');return}
 state.ended=true;render();$('draw').disabled=true;$('draw').textContent='COMBAT TERMINÉ';const teams={a:roster('a').map(c=>({c,st:{...stats(c)},hp:100,alive:true})),b:roster('b').map(c=>({c,st:{...stats(c)},hp:100,alive:true}))};
 const log=[];let turn=0;while(teams.a.some(x=>x.alive)&&teams.b.some(x=>x.alive)&&turn<100){turn++;const side=turn%2?'a':'b',enemy=side==='a'?'b':'a';const attackers=teams[side].filter(x=>x.alive),targets=teams[enemy].filter(x=>x.alive);if(!attackers.length||!targets.length)break;const atk=attackers[Math.floor(Math.random()*attackers.length)];const def=targets[Math.floor(Math.random()*targets.length)];const a=atk.st,d=def.st;const crit=Math.random()<Math.min(.35,a.skill/400);const special=Math.random()<Math.min(.45,a.hax/240);let dmg=Math.max(8,Math.round((12+a.power*.22+a.speed*.07+a.skill*.08+(special?a.hax*.18:0))*(.72+Math.random()*.56)*(crit?1.35:1)-d.power*.035));def.hp-=dmg;let line=`${atk.c[3]} attaque ${def.c[3]} et inflige ${dmg} dégâts${special?' avec une capacité spéciale':''}${crit?' (coup critique)':''}.`;if(def.hp<=0){def.alive=false;line+=` ${def.c[3]} est éliminé !`}log.push(line);if(log.length>=16)break;}
 const score={a:teams.a.reduce((s,x)=>s+(x.alive?1:0),0),b:teams.b.reduce((s,x)=>s+(x.alive?1:0),0)};const winner=score.a===score.b?(teamPower('a')>=teamPower('b')?'a':'b'):(score.a>score.b?'a':'b');
 $('topic').textContent='RÉSULTAT DU COMBAT';$('rarity').textContent=score.a===score.b?'DÉCISION AUX POINTS':'VICTOIRE';$('charname').textContent=name(winner)+' GAGNE !';$('universe').textContent=`Survivants : ${name('a')} ${score.a} • ${name('b')} ${score.b}`;$('portrait').textContent='🏆';$('powernum').textContent='';$('powerbar').style.width='0%';
 $('feed').innerHTML=`<b>⚔️ Rapport de combat</b><br>${log.map(x=>'• '+x).join('<br>')}<br><br><b>Survivants :</b> ${teams.a.filter(x=>x.alive).map(x=>x.c[3]).join(', ')||'aucun'} | ${teams.b.filter(x=>x.alive).map(x=>x.c[3]).join(', ')||'aucun'}<br><b>Note :</b> simulation narrative basée sur les profils internes de PRIME; les notes restent cachées pendant les enchères.`;}
function reset(){state.cash={a:20,b:20};state.roster={a:[],b:[]};state.turn='a';state.current=null;state.currentBid=0;state.highBidder=null;state.used=[];state.round=1;state.priority=null;state.ended=false;$('draw').textContent='🎲 LANCER L’ENCHÈRE';$('draw').onclick=draw;$('topic').textContent=$('subject').value;$('rarity').textContent='PUISSANCE SECRÈTE';$('charname').textContent='Prêt pour l’enchère';$('universe').textContent='Tire un personnage pour commencer';$('portrait').textContent='?';$('powernum').textContent='???';$('powerbar').style.width='0%';say('Nouvelle partie prête !');render()}
$('draw').onclick=draw;$('bidBtn').onclick=bid;$('bidInput').addEventListener('keydown',e=>{if(e.key==='Enter')bid()});$('pass').onclick=pass;$('reset').onclick=reset;$('subject').onchange=()=>{$('animeChoice').style.display=$('subject').value==='ANIME'?'block':'none';reset()};$('anime').onchange=reset;['inputA','inputB','playersA','playersB'].forEach(id=>$(id).oninput=()=>{if(state.used.length===0)render()});$('animeChoice').style.display='block';render();
