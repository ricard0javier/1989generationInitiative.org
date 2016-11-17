import React, {PropTypes} from "react";
import Header from "./header";
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
    <div className="container" style={styles.container}>
      <Header/>
      {children}
      <Footer/>
    </div>
  );
};

Tiles.propTypes = {
  children: PropTypes.object.isRequired
};

export default Tiles;
