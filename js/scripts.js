function ToDoItem(thing) {
  this.todo = thing;
  this.id = 0;
}

function ToDoList() {
  this.items = [];
  this.currentId = 0;
}
ToDoList.prototype.addItem = function(item) {
  item.id = this.assignId();
  this.items.push(item);
}

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
ToDoItem.prototype.showData = function(result) {
  var li = $("<li>");
  li.attr('id', 'li-item' + this.id);
  li.text(this.todo);
  result.append(li);

  // result.append("<li id='li-item" + this.id + "'>" + this.todo + "</li>");
  result.append("<button class='btn-sm btn-danger' id = 'button-done" +
    this.id + "'>Done</button>" + " " +
    "<button class='btn-sm btn-primary' id = 'button-remove" + this.id + "'>" +
    "Remove item</button>");

  $("#button-done" + this.id).click(function() {
    li.css('background-color', 'green');
  });

  $("#button-remove" + this.id).click(function() {
    li.hide();




  });

};
// UI
var itemsList = new ToDoList();

$(document).ready(function() {
  $("form#new-list").submit(function(event) {
    event.preventDefault();
    var inputData = $("input#new-thing").val();
    var item = new ToDoItem(inputData);
    itemsList.addItem(item);
    var result = $("ul");
    item.showData(result);


    $(".remove-button").click(function() {
      ToDoItem.deleteItem(this.todo);
      $("li").hide();
      $("#button-done" + this.id).hide();

    });
  });

});




// function ToDoItem(thing) {
//   this.todo = thing;
// }
//
//
// ToDoItem.prototype.showData = function(result) {
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
//     var sentence = new ToDoItem(inputThing);
//     var result = $("ul");
//     sentence.showData(result);
//   });
// });