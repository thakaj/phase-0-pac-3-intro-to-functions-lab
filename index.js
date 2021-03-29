function shout(string) {
    return string.toUpperCase();
  } 
  function whisper(string) {
    return string.toLowerCase();
  } 
function logShout(HELLO) {
    console.log(HELLO.toUpperCase( ));
}
function logWhisper(HELLO) {
    console.log(HELLO.toLowerCase( ));
}
function sayHiToGrandma(string) {
    var cantAnswer = "I can't hear you!";
    var yesAnswer = "YES INDEED!";
    var loveAnswer = "I love you, too.";
    if (string.toLowerCase(string) === string) {
        return cantAnswer
    } else if (string.toUpperCase(string)=== string) {
        return yesAnswer;
    } else if ("I love you, Grandma." === string) {
        return loveAnswer
    }
}