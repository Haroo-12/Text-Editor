let colorbox = document.querySelector(".colorboxe")
let backgroundbox =document.querySelector(".backgroundbox")
let headingbox = document.querySelector(".headingcont")
let textbox = document.querySelector(".conttext")
let colorbtn = document.querySelector(".color")
let backgroundbtn = document.querySelector(".backgroundcolor")
let headingbtn = document.querySelector(".headings")
let textbtn = document.querySelector(".textsize")
// let changetext = document.querySelector("#editor")
let boldbtn = document.querySelector(".bold")
let italicbtn = document.querySelector(".italic")
let underlinebtn = document.querySelector(".underline")
let cleanbtn = document.querySelector(".clear")

function showboxes(){
  let firstclickcolor = true;
  colorbtn.addEventListener("click",function(){
      if(firstclickcolor){
      colorbox.style.opacity = "1";
      backgroundbox.style.opacity = "0"
      headingbox.style.opacity = "0"
      textbox.style.opacity="0"
  firstclickcolor =false
      }
      else{
    if(colorbox.style.opacity==="0"){
      colorbox.style.opacity = "1";
      backgroundbox.style.opacity = "0"
      headingbox.style.opacity = "0"
      textbox.style.opacity="0"
    }
    else{
      colorbox.style.opacity = "0";
      backgroundbox.style.opacity = "0"
      headingbox.style.opacity = "0"
      textbox.style.opacity="0"
    }
  }
  })
  let firstclickbackground = true;
  backgroundbtn.addEventListener("click",function(){
      if(firstclickbackground){
     backgroundbox.style.opacity = "1";
     colorbox.style.opacity = "0"
     headingbox.style.opacity = "0"
      textbox.style.opacity="0"
  firstclickbackground = false
      }
      else{
    if(backgroundbox.style.opacity==="0"){
      backgroundbox.style.opacity = "1";
      textbox.style.opacity="0"
     colorbox.style.opacity = "0"
     headingbox.style.opacity = "0"
    }
    else{
      textbox.style.opacity="0"
      backgroundbox.style.opacity = "0";
     colorbox.style.opacity = "0"
     headingbox.style.opacity = "0"
  
    }
  }
  })
  let firstclickheading = true
  headingbtn.addEventListener("click",function(){
    if(firstclickheading){
      headingbox.style.opacity = "1";
      colorbox.style.opacity = "0"
      backgroundbox.style.opacity="0"
      textbox.style.opacity="0"
      firstclickheading = false
       }
       else{
     if(headingbox.style.opacity==="0"){
      headingbox.style.opacity = "1";
   backgroundbox.style.opacity="0"
      colorbox.style.opacity = "0"
      textbox.style.opacity="0"
  
   
     }
     else{
      headingbox.style.opacity = "0";
      colorbox.style.opacity = "0"
      backgroundbox.style.opacity="0"
      textbox.style.opacity="0"
   
     }
    }
  })
  let firstclicktext = true
  textbtn.addEventListener("click",function(){
    if(firstclicktext){
  textbox.style.opacity = "1"
      headingbox.style.opacity = "0";
      colorbox.style.opacity = "0"
      backgroundbox.style.opacity="0"
      firstclicktext = false
       }
       else{
     if(textbox.style.opacity==="0"){
      textbox.style.opacity = "1"
      headingbox.style.opacity = "0";
   backgroundbox.style.opacity="0"
      colorbox.style.opacity = "0"
  
   
     }
     else{
      textbox.style.opacity="0"
      headingbox.style.opacity = "0";
      colorbox.style.opacity = "0"
      backgroundbox.style.opacity="0"
   
   
     }
    }
  })
}
showboxes()
function BICU(){

  boldbtn.addEventListener("click",function(){
    document.execCommand('bold')
    })
    italicbtn.addEventListener("click",function(){
      document.execCommand("italic")
    })
    underlinebtn.addEventListener("click",function(){
      document.execCommand("underline")
    
    })
    cleanbtn.addEventListener("click",function(){
      document.execCommand('removeFormat');
    })
}
BICU()
function fontfamily(){

let font = ""
let selectedfont = document.querySelector("#selectfont")
let fontarray = ["Courier","Verdana","Inter"]
fontarray.forEach(function(elem){
font+=`<option value="${elem}">${elem}</option>`
})
selectedfont.innerHTML = font
selectedfont.addEventListener("change",function(){
  let selectedFont = selectedfont.value
  document.execCommand('fontName', false, selectedFont);
})
}
fontfamily()
function undoandredo(){

const editableDiv = document.getElementById('editor');
let undoStack = [];
let redoStack = [];

// Function to save the current state
  function saveState() {
    undoStack.push(editableDiv.innerHTML);
    redoStack = []; // Clear redo stack
}

// Initial save state
saveState();

editableDiv.addEventListener('input', saveState);

document.getElementById('undo').onclick = function() {
    if (undoStack.length > 1) {
        redoStack.push(undoStack.pop()); // Move current state to redo stack
        editableDiv.innerHTML = undoStack[undoStack.length - 1]; // Set to last state
    }
};

document.getElementById('redo').onclick = function() {
    if (redoStack.length > 0) {
        editableDiv.innerHTML = redoStack.pop(); // Move from redo stack to current
        undoStack.push(editableDiv.innerHTML); // Save the new state
    }
};
}
undoandredo()
function fontsize() {
  let textarr = []; // Declare textarr array

  function num() {
      for (var i = 14; i < 50; i += 2) {
          var val = i + 2;
          textarr.push(val);
      }
  }

  num();

  let textsizearr = "";
  let textsizeselected = document.querySelector("#textsize");

  // Create options for the select element
  textarr.forEach(function(elem) {
      textsizearr += `<option value="${elem}">${elem}</option>`;
  });

  textsizeselected.innerHTML = textsizearr;

  textsizeselected.addEventListener("change", function() {
      let texts = textsizeselected.value + "px"; // Get the selected value with 'px'
      
      // Get selected text
      let selection = document.getSelection();
      
      if (selection.rangeCount > 0) {
          let range = selection.getRangeAt(0); // Get the selected range

          // Check if the selected text is already wrapped in a span
          let selectedText = range.extractContents(); // Extract the selected text
          let span = document.createElement("span");
          span.style.fontSize = texts; // Set the font size

          span.appendChild(selectedText); // Add the extracted text to the span
          range.insertNode(span); // Insert the span back into the document
      }
  });
}
fontsize();
function backgrounds(){
  let colorclassarr=[
    "red","green",
     "blue","orange",
    "yellow","chocolate",
    "black","purple",
    "white"
    ]
    let emptycolor = ""
    let back = document.querySelector(".back")
    colorclassarr.forEach(function(elem){
    emptycolor+=`<button class="${elem} colorbox"style="background-color: ${elem};"></button>`
    
    })
    back.innerHTML = `${emptycolor}`
    let colorboxes = document.querySelectorAll(".colorbox")
    colorboxes.forEach(function(elem){
      elem.addEventListener("click",function(e){
    let bgcolor = window.getComputedStyle(e.target).backgroundColor;
    document.execCommand('backColor',false,bgcolor)
      })
    })
  
}
backgrounds()
function colors(){
let themearr=[
  "red","green",
   "blue","orange",
  "yellow","chocolate",
  "black","purple",
  "white"
  ]
  let emptytheme =""
  let colored = document.querySelector(".colo")
  themearr.forEach(function(elem){
    emptytheme+=`<button class="${elem} colorboxes" style="background-color: ${elem};"></button>`
  })
  colored.innerHTML = emptytheme
  let allboxes = document.querySelectorAll('.colorboxes')
  allboxes.forEach(function(elem){
    elem.addEventListener("click",function(e){
      let mycolors = window.getComputedStyle(e.target).backgroundColor;
document.execCommand("foreColor",false,mycolors)
    })
  })
}
colors()
function lrc(){
let left = document.querySelector(".left")
let right = document.querySelector(".right")
let center = document.querySelector(".center")
left.addEventListener("click",function(){
  document.execCommand('justifyLeft', false, null);
})
right.addEventListener("click",function(){
  document.execCommand('justifyRight', false, null);
})
center.addEventListener("click",function(){
  document.execCommand('justifyCenter', false, null);
})
}
lrc()
let currentFontSize = 18; // Initial font size in pixels
function icrementdecrement(){
  document.querySelector(".plus").addEventListener("click", function() {
    currentFontSize += 2; // Increment font size by 2
    document.execCommand("styleWithCSS", false, true); // Ensure CSS styles are applied
    document.execCommand("fontSize", false, "1"); // Use a dummy command to trigger style
    const selectedText = window.getSelection();
    if (selectedText.rangeCount > 0) {
        const range = selectedText.getRangeAt(0);
        const span = document.createElement("span");
        span.style.fontSize = currentFontSize + "px"; // Set the new font size
        range.surroundContents(span); // Wrap the selected text in a span
    }
});
document.querySelector(".minus").addEventListener("click", function() {
  currentFontSize -= 2; // Increment font size by 2
  document.execCommand("styleWithCSS", false, true); // Ensure CSS styles are applied
  document.execCommand("fontSize", false, "1"); // Use a dummy command to trigger style
  const selectedText = window.getSelection();
  if (selectedText.rangeCount > 0) {
      const range = selectedText.getRangeAt(0);
      const span = document.createElement("span");
      span.style.fontSize = currentFontSize + "px"; // Set the new font size
      range.surroundContents(span); // Wrap the selected text in a span
  }
});
}
icrementdecrement()
function headings(){
let headingone = document.querySelector("#headone");
let headone = 30
headingone.addEventListener("click", function() {
  
  document.execCommand("fontSize", false, headone+"px")
});
let headingtwo = document.querySelector("#headtwo")
let headtwo = 6;
headingtwo.addEventListener("click",function(){
  document.execCommand("fontSize", false, headone+"px")
  
})
}
headings()
function smalllarge(){
let largest = document.querySelector("#largest")
let largevalue = 6;
largest.addEventListener("click",function(){
  document.execCommand("fontSize", false, largevalue+"px")
  
})
let smallest = document.querySelector("#smallest")
let smallvalue = 4;
smallest.addEventListener("click",function(){
  document.execCommand("fontSize", false, smallvalue+"px")
  
})
}
smalllarge()