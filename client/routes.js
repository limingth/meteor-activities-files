// ***************************************************************
// ROUTES (activities)
// ***************************************************************

Router.map(function() {

  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('activitieIndex', {
    template: 'activitieIndex',
    path: '/activities',
    waitOn: function () {
      return Meteor.subscribe('activities');
    },
    data: {
      activities: function () {
        return Activities.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // DOCUMENT NEW
  // -------------------------------------------------------
  this.route('activitieNew', {
    template: 'activitieNew',
    path: '/activities/new'
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('activitieShow', {
    template: 'activitieShow',
    path: '/activities/:_id',
    waitOn: function () {
      return Meteor.subscribe('activitie', this.params._id);
    },
    data: function () {
      return activities.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('activitieEdit', {
    template: 'activitieEdit',
    path: '/activities/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('activitie', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

});
