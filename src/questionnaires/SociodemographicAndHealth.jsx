import React from "react";
import { Field } from "formik";
import Radio from "../components/Radio";
import RadioWithInputOption from "../components/RadioWithInputOption";
import Checkbox from "../components/Checkbox"

const SociodemographicAndHealth = () =>    
<div>
<p>Participant ID:</p>
<Field />
<h1>Sociodemographic and Health Questionnaire</h1>
<p>Please fill out the following two pages. If you decline to answer a question, please leave it blank.
Your responses will be stored completely anonymized and will only be used for this this project.</p>
<p>Age:</p>
<Field />
<p>Native language:</p>
<Field />
<p>Biological Sex:</p>
<RadioWithInputOption items={['female', 'male', 'other (please state)']} />
<p>Gender (experienced sex)</p>
<RadioWithInputOption items={['female', 'male', 'other (please state)']} />
<p>Handedness:</p>
<Radio items={['Left', 'Right', 'Ambidextrous']} />
<p>Highest Level of Education:</p>
<Radio items={[
    'Did not graduate high school', 
    'High School Graduate', 
    'College Graduate',
    'Master’s Graduate',
    'Ph.D. Graduate']} />
<p>Do you suffer from visual deficits?</p>
<Radio items={['Yes', 'No']} />
<p>If yes, do you use anything to correct your vision?</p>
<Radio items={['No', 'Yes, contacts', 'Yes, glasses']} />
<p>Have you previously participated in other studies? (Check all experiments/methods you have experienced before)</p>
<Checkbox items={['Psychological/Behavioral',
'Electroencephalogram (EEG)',
'Brain-Computer Interface (BCI)',
'Electrooculogram (EOG) or Eye Tracking',
'Electromyogram (EMG)',
'Electrocardiogram (EKG)',
'Electrodermal Activity (EDA)',
'Motion Capture',
'Image/Video Capture']} />
<p>Do you suffer from any skin conditions or allergies?</p>
<Radio items={['No, no allergies or other conditions', 
'Yes, mild skin allergy or sensitivity',
'Yes, severe skin allergy or sensitivity']} />
<p>I confirm that I do not suffer from any neurological conditions (epilepsy, depression or other).</p>
<Radio items={['Yes', 'No']} />
<p>I confirm that I currently do not feel unwell or ill.</p>
<Radio items={['Yes', 'No']} />
<p>I confirm that I did not consume any alcoholic beverages in the last 8 hours.</p>
<Radio items={['Yes', 'No']} />
<p>I confirm that I have not taken any medication today.</p>
<Radio items={['Yes', 'No']} />
<p>I confirm that I have not consumed any narcotics in the past 24 hours.</p>
<Radio items={['Yes', 'No']} />
<p>Have you performed any physically or mentally stressful activities leading up to this experiment?</p>
<Radio items={['Yes', 'No']} />
<p>How mentally straining or stressful were these activities?</p>
<Radio items={['1 - Not at all', '2 - Mildly', '3 - Marginally', '4 - Moderately', 
'5 - Considerably', '6 - Severly', '7 - Extremely']} />
<p>How physically straining or stressful were these activities?</p>
<Radio items={['1 - Not at all', '2 - Mildly', '3 - Marginally', '4 - Moderately', 
'5 - Considerably', '6 - Severly', '7 - Extremely']} />
<p>Have you consumed caffeine in the past 12 hours?</p>
<Radio items={['Yes', 'No']} />
<p><i>If yes, please indicate what (coffee, tea, dark chocolate, etc.), how much and how long ago.</i></p>
<Field />
<p>Thank you!</p>
</div>

export default SociodemographicAndHealth;