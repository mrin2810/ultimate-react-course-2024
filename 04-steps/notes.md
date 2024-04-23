# State in React

- What is state?

  - Data is of 2 types in a react component. We already learnt about Props, now we will learn about State.
  - State is the memory of a component.
  - Notification count, active tab, content of shopping cart
  - State can be easily changed
  - Data need to be held over the lifecycle of the data
  - State variable is one piece of state, and State means all the states in the component.
  - Updating a state triggers rerendering the component in the DOM.
  - Persists local variables between renders.

- How to use state in practice?

  - We will use it in practice.
  - useState Hook willbe used to create a react state.
    - useState can be called in react component

- DevTools for React
  - It is very handy to manage the state of the component.
  - We can see the Component Tree

# How to update the state based on the current state?

- Notice setIsOpen call, we are doing this exact same thing on that line.
- We are updating isOpen based on the value of isOpen.
- We have been doing it wrong:
  not setStep(step + 1)
  but setStep((s) => s + 1)

# Practical Guidelines

- One Component, One State
- Each component has its own state that it manages
- If we change the state in one of the components, it will only change that state.
- State is isolated in each of the components

#### UI as a function of State

- View UI as reflection of data changing over time.
- We describe that reflection of data using state, event handles etc.

### Guidelines/Sumamry about State

- You should create a new state variable for any that component will keep track of over time
- Whenever we want something to be dynamic, we want to create a state for that and change it based on the state.
- To change how the component looks, you should change the state, this happens in an event handler.
- When building a component, you should imagine it's view as reflection of state changing over time.
- For data that should not trigger rerenders, we should NOT use state.

### Review the vanilla.html file
