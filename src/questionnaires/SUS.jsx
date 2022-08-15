import React from "react";
import { Field } from "formik";
import Radio from "../components/Radio";
import Textarea from "../components/Textarea"

const Page = () =>     <div>
<p>Participant ID:</p>
<Field />
<h2>
  Slater-Usoh-Steed questionnaire
</h2>
<p>SUS</p>
<p>
  Thank you for your participation in the experiment. It’ll take you about 15 - 20 minutes to fill in the questionnaire.
</p>
<hr />
<h3>
  Please rate your sense of being in the virtual environment
</h3>
<Radio items={[1, 2, 3, 4, 5, 6, 7]}></Radio>
<p>where 7 represents your <i>normal experience of being in a place.</i></p>
<hr />
<h3>
  To what extent were there times during the experience when the virtual environment was the reality for you?
</h3>
<Textarea />
<hr />
<h3>
  When you think back to the experience, do you think of the virtual environment more as <i>images that you saw</i> or more as <i>somewhere that you visited</i>?
</h3>
<Textarea />
<hr />
<h3>
  During the time of the experience, which was the strongest on the whole, your sense of being in the virtual environment or of being elsewhere?
</h3>
<Textarea />
<hr />
<h3>
Consider your memory of being in the virtual environment. How similar in terms of the <i>structure of the memory</i> is this to the structure of the memory of other <i>places</i> you have been today? By structure of the memory’ consider things like the extent to which you have a visual memory of the virtual environment, whether that me- mory is in colour, the extent to which the memory seems vivid or realistic, its size, location in your imagination, the extent to which it is panoramic in your imagination, and other such <i>structural</i> elements.
</h3>
<Textarea />
<hr />
<h3>
  During the time of your experience, did you often think to yourself that you were actually in the virtual environment?
</h3>
<Textarea />
<hr />
<h3>
  Thank you!
</h3>
</div>

export default Page;