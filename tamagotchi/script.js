//(с)Давай сегодня закостылим, а завтра нормально напишем

let food = Math.floor((Math.random() * (101 - 49) + 49));
let clean = Math.floor((Math.random() * (101 - 49) + 49));
let happiness = Math.floor((Math.random() * (101 - 49) + 49));
let health = Math.floor((Math.random() * (101 - 49) + 49));
let social = Math.floor((Math.random() * (101 - 49) + 49));
let money = Math.floor((Math.random() * (101 - 49) + 49));

// For Dog
function init() {
  sec = 0;
 let seconds = setInterval(tick, 1000);
}

function tick() {
  sec++;
  document.getElementById("second").
  childNodes[0].nodeValue = sec;
}

let a = document.getElementById("main-button1")

function blockhid1() {
  Start1();
  init();
  document.getElementsByClassName('wrapper')[0].style.display = "block";
   document.getElementById('main-button3').disabled = true;
  document.getElementById('main-button2').disabled = true;
  document.getElementById('main-button1').disabled = true;
}
a.addEventListener("click", blockhid1)
//////////////////////////////////////////////////////////////////
// For Cat
function initс() {
  secс = 0;
 let secondsс = setInterval(tickс, 1000);
}

function tickс() {
  secс++;
  document.getElementById("secondс").
  childNodes[0].nodeValue = secс;
}

let b = document.getElementById("main-button2")

function blockhid2() {
  Start2();
  initс();
  document.getElementsByClassName('wrapper-2')[0].style.display = "block";
  document.getElementById('main-button3').disabled = true;
  document.getElementById('main-button2').disabled = true;
  document.getElementById('main-button1').disabled = true;
}
b.addEventListener("click", blockhid2)
//////////////////////////////////////////////////////////////////
function initn() {
  secn = 0;
 let secondsс = setInterval(tickn, 1000);
}

function tickn() {
  secn++;
  document.getElementById("secondsn").
  childNodes[0].nodeValue = secn;
}

let  c = document.getElementById("main-button3")

function blockhid3() {
  Start3();
  initn();
  document.getElementsByClassName('wrapper-3')[0].style.display = "block";
  document.getElementById('main-button3').disabled = true;
  document.getElementById('main-button2').disabled = true;
  document.getElementById('main-button1').disabled = true;
}
c.addEventListener("click", blockhid3)





function TamagochiDog(time = 5) {


  let total = food + clean + happiness + health + social + money;

  if (food == 0 || clean == 0 || happiness == 0 || health == 0 || social == 0 || money == 0) {
    clearInterval(timer);
    clearInterval(seconds);
  }
  if (food > 70) {
    food = 75;
  }
  if (clean > 70) {
    clean = 75;
  }
  if (happiness > 70) {
    happiness = 75;
  }
  if (health > 70) {
    health = 75;
  }
  if (social > 70) {
    social = 75;
  }
  if (money > 70) {
    money = 75;
  }
 
  if (food < 5) {
    food = 5;
  }
  if (clean < 5) {
    clean = 5;
  }
  if (health < 5) {
    health = 5;
  }
  if (social < 5) {
    social = 5;
  }
  if (money < 5) {
    money = 5;
  }

  if (food <= 5 || clean <= 5 || happiness <= 5 || health <= 5 || money <= 5 || social <= 5 ) {
    document.getElementById("pet").src = "img/runaway.jpg";
    document.getElementById('run').innerHTML = 'Your pet ran away from you';
    document.getElementById("reload").style.display = "block";
    document.getElementById('eat').disabled = true;
    document.getElementById('wash').disabled = true;
    document.getElementById('walk').disabled = true;
    document.getElementById('doc').disabled = true;
    document.getElementById('bar').disabled = true;
    document.getElementById('work').disabled = true;
    document.getElementById('market').disabled = true;
    document.getElementById('business').disabled = true;
  } else if (total > 400) {
    document.getElementById("pet").src = "img/happymops.jpg";
  } else if (total > 300) {
    document.getElementById("pet").src = "img/tiredmops.jpg";
  } else if (total > 100) {
    document.getElementById("pet").src = "img/badmops.jfif";
  }

  food = food - parseInt(time);
  clean = clean - parseInt(time);
  happiness = happiness - parseInt(time);
  health = health - parseInt(time);
  social = social - parseInt(time);
  money = money - parseInt(time);


  document.getElementById('food').style.width = food + 'px';
  document.getElementById('clean').style.width = clean + 'px';
  document.getElementById('happiness').style.width = happiness + 'px';
  document.getElementById('health').style.width = health + 'px';
  document.getElementById('social').style.width = social + 'px';
  document.getElementById('money').style.width = money + 'px';


  document.getElementById('food').innerHTML = food + '%';
  document.getElementById('clean').innerHTML = clean + '%';
  document.getElementById('happiness').innerHTML = happiness + '%';
  document.getElementById('health').innerHTML = health + '%';
  document.getElementById('social').innerHTML = social + '%';
  document.getElementById('money').innerHTML = money + '%';

}


