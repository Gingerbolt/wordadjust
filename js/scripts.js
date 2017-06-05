$(document).ready(function() {
  $("#phrase").submit(function(event) {
    event.preventDefault()
    var words = $("input#sentence").val().split(" ");
    var newSentence = words.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });

    newSentence = newSentence.reverse()
    newSentence = newSentence.join(" ")

    // newSentence.join()
    alert(newSentence)
    });


});
