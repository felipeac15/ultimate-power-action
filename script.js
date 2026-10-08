const chars = [
// ANIME — Naruto
["ANIME","Naruto","TRÈS OP","Kaguya Otsutsuki","Naruto",100],["ANIME","Naruto","TRÈS OP","Hagoromo Otsutsuki","Naruto",99],["ANIME","Naruto","TRÈS OP","Madara Uchiha","Naruto",98],["ANIME","Naruto","TRÈS OP","Naruto Uzumaki","Naruto",97],["ANIME","Naruto","FORT","Sasuke Uchiha","Naruto",94],["ANIME","Naruto","FORT","Hashirama Senju","Naruto",92],["ANIME","Naruto","FORT","Obito Uchiha","Naruto",90],["ANIME","Naruto","FORT","Itachi Uchiha","Naruto",88],["ANIME","Naruto","FORT","Minato Namikaze","Naruto",89],["ANIME","Naruto","MOYENNEMENT FORT","Might Guy","Naruto",84],["ANIME","Naruto","MOYENNEMENT FORT","Kakashi Hatake","Naruto",82],["ANIME","Naruto","MOYENNEMENT FORT","Pain","Naruto",80],
// Dragon Ball
["ANIME","Dragon Ball","TRÈS OP","Zeno","Dragon Ball",100],["ANIME","Dragon Ball","TRÈS OP","Grand Prêtre","Dragon Ball",100],["ANIME","Dragon Ball","TRÈS OP","Goku","Dragon Ball",98],["ANIME","Dragon Ball","TRÈS OP","Vegeta","Dragon Ball",97],["ANIME","Dragon Ball","TRÈS OP","Broly","Dragon Ball",96],["ANIME","Dragon Ball","TRÈS OP","Beerus","Dragon Ball",96],["ANIME","Dragon Ball","TRÈS OP","Gohan Beast","Dragon Ball",95],["ANIME","Dragon Ball","FORT","Jiren","Dragon Ball",94],["ANIME","Dragon Ball","FORT","Frieza","Dragon Ball",92],["ANIME","Dragon Ball","FORT","Hit","Dragon Ball",87],["ANIME","Dragon Ball","FORT","Cell Max","Dragon Ball",86],["ANIME","Dragon Ball","MOYENNEMENT FORT","Piccolo","Dragon Ball",82],
// One Piece
["ANIME","One Piece","TRÈS OP","Imu","One Piece",100],["ANIME","One Piece","TRÈS OP","Joy Boy","One Piece",99],["ANIME","One Piece","TRÈS OP","Kaido","One Piece",98],["ANIME","One Piece","TRÈS OP","Shanks","One Piece",97],["ANIME","One Piece","TRÈS OP","Luffy","One Piece",96],["ANIME","One Piece","TRÈS OP","Blackbeard","One Piece",94],["ANIME","One Piece","FORT","Mihawk","One Piece",93],["ANIME","One Piece","FORT","Whitebeard","One Piece",92],["ANIME","One Piece","FORT","Akainu","One Piece",90],["ANIME","One Piece","FORT","Zoro","One Piece",87],["ANIME","One Piece","MOYENNEMENT FORT","Law","One Piece",84],["ANIME","One Piece","MOYENNEMENT FORT","Sanji","One Piece",82],
// Jujutsu Kaisen
["ANIME","Jujutsu Kaisen","TRÈS OP","Sukuna","Jujutsu Kaisen",100],["ANIME","Jujutsu Kaisen","TRÈS OP","Gojo Satoru","Jujutsu Kaisen",99],["ANIME","Jujutsu Kaisen","TRÈS OP","Kenjaku","Jujutsu Kaisen",94],["ANIME","Jujutsu Kaisen","FORT","Yuta Okkotsu","Jujutsu Kaisen",92],["ANIME","Jujutsu Kaisen","FORT","Yuki Tsukumo","Jujutsu Kaisen",89],["ANIME","Jujutsu Kaisen","FORT","Toji Fushiguro","Jujutsu Kaisen",88],["ANIME","Jujutsu Kaisen","FORT","Maki Zenin","Jujutsu Kaisen",86],["ANIME","Jujutsu Kaisen","FORT","Mahoraga","Jujutsu Kaisen",87],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Yuji Itadori","Jujutsu Kaisen",82],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Hakari Kinji","Jujutsu Kaisen",81],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Kashimo","Jujutsu Kaisen",84],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Jogo","Jujutsu Kaisen",76],
// Demon Slayer
["ANIME","Demon Slayer","TRÈS OP","Yoriichi","Demon Slayer",100],["ANIME","Demon Slayer","TRÈS OP","Muzan Kibutsuji","Demon Slayer",98],["ANIME","Demon Slayer","TRÈS OP","Kokushibo","Demon Slayer",96],["ANIME","Demon Slayer","FORT","Doma","Demon Slayer",92],["ANIME","Demon Slayer","FORT","Akaza","Demon Slayer",90],["ANIME","Demon Slayer","FORT","Gyomei Himejima","Demon Slayer",88],["ANIME","Demon Slayer","FORT","Sanemi Shinazugawa","Demon Slayer",85],["ANIME","Demon Slayer","FORT","Giyu Tomioka","Demon Slayer",83],["ANIME","Demon Slayer","MOYENNEMENT FORT","Tanjiro Kamado","Demon Slayer",82],["ANIME","Demon Slayer","MOYENNEMENT FORT","Muichiro Tokito","Demon Slayer",80],["ANIME","Demon Slayer","MOYENNEMENT FORT","Obanai Iguro","Demon Slayer",79],["ANIME","Demon Slayer","MOYENNEMENT FORT","Tengen Uzui","Demon Slayer",77],
// Solo Leveling
["ANIME","Solo Leveling","TRÈS OP","Sung Jinwoo","Solo Leveling",100],["ANIME","Solo Leveling","TRÈS OP","Antares","Solo Leveling",99],["ANIME","Solo Leveling","TRÈS OP","Ashborn","Solo Leveling",98],["ANIME","Solo Leveling","FORT","Thomas Andre","Solo Leveling",91],["ANIME","Solo Leveling","FORT","Liu Zhigang","Solo Leveling",90],["ANIME","Solo Leveling","FORT","Beru","Solo Leveling",89],["ANIME","Solo Leveling","FORT","Igris","Solo Leveling",86],["ANIME","Solo Leveling","FORT","Bellion","Solo Leveling",88],["ANIME","Solo Leveling","MOYENNEMENT FORT","Cha Hae-In","Solo Leveling",80],["ANIME","Solo Leveling","MOYENNEMENT FORT","Go Gun-Hee","Solo Leveling",79],["ANIME","Solo Leveling","MOYENNEMENT FORT","Esil Radiru","Solo Leveling",73],["ANIME","Solo Leveling","MOYENNEMENT FORT","Iron","Solo Leveling",70],
// My Hero Academia
["ANIME","My Hero Academia","TRÈS OP","Shigaraki","My Hero Academia",99],["ANIME","My Hero Academia","TRÈS OP","All For One","My Hero Academia",98],["ANIME","My Hero Academia","TRÈS OP","All Might","My Hero Academia",96],["ANIME","My Hero Academia","FORT","Deku","My Hero Academia",94],["ANIME","My Hero Academia","FORT","Star and Stripe","My Hero Academia",91],["ANIME","My Hero Academia","FORT","Endeavor","My Hero Academia",85],["ANIME","My Hero Academia","FORT","Bakugo","My Hero Academia",84],["ANIME","My Hero Academia","FORT","Todoroki","My Hero Academia",82],["ANIME","My Hero Academia","MOYENNEMENT FORT","Mirko","My Hero Academia",78],["ANIME","My Hero Academia","MOYENNEMENT FORT","Hawks","My Hero Academia",77],["ANIME","My Hero Academia","MOYENNEMENT FORT","Aizawa","My Hero Academia",76],["ANIME","My Hero Academia","MOYENNEMENT FORT","Dabi","My Hero Academia",80],
// Attack on Titan
["ANIME","Attack on Titan","TRÈS OP","Eren Yeager","Attack on Titan",97],["ANIME","Attack on Titan","TRÈS OP","Titan Originel","Attack on Titan",96],["ANIME","Attack on Titan","FORT","Levi Ackerman","Attack on Titan",94],["ANIME","Attack on Titan","FORT","Titan Marteau","Attack on Titan",88],["ANIME","Attack on Titan","FORT","Mikasa Ackerman","Attack on Titan",85],["ANIME","Attack on Titan","FORT","Reiner Braun","Attack on Titan",82],["ANIME","Attack on Titan","FORT","Annie Leonhart","Attack on Titan",82],["ANIME","Attack on Titan","MOYENNEMENT FORT","Armin Arlert","Attack on Titan",80],["ANIME","Attack on Titan","MOYENNEMENT FORT","Zeke Yeager","Attack on Titan",79],["ANIME","Attack on Titan","MOYENNEMENT FORT","Erwin Smith","Attack on Titan",76],["ANIME","Attack on Titan","MOYENNEMENT FORT","Jean Kirstein","Attack on Titan",68],["ANIME","Attack on Titan","MOYENNEMENT FORT","Porco Galliard","Attack on Titan",72],
// Bleach
["ANIME","Bleach","TRÈS OP","Yhwach","Bleach",100],["ANIME","Bleach","TRÈS OP","Aizen","Bleach",99],["ANIME","Bleach","TRÈS OP","Ichigo","Bleach",98],["ANIME","Bleach","TRÈS OP","Ichibei","Bleach",97],["ANIME","Bleach","TRÈS OP","Kenpachi","Bleach",94],["ANIME","Bleach","TRÈS OP","Yamamoto","Bleach",93],["ANIME","Bleach","FORT","Shunsui Kyoraku","Bleach",90],["ANIME","Bleach","FORT","Byakuya","Bleach",87],["ANIME","Bleach","FORT","Toshiro","Bleach",85],["ANIME","Bleach","FORT","Urahara","Bleach",89],["ANIME","Bleach","MOYENNEMENT FORT","Mayuri","Bleach",82],["ANIME","Bleach","MOYENNEMENT FORT","Ulquiorra","Bleach",84],
// Black Clover
["ANIME","Black Clover","TRÈS OP","Lucius Zogratis","Black Clover",100],["ANIME","Black Clover","TRÈS OP","Asta","Black Clover",97],["ANIME","Black Clover","TRÈS OP","Yuno","Black Clover",95],["ANIME","Black Clover","TRÈS OP","Julius Novachrono","Black Clover",94],["ANIME","Black Clover","FORT","Yami Sukehiro","Black Clover",90],["ANIME","Black Clover","FORT","Mereoleona","Black Clover",88],["ANIME","Black Clover","FORT","Nozel Silva","Black Clover",85],["ANIME","Black Clover","FORT","Morgen Faust","Black Clover",87],["ANIME","Black Clover","MOYENNEMENT FORT","Noelle Silva","Black Clover",82],["ANIME","Black Clover","MOYENNEMENT FORT","Fuegoleon","Black Clover",81],["ANIME","Black Clover","MOYENNEMENT FORT","Nacht","Black Clover",78],["ANIME","Black Clover","MOYENNEMENT FORT","Luck Voltia","Black Clover",75],
// 7 Deadly Sins
["ANIME","7 Deadly Sins","TRÈS OP","Chaos","7 Deadly Sins",100],["ANIME","7 Deadly Sins","TRÈS OP","Demon King","7 Deadly Sins",99],["ANIME","7 Deadly Sins","TRÈS OP","Meliodas","7 Deadly Sins",98],["ANIME","7 Deadly Sins","TRÈS OP","Escanor","7 Deadly Sins",96],["ANIME","7 Deadly Sins","FORT","Ban","7 Deadly Sins",91],["ANIME","7 Deadly Sins","FORT","King","7 Deadly Sins",88],["ANIME","7 Deadly Sins","FORT","Mael","7 Deadly Sins",92],["ANIME","7 Deadly Sins","FORT","Ludociel","7 Deadly Sins",87],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Diane","7 Deadly Sins",80],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Merlin","7 Deadly Sins",85],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Gowther","7 Deadly Sins",78],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Zeldris","7 Deadly Sins",86],
// Marvel
["MARVEL","","TRÈS OP","Living Tribunal","Marvel",100],["MARVEL","","TRÈS OP","Galactus","Marvel",99],["MARVEL","","TRÈS OP","Thanos","Marvel",98],["MARVEL","","TRÈS OP","Scarlet Witch","Marvel",96],["MARVEL","","TRÈS OP","Hulk","Marvel",94],["MARVEL","","FORT","Thor","Marvel",93],["MARVEL","","FORT","Doctor Strange","Marvel",91],["MARVEL","","FORT","Captain Marvel","Marvel",88],["MARVEL","","FORT","Spider-Man","Marvel",82],["MARVEL","","MOYENNEMENT FORT","Wolverine","Marvel",81],["MARVEL","","MOYENNEMENT FORT","Black Panther","Marvel",78],["MARVEL","","MOYENNEMENT FORT","Iron Man","Marvel",77],
// DC
["DC","","TRÈS OP","The Presence","DC",100],["DC","","TRÈS OP","Darkseid","DC",98],["DC","","TRÈS OP","Doctor Manhattan","DC",97],["DC","","TRÈS OP","Superman","DC",96],["DC","","TRÈS OP","Flash","DC",94],["DC","","FORT","Wonder Woman","DC",90],["DC","","FORT","Green Lantern","DC",87],["DC","","FORT","Shazam","DC",85],["DC","","FORT","Martian Manhunter","DC",84],["DC","","MOYENNEMENT FORT","Batman","DC",79],["DC","","MOYENNEMENT FORT","Aquaman","DC",76],["DC","","MOYENNEMENT FORT","Cyborg","DC",73],
// Terrestrial animals
["ANIMAUX TERRESTRES","","TRÈS OP","Éléphant d'Afrique","Animal terrestre",92],["ANIMAUX TERRESTRES","","TRÈS OP","Ours polaire","Animal terrestre",90],["ANIMAUX TERRESTRES","","TRÈS OP","Rhinocéros","Animal terrestre",89],["ANIMAUX TERRESTRES","","FORT","Hippopotame","Animal terrestre",87],["ANIMAUX TERRESTRES","","FORT","Tigre","Animal terrestre",85],["ANIMAUX TERRESTRES","","FORT","Gorille","Animal terrestre",83],["ANIMAUX TERRESTRES","","FORT","Ours brun","Animal terrestre",81],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Lion","Animal terrestre",79],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Buffle d'Afrique","Animal terrestre",77],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Jaguar","Animal terrestre",76],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Loup","Animal terrestre",71],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Hyène","Animal terrestre",67],
// Aquatic animals
["ANIMAUX AQUATIQUES","","TRÈS OP","Orque","Animal aquatique",96],["ANIMAUX AQUATIQUES","","TRÈS OP","Cachalot","Animal aquatique",93],["ANIMAUX AQUATIQUES","","TRÈS OP","Grand requin blanc","Animal aquatique",91],["ANIMAUX AQUATIQUES","","FORT","Crocodile marin","Animal aquatique",88],["ANIMAUX AQUATIQUES","","FORT","Hippopotame","Animal aquatique",86],["ANIMAUX AQUATIQUES","","FORT","Morse","Animal aquatique",82],["ANIMAUX AQUATIQUES","","FORT","Requin-tigre","Animal aquatique",80],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Espadon","Animal aquatique",76],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Poulpe géant","Animal aquatique",74],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Raie manta","Animal aquatique",72],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Phoque léopard","Animal aquatique",69],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Anguille électrique","Animal aquatique",68]
];

