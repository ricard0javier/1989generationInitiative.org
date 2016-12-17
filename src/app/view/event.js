import React from "react";
import {Button} from "react-bootstrap";

import SubHeader from './subHeader';
import Donate from './donate';

const styles = {
  eventsContainer: {
    color: '#02274A',
    display: 'flex',
    flexDirection: 'column'
  }
};

const EventComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="EVENT"/>
    <div className="text" style={styles.eventsContainer}>

      <h1>Launch Conference 2017</h1>
      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/landscape_london.png"/>

      <h2>Introduction</h2>
      <p>The Conference will address the theme of populism with the aim of understanding its origins and appeal. By observing where traditional ruling elites have failed, we look at ways to supplant the rhetoric of fear and hate, with one of hope. Ultimately, the Conference will offer a unique opportunity for interaction and debate between accomplished professionals, policy makers, scholars, and 89ers - young European citizens coming from all over the continent.</p>
      <p>Guests will be divided into several roundtables, each moderated by the 89ers. The content of the Roundtables has been decided following a pan-European survey of 89ers’ aspirations and concerns. The Initiative has refined and analysed the data, in order to determine the topics and issues of greatest importance, which will  be tackled at the Conference.</p>
      <p>Following the Conference, Webinars will be held to further develop the ideas and ultimately turn them into concrete policy proposals. Finally, these will be presented to high-ranking EU officials, the media, and the wider public in a Presentation Event in autumn 2017 (details to be announced at a later date).</p>

      <h2>How to apply</h2>
      <a target="_blank" href="http://tinyurl.com/TacklingPopulismApplication">
        <Button bsStyle="primary">Apply now</Button>
      </a>
      <p>Applications are open from December 7th until January 8th. In order to apply, you need to provide the following:</p>
      <ul>
        <li><span>Some basic personal information</span></li>
        <li><span>A short version of your CV</span></li>
        <li><span>A short letter of motivation why you want to contribute to our mission and join the Conference</span></li>
        <li><span>An essay on how you would contribute to the Roundtable of your choice</span></li>
      </ul>
      <p>Please note that we don’t provide upload functionality; you therefore have to copy & paste your curriculum vitae.</p>

      <h3>Requirements</h3>

      <p>We require enthusiastic, capable and committed people to come and contribute at the conference. This will be a long process, lasting from February to June, and during this time delegates will have to be able to participate in 2 webinars per month, each lasting one hour. In the course of the Webinars, you will flesh out the ideas from the roundtables at the launch conference. Delegates will have to give their commitment to these webinars for the entire programme to be a success.</p>
      <p>Applicants must also:</p>
      <ul>
        <li><span>Be under 34 years old;</span></li>
        <li><span>Have an academic or professional interest in the European Union or European Affairs;</span></li>
        <li><span>Have demonstrated leadership potential;</span></li>
        <li><span>Speak English to C1 level</span></li>
      </ul>

      <p>Selection will be based solely on merit; no first-come-first-serve principle.</p>

      <h3>Webinars</h3>
      <p>By applying, you also  commit to take part in the Webinars following the Conference. These will be held every two weeks from March until the end of June, and last for approximately 60 minutes each. In the course of the Webinars, you will flesh out the ideas from the Roundtables.</p>

      <h3>Certificate and Presentation Event</h3>
      <p>After consistent attendance of the Webinars, you will be invited to our Presentation Event in autumn of 2017 (date and location will be announced at a later date) and receive a certificate acknowledging your contribution to our mission. Furthermore, your name will be included in the final document containing our policy proposals, which will be presented to EU officials and shared with the wider public.</p>

      <h2>Activities & Roundtable Topics</h2>
      <p>The goal of the Conference  is to identify viable starting points for concrete policy proposals addressing populism. In order to deliver the expected result, the conference will also put the basis for a fruitful collaboration and the germination of a lively community. For this reason, on the first day of the conference, the 89ers will engage into the following activities: workshops, debates, pre-roundtables and ice-breaking activities.</p>
      <p>During the Conference, Chatham House Rules will be applied, beside the basics of good manners.</p>
      <p>The Roundtables will be composed approximately by 15 young delegates and 5 Leaders, accomplished professionals in their fields, plus 2 moderators. During the roundtables, the 89ers will expose the ideas they have gathered during the previous month. Then, the moderators will guide the discussion ensuring that each roundtable comes up with several elements useful for the policy proposal (analysis, existing measures, new ideas, different implementations, etc).</p>
      <p>The Plenary session will be a presentation made by the spokespeople nominated at the roundtable, who will present the result of their work.</p>
      <p>The Keynote Debate will be a public roundtable where the keynote debaters will be asked questions concerning populism and related issues. In order to ensure an ordered debate, questions will be collected in advance.</p>

      <h3>Roundtable Topics</h3>
      <p>Debates will be centered around four areas, with two Roundtables each: Identity, Politics & Institutions, Economics, and Global Affairs. To learn more details about the topics of the Roundtables, read our <a target="_blank" href="http://89ers.blogactiv.eu/2016/10/17/tackling-populism-hope-over-fear/">blog post</a> or download our <a target="_blank" href="http://static.1989generationinitiative.org/docs/Tackling_Populism__Hope_over_Fear.pdf">Conference booklet</a>.</p>

      <h2>Speakers & Experts</h2>
      <p>We have invited leading experts and researchers from various disciplines, as well as high-ranking politicians of all stripes and ideological backgrounds.</p>
      <p>While we can’t share the ones who have confirmed so far, we have welcomed the likes of Fmr. French President Valéry Giscard d’Estaing, Fmr. Labour Leader Neil Kinnock, and the historian and Oxford Professor Timothy Garton Ash at our first Conference, and hope to have similarly high-ranking experts this time around!</p>

      <h2>FAQ</h2>
      <h3>Is the Conference free?</h3>
      <p>Yes! Although we’re depending on donations to fully finance the conference logistics, so we encourage you to donate an amount within your means: <Donate/></p>

      <h3>Where can I stay?</h3>
      <p>We’ll have a list of several options in all price ranges available soon!</p>

      <h3>Is there an accommodation with other 89ers to lower the costs?</h3>
      <p>Accommodation has to be taken care of by participants themselves. However, we will create a Facebook group for confirmed participants, so you will certainly be able to coordinate with other 89ers! :)</p>

      <h3>Is the building wheelchair-friendly?</h3>
      <p>Most of LSE is accessible for wheelchair users. See LSE’s <a target="_blank" href="http://www.lse.ac.uk/mapsAndDirections/AccessibilityMap.pdf">accessibility map</a> for more information.</p>

      <h3>Is there financial support available?</h3>
      <p>Thanks to a generous contribution from the European Commission representation in the UK, we can offer a 100£ travel stipend for three outstanding participants from under-represented countries. We will contact suitable candidates following the end of the application phase.</p>

      <h3>Who is the contact person if I have any other questions?</h3>
      <p>We’re always available on <a target="_blank" href="https://www.facebook.com/1989generationinitiative">Facebook</a> and via <a target="_blank" href="mailto:social@1989generationinitiative.org">email</a>.</p>
    </div>
  </div>
);

export default EventComponent;
