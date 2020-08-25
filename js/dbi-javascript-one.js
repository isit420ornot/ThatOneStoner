var ailment = null;
var recommendation = null;
var path = null;

function enter() {
  document.getElementById("enterLeave").style.display = "none";

  document.getElementById("introContainter").style.display = "none";

  document.getElementById("descriptioncontainer").style.display = "block";

  mainMain.style.backgroundImage = "url(images/javascript/closerOz.png)";

  console.log("Here we go again... let's see if this pothead will will find the secret code?!?!");
}

function leave() {
  alert("Well this is awkward... I didn't count on anyone clicking leave... I guess you should either rethink your answer or navigate to where ever you'd rather be...")

  console.log("Or are you just testing each button so that you can see what's going on in the logs???");
}

function sure() {
  console.log("I wonder if that threw any casual viewers of the trail... Of course... you... reading this... are completely aware of the fact that The Converter of Oz. is for a class...");

  mainMain.style.backgroundImage = "url(images/javascript/ageGuard.png)";

  document.getElementById("descriptioncontainer").style.display = "none";

  document.getElementById("ageContainer").style.display = "block";

  document.getElementById("ageButtons").style.display = "block";
}

function nope() {
  alert("Why are you even here??? Once again... I didn't plan on any one to give up this early... you must really suck at choose your own adventure books...")

  console.log("If you're not just checking links... Go on... LEAVE... I'm not going to write the code to send you to a different page...");
}

function whyNot() {

  var age = null;

  console.log("I don't know how this site could be age inappropriate... being that it's about education after all... but the way people get these days... you never know???");

  age = prompt("Are you even old enough to be on this site???");

  document.getElementById("ageContainer").style.display = "none";

  document.getElementById("ageButtons").style.display = "none";

  document.getElementById("hallwayAgeResults").style.display = "block";

  mainMain.style.backgroundImage = "url(images/javascript/hallway.png)";

  if (age < 18) {
    alert("You move along now... this site mentions the use of a medicinal plant that grows right out of the ground... I'd hate for a child to find out that there are healthier options than dangerous pharmacuticals... that also may be recreational...");

    console.log("I'm sure if you're under 18 and found this log... you are ready for weed... and probably are high while reading this...");

    document.getElementById("ageContainer").style.display = "block";

    document.getElementById("ageButtons").style.display = "block";

    document.getElementById("hallwayAgeResults").style.display = "none";

    mainMain.style.backgroundImage = "url(images/javascript/ageGuard.png)";

  } else if (age >= 18 && age <= 23) {

    console.log("I wonder if not being a parent makes me more hopeful for the future when it comes to the youth of this world... I never had a pony in the race... so I never have to deal with the fear that my offspring will do something weird...");

    document.getElementById('generationSpan').textContent = "Greetings GenZ Stoner!!!";

    document.getElementById('generationGreeting').textContent = "If I had any advice for the youth... it would be... do get too lost in the recreational... until all the work is done... and... never forget... there are many ways to learn that don't require going to stuffy buildings...";

    setTimeout(() => {
      console.log("I also wonder how many of these younger partakers will get the reference from having actually seen the film and how many will only understand it as a pop-culture reference from another time???");
    }, 2500);

  } else if (age >= 24 && age <= 39) {
    console.log("I always found it odd that the biggest bashers of the millenial generation are the generations who raised them... I'm sure they'll get the reference... and understand why they just may not care...");

    document.getElementById('generationSpan').textContent = "Greetings Millenial Marijuana Smokers!!!";

    document.getElementById('generationGreeting').textContent = "I can't believe that you've gotten so old... it's also hard to believe that the oldest of you are my peers... so what's the deal with people hating on avocado toast???";

    setTimeout(() => {
      console.log("I'm also willing to bet that outside of the class... a millenial will be the first to discover this conversation taking place in the console log...");
    }, 2500);

  } else if (age >= 40 && age <= 55) {

    console.log("I think GenXers may understand Oz the most... a generation young enough to not be ground into the time period when the tornado that was the internet touched ground... normal still wasn't normal to us when the new normal set in...");

    document.getElementById('generationSpan').textContent = "Greetings Kindred GenX Toker!!!";

    document.getElementById('generationGreeting').textContent = "If you really are a peer... then you now smoke to cope with joint pain and a need for sleep over anything recreational any more... but... we still try!!!";

    setTimeout(() => {
      console.log("I bet the kids who saw post 9/11 America to be normal enough to settle in to the prime influential time of their lives and will now have to readjust to a post-pandemic life will also understand...");
    }, 2500);

  } else if (age >= 56 && age <= 74) {

    console.log("There's no way in hell a Boomer will ever find this log... but I'm willing to bet that everyone in this age group will know one of the four words I'm looking for...");

    document.getElementById('generationSpan').textContent = "Okay... Still Hip... Boomer!!!";

    document.getElementById('generationGreeting').textContent = "You managed to find this site... probably on your child's computer... oh wait... grandchild's computer... if that is not the case... and you found the site on you own... the you too can play along... just stop reminding us what weed used to cost...";

    setTimeout(() => {
      console.log("I find it odd that my aging punk rock friends are more likely to be vegan and growing their own food... than any of the elders who like to brang about their hippy youth...");
    }, 2500);

  } else if (age > 74) {

    console.log("Alright... some dinosaur may stumble on the this stoner themed site thinking it's caveman related... and they need someone to fix their boulder abode... but there is no way anyone this old will stumble upon the log section of this page...");

    document.getElementById('generationSpan').textContent = "Yeah Right... A Member Of... The Greatest Generation... On This Site!?!?";

    document.getElementById('generationGreeting').textContent = "I might buy it with a Boomer or two... but I can't imagine a dinosaur finding this page... Well... if it is true... keep on keeping on... while keeping those kids off your lawn...";

    setTimeout(() => {
      console.log("It funny how The Greatest Generation created a world filled with nothing but narcisists...");
    }, 2500);

  } else {
    console.log("Who knows??? Maybe they got super high and passed out on the keyboard... or maybe they've got OCD like me and have to type out their numbers...");

    alert("Did you even use a number??? Let's try this again...");

    document.getElementById("ageContainer").style.display = "block";

    document.getElementById("ageButtons").style.display = "block";

    document.getElementById("hallwayAgeResults").style.display = "none";

    mainMain.style.backgroundImage = "url(images/javascript/ageGuard.png)";
  }
}

