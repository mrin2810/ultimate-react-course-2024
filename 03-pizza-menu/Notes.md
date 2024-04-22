# Components

- React apps are always made from building blocks called as Components
- We should be able to reuse the apps
- We should be comfortable with using nested components
- Never nest, component declarations

# JSX

- JSX looks a lot like HTML.
- Babel converts the JSX to JavaScript.
- It will convert JSX to Pure React Code.
- This conversion is necessary, as browsers do not understand JSX, they only understand HTML.
- JSX makes it readable as well.
- It is Declarative syntax, meaning, we only tell what to render, but no imperative syntax(HOW) to achieve it!

# Props

- We use props to communicate between parent and child components.
- We can pass anything into props, single value, array, function, reactcomponents etc.
  Note: Props are READ-ONLY
- We can only upadate State but not Props.
- Props can be updated by Parent Component.
- Components have to be pure, in terms of state and props.
- React uses one way data flow, means, we can pass data from parent to child components only, not from child to parent.
  : Angular, has 2-way data flow

Why?

- Makes applications predictable and easier to understand
- Easier to debug
- is more efficient

# Conditional Renderering using &&

- We created an isOpen variable, and it tells us if the restaurant is open or not.
- We render some piece of UI, based on a certain condition
- React will render any values other than true or false.

# Conditional Rendering using ternary operator

- Instead of && we use ternery operator, (condition) ? (if true) : (else)
