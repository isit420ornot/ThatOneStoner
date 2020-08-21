var age = null;
var ailment = "heart";
var ailment2 = null;
var recommendation = null;
var path = null;

function enter() {
  document.getElementById("enterLeave").style.display = "none";

  document.getElementById("introContainter").style.display = "none";

  document.getElementById("descriptioncontainer").style.display = "block";

  mainMain.style.backgroundImage = "url(images/javascript/closerOz.png)";

  console.log("Here we go again... let's see if this pothead will notice?!?!");
}

function leave() {
  alert("Well this is awkward... I didn't count on anyone clicking leave... I guess you should either rethink your answer or navigate to where ever you'd rather be...")
}

function sure() {
  mainMain.style.backgroundImage = "url(images/javascript/ageGuard.png)";

  document.getElementById("descriptioncontainer").style.display = "none";

  document.getElementById("ageQuestion").style.display = "block";

  document.getElementById("ageButtons").style.display = "block";
}

function nope() {
  alert("Why are you even here??? Once again... I didn't plan on any one to give up this early... you must really suck at choose your own adventure books...")

  alert("Go on... LEAVE... I'm not going to do it for you...")
}

function whyNot() {
  console.log("I don't know how this site could be age inappropriate... being that it's about education after all... but the way people get these days... you never know???");

  //age = prompt("Are you even old enough to be on this site???");

  document.getElementById("ageQuestion").style.display = "none";

  document.getElementById("ageButtons").style.display = "none";

  document.getElementById("hallwayAgeResults").style.display = "block";

  mainMain.style.backgroundImage = "url(images/javascript/hallway.png)";
}

function noTrust() {
  alert("I don't know you... hell... you can make up a number... I'm not checking ID... but... if that's how you feel... GET!!!");
}


function keepGoing() {
  mainMain.style.backgroundImage = "url(images/javascript/preshowChamber.png)";

  document.getElementById("hallwayAgeResults").style.display = "none";

  document.getElementById("delayAnimation").style.display = "block";

  setTimeout(() => {
    document.getElementById("delayAnimation").style.display = "none";
  }, 1);

  setTimeout(() => {
    document.getElementById("meOzHead").style.display = "block";
  }, 2);


  setTimeout(() => {
    document.getElementById("ozChamberContent1").style.display = "block";
  }, 3);

  setTimeout(() => {
    document.getElementById("ozChamberContent1").style.display = "none";
  }, 4);

  setTimeout(() => {
    document.getElementById("ozChamberContent2").style.display = "block";
  }, 5);

  setTimeout(() => {
    document.getElementById("chamberAnswer1").style.display = "block";
  }, 6);

}

function yourBusiness() {
  alert("What... does it have something to do with you butt... or your junk... something you're too ashamed to admit to???");
}

function answer() {
  alert("This will be an prompt for the real deal")

  document.getElementById("ozChamberContent2").style.display = "none";

  setTimeout(() => {
    document.getElementById("chamberAnswer1").style.display = "none";
  }, 6);

  document.getElementById('insertAilment').textContent = ailment;

  document.getElementById("ozChamberContent3").style.display = "block";

  setTimeout(() => {
    document.getElementById("chamberAnswer2").style.display = "block";
  }, 12);
}


function tooScared() {
  alert("Yeah yeah yeah... of course you'd be the one to chicken out right before getting to the goal... I bet you've been trying to leave this entire time??? You know where the address bar is located... well... at least most of you generations do...");
}

function showMe() {
  document.getElementById("ozChamberContent3").style.display = "none";

  setTimeout(() => {
    document.getElementById("chamberAnswer2").style.display = "none";
  }, 12);

  document.getElementById("ozChamberContent4").style.display = "block";

  setTimeout(() => {
    document.getElementById("chamberAnswer3").style.display = "block";
  }, 12);
}

function imGood() {
  alert("Again... why are you even here??? And how did you get this far just to give up???")
}



function thanks() {

  document.getElementById("meOzHead").style.display = "none";

  mainMain.style.backgroundImage = "url(images/javascript/theTrueConverter.png)";

  document.getElementById("ozChamberContent4").style.display = "none";

  setTimeout(() => {
    document.getElementById("chamberAnswer3").style.display = "none";
  }, 12);

  document.getElementById("converterContainer").style.display = "block";


}

