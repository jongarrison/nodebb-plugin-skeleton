
This project is meant to be a very simple NodeBB plugin skeleton project.  
This plugin worked and showed the log message for NodeBB 0.7.2

The official documentation for writing plugins is found here:
https://docs.nodebb.org/en/latest/plugins/create.html

Also refer to this NodeBB discussion thread:
https://community.nodebb.org/topic/218/how-to-guide-for-writing-your-first-plugin/26


Steps to start running this sample NodeBB plugin:

1.  Get the code onto your machine by cloning it into a good spot to work on a new plugin:

  git clone https://github.com/jongarrison/nodebb-plugin-skeleton.git

2.  From within the checked out directory, link it into your local npm repository:

  npm link
  (for more info on npm link: https://docs.npmjs.com/cli/link)

3.  From your NodeBB dev install link to the new npm package:

  npm link nodebb-plugin-skeleton
  
  
4.  Start your node instance using:

  ./nodebb dev
  
5.  Go to your install and see the plugin listed and available to activate.  Activate it:

  http://localhost:4567/admin/extend/plugins
  
6.  Restarting your instance should show this somewhere in the dev output:

  20/8 15:30 [42573] - info: SKELETON - init called