function noTrust() {
  alert("I don't know you... hell... you can make up a number... I'm not checking ID... but... if that's how you feel... GET!!!");

  console.log("For you following along in the logs... the first draft of this assignment wasn't as blatantly OZ themed... so in the future... when you see me question if age groups will or will not get the reference... said references weren't as obvious...");
}

function keepGoing() {
  mainMain.style.backgroundImage = "url(images/javascript/preshowChamber.png)";

  console.log("Don't worry... there actually is a converter.... you just have to sit through That One Stoner's attempt to add a little entertainment value to this blog??? site??? Whatever this is???");

  document.getElementById("hallwayAgeResults").style.display = "none";

  document.getElementById("delayAnimation").style.display = "block";

  setTimeout(() => {
    console.log("I was going to try to replicate the waiting icon via code... but opted to use a gif instead???");
  }, 2500);

  setTimeout(() => {
    document.getElementById("delayAnimation").style.display = "none";
  }, 5500);

  setTimeout(() => {
    document.getElementById("meOzHead").style.display = "block";
  }, 5500);

  setTimeout(() => {
    console.log("This reminds me of my first animation... way back in the early 00s... In it... my beard did a little dance to Dogs Barking Jingle Bells... while also replacing characters from classic video games... I wish backup memory wasn't as expensive as it was back then...");
  }, 6500);

  setTimeout(() => {
    document.getElementById("ozChamberContent1").style.display = "block";
  }, 7500);

  setTimeout(() => {
    console.log("See... having to resort to a gif for the delay instead of programing it in... is clear proof that I'm not doing thing correctly... but this is how I learn!!!");
  }, 8500);

  setTimeout(() => {
    document.getElementById("ozChamberContent1").style.display = "none";
  }, 12500);

  setTimeout(() => {
    document.getElementById("fire").style.display = "block";
  }, 12550);

  //INSERT FLAMES HERE
  setTimeout(() => {
    console.log("FIRE!!!");
  }, 13200);

  setTimeout(() => {
    document.getElementById("fire").style.display = "none";
  }, 14950);



  setTimeout(() => {
    document.getElementById("ozChamberContent2").style.display = "block";
  }, 15000);

  setTimeout(() => {
    console.log("This is where this conversion assignment originally started... I was just going to ask for a condition that can be treated with weed  so that I could recommend an affiliate ad as a recomendation... between the Oz. being the key weight when buying weed... and the fact that JavaScript works behind the scenes... I couldn't help but make the connection...");
  }, 16000);

  setTimeout(() => {
    document.getElementById("chamberAnswer1").style.display = "block";
  }, 17500);

  setTimeout(() => {
    console.log("Why must I make everything so convoluted???");
  }, 17500);

}

