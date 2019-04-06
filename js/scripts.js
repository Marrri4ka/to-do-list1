function ToDoList(thing) {
  this.todo = thing;
}


ToDoList.prototype.showData = function(result) {
  result.append("<li>" + this.todo + "</li>");

};

$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#new-thing").val();
    var sentence = new ToDoList(inputSentence);
    var result = $("ul");
    sentence.showData(result);


  });

});


// function ToDoList(thing) {
//   this.todo = thing;
// }
//
//
// ToDoList.prototype.showData = function(result) {
//   result.append("<li>" + this.todo + "</li>");
//
//
// }
//
//
//
// $(document).ready(function() {
//   $("form#new-list").submit(function(event) {
//     event.preventDefault();
//     var inputThing = $("input#new-thing").val();
//     var sentence = new ToDoList(inputThing);
//     var result = $("ul");
//     sentence.showData(result);
//   });
// });