# dashboard

How to run app on your local machine ?
  1.``git clone`` the repository
  2.Navigate to the directory through ``terminal`` , do an ``npm install`` (downloads all dependency to run node server).
  3.Navigate to the folder ``dashboard`` inside the project and run ``npm install`` (downloads all dependency to run front end locally)
  4.To run front end locally , install ``angular cli`` and from inisde the dahboard folder  hit ``ng serve``. 
  5.``ng build`` will generate a dist folder and which will serve the static files through node server.
  6.``nodemon app.js`` will listen to the sever changes.
  7.``node app.js `` and open ``localhost:3000``. App is ready to serve you
  
Login Credentials :
  ``{username:'admin' , password : 'admin'}``
  
Session time : 10 hours

to change the session timeout , go to ``login.service.ts`` and change the ``expireTime`` inside ``setCookie()``  .and run ``ng build``.
