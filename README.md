# [Demo link](https://dtsehelnyk.github.io/react_Inforce)

Also you should change homepage property in package.json file.

## Available Scrip# Interview Project: Grocery List
We need to build a grocery list web app. The goal is to make it easy for me to remember what food to buy at the grocery store. There is no backend for this application, and we're not asking you to build one, this is purely a frontend React problem so it should use local storage to maintain the list and the details of each entry between sessions.

There are two primary views: the list view and the entry view. 

## Grocery List View
On the list view, I can add entries, remove entries, toggle the status of that entry as either "ran out" or "have", see when the status toggle was last changed, and filter entries by status. The list view should always sort by priority first, and then alphabetically. Priority 1 is highest priority, 5 is the lowest. I should be able to filter for only "ran out", "have", or all, this will make it easy for when I'm shopping to see what I need to buy by filtering for the "ran out" status.

## Grocery Entry View
On the entry view, I can see all of the details of the entry, toggle its status, and view the history of when its status has ever changed. Each entry has a name for the item (e.g. bread, eggs, etc), status (ran out or have) and a priority (numbers 1 through 5). I should also be able delete the current entry here as well.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`