function Start1() {
 let timer = setInterval(TamagochiDog, 5000);

}

function Eat() {
  food += 30;
  clean -= 20;
}


function Wash() {
  clean += 40;
  happiness -= 20;
}


function Run() {
  happiness += 15;
  food -= 10;
}

function Doc() {
  health += 30;
  money -= 20;
}

function Bar(){
  social += 40;
  food += 10;
  money -= 20;
  health -= 10;
}

function Work(){
  money += 50;
  food -= 10;
  health -= 10;
  social -= 20;
}

function Market(){
  food += 20;
  money -= 20;
}

function Business(){
  money += 100;
  happiness +=100;
  health -= 100;
  social +=20;
}


function TamagochiCat(timec = 1) {


  let total = food + clean + happiness + health + social + money;

  if (food == 0 || clean == 0 || happiness == 0 || health == 0 || social == 0 || money == 0) {
    clearInterval(timerc);
    clearInterval(secondsс);
  }
  if (food > 100) {
    food = 101;
  }
  if (clean > 100) {
    clean = 101;
  }
  if (happiness > 100) {
    happiness = 101;
  }
   if (health > 100) {
    health = 101;
  }
  if (social > 100) {
    social = 101;
  }
  if (money > 100) {
    money = 101;
  }
  if (food <= 0) {
    food = 0;
  }
  if (clean < 0) {
    clean = 0;
  }
  if (happiness <= 0) {
    happiness = 0;
  }
  if (health <= 0) {
    health = 0;
  }
  if (social <= 0) {
    social = 0;
  }
  if (money <= 0) {
    money = 0;
  }

  if (food <= 0 || clean <= 0 || happiness <= 0 || health <= 0 || money <= 0 || social <= 0  ) {
    document.getElementById("petc").src = "img/cat4.jpg";
    document.getElementById('runc').innerHTML = 'Your pet ran away from you';
    document.getElementById("reloadc").style.display = "block";
    document.getElementById('eatc').disabled = true;
    document.getElementById('washc').disabled = true;
    document.getElementById('walkc').disabled = true;
    document.getElementById('docс').disabled = true;
    document.getElementById('barс').disabled = true;
    document.getElementById('workс').disabled = true;
    document.getElementById('marketс').disabled = true;
    document.getElementById('businessс').disabled = true;
  } else if (total > 200) {
    document.getElementById("petc").src = "img/cat1.jpg";
  } else if (total > 100) {
    document.getElementById("petc").src = "img/cat3.jpg";
  } else if (total > 50) {
    document.getElementById("petc").src = "img/cat2.jpg";
  }

  food = food - parseInt(timec);
  clean = clean - parseInt(timec);
  happiness = happiness - parseInt(timec);
  health = health - parseInt(timec);
  social = social - parseInt(timec);
  money = money - parseInt(timec);

  document.getElementById('foodc').style.width = food + 'px';
  document.getElementById('cleanc').style.width = clean + 'px';
  document.getElementById('happinessc').style.width = happiness + 'px';
  document.getElementById('healthс').style.width = health + 'px';
  document.getElementById('socialс').style.width = social + 'px';
  document.getElementById('moneyс').style.width = money + 'px';


  document.getElementById('foodc').innerHTML = food + '%';
  document.getElementById('cleanc').innerHTML = clean + '%';
  document.getElementById('happinessc').innerHTML = happiness + '%';
  document.getElementById('healthс').innerHTML = health + '%';
  document.getElementById('socialс').innerHTML = social + '%';
  document.getElementById('moneyс').innerHTML = money + '%';

}


