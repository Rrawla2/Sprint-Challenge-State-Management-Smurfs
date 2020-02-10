1. What problem does the context API help solve?

It solves the problem of handing down props from parent to child to grandchild when child doesn't really need access to the props.  It enables a global state available to the application.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are what you want Redux to dispatch to the reducer, the reducer peforms the logic and the store holds the global state of your application that you can pass to the components as props.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is a global state available to all components and Component state is only used for temporary state that needs to exist just inside of a specific componenet for it's own use.  You would use Application state for data that needs to persist and Component state for temporary data.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware that lets action-creators return a function.  This allows us to start asynchronous tasks that pass through thunk to the reducers.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I like both the redux state management and the context api. Redux because it seems more linear in the way it is set up.  Context API because it's easier to understand in terms of state and the api calls for CRUD applications.