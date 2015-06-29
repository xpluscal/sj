// Server
Meteor.publishComposite('users', {
    find: function() {
		return Meteor.users.find({}, 
								 {fields: {emails: 1, profile: 1}});
	}
});