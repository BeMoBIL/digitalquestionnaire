# digitalquestionnaire

A framework for creating questionnaires that require offline functionality.

The questionnaire can be created using an HTML like format. For an example see `/src/questionnaires/SociodemographicAndHealth.jsx`

The script the builds a single HTML file, which saves the answers to a local .csv file.

Built versions can be found in `./artifacts`

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
 
Similar projects

https://thefragebogen.de/