function yourBusiness() {
  alert("What??? Does it have something to do with your butt... or your junk... something you're too ashamed to admit to???");

  setTimeout(() => {
    console.log("If it is butt or junk stuff... might I recommend you try the The Heavy Hitter Mix Pack??? https://shop.ilovegrowingmarijuana.com/collections/mixpacks/products/heavy-hitters-mixpack?aff=4847... it might not be fit for you condition... but it will get you really high!!!");
  }, 2500);
}

function answer() {
  ailment = prompt("There are four specific answers that I'm looking for... try to choose one... or see what happens if you go rogue???");

  document.getElementById("ozChamberContent2").style.display = "none";

  setTimeout(() => {
    document.getElementById("chamberAnswer1").style.display = "none";
  }, 6);

  document.getElementById('insertAilment').textContent = ailment;

  document.getElementById("ozChamberContent3").style.display = "block";

  setTimeout(() => {
    document.getElementById("chamberAnswer2").style.display = "block";
  }, 12);

  if (ailment.search(/home/i) != -1) {

    setTimeout(() => {
      console.log("Home is where the heart aches for some... at least it's good to see this is not the case with you...");
    }, 500);



    path = "home";

  } else if (ailment.search(/heart/i) != -1) {
    setTimeout(() => {
      console.log("Heart beat... looking for a heart beat...");
    }, 500);


    path = "heart";

  } else if (ailment.search(/brain/i) != -1) {

    setTimeout(() => {
      console.log("Went insane got no brains...");
    }, 500);

    path = "brains";

  } else if (ailment.search(/courage/i) != -1) {

    setTimeout(() => {
      console.log("I hear ya... some times it takes all the courage that I've got left... just to get out of bed...");
    }, 500);

    path = "courage";


  } else {

    setTimeout(() => {
      console.log("Maybe someday I'll learn how to make this fully functional where I can have The Converter of Oz. make real customized recomendations...");
    }, 500);
    path = "toto";
  }

}

function tooScared() {
  alert("Yeah yeah yeah... of course you'd be the one to chicken out right before getting to the goal... I bet you've been trying to leave this entire time??? You know where the address bar is located... well... at least most of you generations do...");

  console.log("Again... unless you are testing each button to read the logs... how did you get this far??? In life... or on this site... just clicking away only to bale out right before the main feature...");
}

