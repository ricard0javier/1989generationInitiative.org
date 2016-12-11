import React, {PropTypes} from "react";
import HeaderResponsive from "./headerResponsive";
import Footer from "./footer";

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
    <div style={styles.container}>
      <HeaderResponsive/>
      {children}
      <Footer/>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
