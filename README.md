## GitHub visualiser with React & React Router

In this sprint we will learn about React Router, a library for React that allows us to route our users to different parts of our application. We will be implementing a "GitHub visualiser", a clone of the GitHub website that displays the Northcoders organisation, its members, members' profiles and their repos, all in different routes.

We will be getting the data from our own custom API server because GitHub limits API requests to 60 an hour, which is not ideal for development. You can read the **neat** reference for the API [here](https://northcoderssprint-github-elaycqpgip.now.sh/).

### Objectives

1. Continue delving deeper into the React ecosystem; routing is a key part of any complex application.
2. Practice making restful, parameterised routes and loading or accessing the data you need on each route
3. Put into practice what you've learned during the previous two weeks' work on React.
4. Nail down making `GET` requests to an API. Try to get comfortable with asynchronous code and handle loading periods of time appropriately.
5. Learn how to make these HTTP requests with the promise-based library `axios` and learn about JavaScript promises.


### Stages

1. Explore the API to see what data is available and think about how you will use this data to render:
    1. The Northcoders organisation page
    2. Northcoders' repos
    3. Northcoders' members
    4. Every member's profile page
    5. Every member's list of repos

2. **THINK IN REACT** Have a look at the GitHub website and try to identify which parts should be your components and how your component tree will look. Start with a mock website and hardcode static data just to get the components rendering.
3. Identify the routes of your application and which elements are in charge of linking to them. Create external links to the actual Github website for any additional pages for which you don't have data.
4. Add the live data into your application by making GET requests to the API in the appropriate components. Think carefully about how each route knows what data it needs to render, and how it can obtain this data.
5. Feel free to layout and style your application any way you want. You don't have to copy GitHub's design (although it wouldn't be a bad exercise).

##### Bonus

- A cool feature to implement would be the search/filtering boxes on top of the members and repos lists. They should react in real time to what the user is typing, i.e. there shouldn't be a Search button.