function showMe() {
  console.log("Then again... almost any strain is a warm blanket to me these days...");

  setTimeout(() => {
    document.getElementById("ozChamberContent3").style.display = "none";
  }, 500);

  setTimeout(() => {
    document.getElementById("chamberAnswer2").style.display = "none";
  }, 500);

  setTimeout(() => {
    document.getElementById("ozChamberContent4").style.display = "block";
  }, 1250);

  if (path == "home") {

    console.log("There is no place like home... and there is no strain like Cherry Pie to cure homesickness...");

    document.getElementById('characterGuess').textContent = "Alright Dorothy...";

    document.getElementById('characterRecommendation').textContent = "So you're feeling homesick... why not try the Indica dominate strain... Cherry Pie... after consuming this strain you may find yourself all cozy in bed... and you won't even have to click your heels...";

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterGuess").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterRecommendation").style.display = "none";
    }, 7500);

    setTimeout(() => {
      console.log("I haven't ordered seed from this site yet... but I plan to... as soon as I figure out how to create an income to where I can afford to...");
    }, 7500);

    document.getElementById('strainRec').textContent = "Cherry Pie";

    recommendImage.style.backgroundImage = "url(images/javascript/CherryPieStrain.jpg)";

    var yourElement = document.getElementById('recLink');
    yourElement.setAttribute('href', 'https://www.ilovegrowingmarijuana.com/cherry-pie/?aff=4847');

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("tryRec").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("letsConvert").style.display = "block";
    }, 10000);

    setTimeout(() => {
      document.getElementById("chamberAnswer3").style.display = "block";
    }, 11500);

  } else if (path == "heart") {

    console.log("Whether your heart ache from a condition or over reasons of love... Green Crack is might be a good strain for your heart issues...");

    document.getElementById('characterGuess').textContent = "Alright Tin Man...";

    document.getElementById('characterRecommendation').textContent = "So you feel like there is something up with your ticker... though street crack might not be idle for hypertension... you might be surprised to find that the Sativa leaning strain... Green Crack... may be just what you need to keep going throughout your day...";

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterGuess").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterRecommendation").style.display = "none";
    }, 7500);

    setTimeout(() => {
      console.log("I haven't ordered seed from this site yet... but I plan to... as soon as I figure out how to create an income to where I can afford to...");
    }, 7500);

    document.getElementById('strainRec').textContent = "Green Crack";

    recommendImage.style.backgroundImage = "url(images/javascript/GreenCrackStrain.jpg)";

    var yourElement = document.getElementById('recLink');
    yourElement.setAttribute('href', 'https://shop.ilovegrowingmarijuana.com/products/green-crack-feminized-seeds?aff=4847');

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("tryRec").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("letsConvert").style.display = "block";
    }, 10000);

    setTimeout(() => {
      document.getElementById("chamberAnswer3").style.display = "block";
    }, 11500);

  } else if (path == "brains") {

    console.log("Look like you may have... went insane... and therefor... got no brain... well Blue Dream is a strain that might get you in a more cerebral state of mind... in order to help you find your marbles...");

    document.getElementById('characterGuess').textContent = "Alright Scarecrow...";

    document.getElementById('characterRecommendation').textContent = "You may be the one who is missed most of all... probably because of your silly ways... remember... silly doesn't always mean brainless... you might want to try the strain... Blue Dream... the rush of creative thoughts may be what you need to unlock the puzzles that keep your mind feeling stuck...";

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterGuess").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterRecommendation").style.display = "none";
    }, 7500);

    setTimeout(() => {
      console.log("I haven't ordered seed from this site yet... but I plan to... as soon as I figure out how to create an income to where I can afford to...");
    }, 7500);

    document.getElementById('strainRec').textContent = "Blue Dream";

    recommendImage.style.backgroundImage = "url(images/javascript/BlueDreamStrain.jpg)";

    var yourElement = document.getElementById('recLink');
    yourElement.setAttribute('href', 'https://shop.ilovegrowingmarijuana.com/products/blue-dream-feminized-seeds?aff=4847');

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("tryRec").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("letsConvert").style.display = "block";
    }, 10000);

    setTimeout(() => {
      document.getElementById("chamberAnswer3").style.display = "block";
    }, 11500);

  } else if (path == "courage") {

    console.log("Whether you are afraid to find a mate... or afraid to stand up to a foe... Critical Mass is a strain that might give you a boost in courage...");

    document.getElementById('characterGuess').textContent = "Alright Lion...";

    document.getElementById('characterRecommendation').textContent = "As a big guy who wouldn't hurt a fly... I relate to the anxieties that you have that may often be confused for a lack of courage... you might want to try a strain called... Critical Mass... that's high in both THC and CBD... a mixture fit for a king!!!";

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterGuess").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterRecommendation").style.display = "none";
    }, 7500);

    setTimeout(() => {
      console.log("I haven't ordered seed from this site yet... but I plan to... as soon as I figure out how to create an income to where I can afford to...");
    }, 7500);

    document.getElementById('strainRec').textContent = "Critical Mass";

    recommendImage.style.backgroundImage = "url(images/javascript/CriticalMassStrain.jpg)";

    var yourElement = document.getElementById('recLink');
    yourElement.setAttribute('href', 'https://shop.ilovegrowingmarijuana.com/products/critical-mass-feminized-seeds?aff=4847');

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("tryRec").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("letsConvert").style.display = "block";
    }, 10000);

    setTimeout(() => {
      document.getElementById("chamberAnswer3").style.display = "block";
    }, 11500);

  } else if (path == "toto") {

    console.log("Alright... you caught me... I am just JavaScript and not really AI... there are a few specific words that I am looking for... think why others might have visited my next door neighbor... The Wiz!!! Note: This is when I decided to commit to the Oz theme...");


    document.getElementById('characterGuess').textContent = "Hm... you must be either Toto... or a Munchkin???";

    document.getElementById('characterRecommendation').textContent = "Either way... I lied... at this time... I'm unfamiliar with way to relieve " + ailment + " at this time... might I recommend you try a variety pack of seeds that may have the perfect strain inside!!!";

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterGuess").style.display = "none";
    }, 7500);

    setTimeout(() => {
      document.getElementById("characterRecommendation").style.display = "none";
    }, 7500);

    setTimeout(() => {
      console.log("I haven't ordered seed from this site yet... but I plan to... as soon as I figure out how to create an income to where I can afford to...");
    }, 7500);

    document.getElementById('strainRec').textContent = "Variety Pack";

    recommendImage.style.backgroundImage = "url(images/javascript/variety.jpg)";

    var yourElement = document.getElementById('recLink');
    yourElement.setAttribute('href', 'https://shop.ilovegrowingmarijuana.com/collections/mixpacks?page=1&aff=4847');

    setTimeout(() => {
      document.getElementById("ozChamberContent4").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("tryRec").style.display = "block";
    }, 8500);

    setTimeout(() => {
      document.getElementById("letsConvert").style.display = "block";
    }, 10000);

    setTimeout(() => {
      document.getElementById("chamberAnswer3").style.display = "block";
    }, 11500);

  } else {

    alert("I have no idea what you answered to trigger this response... I though for sure that I caught everything in my if else statement");

    return;
  }
}

