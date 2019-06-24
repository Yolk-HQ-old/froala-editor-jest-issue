# froala-editor-jest-issue
Repro of an issue where Froala Editor cannot be rendered in Jest.

See https://github.com/froala/wysiwyg-editor/issues/3504

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Run:

```
npm install
npm test -- --watchAll=false
```

Observe this error:

```
 FAIL  src/App.test.js
  ✕ renders without crashing (45ms)

  ● renders without crashing

    TypeError: Cannot read property '$off' of undefined

       6 |   const div = document.createElement('div');
       7 |   ReactDOM.render(<App />, div);
    >  8 |   ReactDOM.unmountComponentAtNode(div);
         |            ^
       9 | });
      10 |

      at E.Bootstrap.destroy (node_modules/froala-editor/js/froala_editor.min.js:7:260354)
      at Object.unmountComponentAtNode (src/App.test.js:8:12)

  console.error node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/virtual-console.js:29
    Error: Uncaught [TypeError: Cannot read property '$off' of undefined]
        at reportException (/Users/spencerelliott/Dev/elliottsj/froala-editor-jest-issue/node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/living/helpers/runtime-script-errors.js:66:24)
        at invokeEventListeners (/Users/spencerelliott/Dev/elliottsj/froala-editor-jest-issue/node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:209:9)
        at HTMLUnknownElementImpl._dispatch (/Users/spencerelliott/Dev/elliottsj/froala-editor-jest-issue/node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:119:9)
        at HTMLUnknownElementImpl.dispatchEvent (/Users/spencerelliott/Dev/elliottsj/froala-editor-jest-issue/node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/living/events/EventTarget-impl.js:82:17)
```
