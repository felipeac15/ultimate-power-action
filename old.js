const chars=[
["ANIME","Naruto","TRÈS OP","Madara Uchiha","Naruto",98],["ANIME","Naruto","TRÈS OP","Naruto Uzumaki","Naruto",96],["ANIME","Naruto","FORT","Sasuke Uchiha","Naruto",91],["ANIME","Naruto","FORT","Itachi Uchiha","Naruto",89],["ANIME","Naruto","MOYENNEMENT FORT","Kakashi Hatake","Naruto",78],["ANIME","Naruto","MOYENNEMENT FORT","Might Guy","Naruto",80],
["ANIME","Dragon Ball","TRÈS OP","Goku","Dragon Ball",100],["ANIME","Dragon Ball","TRÈS OP","Vegeta","Dragon Ball",98],["ANIME","Dragon Ball","TRÈS OP","Broly","Dragon Ball",99],["ANIME","Dragon Ball","FORT","Gohan","Dragon Ball",91],["ANIME","Dragon Ball","FORT","Frieza","Dragon Ball",90],["ANIME","Dragon Ball","MOYENNEMENT FORT","Piccolo","Dragon Ball",79],
["ANIME","One Piece","TRÈS OP","Kaido","One Piece",99],["ANIME","One Piece","TRÈS OP","Shanks","One Piece",97],["ANIME","One Piece","TRÈS OP","Luffy","One Piece",96],["ANIME","One Piece","FORT","Blackbeard","One Piece",94],["ANIME","One Piece","FORT","Zoro","One Piece",88],["ANIME","One Piece","MOYENNEMENT FORT","Sanji","One Piece",83],
["ANIME","Jujutsu Kaisen","TRÈS OP","Sukuna","Jujutsu Kaisen",100],["ANIME","Jujutsu Kaisen","TRÈS OP","Gojo Satoru","Jujutsu Kaisen",99],["ANIME","Jujutsu Kaisen","FORT","Yuta Okkotsu","Jujutsu Kaisen",91],["ANIME","Jujutsu Kaisen","FORT","Toji Fushiguro","Jujutsu Kaisen",89],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Maki Zenin","Jujutsu Kaisen",82],["ANIME","Jujutsu Kaisen","MOYENNEMENT FORT","Yuji Itadori","Jujutsu Kaisen",80],
["ANIME","Demon Slayer","TRÈS OP","Yoriichi","Demon Slayer",99],["ANIME","Demon Slayer","TRÈS OP","Muzan Kibutsuji","Demon Slayer",98],["ANIME","Demon Slayer","FORT","Kokushibo","Demon Slayer",94],["ANIME","Demon Slayer","FORT","Akaza","Demon Slayer",90],["ANIME","Demon Slayer","MOYENNEMENT FORT","Tanjiro Kamado","Demon Slayer",82],["ANIME","Demon Slayer","MOYENNEMENT FORT","Giyu Tomioka","Demon Slayer",80],
["ANIME","Solo Leveling","TRÈS OP","Sung Jinwoo","Solo Leveling",100],["ANIME","Solo Leveling","TRÈS OP","Antares","Solo Leveling",99],["ANIME","Solo Leveling","FORT","Beru","Solo Leveling",89],["ANIME","Solo Leveling","FORT","Igris","Solo Leveling",86],["ANIME","Solo Leveling","MOYENNEMENT FORT","Thomas Andre","Solo Leveling",84],["ANIME","Solo Leveling","MOYENNEMENT FORT","Cha Hae-In","Solo Leveling",76],
["ANIME","My Hero Academia","TRÈS OP","All Might","My Hero Academia",97],["ANIME","My Hero Academia","TRÈS OP","Shigaraki","My Hero Academia",98],["ANIME","My Hero Academia","FORT","Deku","My Hero Academia",91],["ANIME","My Hero Academia","FORT","Endeavor","My Hero Academia",84],["ANIME","My Hero Academia","MOYENNEMENT FORT","Bakugo","My Hero Academia",82],["ANIME","My Hero Academia","MOYENNEMENT FORT","Todoroki","My Hero Academia",79],
["ANIME","Attack on Titan","TRÈS OP","Eren Yeager","Attack on Titan",94],["ANIME","Attack on Titan","TRÈS OP","Levi Ackerman","Attack on Titan",92],["ANIME","Attack on Titan","FORT","Reiner Braun","Attack on Titan",82],["ANIME","Attack on Titan","FORT","Annie Leonhart","Attack on Titan",81],["ANIME","Attack on Titan","MOYENNEMENT FORT","Mikasa Ackerman","Attack on Titan",80],["ANIME","Attack on Titan","MOYENNEMENT FORT","Armin Arlert","Attack on Titan",73],["ANIME","Bleach","TRÈS OP","Ichigo Kurosaki","Bleach",99],["ANIME","Bleach","TRÈS OP","Aizen Sosuke","Bleach",100],["ANIME","Bleach","TRÈS OP","Yhwach","Bleach",100],["ANIME","Bleach","FORT","Kenpachi Zaraki","Bleach",94],["ANIME","Bleach","FORT","Byakuya Kuchiki","Bleach",86],["ANIME","Bleach","MOYENNEMENT FORT","Toshiro Hitsugaya","Bleach",82],
["ANIME","Black Clover","TRÈS OP","Asta","Black Clover",96],["ANIME","Black Clover","TRÈS OP","Lucius Zogratis","Black Clover",99],["ANIME","Black Clover","FORT","Yuno","Black Clover",93],["ANIME","Black Clover","FORT","Yami Sukehiro","Black Clover",88],["ANIME","Black Clover","MOYENNEMENT FORT","Noelle Silva","Black Clover",80],["ANIME","Black Clover","MOYENNEMENT FORT","Mereoleona Vermillion","Black Clover",84],
["ANIME","7 Deadly Sins","TRÈS OP","Meliodas","7 Deadly Sins",99],["ANIME","7 Deadly Sins","TRÈS OP","Escanor","7 Deadly Sins",98],["ANIME","7 Deadly Sins","TRÈS OP","Demon King","7 Deadly Sins",100],["ANIME","7 Deadly Sins","FORT","Ban","7 Deadly Sins",91],["ANIME","7 Deadly Sins","FORT","King","7 Deadly Sins",87],["ANIME","7 Deadly Sins","MOYENNEMENT FORT","Diane","7 Deadly Sins",80],
["MARVEL","","TRÈS OP","Thanos","Marvel",100],["MARVEL","","TRÈS OP","Hulk","Marvel",97],["MARVEL","","TRÈS OP","Thor","Marvel",95],["MARVEL","","FORT","Doctor Strange","Marvel",93],["MARVEL","","FORT","Spider-Man","Marvel",82],["MARVEL","","MOYENNEMENT FORT","Black Panther","Marvel",76],["MARVEL","","MOYENNEMENT FORT","Wolverine","Marvel",84],
["DC","","TRÈS OP","Superman","DC",100],["DC","","TRÈS OP","Darkseid","DC",99],["DC","","TRÈS OP","Flash","DC",97],["DC","","FORT","Wonder Woman","DC",90],["DC","","FORT","Batman","DC",77],["DC","","MOYENNEMENT FORT","Green Arrow","DC",69],
["ANIMAUX TERRESTRES","","TRÈS OP","Éléphant d'Afrique","Animal terrestre",91],["ANIMAUX TERRESTRES","","TRÈS OP","Ours polaire","Animal terrestre",88],["ANIMAUX TERRESTRES","","FORT","Tigre","Animal terrestre",82],["ANIMAUX TERRESTRES","","FORT","Gorille","Animal terrestre",78],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Loup","Animal terrestre",69],["ANIMAUX TERRESTRES","","MOYENNEMENT FORT","Hyène","Animal terrestre",65],
["ANIMAUX AQUATIQUES","","TRÈS OP","Orque","Animal aquatique",94],["ANIMAUX AQUATIQUES","","TRÈS OP","Cachalot","Animal aquatique",90],["ANIMAUX AQUATIQUES","","FORT","Grand requin blanc","Animal aquatique",85],["ANIMAUX AQUATIQUES","","FORT","Hippopotame","Animal aquatique",80],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Crocodile marin","Animal aquatique",74],["ANIMAUX AQUATIQUES","","MOYENNEMENT FORT","Poulpe géant","Animal aquatique",65]
];
let s={a:20,b:20,ra:[],rb:[],turn:"a",bid:0,current:null,used:[],round:1,active:false,starter:"a",gameStarted:false};
const $=x=>document.getElementById(x), nm=t=>$(t==="a"?"inputA":"inputB").value||("Équipe "+t.toUpperCase());
function maxPlayers(){
 return Math.max(Number($("playersA").value),Number($("playersB").value));
}
function totalNeeded(){
 return Number($("playersA").value)+Number($("playersB").value);
}
function filteredChars(){
 const subject=$("subject").value, anime=$("anime").value;
 return chars.filter(c=>c[0]===subject && (subject!=="ANIME" || c[1]===anime));
}
function render(){
 $("nameA").textContent=nm("a");$("nameB").textContent=nm("b");
 $("budgetA").textContent="$"+s.a;$("budgetB").textContent="$"+s.b;
 $("sizeA").textContent=s.ra.length+"/"+$("playersA").value;$("sizeB").textContent=s.rb.length+"/"+$("playersB").value;
 $("players").textContent=$("playersA").value+" vs "+$("playersB").value;
 $("formatText").textContent=$("playersA").value+" vs "+$("playersB").value;
 $("charTotal").textContent=totalNeeded()+" personnages";
 $("round").textContent=s.round;$("count").textContent=s.used.length+" / "+totalNeeded();
 $("turn").textContent=nm(s.turn);$("bid").textContent="$"+s.bid;
 $("status").textContent=s.active?"ENCHÈRE":"PRÊT";
 $("rosterA").innerHTML=s.ra.length?s.ra.map(x=>`<div class="player"><b>${x[3]}</b><small>$${x[6]}</small></div>`).join(""):`<div class="empty">Aucun personnage acheté</div>`;
 $("rosterB").innerHTML=s.rb.length?s.rb.map(x=>`<div class="player"><b>${x[3]}</b><small>$${x[6]}</small></div>`).join(""):`<div class="empty">Aucun personnage acheté</div>`;
 const min=s.bid===0?1:s.bid+1;$("minimum").textContent="Minimum : $"+min;
}
function draw(){
 const target=totalNeeded();
 if(s.used.length>=target){$("feed").textContent="🏁 Le nombre de personnages prévu est atteint : "+target+" !";return}
 if(s.a<=0&&s.b<=0){$("feed").textContent="Plus de budget.";return}
 const pool=filteredChars();
 const available=pool.map((x,i)=>[x,i]).filter(([x,i])=>!s.used.includes(i));
 if(!available.length){$("feed").textContent="Il n'y a plus assez de personnages dans ce sujet.";return}
 const [c,i]=available[Math.floor(Math.random()*available.length)];
 s.used.push(i);s.current=c;s.bid=0;s.active=true;
 s.starter=s.starter==="a"?"b":"a";s.turn=s.starter;
 $("topic").textContent=c[0]==="ANIME"?"ANIME • "+c[1]:c[0];
 $("rarity").textContent=c[2];$("charname").textContent=c[3];$("universe").textContent=c[4];
 $("portrait").textContent=c[3].split(" ").map(w=>w[0]).join("").slice(0,3).toUpperCase();
 $("powernum").textContent=c[5];$("powerbar").style.width=c[5]+"%";$("bidInput").value="";
 $("feed").textContent="🔥 "+c[3]+" est aux enchères. "+nm(s.turn)+" commence !";render();$("bidInput").focus();
}
function bid(){
  if(!s.current) return;

  const team = s.turn;
  const money = team==="a" ? s.a : s.b;
  const min = s.currentBid === 0 ? 1 : s.currentBid + 1;
  const amount = Number(document.getElementById("bidInput").value);

  // If the current team cannot bid, the other team gets priority.
  if(money <= 0 || money < min){
    s.priority = team === "a" ? "b" : "a";
    s.priorityMode = true;
    render();
    return;
  }

  if(!Number.isFinite(amount) || amount < min){
    alert(`La mise minimale est de ${min}$`);
    return;
  }

  if(amount > money){
    alert("Cette équipe n'a pas assez d'argent.");
    return;
  }

  if(team==="a") s.currentBid = amount;
  else s.currentBid = amount;

  s.turn = team === "a" ? "b" : "a";
  s.priority = null;
  s.priorityMode = false;
  render();
}
function sell(){
  if(!s.current) return;

  // Normal auction: the last team to bid wins.
  // If the team whose turn it is has no money, the other team gets priority
  // and can choose the current character or pass to the next one.
  if(s.currentBid === 0){
    alert("L'enchère n'a pas encore commencé.");
    return;
  }

  const winner = s.turn === "a" ? "b" : "a";
  const bid = s.currentBid;

  if((winner==="a" ? s.a : s.b) < bid){
    alert("Cette équipe n'a pas assez d'argent.");
    return;
  }

  if(winner==="a"){
    s.a -= bid;
    s.ra.push(s.current);
  } else {
    s.b -= bid;
    s.rb.push(s.current);
  }

  s.round++;
  s.current = null;
  s.currentBid = 0;
  s.bidInput = "";
  draw();
  render();
}
function priorityTake(){
  if(!s.current || !s.priorityMode) return;

  const team = s.priority;
  if(team === "a") s.ra.push(s.current);
  else s.rb.push(s.current);

  s.round++;
  s.current = null;
  s.currentBid = 0;
  s.bidInput = "";
  s.priorityMode = false;
  s.priority = null;
  draw();
  render();
}

function priorityPass(){
  if(!s.current || !s.priorityMode) return;

  s.round++;
  s.current = null;
  s.currentBid = 0;
  s.bidInput = "";
  s.priorityMode = false;
  s.priority = null;
  draw();
  render();
}

function resetGame(){
 s={a:20,b:20,ra:[],rb:[],turn:"a",bid:0,current:null,used:[],round:1,active:false,starter:"a",gameStarted:false};
 render();$("charname").textContent="Prêt pour l'enchère";$("universe").textContent="Choisissez votre sujet";$("portrait").textContent="?";$("powerbar").style.width="0";$("powernum").textContent="—";$("feed").textContent="Nouvelle partie !";
}
$("draw").onclick=draw;$("bidBtn").onclick=bid;$("bidInput").addEventListener("keydown",e=>{if(e.key==="Enter")bid()});$("pass").onclick=sell;$("reset").onclick=resetGame;
$("subject").onchange=()=>{ $("animeChoice").style.display=$("subject").value==="ANIME"?"block":"none";resetGame(); };
$("anime").onchange=resetGame;
["inputA","inputB","playersA","playersB"].forEach(id=>$(id).oninput=()=>{if(s.used.length===0)render()});
render();