function imGood() {
  alert("Again... why are you even here??? And how did you get this far just to give up???")

  console.log("Even if you are testing buttons to read the logs... by this point... good on you for your completist drive... you just may be rewarded in the end for your commitment!!!");
}

function thanks() {

  document.getElementById("meOzHead").style.display = "none";

  console.log("And now for the Main Event!!!");

  mainMain.style.backgroundImage = "url(images/javascript/theTrueConverter.png)";

  document.getElementById("ozChamberContent4").style.display = "none";

  document.getElementById("chamberAnswer3").style.display = "none";

  setTimeout(() => {
    document.getElementById("converterContainer").style.display = "block";
  }, 500);

}

function whatever() {
  alert("Fine... let's just get to the conversion in order to get this interaction over with...")

  console.log("And now for the Main Event!!!");

  mainMain.style.backgroundImage = "url(images/javascript/theTrueConverter.png)";

  document.getElementById("ozChamberContent4").style.display = "none";

  document.getElementById("chamberAnswer3").style.display = "none";

  setTimeout(() => {
    document.getElementById("converterContainer").style.display = "block";
  }, 500);


}

function dbButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '.035';

  document.getElementsByName('grams')[0].placeholder = '1';

  document.getElementsByName('lbs')[0].placeholder = '.002';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function dsButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '.07';

  document.getElementsByName('grams')[0].placeholder = '2';

  document.getElementsByName('lbs')[0].placeholder = '.004';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function eighthButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '1.25';

  document.getElementsByName('grams')[0].placeholder = '3.5';

  document.getElementsByName('lbs')[0].placeholder = '.007';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function qButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '.25';

  document.getElementsByName('grams')[0].placeholder = '7';

  document.getElementsByName('lbs')[0].placeholder = '.015';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function halfButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '.5';

  document.getElementsByName('grams')[0].placeholder = '14';

  document.getElementsByName('lbs')[0].placeholder = '.03';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function lidButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '1';

  document.getElementsByName('grams')[0].placeholder = '28';

  document.getElementsByName('lbs')[0].placeholder = '.062';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function zipButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '16';

  document.getElementsByName('grams')[0].placeholder = '453';

  document.getElementsByName('lbs')[0].placeholder = '1';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function kiloButton() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value = null;

  document.getElementsByName('oz')[0].placeholder = '35.27';

  document.getElementsByName('grams')[0].placeholder = '1000';

  document.getElementsByName('lbs')[0].placeholder = '2.2';

  console.log("Note... the buttons are based on dealer/dispensary weights... enter a number for a more accurate conversion...");
}

function convertOz() {
  var grams = document.getElementById('gramsInput').value = null;

  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value;

  var grams = oz * 28.35;

  var lbs = oz * 0.0625;

  document.getElementsByName('grams')[0].placeholder = grams;

  document.getElementsByName('lbs')[0].placeholder = lbs;

  console.log("Look at that robot math!!!");
}

