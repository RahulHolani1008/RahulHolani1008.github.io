let i = 0;
let j = 0;
const txt = ["a Developer.","a Humanitarian.","an Enthusiast","a Designer.","an Environmentalist.","an Ally." ];
const speed = 120;
typeWriter = () => {
  if (i < txt[j].length) {
    document.getElementById("mesa").innerHTML = document.getElementById("mesa").innerHTML.substring(0,document.getElementById("mesa").innerHTML.length) + txt[j].charAt(i) ;
    document.getElementById("blinker").classList.remove("hidden");
    i++;
    setTimeout(typeWriter, (speed));
  } else if(i < (txt[j].length)*2) { 
    document.getElementById("mesa").innerHTML = document.getElementById("mesa").innerHTML.substring(0,document.getElementById("mesa").innerHTML.length - 1);
    document.getElementById("blinker").classList.remove("hidden");
    i++;
    setTimeout(typeWriter, (speed));
  }
  else {
    if(++j == txt.length) {
        j = 0;
    }
    i = 0;
    document.getElementById("mesa").innerHTML = "I am ";
    typeWriter();
  }
}

// blinker = () => {
//     if(document.getElementById("blinker").classList.contains("hidden")) {
//         document.getElementById("blinker").classList.remove("hidden");
//     } else {
//         document.getElementById("blinker").classList.add("hidden");
//     }
//     setTimeout(blinker, 1000);
// }

typeWriter();
// blinker();