let s={a:20,b:20,ra:[],rb:[],turn:"a",currentBid:0,current:null,used:[],round:1,active:false,starter:"b",priorityTeam:null,gameOver:false};
const $=id=>document.getElementById(id);
const nm=t=>$(t==="a"?"inputA":"inputB").value.trim()||`Équipe ${t.toUpperCase()}`;
const targetA=()=>Number($("playersA").value)||5;
const targetB=()=>Number($("playersB").value)||5;
const totalNeeded=()=>targetA()+targetB();
function filteredChars(){const subject=$("subject").value,anime=$("anime").value;return chars.filter(c=>c[0]===subject&&(subject!=="ANIME"||c[1]===anime));}
function key(c){return c.slice(0,6).join("|");}
function teamFull(t){return (t==="a"?s.ra:s.rb).length >= (t==="a"?targetA():targetB());}
function render(){
 $("nameA").textContent=nm("a");$("nameB").textContent=nm("b");
 $("budgetA").textContent="$"+s.a;$("budgetB").textContent="$"+s.b;
 $("sizeA").textContent=s.ra.length+"/"+targetA();$("sizeB").textContent=s.rb.length+"/"+targetB();
 $("players").textContent=targetA()+" vs "+targetB();$("formatText").textContent=targetA()+" vs "+targetB();$("charTotal").textContent=totalNeeded()+" personnages";
 $("round").textContent=s.round;$("count").textContent=s.used.length+" / "+totalNeeded();
 $("turn").textContent=s.priorityTeam?nm(s.priorityTeam):nm(s.turn);$("bid").textContent="$"+s.currentBid;
 $("status").textContent=s.gameOver?"TERMINÉ":(s.priorityTeam?"PRIORITÉ":"ENCHÈRE");
 $("rosterA").innerHTML=s.ra.length?s.ra.map(x=>`<div class="player"><b>${x[3]}</b><small>Prime ${x[5]}</small></div>`).join(""):`<div class="empty">Aucun personnage</div>`;
 $("rosterB").innerHTML=s.rb.length?s.rb.map(x=>`<div class="player"><b>${x[3]}</b><small>Prime ${x[5]}</small></div>`).join(""):`<div class="empty">Aucun personnage</div>`;
 $("minimum").textContent="Minimum : $"+(s.currentBid+1);
}
function setCharacter(c){
 s.current=c;s.currentBid=0;s.active=true;
 $("topic").textContent=c[0]==="ANIME"?"ANIME • "+c[1]:c[0];$("rarity").textContent=c[2];$("charname").textContent=c[3];$("universe").textContent=c[4];
 $("portrait").textContent=c[3].split(/\s+/).map(w=>w[0]).join("").slice(0,3).toUpperCase();$("powernum").textContent=c[5];$("powerbar").style.width=c[5]+"%";$ ("bidInput").value="";
}
function draw(){
 if(s.gameOver)return;
 if(s.ra.length>=targetA()&&s.rb.length>=targetB()){finishGame();return;}
 if(s.used.length>=totalNeeded()){finishGame();return;}
 const pool=filteredChars();const available=pool.filter(c=>!s.used.includes(key(c)));
 if(!available.length){$("feed").textContent="⚠️ Il n'y a plus assez de personnages uniques dans cet univers.";return;}
 const c=available[Math.floor(Math.random()*available.length)];s.used.push(key(c));
 setCharacter(c);
 if(s.priorityTeam){
   $("feed").textContent=`⭐ ${c[3]} arrive. ${nm(s.priorityTeam)} a la priorité : PRENDRE ou DONNER gratuitement.`;
   showPriorityBox();
 } else {
   s.starter=s.starter==="a"?"b":"a";s.turn=s.starter;
   hidePriorityBox();$("feed").textContent=`🔥 ${c[3]} est aux enchères. ${nm(s.turn)} commence !`;
 }
 render();
}
function bid(){
 if(!s.current||s.priorityTeam||s.gameOver)return;
 const team=s.turn,money=team==="a"?s.a:s.b,min=s.currentBid+1,amount=Number($("bidInput").value);
 if(money<min){
   // The current character stays in the normal auction. The other team wins only if it already made the last bid.
   const other=team==="a"?"b":"a";
   if(s.currentBid>0){s.turn=other;$("feed").textContent=`${nm(team)} ne peut plus surenchérir. ${nm(other)} remporte le personnage à $${s.currentBid}.`;sell();return;}
   s.turn=other;$("feed").textContent=`${nm(team)} ne peut pas commencer l'enchère. ${nm(other)} peut miser.`;render();return;
 }
 if(!Number.isFinite(amount)||amount<min){alert(`La mise minimale est de ${min}$`);return;}
 if(amount>money){alert("Cette équipe n'a pas assez d'argent.");return;}
 s.currentBid=amount;s.turn=team==="a"?"b":"a";$("bidInput").value="";render();
}
function sell(){
 if(!s.current||s.currentBid<=0||s.priorityTeam||s.gameOver)return;
 const winner=s.turn==="a"?"b":"a",bid=s.currentBid;
 if((winner==="a"?s.a:s.b)<bid){alert("Cette équipe n'a pas assez d'argent.");return;}
 if(winner==="a"){s.a-=bid;s.ra.push(s.current);}else{s.b-=bid;s.rb.push(s.current);}
 const bought=s.current[3];s.round++;s.current=null;s.currentBid=0;s.active=false;
 // If exactly one team has money, that team gets priority starting with the NEXT character.
 if(s.a<=0&&s.b>0)s.priorityTeam="b";else if(s.b<=0&&s.a>0)s.priorityTeam="a";else s.priorityTeam=null;
 hidePriorityBox();$("feed").textContent=`💰 ${nm(winner)} gagne ${bought} pour $${bid}.`;
 if(s.ra.length>=targetA()&&s.rb.length>=targetB())finishGame();else draw();render();
}
function priorityChoose(action){
 if(!s.priorityTeam||!s.current||s.gameOver)return;
 let receiver=s.priorityTeam;
 if(action==="take"){if(teamFull(receiver)){action="give";}else{(receiver==="a"?s.ra:s.rb).push(s.current);}}
 if(action==="give"){
   const other=receiver==="a"?"b":"a";
   if(!teamFull(other)){(other==="a"?s.ra:s.rb).push(s.current);receiver=other;}else return;
 }
 const who=receiver;$("feed").textContent=`⭐ ${nm(s.priorityTeam)} choisit de ${action==="take"?"PRENDRE":"DONNER"} ${s.current[3]} → ${nm(who)}.`;
 s.round++;s.current=null;s.currentBid=0;s.active=false;hidePriorityBox();
 if(s.ra.length>=targetA()&&s.rb.length>=targetB()){finishGame();return;}
 draw();render();
}
function showPriorityBox(){
 let box=$("priorityBox");if(!box){box=document.createElement("div");box.id="priorityBox";box.className="priority-box";$("feed").after(box);}
 box.innerHTML=`<p><b>⭐ PRIORITÉ DE ${nm(s.priorityTeam)}</b><br>Ce personnage est le <b>prochain</b> personnage après qu'une équipe ait atteint $0.</p><div><button id="priorityTake">PRENDRE</button><button id="priorityGive">DONNER À ${nm(s.priorityTeam==="a"?"b":"a")}</button></div>`;
 $("priorityTake").onclick=()=>priorityChoose("take");$("priorityGive").onclick=()=>priorityChoose("give");box.style.display="block";
}
function hidePriorityBox(){const box=$("priorityBox");if(box)box.style.display="none";}
function finishGame(){
 s.gameOver=true;s.active=false;s.current=null;hidePriorityBox();
 const pa=s.ra.reduce((n,c)=>n+c[5],0),pb=s.rb.reduce((n,c)=>n+c[5],0),diff=Math.abs(pa-pb);
 let winner="Égalité !",cls="tie",explanation="Les deux équipes terminent avec exactement la même puissance.";
 if(pa>pb){winner=`🏆 ${nm("a")} GAGNE`;explanation=diff<=10?`${nm("a")} gagne de justesse grâce à une puissance totale légèrement supérieure.`:`${nm("a")} domine avec ${diff} points de puissance de plus.`;}else if(pb>pa){winner=`🏆 ${nm("b")} GAGNE`;explanation=diff<=10?`${nm("b")} gagne de justesse grâce à une puissance totale légèrement supérieure.`:`${nm("b")} domine avec ${diff} points de puissance de plus.`;}
 let box=$("resultBox");if(!box){box=document.createElement("div");box.id="resultBox";box.className="result-box";document.querySelector("main")?.appendChild(box)||document.body.appendChild(box);}
 box.innerHTML=`<div class="result-title">⚔️ RÉSULTAT FINAL</div><div class="result-score"><div><b>${nm("a")}</b><strong>${pa}</strong><span>points de puissance</span></div><div><b>${nm("b")}</b><strong>${pb}</strong><span>points de puissance</span></div></div><h2>${winner}</h2><p>${explanation}</p><div class="result-rosters"><div><b>${nm("a")}</b>${s.ra.map(c=>`<span>${c[3]} — ${c[5]}</span>`).join("")}</div><div><b>${nm("b")}</b>${s.rb.map(c=>`<span>${c[3]} — ${c[5]}</span>`).join("")}</div></div>`;
 $("feed").textContent="🏁 Les deux équipes sont complètes !";render();
 box.scrollIntoView({behavior:"smooth",block:"center"});
}
function resetGame(){
 s={a:20,b:20,ra:[],rb:[],turn:"a",currentBid:0,current:null,used:[],round:1,active:false,starter:"b",priorityTeam:null,gameOver:false};
 const box=$("resultBox");if(box)box.remove();hidePriorityBox();render();$("charname").textContent="Prêt pour l'enchère";$("universe").textContent="Choisissez votre sujet";$("portrait").textContent="?";$("powerbar").style.width="0";$("powernum").textContent="—";$("feed").textContent="Nouvelle partie !";
}
$("draw").onclick=draw;$("bidBtn").onclick=bid;$("bidInput").addEventListener("keydown",e=>{if(e.key==="Enter")bid()});$("pass").onclick=sell;$("reset").onclick=resetGame;
$("subject").onchange=()=>{$("animeChoice").style.display=$("subject").value==="ANIME"?"block":"none";resetGame();};$("anime").onchange=resetGame;
["inputA","inputB","playersA","playersB"].forEach(id=>$(id).oninput=()=>{if(s.used.length===0)render();});
render();
