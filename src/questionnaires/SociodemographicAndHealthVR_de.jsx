import React from "react";
import { Field } from "formik";
import Radio from "../components/Radio";
import RadioWithInputOption from "../components/RadioWithInputOption";
import Checkbox from "../components/Checkbox"

const SociodemographicAndHealthVR_de = () =>    
<div>
<p>Participant ID:</p>
<Field />
<h1>Fragebogen zur Soziodemografie und Gesundheit</h1>
<p>Bitte füllen Sie die nächsten 2 Seiten aus. Falls Sie eine Frage nicht beantworten möchten,
streichen Sie diese. Ihre Antworten werden vollständig anonymisiert gespeichert und nur in dieser
Studie verwendet.</p>
<p>Alter:</p>
<Field />
<p>Erstsprache:</p>
<Field />
<p>Biologisches Geschlecht:</p>
<RadioWithInputOption items={['weiblich', 'männlich','keine Angabe','sonstiges (bitte angeben)']} />
<p>Gender (erlebtes Geschlecht)</p>
<RadioWithInputOption items={['weiblich', 'männlich', 'keine Angabe','sonstiges (bitte angeben)']}  />
<p>Händigkeit:</p>
<Radio items={['links', 'rechts', 'beidhändig']} />
<p>Höchster Bildungsabschluss:</p>
<Radio items={[
    'Kein Schulabschluss', 
    'Hautschul- /Realschulabschluss / Abitur', 
    'Hochschulabschluss',
    'Ph.D.']} />
<p>Ist Ihre Sehfähigkeit eingeschränkt?</p>
<Radio items={['Ja', 'Nein']} />
<p>Wenn ja, nutzen sie heute eine Sehkorrektur?</p>
<Radio items={['Nein', 'Kontaktlinsen', 'Brille']} />
<p>Haben Sie schon an anderen Studien teilgenommen? (bitte alle zutreffenden ankreuzen)</p>
<Checkbox items={['Verhaltensanaylse',
'Electroenzephalogramm (EEG)',
'Brain-Computer Interface (BCI)',
'Elektrookulogramm (EOG) oder Eye Tracking',
'Elektromyogramm (EMG)',
'Elektrokardiogramm (EKG)',
'Hautleitfähigkeit (EDA)',
'Motion Capture',
'Bild/Video Aufnahme']} />
<p>Leiden Sie unter Hauterkrankungen oder Allergien?</p>
<Radio items={['No', 
'Ja, in milder Ausprägung',
'Ja, in starker Ausprägung']} />
<p>Ich bestätige, dass ich an keiner neurologischen Erkrankung leide (Epilepsie, Depression etc.).</p>
<Radio items={['Ja', 'Nein']} />
<p>Ich bestätige, dass ich mich momentan nicht krank fühle.</p>
<Radio items={['Ja', 'Nein']} />
<p>Ich bestätige, dass ich in den letzten 8h keinen Alkohol konsumiert habe.</p>
<Radio items={['Ja', 'Nein']} />
<p>Ich bestätige, dass ich heute keine Medikamente zu mir genommen habe.</p>
<Radio items={['Ja', 'Nein']} />
<p>Ich bestätige, dass ich in den letzten 24h keine Betäubungsmittel zu mir genommen habe.</p>
<Radio items={['Ja', 'Nein']} />
<p>Haben Sie vor der Studie körperlich oder mental anstrengende Aktivitäten durchgeführt?</p>
<Radio items={['Ja', 'Nein']} />
<p>Wie mental anstrengend waren diese Aktivitäten?</p>
<Radio items={['1 - Gar nicht', '2', '3', '4', 
'5', '6', '7 - Extrem']} />
<p>Wie körperlich anstrengend waren diese Aktivitäten?</p>
<Radio items={['1 - Gar nicht', '2', '3', '4', 
'5', '6', '7 - Extrem']} />
<p>Haben Sie in den letzten 12 Stunden Koffeine konsumiert?</p>
<Radio items={['Yes', 'No']} />
<p><i>Wenn ja, geben Sie bitte an wann und wieviel.</i></p>
<Field />
<p>Haben Sie Vorerfahrungen mit virtuellen Realitäten?</p>
<Radio items={[
    'Keine Vorerfahrung', 
    'Geringe Vorerfahrung (<=5 Interaktionen)', 
    'Vorerfahrung (>5)']} />
<p>Haben Sie Vorerfahrungen mit haptischem Feedback in virtuellen Realitäten?</p>
<Radio items={[
    'Keine Vorerfahrung', 
    'Geringe Vorerfahrung (<=5 Interaktionen)', 
    'Vorerfahrung (>5)']} />
<p>Thank you!</p>
</div>

export default SociodemographicAndHealthVR_de;