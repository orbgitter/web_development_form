function playSoundTheme() {
    var sound = document.getElementById("theme");
    sound.play();
}


function checkname() {
    var f = document.getElementById("fName");
    var val = f.value.toString();
    
    if (-1 == val.indexOf('a') || -1 == val.indexOf('d') || -1 != val.indexOf(' ')) {
      console.log("The message is: '" + myError.message + "'");
      return false;
    }
    else {
        return true;
    }
}