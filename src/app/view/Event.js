import React from "react";

import SubHeader from './SubHeader';
import Donate from './Donate';
import LinkButton from './LinkButton';

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
      <Donate/>
      <h2>Introduction</h2>
      <p>The Conference will address the theme of populism with the aim of understanding its origins and appeal. By observing where traditional ruling elites have failed, we look at ways to supplant the rhetoric of fear and hate, with one of hope. Ultimately, the Conference will offer a unique opportunity for interaction and debate between accomplished professionals, policy makers, scholars, and 89ers - young European citizens coming from all over the continent.</p>
      <p>Guests will be divided into several roundtables, each moderated by the 89ers. The content of the Roundtables has been decided following a pan-European survey of 89ers’ aspirations and concerns. The Initiative has refined and analysed the data, in order to determine the topics and issues of greatest importance, which will  be tackled at the Conference.</p>
      <p>Following the Conference, Webinars will be held to further develop the ideas and ultimately turn them into concrete policy proposals. Finally, these will be presented to high-ranking EU officials, the media, and the wider public in a Presentation Event in autumn 2017 (details to be announced at a later date).</p>

      <h2>Donations</h2>
      <p>In order to cover the travel costs of experts attending the Conference and to facilitate the general logistics of the event, we are depending on your generosity. We encourage you to consider a donation within your means.</p>

      <h2>How to apply</h2>
      <p>Applications have now closed. If you wish to contribute to our policy cycle, we encourage you to join one of our Regional Chapters. They also engage in policy making, continuing the work of the Conference, and also organise events independently.
      There are currently three fully established Chapters (Austria, Belgium, Slovakia) and two in the early stages (Portugal, Scotland). </p>

      <LinkButton href="http://goo.gl/forms/TjTRAzW79fP3MpQw2" text="Become a Member" faIconClass="fa fa-pencil"/>

      <h3>Selection Process</h3>
      <p>Selection will be based solely on merit; no first-come-first-serve principle.</p>

      <h3>Webinars</h3>
      <p>By applying, you also  commit to take part in the Webinars following the Conference. These will be held every two weeks from March until the end of June, and last for approximately 60 minutes each. In the course of the Webinars, you will flesh out the ideas from the Roundtables.</p>

      <h3>Certificate and Presentation Event</h3>
      <p>After consistent attendance of the Webinars, you will be invited to our Presentation Event in autumn of 2017 (date and location will be announced at a later date) and receive a certificate acknowledging your contribution to our mission. Furthermore, your name will be included in the final document containing our policy proposals, which will be presented to EU officials and shared with the wider public.</p>

      <h2>Activities & Roundtable Topics</h2>
      <p>The goal of the Conference  is to identify viable starting points for concrete policy proposals addressing populism. In order to deliver the expected result, the conference will also put the basis for a fruitful collaboration and the germination of a lively community. For this reason, on the first day of the conference, the 89ers will engage into the following activities: workshops, debates, pre-roundtables and ice-breaking activities.</p>
      <p>During the Conference, Chatham House Rules will be applied, beside the basics of good manners.</p>
      <p>The <b>Roundtables</b> will be composed approximately by 15 young delegates and 5 Leaders, accomplished professionals in their fields, plus 2 moderators. During the roundtables, the 89ers will expose the ideas they have gathered during the previous month. Then, the moderators will guide the discussion ensuring that each roundtable comes up with several elements useful for the policy proposal (analysis, existing measures, new ideas, different implementations, etc).</p>
      <p>The <b>Plenary Session</b> will be a presentation made by the spokespeople nominated at the roundtable, who will present the result of their work.</p>
      <p>The <b>Keynote Debate</b> will be a public roundtable where the keynote debaters will be asked questions concerning populism and related issues. In order to ensure an ordered debate, questions will be collected in advance.</p>

      <h3>Roundtable Topics</h3>
      <p>Debates will be centered around four areas, with two Roundtables each: Identity, Politics & Institutions, Economics, and Global Affairs. To learn more details about the topics of the Roundtables, read our <a target="_blank" href="http://89ers.blogactiv.eu/2016/10/17/tackling-populism-hope-over-fear/">blog post</a> or download our <a target="_blank" href="http://static.1989generationinitiative.org/docs/Tackling_Populism__Hope_over_Fear.pdf">Conference booklet</a>.</p>

      <h2>Speakers & Experts</h2>
      <p>We have invited leading experts and researchers from various disciplines, as well as high-ranking politicians of all stripes and ideological backgrounds.</p>
      <p>While we can’t share the ones who have confirmed so far, we have welcomed the likes of Fmr. French President Valéry Giscard d’Estaing, Fmr. Labour Leader Neil Kinnock, and the historian and Oxford Professor Timothy Garton Ash at our first Conference, and hope to have similarly high-ranking experts this time around!</p>

      <img className="img-responsive" src="http://static.1989generationinitiative.org/images/event_2017_jan_89ers_with_valery_giscard_d_estaing.png"/>

      <h2>FAQ</h2>
      <h3>What if I wasn’t born in 1989?</h3>
      <p>We’re called 1989 Generation Initiative because we’re united by the fact that we’ve grown up in a united Europe free of war and without borders. Being an 89er does not mean sharing the same year of birth, but a spirit of ‘European-ness‘ (although we should add that the maximum age for attendants is 34 years).</p>

      <h3>Is the Conference free?</h3>
      <p>Yes! However we’re depending on donations to fully finance the conference logistics, so we encourage you to donate an amount within your means via the button near the top of the page</p>

      <h3>Is there financial support available?</h3>
      <p>Thanks to a generous contribution from the European Commission representation in the UK, we can offer a 100£ travel stipend for three outstanding participants from under-represented countries. We will contact suitable candidates following the end of the application phase.</p>

      <h3>How do I get there?</h3>
      <p>The London School of Economics is located in central London. The nearest underground stations are Holborn (Piccadilly and Central lines) and Temple (Circle and District lines).</p>

      <h3>Where can I stay?</h3>
      <p>We’ll have a list of several options in all price ranges available soon!</p>

      <h3>Is there an accommodation with other 89ers to lower the costs?</h3>
      <p>Accommodation has to be taken care of by participants themselves. However, we will create a Facebook group for confirmed participants, so you will certainly be able to coordinate with other 89ers! :)</p>

      <h3>Is the building wheelchair-friendly?</h3>
      <p>Most of LSE is accessible for wheelchair users. See LSE’s <a target="_blank" href="http://www.lse.ac.uk/mapsAndDirections/AccessibilityMap.pdf">accessibility map</a> for more information.</p>

      <h3>Who is the contact person if I have any other questions?</h3>
      <p>We’re always available on <a target="_blank" href="https://www.facebook.com/1989generationinitiative">Facebook</a> and via <a target="_blank" href="mailto:social@1989generationinitiative.org">email</a>.</p>
    </div>
  </div>
);

export default EventComponent;
