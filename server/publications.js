// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('activities', function() {
  return Activities.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('activitie', function(id) {
  return Activities.find(id);
});
