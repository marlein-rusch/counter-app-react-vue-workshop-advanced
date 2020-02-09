# Answers to the 4 questions in the master branch

## 1: Why do we need to filter the array we receive from the API?

We filter the array that we receive from the API in order to synchronize the amount of displayed movies on screen with the current count.

If we do not filter the array, and use `batmanShows.map` instead of `batmanShowsToRender.map`, then we will either display no movies if the count is <= 0, or display all fetched movies if the count is >= 1.

The JavaScript `filter` method creates a new array with all elements that pass the test implemented by the provided function. Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter. Along with the `map` and `reduce` methods, it is a useful method to get the hang of, because it will increase your JavaScript skills, and is used quite often in React projects.

## 2: What does the underscore represent in the filter method, and why do we not use it?

The first argument of the filter method represents the current element we're looping through, the second argument represents its index in the array. As we only wish to filter the movies based on their position in the original array, and not based on their element properties, we do not use the first argument. Because we do not use the first argument 'element', one convention is to use an underscore, instead of typing the word 'element'.

Because this may sound bit complex, let me try to talk you through this line of code.
`const batmanShowsToRender = batmanShows.filter((_, index) => index < count);`

What happens here? We apply the filter method to the `batmanShows` array. The filter method then loops through each element of the batmanShows array. We tell the filter method, for each element, look at the element and index `(element, index)`, and then `=>`, if the index of that element in the array is still smaller then the count in our state `index < count`, then push this element into the new array `batmanShowsToRender`. But hee, because we don't even look at the element itself, but only at its position in the array, why even bother writing `(element, index)`, let's just write ` (_, index)`, because index is all that matters to us when we filter the batmanShows.

## 3: Can you explain why the JavaScript ternary operator is used for these lines of JSX?

The ternary operator (or 'conditional operator') is a shorter way in JavaScript to write a simple if-else statement. It will evaluate the statement before the `?`, and if that statement is true, it will return the first part, otherwise the second part. For example: `console.log(3 > 1 ? "3 is bigger than 1" : "1 is bigger than 3")`. It means: if `3 > 1`, then log "3 is bigger than 1" to the console, otherwise log "1 is bigger than 3" to the console. FYI: copy this line of code and paste is in the console of your chrome developer tools to try it out yourself.

In `App.js`, this logic is used to display one part of JSX or the other, depending on the length of the `batmanShowsToRender` array.

## 4: Why do we check if the length of the batmanShowsToRender array is longer than 0?

We are essentially doing this:
`batmanShowsToRender.length > 0 ? batmanShowsToRender.map(blabla) : <div>JSX Alternative text</div>" `. That is: we map over the batmanShowsToRender array and do blabla with each element if it contains at least 1 element, and otherwise we display 'JSX Alternative text'.

If we do not use this conditional statement, and we only type `batmanShowsToRender.map(blabla)`, then we will will map over the array even when it's empty, which results in an empty render, i.e. nothing is displayed on screen. That is not very informative to our website users.

If you remember well, when a component is mounted, it goes through the lifecycle methods in a specific order. First, the constructor() method is called, then the render() method, and thén the componentDidMount() method is called, which is where we fetch the batman movies. This means that on the first render of the App component, no badman movies have been fetched yet. For this reason we create an initial empty `batmanShows` array in the state, so that in our render method, we can say: as long as the `batmanShowsToRender` array is empty (because the movies have not been fetched yet and/or the user count is 0), then render JSX with a piece of text that says 'wups, blablabla'.