function whatever() {
  alert("Fine... let's just get to the conversion in order to get this interaction over with...")

  document.getElementById("ozChamberContent4").style.display = "none";

  setTimeout(() => {
    document.getElementById("chamberAnswer3").style.display = "none";
  }, 12);

}

function dbButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '.035';
  document.getElementsByName('grams')[0].placeholder = '1';
  document.getElementsByName('lbs')[0].placeholder = '.002';
}

function dsButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '.07';
  document.getElementsByName('grams')[0].placeholder = '2';
  document.getElementsByName('lbs')[0].placeholder = '.004';
}

function eighthButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '1.25';
  document.getElementsByName('grams')[0].placeholder = '3.5';
  document.getElementsByName('lbs')[0].placeholder = '.007';
}

function qButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '.25';
  document.getElementsByName('grams')[0].placeholder = '7';
  document.getElementsByName('lbs')[0].placeholder = '.015';
}

function halfButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '.5';
  document.getElementsByName('grams')[0].placeholder = '14';
  document.getElementsByName('lbs')[0].placeholder = '.03';
}

function lidButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '1';
  document.getElementsByName('grams')[0].placeholder = '28';
  document.getElementsByName('lbs')[0].placeholder = '.062';
}

function zipButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '16';
  document.getElementsByName('grams')[0].placeholder = '453';
  document.getElementsByName('lbs')[0].placeholder = '1';
}

function kiloButton() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value = null;
  document.getElementsByName('oz')[0].placeholder = '35.27';
  document.getElementsByName('grams')[0].placeholder = '1000';
  document.getElementsByName('lbs')[0].placeholder = '2.2';
}

function convertOz() {
  var grams = document.getElementById('gramsInput').value = null;
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value;



  var grams = oz * 28.35;
  var lbs = oz * 0.0625;

  document.getElementsByName('grams')[0].placeholder = grams;
  document.getElementsByName('lbs')[0].placeholder = lbs;

}

