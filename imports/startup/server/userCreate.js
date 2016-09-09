Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
 	 user.profile.name = options.name
   user.profile.location = options.location;
   return user;
});