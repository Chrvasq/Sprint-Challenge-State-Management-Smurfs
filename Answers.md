1. What problem does the context API help solve?
   A. Context API allows us to store data on a context object, and retrieve that data in the necessary components instead of from props. This removes the need to prop drill.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   A. Actions are sent to reducers and based on their type property, they trigger the reducers to return a new state to the store. The store is the source of truth application state because of its immutability.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   A. Application state is available to the entire application and all components whereas component state is only available to a particular component. An example of application state would be a user’s logged in state and an example of component state would be a form component.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   A. This is a middleware library and allows us to handle asynchronous requests. The returned special function has access to dispatch, and can dispatch a new action based on the result of the API call.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   A. Redux. It's less complicated than I was told by others and I had first thought. The more I use it, the easier it gets to use. I need to use Context API so I can get comfortable with both.
