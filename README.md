# digitalquestionnaire
digitalquestionnaire

Install:
`npm i`

Build:
1. In `src/index.js` change:
* `import { default as Page } from "./questionnaires/fileNameOfYourQuestionnaire";`
* `const questionnaireName = 'nameOfYourQuestionnaireThatWillBeUsedInTheFileNameOfTheSavedCsv';`
* `` const string_submit = `TextOnTheSaveButton` ``

2. `npm run build`
3. This will build the questionnaire under `build/index.html`


Pull requests welcome!
