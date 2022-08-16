# digitalquestionnaire

Install:  
`npm i`

Build:  
1. In `src/index.js` change:
  * `import { default as Page } from "./questionnaires/fileNameOfYourQuestionnaire";`
  * `const questionnaireName = 'nameOfYourQuestionnaireThatWillBeUsedInTheFileNameOfTheSavedCsv';`
  * `` const string_submit = `TextOnTheSaveButton` ``
2. `npm run build`
3. Your freshly built questionnaire is here `build/index.html`

Notes  
 - The Radio with input option component assumes that the free input option will always be the last one
 
Comments and pull requests welcome!
