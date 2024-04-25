# Sharing state with sibling components

- To do that, we have to place the state in a component which is the nearest common parent of the two components.
- It should then be passed down to both the components as props.
- Something that we did in the Far Away project.
- If we have one way data flow, then how can child component change the state in the parent component?
- We can simply use set method, passed down as a prop, for changing that state. (inverse data flow is achieved)

# Deleting an Item: More child and parent comunication

- Since the click will happen in the Item component, but state lives in the App component (parent component)

## Steps:

- create a handleDelete function in App component, in this we delete the item using the id as identifier.
- Use filter method, to remove items based on condition.
- We now pass the function into App -> PassingList -> Item.
- Then we call this method, by passing the id, onClick of the button. (Make sure you pass the correct id)

# Check and uncheck items
