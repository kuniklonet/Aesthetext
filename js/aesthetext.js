// var SPACING = 1;
// var STR = "text";
//
// memeify(STR, SPACING);

function memeify(){
  var string = document.getElementById("input").value;
  var spacing = document.getElementById("spacing").value;
  var caps = document.getElementById("caps").checked;
  var meme = aesthetic(string, spacing, caps);
  htmlmeme = htmlver(meme);

  document.getElementById("output").innerHTML = htmlmeme;
  document.getElementById("copytext").value = htmlmeme;

  document.getElementById("cpbutton").setAttribute("data-clipboard-text", meme);
  $('#modal1').modal('open');
}

function htmlver(string){
  var s = "&nbsp";

  return string.replace(new RegExp(escapeRegExp(" "), 'g'), s);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function aesthetic(string, spacing, caps){
  var outstring = "";
  var spacing = " ".repeat(spacing);
  for (var char in string) {
    outstring += string[char] + spacing;
  }
  if (caps){
    outstring = outstring.toUpperCase();
  }
  outstring = outstring.trim();
  return outstring;
}
