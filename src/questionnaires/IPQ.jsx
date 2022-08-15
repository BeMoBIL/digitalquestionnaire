import React from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import Radio from "../components/Radio";
import RadioWithInputOption from "../components/RadioWithInputOption";
import Textarea from "../components/Textarea"
import Checkbox from "../components/Checkbox"

const SociodemographicAndHealth = () =>    
<div>
<p>Participant ID:</p>
<Field />
<h1>Survery on experiences in virtual worlds</h1>
<h2>IPQ</h2>
<p>Thank you for your participation in the experiment. It’ll take you about 20 - 30 minutes to fill in the questionnaire. Please answer all question only with reference to one single episode of interaction with a virtual environment.</p>
<hr />
<p>You’ll see some statements about experiences. Please indicate, whether or not each sta-
tement applies to your experience. If a question is not relevant to the virtual environment

you used, just skip it. You can use the whole range of answers. There are no right or wrong
answers, only your opinion counts.

You will notice that some questions are very similar to each other. This is necessary for sta-
tistical reasons . And please remember: Answer all these questions only referring to this one

experience.</p>
<h2>How aware were you of the real world surrounding while navigating in the virtual  world? (i.e. sounds, room temperature, other people, etc.)?</h2>
<Radio items={[
    '-3 Extremely aware', 
'-2',
'-1', 
'0 Moderately aware',
'+1', 
'+2',
'+3 Not aware at all'
]} />
<hr />
<h2>
    How real did the virtual world seem to you?
</h2>
<Radio items={[
    '-3 Completely real', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Not real at all'
]} />
<hr />
<h2>
I had a sense of acting in the virtual space, rather than operating something from  outside.
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
How much did your experience in the virtual environment seem consistent with  your real world experience ? 
</h2>
<Radio items={[
    '-3 Not consistent', 
'-2',
'-1', 
'0 Moderately consistent',
'+1', 
'+2',
'+3 Very consistent'
]} />
<hr />
<h2>
How real did the virtual world seem to you? 
</h2>
<Radio items={[
    '-3 About as real  as an imagined', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Indistinguis hable from the  real world'
]} />
<hr />
<h2>
I did not feel present in the virtual space. 
</h2>
<Radio items={[
    '-3 Did not feel', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Felt present'
]} />
<hr />
<h2>


I was not aware of my real environment. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>


In the computer generated world I had a sense of ”being there” 
</h2>
<Radio items={[
    '-3 Not at all', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Very much'
]} />
<hr />
<h2>
Somehow I felt that the virtual world surrounded me. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
    I felt present in the virtual space. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
I still paid attention to the real environment. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
The virtual world seemed more realistic than the real world. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
I felt like I was just perceiving pictures. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>
I was completely captivated by the virtual world. 
</h2>
<Radio items={[
    '-3 Fully disagree', 
'-2',
'-1', 
'0',
'+1', 
'+2',
'+3 Fully agree'
]} />
<hr />
<h2>Finally, some demographic questions.</h2>
<p>Your age:</p>
<Field />
<p>Your gender:</p>
<Field />
<p>Additional comments:</p>
<Textarea />
<p>Thank you!</p>
</div>

export default SociodemographicAndHealth;