function Start2() {
 let timerc = setInterval(TamagochiCat, 1000);

}

function Eatc() {
  food += 30;
  clean -= 20;
}


function Washc() {
  clean += 40;
  happiness -= 20;
}


function Runcс() {
  happiness += 15;
  food -= 10;
}
function Docс() {
  health += 30;
  money -= 20;
}

function Barс(){
  social += 40;
  food += 10;
  money -= 20;
  health -= 10;
}

function Workс(){
  money += 50;
  food -= 10;
  health -= 10;
  social -= 20;
}

function Marketс(){
  food += 20;
  money -= 20;
}

function Businessс(){
  money += 100;
  happiness +=100;
  health -= 100;
  social +=20;
}
function Eatn() {
  food += 30;
  clean -= 20;
}


function TamagochiNinja(timen = 7) {


  let total = food + clean + happiness + health + social + money;

  if (food == 0 || clean == 0 || happiness == 0 || health == 0 || social == 0 || money == 0) {
    clearInterval(timern);
    clearInterval(secondsn);
  }
  if (food > 100) {
    food = 101;
  }
  if (clean > 100) {
    clean = 101;
  }
  if (happiness > 100) {
    happiness = 101;
  }
   if (health > 100) {
    health = 101;
  }
  if (social > 100) {
    social = 101;
  }
  if (money > 100) {
    money = 101;
  }
  if (food <= 7) {
    food = 0;
  }
  if (clean < 7) {
    clean = 0;
  }
  if (happiness <= 7) {
    happiness = 7;
  }
  if (health <= 7) {
    health = 0;
  }
  if (social <= 7) {
    social = 0;
  }
  if (money <= 7) {
    money = 0;
  }

  if (food <= 0 || clean <= 0 || happiness <= 0 || health <= 0 || money <= 0 || social <= 0  ) {
    document.getElementById("petn").src = "img/hero.png";
    document.getElementById('runn').innerHTML = 'Your pet ran away from you';
    document.getElementById("reloadn").style.display = "block";
    document.getElementById('eatn').disabled = true;
    document.getElementById('washn').disabled = true;
    document.getElementById('walkn').disabled = true;
    document.getElementById('docn').disabled = true;
    document.getElementById('barn').disabled = true;
    document.getElementById('workn').disabled = true;
    document.getElementById('marketn').disabled = true;
    document.getElementById('businessn').disabled = true;
  } 

  food = food - parseInt(timen);
  clean = clean - parseInt(timen);
  happiness = happiness - parseInt(timen);
  health = health - parseInt(timen);
  social = social - parseInt(timen);
  money = money - parseInt(timen);

  document.getElementById('foodn').style.width = food + 'px';
  document.getElementById('cleann').style.width = clean + 'px';
  document.getElementById('happinessn').style.width = happiness + 'px';
  document.getElementById('healthn').style.width = health + 'px';
  document.getElementById('socialn').style.width = social + 'px';
  document.getElementById('moneyn').style.width = money + 'px';


  document.getElementById('foodn').innerHTML = food + '%';
  document.getElementById('cleann').innerHTML = clean + '%';
  document.getElementById('happinessn').innerHTML = happiness + '%';
  document.getElementById('healthn').innerHTML = health + '%';
  document.getElementById('socialn').innerHTML = social + '%';
  document.getElementById('moneyn').innerHTML = money + '%';

}


function Start3() {
let  timern = setInterval(TamagochiNinja, 7000);

}




function Washn() {
  clean += 40;
  happiness -= 20;
}


function Runcn() {
  happiness += 15;
  food -= 10;
}
function Docn() {
  health += 30;
  money -= 20;
}

function Barn(){
  social += 40;
  food += 10;
  money -= 20;
  health -= 10;
}

function Workn(){
  money += 50;
  food -= 10;
  health -= 10;
  social -= 20;
}

function Marketn(){
  food += 20;
  money -= 20;
}

function Businessn(){
  money += 100;
  happiness +=100;
  health -= 100;
  social +=20;
}

