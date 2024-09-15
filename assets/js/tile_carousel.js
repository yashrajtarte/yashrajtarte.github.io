// let goBefore = document.querySelector("#prev"),
//   goAfter = document.querySelector("#back"),
//   cardObj = document.querySelectorAll(".card"),
//   cardArea = document.querySelector(".card-group");

// let currentCard = 0,
//   cardLeft = 0,
//   cardWidth = 284;
// let viewWidth = document.body.clientWidth - document.body.clientWidth * 0.2;
// let windowWidth = document.body.clientWidth;
// let cardCount = Math.floor(viewWidth / cardWidth);
// let viewArray = [];

// function getViewArry(idx) {
//   viewArray.push(idx);
// }

// function resetArry() {
//   viewArray.length = 0;
// }

// function resetCard() {
//   for (let i = 0; i < cardObj.length; i++) {
//     cardObj[i].style.display = "none";
//   }
// }

// function setCard() {
//   for (let i = 0; i < viewArray.length; i++) {
//     cardObj[viewArray[i]].style.display = "block";
//     cardObj[viewArray[i]].style.order = i;
//   }
// }

// function setDisp() {
//   let calLeft = (windowWidth - cardWidth * cardCount) / 2;
//   cardArea.style.left =
//     cardLeft === 0 ? calLeft - 48 + "px" : cardLeft - cardWidth - 48 + "px";
//   cardLeft = cardLeft === 0 ? calLeft - 48 : cardLeft - cardWidth - 24;
// }

// function setArryVal() {
//   if (currentCard >= cardObj.length - cardCount) {
//     for (let i = currentCard; i < cardObj.length; i++) {
//       getViewArry(i);
//     }
//     for (let i = 0; i < cardCount - (cardObj.length - currentCard); i++) {
//       getViewArry(i);
//     }
//   } else {
//     for (let i = currentCard; i < currentCard + cardCount; i++) {
//       getViewArry(i);
//     }
//   }
// }

// loadCard();

// function loadCard() {
//   for (let i = 0; i < cardCount; i++) {
//     getViewArry(i);
//   }
//   resetCard();
//   setCard();
//   setDisp();
// }

// goAfter.addEventListener("click", function() {
//   resetArry();
//   currentCard++;
//   if (currentCard === cardObj.length) currentCard = 0;

//   setArryVal();
//   resetCard();
//   setCard();
// });

// goBefore.addEventListener("click", function() {
//   resetArry();
//   currentCard--;
//   if (currentCard < 0) currentCard = cardObj.length - 1;

//   setArryVal();
//   resetCard();
//   setCard();
// });

// window.addEventListener("resize", function() {
//   viewWidth = document.body.clientWidth - document.body.clientWidth * 0.2;
//   windowWidth = document.body.clientWidth;
//   cardCount = Math.floor(viewWidth / cardWidth);

//   cardArea.style.left = (windowWidth - cardWidth * cardCount) / 2 - 48 + "px";
//   resetArry();
//   if (currentCard === cardObj.length) currentCard = 0;
//   if (currentCard < 0) currentCard = cardObj.length - 1;

//   setArryVal();
//   resetCard();
//   setCard();
// });

// function setCard() {
//     for (let i = 0; i < viewArray.length; i++) {
//       if (viewArray[i] !== undefined && cardObj[viewArray[i]]) {
//         // Check if cardObj[viewArray[i]] is valid before accessing its style
//         cardObj[viewArray[i]].style.display = "block";
//         cardObj[viewArray[i]].style.order = i;
//       }
//     }
//   }
  
$(document).ready(function () {
    $(".custom-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoWidth: true
    });
    
    // Toggle active class on item click
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });