// Server
Meteor.publishComposite('jobs', {
    find: function() {
		return Jobs.find({
			$or:[
			  {$and:[
				{"status": true},
				{"status": {$exists: true}}
			  ]},
			  {$and:[
				{contentStatus: "finished"},
				{contentStatus: {$exists: "finished"}}
			  ]}
			]
		});
	}
});