Accounts.onCreateUser(function(options, user) {
   user.profile = options.profile || {};
 	 user.profile.name = options.name || "Guest";
   user.profile.location = options.location || "Lviv"; 
   return user;
});