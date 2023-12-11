# Welcome to Bording Braniacs Frontend

## Tech Stack
- React
- TypeScript
- Jest

## Pipeline
- Husky is used to:
    - check code style using google gts for every commit
    - run Jest tests and check test coverage for every push

## Code Style
- https://google.github.io/styleguide/tsguide.html

## Folder Structure
- src
    - components
    - layouts
    - apis
    - pages
    - assets
    - hooks
    - store (for redux)
    - utils
    - styles
    - `__tests__`
        - helper
        - integration
        - unit
    - App.tsx
    - index.tsx
    - Routes.tsx

---

## Examples
Examples are created for:
- redux
- page
- style
- Routes
- unit test
    - test redux functions
    - test html elements (eg. button click)

---

## Commands

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000/api/counter) to view the example in the browser.

### `npm run lint`
Check code styles

### `npm run fix`
Fix code styles

### `npm run test`

Runs Jest tests in `__tests__` folder

### `npm run build`

Builds the app for production to the `build` folder.

---

## Pipeline
- Husky is configured to automatically check code styles for every commit and check "Jest test + test coverage" for every push to the repo.
- GitHub pipeline is configured to automatically check code styles and check "Jest test + test coverage" for every push and when pull request is raised. The pipeline build steps are configured in the yml file.

---

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
