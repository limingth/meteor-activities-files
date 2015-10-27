Template.activitieNew.rendered = function() {
};

Template.activitieNew.helpers({
});

Template.activitieNew.events ({
});

AutoForm.hooks({
  'activitieForm': {
    before: {
      insert: function(doc) {
        doc.createdAt = new Date();
        return doc;
        // doc.dateCreated = new Date();
        // this.result(doc);
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New activitie inserted successfully!');
      Router.go('activitieIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
 //    onSubmit: function (insertDoc, updateDoc, currentDoc) {
 //     if (customHandler(insertDoc)) {
 //       this.done();
 //     } else {
 //       this.done(new Error("Submission failed"));
 //     }
 //     return false;
 //   }
 // }

});
