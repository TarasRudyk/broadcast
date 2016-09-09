Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
   user.profile.location = options.location;
   return user;
});