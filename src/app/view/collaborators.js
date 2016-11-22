import React from "react";

import SubHeader from './subHeader';

const styles = {
  container: {
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  iconsContainer: {
    color: '#02274A',
    display: 'flex',
    padding: '4em',
    flexWrap: 'wrap'
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    flexBasis: '25%',
    padding: '2em'
  },
  iconBoxText: {
    textAlign: 'left'
  }
};

const collaborators = [
  {
    logo: 'images/logo_european_institute_blue.png',
    text: 'The European Institute currently houses the 1989 GI, and has been invaluable in its creation and development.'
  },
  {
    logo: 'images/logo_student_forum.png',
    text: 'The Student Forum Masstricht is a like-minded organisation which organises a brilliant yearly event involving young Europeans in dialogue with EU policy Experts.'
  },
  {
    logo: 'images/logo_european_dialogue.png',
    text: 'European Dialogue is a Slovak think-tank based in Trnava, aimed at raising awareness of European issues withing the Slovakian public.'
  },
  {
    logo: 'images/logo_epc.png',
    text: 'European Dialogue is a Slovak think-tank based in Trnava, aimed at raising awareness of European issues withing the Slovakian public.'
  },
  {
    logo: 'images/logo_yel.png',
    text: 'Young European Leadership (YEL) is an international nonprofit and non-partisan organisation dedicated to empowering young leaders and future decision makers from Europe and beyond.'
  },
  {
    logo: 'images/logo_clingendael.png',
    text: 'The Clingendael Institute is the leading Dutch think tank and diplomatic academy on international affairs, providing in-depth analysis of global developments in the fields of economic diplomacy, international security & conflict management.'
  },
  {
    logo: 'images/logo_ceps.png',
    text: 'CEPS is a leading think tank and forum for debate on EU affairs, with an exceptionally strong in-house research capacity and an extensive network of patners institutes throughout the world.'
  },
  {
    logo: 'images/logo_blogactiv.png',
    text: 'We are active contributors of the Euroactiv blog pages and are always looking for new contributions and opinions from the 89ers. Get in touch at blog@1989generationinitiative.org.'
  }
];

const CollaboratorsComponent = () => (
  <div style={styles.container}>
    <SubHeader pageName="COLLABORATORS"/>
    <div style={styles.iconsContainer}>
      {collaborators.map((collaborator, index) => (
        <div key={index} style={styles.iconBox}>
          <div>
            <img src={collaborator.logo}/>
          </div>
          <div style={styles.iconBoxText}>
            <span>{collaborator.text}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CollaboratorsComponent;
