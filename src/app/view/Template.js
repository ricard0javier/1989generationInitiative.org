import React, {PropTypes} from "react";
import Header from "./Header";
import FooterContainer from "../controller/container/FooterContainer";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

/**
* Describes the structure of the application in terms of components
*/
const Tiles = ({children}) => {
  return (
    <div className="container-fluid without-sides-padding" style={styles.container}>
      <Header/>
      {children}
      <FooterContainer/>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
