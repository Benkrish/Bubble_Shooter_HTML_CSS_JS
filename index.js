// inspect pe blue ka matlab number and black is string
// ' 2 + 2', ` ${2 + 2}`
// console.log('hi')
// Math.random() // gives number between 0 and 1 but it will not give 0 or
// 1
// jispe click karoge wo ele par event raise hoga, aur event  listener naa milne par
// event element ke parent par listener dhundhega, waha bhi naa milne paar event parent ke
// parent ke parent par listener dhundega

// You're using innerHTML to populate the bubbles with the makeBubl() function. This is because you're inserting HTML code (<div class="bubble">...</div>) and want the browser to interpret it as HTML elements.
// You're using textContent to set the content of various elements like #scoreVal, #hitval, #timmerVal, and displaying 'Game Over'. Here, you're dealing with text content and not HTML structure.
// Remember:

// Use innerHTML when you need to set HTML structure dynamically or manipulate elements with HTML content.
// Use textContent when you're dealing with plain text content to avoid unintended HTML rendering and enhance security.

// Usage: innerHTML is commonly used to set or retrieve the HTML content inside an element.
//
var time = 60
var score = 0
var hitrn = 0
function increaseScore() {
  score = score + 10
  document.querySelector('#scoreVal').textContent = score
}
// var rn is function scoped so uske bahar use karne ke liye
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10)
  document.querySelector('#hitval').textContent = hitrn
}
// below part is making bubble

function makeBubl() {
  var clutter = ''

  for (var i = 1; i < 134; i++) {
    rn = Math.floor(Math.random() * 10)
    clutter += `<div class="bubble">
        ${rn}
        </div>`
  }
  document.querySelector('#pbtm').innerHTML = clutter
}
// IN EVERY 1SEC TIME IS REDUCED BY -1
function runTimmer() {
  var timmer = setInterval(function () {
    if (time > 0) {
      time--
      document.querySelector('#timmerVal').innerHTML = time
      if (time < 10) {
        document.querySelector('#timmerVal').style.backgroundColor = 'Red'
      }
    } // from clearInterval it will clear so that memory will not be wasted after 0
    else {
      clearInterval(timmer)
      document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>` // vacant karne ke liye document.querySelector('#pbtm').innerHTML= "";
    }
  }, 1000)
}
// pbtm pe islye lagaya coz agar bubble pe lagta to vo 168 pe listener raise larna padtha
// isliye uske  parent pe laga diya taaki nahi mile to uske parent pe hi or find kare
document.querySelector('#pbtm').addEventListener('click', function (dets) {
  // blue is number red is string to  isko karne pe dets.target.textContent string aa raha tha red me so number me convvert isliye kiya
  var clickedNumber = Number(dets.target.textContent) // dets.target details dega ki 168 bubbles me se kon se wale pe click ho raha hai
  // jab click event chalega to o details deta hai vo dets ka naam kuch bhi ralh sakte ho , target vo banda hota hai jispe click hua ho so it will retirn pura div with that nu so .textcontent se vo sirf number aaya
  if (clickedNumber == hitrn) {
    //   if same then inc score as well as make new bubbles and change hit
    increaseScore()
    makeBubl()
    getNewHit()
  }
})
runTimmer()
makeBubl()
getNewHit()
