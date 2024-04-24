# Working with Controlled Elements

- We can access the data in forms, using event object.
- But in react we use Controlled Elements to do that.
- With this, it is React who controls the state of the elements in the form and not DOM.

# 3 Step Approach

1. Create a piece of state (e.g. description)
2. Use the state as the value of the input element (e.g. value={description})
3. listen for the change event using onChange prop (e.g. onChange={e => setDescription(e.target.value)})

- These steps will let React control the form element instead of DOM.
- Make sure that if you are assigning numbers they value is converted to number, as the e.target.value will be string most of the times.
