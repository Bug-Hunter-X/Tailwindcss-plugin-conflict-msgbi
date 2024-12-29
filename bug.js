```javascript
//This is a tailwindcss bug that happens when you use a plugin that modifies the tailwindcss configuration.
//The bug manifests itself when you try to use a style that uses a plugin-defined class.
@tailwind base;
@tailwind components;
@tailwind utilities;
```