Template.activitieIndex.rendered = function() {
};

Template.activitieIndex.helpers({
  sayHello: function () {
    return "Hello!";
  }
});

Template.activitieIndex.events ({
  'click .delete-activitie': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Activities.remove(item._id);
      console.log("Deleted!")
    }
  }
});
