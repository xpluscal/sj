Jobs = new Mongo.Collection("jobs");

Jobs.allow({
  insert: function (userId, job) {
    return userId && job.owner === userId;
  },
  update: function (userId, job, fields, modifier) {
    return userId && job.owner === userId;
  },
  remove: function (userId, job) {
    return userId && job.owner === userId;
  }
});