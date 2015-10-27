// ***************************************************************
// ROUTES (activities)
// ***************************************************************

Router.map(function() {

  // DOCUMENTS INDEX
  // -------------------------------------------------------
  this.route('activitiesIndex', {
    template: 'activitiesIndex',
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
  this.route('activityNew', {
    template: 'activityNew',
    path: '/activities/new'
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('activityShow', {
    template: 'activityShow',
    path: '/activities/:_id',
    waitOn: function () {
      return Meteor.subscribe('activity', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('activityEdit', {
    template: 'activityEdit',
    path: '/activities/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('activity', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

});
