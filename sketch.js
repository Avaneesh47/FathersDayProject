var bagImg;
var block1,block2,block3,block4,block5,block6;
var income,incomeImg;
var human,human1Img,human2Img;
var incomeInput,incomeVal,incomeLabel;
var basicExp,basicExpLabel,basicExpInput,basicExpImg,basicExpVal;
var homeLoan,homeLoanInput,homeLoanVal,homeLoanImg,homeLoanLabel;
var carLoan,carLoanInput,carLoanVal,carLoanImg,carLoanLabel;
var creditLoan,creditLoanInput,creditLoanVal,creditLoanImg,creditLoanLabel;
var extraExp,extraExpLabel,extraExpInput,extraExpImg,extraExpVal;
var incomeButton,basicExpButton,homeLoanButton,carLoanButton,creditButton,extraExpButton;
var gameState=0;
var balance1,balance2,balance3,balance4;
var title,label;
var congrats1,congrats2,congrats3,congrats4,congrats5,congrats6,congrats7,congrats8,congrats9;
var arrowImg;
var desc1,desc2;

function preload(){
  bagImg = loadImage("moneyHat.png");
  incomeImg = loadImage("money2.png");
  human1Img = loadImage("human1.png");
  human2Img = loadImage("human2.png");
  basicExpImg = loadImage("basic.png");
  homeLoanImg = loadImage("house.png");
  carLoanImg = loadImage("car.png");
  extraExpImg = loadImage("expenditure.png");
  creditLoanImg = loadImage("credit.png");
  mfImg = loadImage("mf.png");
  arrowImg = loadImage("arrow.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight -200);

  block1 = createSprite(displayWidth/2-500,displayHeight/2+100,10,1200);
  block2 = createSprite(displayWidth/2-150,displayHeight/2+125,700,5);
  block3 = createSprite(displayWidth/2+200,displayHeight/2+100,10,1200);
  block4 = createSprite(displayWidth/2-50,displayHeight/2-125,500,5);
  block5 = createSprite(displayWidth/2-250,displayHeight/2,500,5);
  block6 = createSprite(displayWidth/2-250,displayHeight/2-250,500,5);

  income = createSprite(displayWidth/2-200,displayHeight/2+50);
  income.addImage("income",incomeImg);
  income.scale = 0.1;
  income.visible = true;

  incomeButton = createButton('Add');
  incomeButton.position(displayWidth/2+650,displayHeight/2-350);
  incomeButton.hide();

  basicExp = createSprite(displayWidth/2,displayHeight/2+50);
  basicExp.addImage("basicExp",basicExpImg);
  basicExp.scale = 0.3;
  basicExp.setCollider("rectangle",0,0,400,200);
  basicExp.visible = true;

  basicExpButton = createButton('Add');
  basicExpButton.position(displayWidth/2+650,displayHeight/2-300);
  basicExpButton.hide();

  homeLoan = createSprite(displayWidth/2-100,displayHeight/2-50);
  homeLoan.addImage("homeLoan",homeLoanImg);
  homeLoan.scale = 0.1;
  homeLoan.setCollider("rectangle",0,0,400,200);
  homeLoan.visible = true;

  homeLoanButton = createButton('Add');
  homeLoanButton.position(displayWidth/2+650,displayHeight/2-250);
  homeLoanButton.hide();

  carLoan = createSprite(displayWidth/2-300,displayHeight/2-50);
  carLoan.addImage("carLoan",carLoanImg);
  carLoan.scale = 0.2;
  carLoan.setCollider("rectangle",0,0,400,200);
  carLoan.visible = true;

  carLoanButton = createButton('Add');
  carLoanButton.position(displayWidth/2+650,displayHeight/2-200);
  carLoanButton.hide();

  creditLoan = createSprite(displayWidth/2-300,displayHeight/2-180);
  creditLoan.addImage("creditLoan",creditLoanImg);
  creditLoan.scale = 0.2;
  creditLoan.setCollider("rectangle",0,0,400,200);
  creditLoan.visible = true;

  creditButton = createButton('Add');
  creditButton.position(displayWidth/2+650,displayHeight/2-150);
  creditButton.hide();

  extraExp = createSprite(displayWidth/2-100,displayHeight/2-180);
  extraExp.addImage("extraExp",extraExpImg);
  extraExp.scale = 0.2;
  extraExp.setCollider("rectangle",0,0,400,200);
  extraExp.visible = true;

  extraExpButton = createButton('Add');
  extraExpButton.position(displayWidth/2+650,displayHeight/2-100);
  extraExpButton.hide();

  mf = createSprite(displayWidth/2-200,displayHeight/2-365);
  mf.addImage("mf",mfImg);
  mf.scale = 0.4;
  mf.setCollider("rectangle",0,0,200,200);

  human = createSprite(displayWidth/2-400,displayHeight/2+60);
  human.addImage("human",human1Img);
  human.scale = 0.4;
  human.setCollider("rectangle",0,0,200,200);
  human.visible = true;

  desc1 = createElement('h5');
  desc1.html("A fun way to  guide you through your finance");
  desc1.position(displayWidth/2-740,displayHeight/2-175);

  desc2 = createElement('h5');
  desc2.html("through an interesting maze game");
  desc2.position(displayWidth/2-740,displayHeight/2-150);
}

function draw(){
  background("white");
  image(bagImg,displayWidth/2-750,displayHeight/2-400,200,200);
  image(arrowImg,displayWidth/2-750,displayHeight/2,200,200);

  push();
  fill("black");
  textSize(20);
  text("Use arrow keys to move",displayWidth/2-730,displayHeight/2+200);
  pop();

  push();
  fill("black");
  textSize(25);
  text("moneyHAT",displayWidth/2-700,displayHeight/2-200);
  pop();

  human.bounceOff(block1);
  human.bounceOff(block2);
  human.bounceOff(block3);
  human.bounceOff(block4);
  human.bounceOff(block5);
  human.bounceOff(block6);

  if(gameState===0){
    if(human.collide(income)){
      human.velocityX = 0;
      human.velocityY = 0;
      income.destroy();
      incomeInput = createInput("");
      incomeInput.position(displayWidth/2+450,displayHeight/2-350);
      incomeLabel = createElement('h4');
      incomeLabel.html("Monthly Income:");
      incomeLabel.position(displayWidth/2+310,displayHeight/2-370);
      incomeButton.show();
    }
  
    incomeButton.mousePressed(()=>{
      incomeVal = incomeInput.value();
    })
  
    if(human.collide(basicExp)){
      human.velocityX = 0;
      human.velocityY = 0;
      basicExp.destroy();
      basicExpInput = createInput("");
      basicExpInput.position(displayWidth/2+450,displayHeight/2-300);
      basicExpLabel = createElement('h4');
      basicExpLabel.html("Basic Expenses:");
      basicExpLabel.position(displayWidth/2+310,displayHeight/2-320);
      basicExpButton.show();
    }
  
    basicExpButton.mousePressed(()=>{
      basicExpVal = basicExpInput.value();
    })
  
    if(human.collide(homeLoan)){
      human.velocityX = 0;
      human.velocityY = 0;
      homeLoan.destroy();
      homeLoanInput = createInput("");
      homeLoanInput.position(displayWidth/2+470,displayHeight/2-250);
      homeLoanLabel = createElement('h4');
      homeLoanLabel.html("Monthly Home Loan:");
      homeLoanLabel.position(displayWidth/2+310,displayHeight/2-270);
      homeLoanVal = homeLoanInput.value();
      homeLoanButton.show();
    }
  
    homeLoanButton.mousePressed(()=>{
      homeLoanVal = homeLoanInput.value();
    })
  
    if(human.collide(carLoan)){
      human.velocityX = 0;
      human.velocityY = 0;
      carLoan.destroy();
      carLoanInput = createInput("");
      carLoanInput.position(displayWidth/2+470,displayHeight/2-200);
      carLoanLabel = createElement('h4');
      carLoanLabel.html("Monthly Car Loan:");
      carLoanLabel.position(displayWidth/2+310,displayHeight/2-220);
      carLoanVal = carLoanInput.value();
      carLoanButton.show();
    }
  
    carLoanButton.mousePressed(()=>{
      carLoanVal = carLoanInput.value();
    })
  
    if(human.collide(creditLoan)){
      human.velocityX = 0;
      human.velocityY = 0;
      creditLoan.destroy();
      creditLoanInput = createInput("");
      creditLoanInput.position(displayWidth/2+470,displayHeight/2-150);
      creditLoanLabel = createElement('h4');
      creditLoanLabel.html("Credit Card Loan:");
      creditLoanLabel.position(displayWidth/2+310,displayHeight/2-170);
      creditLoanVal = creditLoanInput.value();
      creditButton.show();
    }
  
    creditButton.mousePressed(()=>{
      creditLoanVal = creditLoanInput.value();
    })
  
    if(human.collide(extraExp)){
      human.velocityX = 0;
      human.velocityY = 0;
      extraExp.destroy();
      extraExpInput = createInput("");
      extraExpInput.position(displayWidth/2+470,displayHeight/2-100);
      extraExpLabel = createElement('h4');
      extraExpLabel.html("Extra Expenses:");
      extraExpLabel.position(displayWidth/2+310,displayHeight/2-120);
      extraExpVal = extraExpInput.value();
      extraExpButton.show();
    }

    extraExpButton.mousePressed(()=>{
      extraExpVal = extraExpInput.value();
    });

    if(human.collide(mf)){
      incomeInput.hide();
      basicExpInput.hide();
      homeLoanInput.hide();
      carLoanInput.hide();
      creditLoanInput.hide();
      extraExpInput.hide();

      incomeLabel.hide();
      basicExpLabel.hide();
      homeLoanLabel.hide();
      carLoanLabel.hide();
      creditLoanLabel.hide();
      extraExpLabel.hide();

      incomeButton.hide();
      basicExpButton.hide();
      homeLoanButton.hide();
      carLoanButton.hide();
      creditButton.hide();
      extraExpButton.hide();

      if(totalBalance>=incomeVal/2){
        congrats1 = createElement('h1');
        congrats1.html("Congratulations!!!");
        congrats1.position(displayWidth/2+375,displayHeight/2-300);
        congrats2 = createElement('h1');
        congrats2.html("You have saved: Rs "+totalBalance);
        congrats2.position(displayWidth/2+350,displayHeight/2-200);
        congrats3 = createElement('h1');
        congrats3.html("Invest in mutual fund to grow your money");
        congrats3.position(displayWidth/2+210,displayHeight/2-100);
      }
      if(totalBalance<incomeVal/2 && totalBalance>=incomeVal/5){
        congrats4 = createElement('h1');
        congrats4.html("Congratulations!!!");
        congrats4.position(displayWidth/2+375,displayHeight/2-300);
        congrats5 = createElement('h1');
        congrats5.html("You have saved: Rs "+totalBalance);
        congrats5.position(displayWidth/2+350,displayHeight/2-200);
        congrats8 = createElement('h1');
        congrats8.html("Enough to invest in mutual fund");
        congrats8.position(displayWidth/2+240,displayHeight/2-100);
      }
      if(totalBalance<incomeVal/5){
        congrats6 = createElement('h1');
        congrats6.html("Keep your expenses low");
        congrats6.position(displayWidth/2+350,displayHeight/2-300);
        congrats7 = createElement('h1');
        congrats7.html("You have saved: Rs "+totalBalance);
        congrats7.position(displayWidth/2+350,displayHeight/2-200);
        congrats9 = createElement('h1');
        congrats9.html("Invest in mutual fund and increase gradually");
        congrats9.position(displayWidth/2+240,displayHeight/2-100);
      }
    }

    if(basicExpVal>=incomeVal||homeLoanVal>=balance1||carLoanVal>=balance2||creditLoanVal>=balance3||extraExp>=balance4){
      gameState=1;
    }

    balance1 = incomeVal - basicExpVal;
    balance2 = balance1 - homeLoanVal;
    balance3 = balance2 - carLoanVal;
    balance4 = balance3 - creditLoanVal;
    totalBalance = balance4 - extraExpVal;
    
    if(homeLoanVal>balance1*40/100){ 
      fill("red");
      textSize(20);
      text("Your home loan EMI outgo is very high!!",displayWidth/2+250,displayHeight/2+50);
    }

    if(carLoanVal>balance2*20/100){
      fill("red");
      textSize(20);
      text("Car is a depreciating asset, pay off your loan!!",displayWidth/2+225,displayHeight/2+100);
    }

    if(creditLoanVal>balance3*30/100){
      fill("red");
      textSize(20);
      text("Your credit is high, please pay it off!!",displayWidth/2+225,displayHeight/2+150);
    }
  } 

  if(gameState===1){
    fill("black");
    textSize(25);
    text("Oops!!! You have no money left.Game Over",displayWidth/2+210,displayHeight/2);
    human.visible = false;
    income.visible = false;
    basicExp.visible = false;
    homeLoan.visible = false;
    carLoan.visible = false;
    creditLoan.visible = false;
    extraExp.visible = false;
    mf.visible = false;
    gameState=0;  
  }

  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    human.addImage("human",human2Img);
    human.velocityX = -4;
    human.velocityY = 0;
  }
  if(keyCode === RIGHT_ARROW){
    human.addImage("human",human1Img);
    human.velocityX = 4;
    human.velocityY = 0;
  }
  if(keyCode === UP_ARROW){
    human.velocityX = 0;
    human.velocityY = -4;
  }
  if(keyCode === DOWN_ARROW){
    human.velocityX = 0;
    human.velocityY = 4;
  }
}