function convertGrams() {
  var lbs = document.getElementById('lbsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var grams = document.getElementById('gramsInput').value;


  var oz = grams * 0.03527396195;
  var lbs = grams * 0.002205;

  document.getElementsByName('oz')[0].placeholder = oz;
  document.getElementsByName('lbs')[0].placeholder = lbs;


}

function convertLbs() {
  var grams = document.getElementById('gramsInput').value = null;
  var oz = document.getElementById('ozInput').value = null;
  var lbs = document.getElementById('lbsInput').value;


  var oz = lbs * 16;
  var grams = lbs * 453.59237;

  document.getElementsByName('oz')[0].placeholder = oz;
  document.getElementsByName('grams')[0].placeholder = grams;

}

function howMuch() {

  mainMain.style.backgroundImage = "url(images/javascript/behindTheCurtain.png)";

  document.getElementById("converterContainer").style.display = "none";

  document.getElementById("meOzHead2").style.display = "block";

  setTimeout(() => {
    document.getElementById("smallOops").style.display = "block";
  }, 100);

  setTimeout(() => {
    document.getElementById("bigOops").style.display = "block";
  }, 100);

  setTimeout(() => {
    document.getElementById("smallOops").style.display = "none";
  }, 300);

  setTimeout(() => {
    document.getElementById("bigOops").style.display = "none";
  }, 300);

  setTimeout(() => {
    document.getElementById("meOzHead2").style.display = "none";
  }, 100);

  var spendingAmount = document.getElementById('ammountToSpend').value;
  var topShelf = spendingAmount / 350;
  var midShelf = spendingAmount / 200;
  var bottomShelf = spendingAmount / 100;

  setTimeout(() => {
    mainMain.style.backgroundImage = "url(images/javascript/preshowChamber.png)";
  }, 300);

  setTimeout(() => {
    document.getElementById("meOzHead").style.display = "block";
  }, 300);

  setTimeout(() => {
    document.getElementById("ignoreText").style.display = "block";
  }, 300);

  setTimeout(() => {
    document.getElementById("ignoreText").style.display = "none";
  }, 400);

  setTimeout(() => {
    document.getElementById("whereWereWe").style.display = "block";
  }, 500);

  setTimeout(() => {
    document.getElementById("resultsRevealAnswer").style.display = "block";
  }, 500);

  document.getElementById('yourAmmount').textContent = "$" + spendingAmount;
  document.getElementById('topShelfAmmount').textContent = topShelf + "Oz.s...";
  document.getElementById('midShelfAmmount').textContent = midShelf + "Oz.s...";
  document.getElementById('bottomShelfAmmount').textContent = bottomShelf + "Oz.s...";
}

function youAreHim() {
  mainMain.style.backgroundImage = "url(images/javascript/javaOZbg.png)";

  document.getElementById("meOzHead").style.display = "none";

  document.getElementById("whereWereWe").style.display = "none";

  document.getElementById("resultsRevealAnswer").style.display = "none";

  document.getElementById("youCaughtTheConverter").style.display = "block";

}

function youAreAStoner() {
  mainMain.style.backgroundImage = "url(images/javascript/javaOZbg.png)";

  document.getElementById("meOzHead").style.display = "none";

  document.getElementById("whereWereWe").style.display = "none";

  document.getElementById("resultsRevealAnswer").style.display = "none";

  document.getElementById("youCaughtThatOneStoner").style.display = "block";
}

function bye() {
  mainMain.style.backgroundImage = "url(images/javascript/goodbye.png)";

  document.getElementById("writtenBy").style.display = "block";

  document.getElementById("youCaughtTheConverter").style.display = "none";

  document.getElementById("youCaughtThatOneStoner").style.display = "none";

}


function myFunction() {

  if (age < 18) {
    alert("You move along now... this site mentions the use of a medicinal plant that grows right out of the ground... I'd hate for a child to find out that there are healthier options than dangerous pharmacuticals... that also may be recreational...");

    console.log("I'm sure if you're under 18 and found this log... you are ready for weed... and probably are high while reading this...");

    return;

  } else if (age >= 18 && age <= 23) {
    alert("Greetings Gen Z Stoner!!! If I have a piece of advice for the youth... it would be... do get too lost in the recreational... and there are many ways to learn that don't require school...");

    console.log("I wonder if not being a parent makes me more hopeful for the future when it comes to the youth of this world... I never had a pony in the race... so I never have to deal with the fear that my offspring will do something weird...");

    ailment = prompt("Why do you seek this weed???");

    console.log("...I wonder how many of these younger partakers will get the reference from having actually seen the film and how many will only understand it as a pop-culture reference from another time???");
  } else if (age >= 24 && age <= 39) {
    alert("Greetings millenial marijuana smokers... I can't believe that you've gotten so old... it's also hard to believe that the oldest of you are my peers...");

    console.log("I always found it odd that the biggest bashers of the millenial generation are the generations who raised them... I'm sure they'll get the reference... and understand why they just may not care...");

    ailment = prompt("Why do you seek this weed???");

    console.log("I'm also willing to bet that outside of the class... a millenial will be the first to discover this conversation taking place in the console log...");
  } else if (age >= 40 && age <= 55) {
    alert("Greetings kindred GenX toker... if you really are a peer... you're now smoking to come with joint pain and a need for sleep over any recreational needs any more... but... we still try!!!");

    console.log("I think GenXers may understand Oz the most... a generation young enough to not be ground into the time period when the tornado that was the internet touched ground... normal still wasn't normal to us when the new normal set in...");

    ailment = prompt("Why do you seek this weed???");

    console.log("I bet the kids who saw post 9/11 America to be normal enough to settle in to the prime influential time of their lives and will now have to readjust to a post-pandemic life will also understand...");
  } else if (age >= 56 && age <= 74) {
    alert("Okay Boomer... You found this site... you too can play along...");

    console.log("There's no way in hell a Boomer will ever find this log... but I'm willing to bet that everyone in this age group will know one of the four words I'm looking for...");

    ailment = prompt("Why do you seek this weed???");

    console.log("I find it odd that my aging punk rock friends are more likely to be vegan and growing their own food... than any of the elders who like to brang about their hippy youth...");
  } else if (age > 74) {
    alert("Yeah right... but if you're that old and on this site... good on you...");

    console.log("Alright... some dinosaur may stumble on the this stoner themed site thinking it's caveman related... and they need someone to fix their boulder abode... but there is no way anyone this old will stumble upon the log section of this page...");

    ailment = prompt("Why do you seek this weed???");

    console.log("It funny how The Greatest Generation created a world filled with nothing but narcisists...");
  } else {

    alert("Did you even use a number??? Let's try this again...");

    console.log("Who knows??? Maybe they got super high and passed out on the keyboard... or maybe they've got OCD like me and have to type out their numbers...");
  }







  if (ailment.search(/home/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment);

    console.log("There is no place like home... and there is no strain like ########### to cure homesickness...");

    recommendation = prompt("Would you like a recommendation before using the conversion machine if planning a purchase???");

    console.log("Then again... almost any strain is a warm blanket to me these days...");

    path = "home";

  } else if (ailment.search(/heart/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment);

    console.log("Whether your heart ache from a condition or over reasons of love... ########## is might be a good strain for your heart issues...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("Again... any strain works for The Great Converter of Oz. since I heart marijuana...");

    path = "heart";

  } else if (ailment.search(/brain/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment);

    console.log("Look like you may have... went insane... and therefor... got no brain... well ###### is a strain that might get you in a more cerebral state of mind... in order to help you find your marbles...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("I lost my mind once... but some day I bet it will come back...");

    path = "brains";

  } else if (ailment.search(/courage/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment);

    console.log("Whether you are afraid to find a mate... or afraid to stand up to a foe... #### is a strain that might give you a boost in courage...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("Sometimes it takes all the courage in the world just to admit that you're scared...");

    path = "courage";

  } else {

    alert("Let's try this again... there are four specific reason that I'm looking for...");

    console.log("Alright... you caught me... I am just JavaScript and not really AI... there are a few specific words that I am looking for... think why others might have visited my next door neighbor... The Wiz!!!");

    ailment2 = prompt("Clue... homesickness counts as a reason...");

    console.log("Ignore the code behind the curtain... it wasn't written by a great... it was written by another average man...");
  }

  if (ailment2 == null) {
    ailment2 = ailment;
  } else if

  (ailment2 != null && ailment2.search(/home/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment2);

    console.log("There is no place like home... and there is no strain like ########### to cure homesickness...");

    recommendation = prompt("Would you like a recommendation before using the conversion machine if planning a purchase???");

    console.log("Then again... almost any strain is a warm blanket to me these days...");

    path = "home";

  } else if (ailment2 != null && ailment2.search(/heart/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment2);

    console.log("Whether your heart ache from a condition or over reasons of love... ########## is might be a good strain for your heart issues...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("Again... any strain works for The Great Converter of Oz. since I heart marijuana...");

    path = "heart";

  } else if (ailment2 != null && ailment2.search(/brain/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment2);

    console.log("Look like you may have... went insane... and therefor... got no brain... well ###### is a strain that might get you in a more cerebral state of mind... in order to help you find your marbles...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("I lost my mind once... but some day I bet it will come back...");

    path = "brains";

  } else if (ailment2 != null && ailment2.search(/courage/i) != -1) {

    alert("Ah... perfect... there is a strain for... " + ailment2);

    console.log("Whether you are afraid to find a mate... or afraid to stand up to a foe... #### is a strain that might give you a boost in courage...");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("Sometimes it takes all the courage in the world just to admit that you're scared...");

    path = "courage";

  } else {

    alert("So may be you didn't see the movie in question... that's fine... we can move forward either way...");

    console.log("How could you not get the reference... you are either pretty young or very high!!!");

    recommendation = prompt("Would you mind a recommendation before using the conversion machine if planning a purchase???");

    console.log("Hopefully it's the latter and you're high enough to buy the offer I provide as my recommendaton... this would help out both of our causes...");

    path = "rando";
  }

  if (recommendation.search(/yes/i) != -1 ||
    recommendation.search(/yeah/i) != -1 ||
    recommendation.search(/sure/i) != -1 ||
    recommendation.search(/why not/i) != -1 ||
    recommendation.search(/ok/i) != -1 ||
    recommendation.search(/okay/i) != -1) {

    recommendation = "yes";

  } else if (recommendation.search(/no/i) != -1 ||
    recommendation.search(/nah/i) != -1 ||
    recommendation.search(/nope/i) != -1 ||
    recommendation.search(/not today/i) != -1 ||
    recommendation.search(/fuck off/i) != -1 ||
    recommendation.search(/hell no/i) != -1) {

    recommendation = "no";

  } else {

    recommendation = "unclear";
  }

  if (recommendation == "yes" && path == "home") {

    alert("Alright Dorothy... you're feeling homesick... some Indica dominate... Cherry Pie... may help you image the comfort food from your youth... after consuming this strain you may find yourself all cozy in bed... and you won't even have to click your heels...");

  } else if (recommendation == "yes" && path == "heart") {

    alert("Alright Tin Man... you feel like there is something up with your ticker... though street crack might not be idle for hypertension... you might be surprised to find that the Sativa leaning strain... Green Crack... may be just what you need to keep going throughout your day...");

  } else if (recommendation == "yes" && path == "brains") {

    alert("Arlight Scarecrow... you may the one who is missed most of all... probably because of your silly ways... remember... silly doesn't always mean brainless... you might want to try the strain... Blue Dreams... the rush of creative thoughts may be what you need to unlock the puzzles that keep your mind feeling stuck...");

  } else if (recommendation == "yes" && path == "courage") {

    alert("Alright Lion.... as a big guy who wouldn't hurt a fly... I realate to the anxieties that you have that may often be confused for a lack of courage... you might want to try a strain called... Critical Mass... that's high in both THC and CBD... a mixture fit for a king!!!");

  } else if (recommendation == "yes" && path == "rando") {

    alert("Alright... you must be Toto the dog... well if that is the cast... might I recommend Cannapets???");

  } else if (recommendation == "no" && path == "home") {

    alert("Alright reluctant Dorothy... I have an assignment to fulfill... so... I will make this recommendation anyways... the Indica dominate Cherry Pie strain may help you image the comfort food from your youth... after consuming this strain you may find yourself all cozy in bed... and you won't even have to click your heels...");

  } else if (recommendation == "no" && path == "heart") {

    alert("Alright reluctant Tin Man... I have an assignment to fulfill... so... I will make this recommendation anyways... you feel like there is something up with your ticker... though street crack might not be idle for hypertension... you might be surprised to find that the Sativa leaning strain... Green Crack... may be just what you need to keep going throughout your day...");

  } else if (recommendation == "no" && path == "brains") {

    alert("Alright reluctant Scarecrow... I have an assignment to fulfill... so... I will make this recommendation anyways... you may the one who is missed most of all... probably because of your silly ways... remember... silly doesn't always mean brainless... you might want to try the strain... Blue Dreams... the rush of creative thoughts may be what you need to unlock the puzzles that keep your mind feeling stuck...");

  } else if (recommendation == "no" && path == "courage") {

    alert("Alright reluctant Lion... I have an assignment to fulfill... so... I will make this recommendation anyways... as a big guy who wouldn't hurt a fly... I realate to the anxieties that you have that may often be confused for a lack of courage... you might want to try a strain called... Critical Mass... that's high in both THC and CBD... a mixture fit for a king!!!");

  } else if (recommendation == "no" && path == "rando") {

    alert("Alright... you must be Toto the reluctant dog... well... if that is the case... I have an assignment to fulfill... so... I go ahead and recommend Cannapets???");

  } else if (recommendation == "unclear" && path == "home") {

    alert("Congrats rambling Dorothy... for finding a word for yes or no that I didn't include... so... you're feeling homesick... so... some Indica dominate Cherry Pie may help you image the comfort food from your youth... after consuming this strain you may find yourself all cozy in bed... and you won't even have to click your heels...");

  } else if (recommendation == "unclear" && path == "heart") {

    alert("Congrats rambling Tin Man... for finding a word for yes or no that I didn't include... so... you feel like there is something up with your ticker... though street crack might not be idle for hypertension... you might be surprised to find that the Sativa leaning strain... Green Crack... may be just what you need to keep going throughout your day...");

  } else if (recommendation == "unclear" && path == "brains") {

    alert("Congrats rambling Scarecrow... for finding a word for yes or no that I didn't include... so... you may the one who is missed most of all... probably because of your silly ways... remember... silly doesn't always mean brainless... you might want to try the strain... Blue Dreams... the rush of creative thoughts may be what you need to unlock the puzzles that keep your mind feeling stuck...");

  } else if (recommendation == "unclear" && path == "courage") {

    alert("Congrats rambling Lion... for finding a word for yes or no that I didn't include... so... as a big guy who wouldn't hurt a fly... I realate to the anxieties that you have that may often be confused for a lack of courage... you might want to try a strain called... Critical Mass... that's high in both THC and CBD... a mixture fit for a king!!!");

  } else {

    alert("You must be rambling Toto... congrats on finding a word for yes or no that I didn't include... so... since I'm not real AI and don't know what you said... I will recommend Cannapets... ");

  }
}