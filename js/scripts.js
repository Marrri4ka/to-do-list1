// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = [],
    this.currentId = 0
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        return this.contacts[i];
      }
    }
  };
  return false;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}


AddressBook.prototype.doneContact = function(id) {
  for (var i = 0; i < this.contacts.length; i++) {
    if (this.contacts[i]) {
      if (this.contacts[i].id == id) {
        delete this.contacts[i];
        return true;
      }
    }
  };
  return false;
}
// Business Logic for Contacts ---------
function Contact(firstName, lastName) {
  this.firstName = firstName,
    this.lastName = lastName

}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// User Interface Logic ---------
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact) {
    htmlForContactInfo += "<li id='myli" + contact.id + "'>" + contact.firstName + " " + contact.lastName + "<button class='deleteButton' id=" + contact.id + ">Delete</button>" + "</li>";
  });
  contactsList.html(htmlForContactInfo);
};

function showContact(contactId) {
  var contact = addressBook.findContact(contactId);
  $("#show-contact").show();
  $(".first-name").html(contact.firstName);
  $(".last-name").html(contact.lastName);

  var buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id=" + contact.id + ">Delete</button>");
  buttons.append("<button class='doneButton' id=" + contact.id + ">Done</button>");
}


function attachContactListeners() {
  $("ul#contacts").on("click", "li", function() {
    $("li#" + this.id).hide();
    console.log(this.id);
  });
  $("#buttons").on("click", ".deleteButton", function() {
    addressBook.deleteContact(this.id);
    $("#show-contact").hide();
    displayContactDetails(addressBook);
  });


  $("#buttons").on("click", ".doneButton", function() {
    addressBook.doneContact(this.id);
    $("#show-contact").css('background-color', 'green');
    displayContactDetails(addressBook);
  });

};
$(document).ready(function() {
  attachContactListeners();
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");



    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    addressBook.addContact(newContact);
    displayContactDetails(addressBook);
  })
})