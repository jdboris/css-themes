# CSS Themes

A collection of CSS themes intended to be imported as CSS (SASS) modules using webpack or other bundlers.

## Installation

```shell
npm i @jdboris/css-themes
```

## Usage (React)

```jsx
import theme from "@jdboris/css-themes/space-station";

function App() {
  return <div className={theme.error}>Something went wrong.</div>;
}
```
