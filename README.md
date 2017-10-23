# reactnd-readable
Readable is a simple content and comment app built using the react & redux to understand the workflow of react and redux. You can clone this app for understand the react and redux for a real world example.

At persent every company either it's news or tech, using similar content system to create big and very useful resource center for peoples. 

This app is a very simple and small example of this real world system, where user's can post content/blog to predefined categories, comment on their posts and other users' posts, and vote on posts and comments. Users will also be able to edit and delete posts and comments.

## Getting Started
In order to gettig started you must clone the reactnd-readable API server that store your blog/content in database.

### Setup & Install
```
$ git clone https://github.com/udacity/reactnd-project-readable-starter.git
$ cd api-server
$ npm install
$ node server

Server listening on port 3001, Ctrl+C to stop, Please note the port number maybe different on your machine, it's depend on availability of port.
```
* In another terminal window, you have to copy this readable from the git repo.
````
$ git clone https://github.com/pkhighfile/react-readable.git
$ cd readable
$ npm install
$ npm start
```
 After this commend it's open the web browser with readable app. http://localhost:3000/

```
### How to use this readable app.
So now you can see very nice UI of MyBlog. 
1. Home button :  it's used to return on home page at anytime or from anypage.
2. CreatePost button: it's used to create new blog for myblog. 
3. Category Menu :  it's have all predefined category, by clicking them you able to filter the posts according the categorys.
4. SortBy : it's used for sort the post according the HigestVoted, Lowest Voted and by Date.
5. Each Individual posts have voteup, votedown, edit, delete and comments controls.


'''
### It's open source
Please feel free to use this app for learning and understanding the react and redux concepts. 
