function ToDoList(thing) {
  this.todo = thing;
}


ToDoList.prototype.showData = function(result, number) {
  result.append("<li class='li-not-done' id='li-item'>" + this.todo + "</li>" +
    "<button class='done-button btn btn-danger' id = 'button'" + number + ">Done</button>");

};



// ToDoList.prototype.click = function (button, result){
//   $(".btn").click (function(){
//     this.todo.
//   });
// }

$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputSentence = $("input#new-thing").val();
    var sentence = new ToDoList(inputSentence);
    var result = $("ul");
    sentence.showData(result);
    $(".done-button").click(function() {
      $("#li-item").addClass('li-done').removeClass('li-not-done');
    });


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