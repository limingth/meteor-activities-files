Template.activityShow.rendered = function() {
};

Template.activityShow.helpers({
});

Template.activityShow.events ({
});

Template.registerHelper('formatdatetime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("YYYY/MM/DD hh:mm");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('formatdatetimeTime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("hh:mm");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('formatdatetimeDate', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("YYYY-MM-DD");
    }

  }
  else {
    return datetime;
  }
});
