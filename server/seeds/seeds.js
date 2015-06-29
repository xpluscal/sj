Meteor.startup(function () {
    if (Jobs.find().count() === 0) {

      var jobs = [
        {'title': 'Graphic Designer',
          'description': 'Can we please just for an evening not listen to dubstep.', 'status': 'activated', 'contentStatus': 'finished'
		},
        {'title': 'Cook',
          'description': 'Get it on!', 'status': 'activated', 'contentStatus': 'finished'
		},
        {'title': 'Fast Dirty Money',
          'description': 'Leisure suit required. And only fiercest manners.'}
      ];

      for (var i = 0; i < jobs.length; i++)
        Jobs.insert(jobs[i]);

    }
});