function convertGrams() {
  var lbs = document.getElementById('lbsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var grams = document.getElementById('gramsInput').value;

  var oz = grams * 0.03527396195;

  var lbs = grams * 0.002205;

  document.getElementsByName('oz')[0].placeholder = oz;

  document.getElementsByName('lbs')[0].placeholder = lbs;

  console.log("Look at that robot math!!!");
}

function convertLbs() {
  var grams = document.getElementById('gramsInput').value = null;

  var oz = document.getElementById('ozInput').value = null;

  var lbs = document.getElementById('lbsInput').value;

  var oz = lbs * 16;

  var grams = lbs * 453.59237;

  document.getElementsByName('oz')[0].placeholder = oz;

  document.getElementsByName('grams')[0].placeholder = grams;

  console.log("Look at that robot math!!!");
}

function howMuch() {

  mainMain.style.backgroundImage = "url(images/javascript/behindTheCurtain.png)";

  console.log("Please excuse the sloppy choreography...");

  document.getElementById("converterContainer").style.display = "none";

  document.getElementById("meOzHead2").style.display = "block";

  setTimeout(() => {
    document.getElementById("smallOops").style.display = "block";
  }, 1500);

  setTimeout(() => {
    document.getElementById("bigOops").style.display = "block";
  }, 3000);

  setTimeout(() => {
    document.getElementById("smallOops").style.display = "none";
  }, 4000);

  setTimeout(() => {
    document.getElementById("bigOops").style.display = "none";
  }, 4000);

  setTimeout(() => {
    document.getElementById("meOzHead2").style.display = "none";
  }, 4000);

  setTimeout(() => {
    console.log("I try to keep things interest...");
  }, 4250);

  var spendingAmount = document.getElementById('ammountToSpend').value;
  var topShelf = spendingAmount / 350;
  var midShelf = spendingAmount / 200;
  var bottomShelf = spendingAmount / 100;

  setTimeout(() => {
    mainMain.style.backgroundImage = "url(images/javascript/preshowChamber.png)";
  }, 4000);


  setTimeout(() => {
    document.getElementById("meOzHead").style.display = "block";
  }, 4250);

  setTimeout(() => {
    document.getElementById("ignoreText").style.display = "block";
  }, 4750);

  setTimeout(() => {
    document.getElementById("ignoreText").style.display = "none";
  }, 8000);

  setTimeout(() => {
    document.getElementById("fire").style.display = "block";
  }, 8050);

  //INSERT FLAMES HERE
  setTimeout(() => {
    console.log("FIRE!!!");
  }, 8100);

  setTimeout(() => {
    document.getElementById("fire").style.display = "none";
  }, 9450);


  setTimeout(() => {
    document.getElementById("whereWereWe").style.display = "block";
  }, 9500);

  setTimeout(() => {
    document.getElementById("resultsRevealAnswer").style.display = "block";
  }, 11500);

  setTimeout(() => {
    console.log("If you're a broke ass like me... you'll be looking down at the bottom shelf...");
  }, 10000);


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


  console.log("Well... that almost wraps this assignment up... and the number 487 where you're told to shhhhh to get your reward for getting this far...");



}

function youAreAStoner() {
  mainMain.style.backgroundImage = "url(images/javascript/javaOZbg.png)";

  document.getElementById("meOzHead").style.display = "none";

  document.getElementById("whereWereWe").style.display = "none";

  document.getElementById("resultsRevealAnswer").style.display = "none";

  document.getElementById("youCaughtThatOneStoner").style.display = "block";

  console.log("Well... that almost wraps this assignment up... and the number 487 where you're told to shhhhh to get your reward for getting this far...");
}

function bye() {
  mainMain.style.backgroundImage = "url(images/javascript/goodbye.png)";

  console.log("See you in JavaScript Level Two... which I'll start after a day off or two!!!");

  document.getElementById("writtenBy").style.display = "block";

  document.getElementById("youCaughtTheConverter").style.display = "none";

  document.getElementById("youCaughtThatOneStoner").style.display = "none";

}

function revealSecretButton() {
  setTimeout(() => {
    document.getElementById("secretButton").style.display = "block";
  }, 500);

  console.log("Good job at cracking the code!!!");

}

function isit487() {
  var code = document.getElementById('secretInput').value

  if (document.getElementById('secretInput').value == 487) {

    console.log("I hope you enjoy this short film that I wrote many years ago...");

    document.getElementById("video487").style.display = "block";
    alert("enjoy")

  } else {
    alert("Nope... try again...")

    console.log("Nothing to see here... but there is something to see elsewhere... the code maybe???");
  }

}