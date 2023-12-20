# Grocery List App using Create React App

### Description
This project was created as a part of the React class to learn and practice class components, this.state, arrays, set.State, events (onChange, onChangeEvent, onSubmit, onClick), map. The purpose is to be able to add and remove items for/from the grosery list.

## Available options

In the app you can: add items, cross out the items, clear the list.

## Technologies Used

<ul>
   <li>HTML5</li>
   <li>CSS3</li>
   <li>Javascript</li>
   <li>React</li>
</ul>

## Setup/Installation Requirements

<ul>
   <li>Clone the repo: https://github.com/Angiedoescoding/Grocery-list.git</li>
   <li>Run npm start. This should open 'localhost:3000' in your browser.</li>
</ul>

### `export class GroceryList extends Component {}`

Set the class component for the future app. Here you will build the app by setting its current state through:
userInput: "" (set as empty for now)
GroceryLis: [] - an empty array that will be filled by the user later.


### The `render() {}` stage

We render the app to be sure future actions are working.

1. Create the input form with adding the onSubmit event.
2. Apply the function with .onChangeEvent() that will say that the app needs to react on changes made by the user AND it must give us access to user's input:
3. Now, we also should add a line with value={this.state.userInput} where value={} is what (value) the user has entered at this moment.
4. Create a button that will react with the onClick function event.
5. Create an option for the user to cross over the item they don't need anymore by:
   - first step is to add an unordered list;
   - apply a function that would be crossing over the item upon clicking on it (the word) - (onClick);
   - use the .map() method in the function so it will get us access (and show it to the user) to each item from the <li> list.
6. Create an option for the user to clear out the grocery list they have previously created:
   using the onClick function where we refer to a function that would clear out the array.

### Functions

1. .onChangeEvent(event){this.setState({userInpit: event})}} -- we want ot show what user has enetered and we do it through the 'event' (the base of the 'event'function is layed out in the render() {} under the <input> line via onChange.
2. Creating a function for the "addItem" method where we show variable to what user's each new item will be placed into (this.state.GroceryList).
3. Next, telling how exactly the new item will be added to our array - in our case with the help of the ".push()" method by adding a brend new item to the end of the current list of existing items.
4. We need to make sure our GroceryList array equals to what user is entering - listArray as well. Next, here we also need to make sure that the input area that the user is using to type in their new grocery item is getting cleared out after the user adds the item (by manually clicking on Add button or using Enter keyboard).
For this we use this.setState({GroceryList: listArray, userInput: ''}) .
5. Adding functions to:
   5.1. Cross the word out: add the 'event' because we added an event listener to an item list by adding 'const li = ' and we follow it via .target. Once the user clicks manually on the item list, the class will be created and the item will be changed to a crossed word (the style is applied through the CSS file).
   5.2. Clearing out the whole list: we don't use const here, but better to use let so it will allow the list to change. We need to get access to the items list and clear out the whole array (list).


### `<input> and <form> for Enter keybutton`

**Note: Wrap up the <input></input> into <form></form> to be able for the user to add elements to the list using the Enter button. **

This is done through the onSubmit atribute where we than code all the necessary lines and then - apply a method.

That said, for the Enter button to work we need everything that we coded earlier to wrap up in the <form></form> tag and add the onSubmit atribute where we then tell the system what to do (through this.MethodName/function). Then we add details.

### `Prevent automatic page refresh`

.preventDefault() - this method prevents the page from an automatic refresh all the time when any action is made.
In the case of the app, the method is applied to "e" where "e" is for "hit Enter button"

   onFormSubmit(e){e.preventDefault()} --- this will refrain the page from refreshing every time when the user pushes the Enter button.
