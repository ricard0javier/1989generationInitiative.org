import React from "react";

const styles = {
  container: {
    padding: '1em 0 1em 0',
    color: '#B19D64'
  },
  iconsContainer: {
    color: '#02274A',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '4em'
  },
  titleContainer: {
    color: '#B19D64',
    display: 'flex',
    flexDirection: 'row',
    padding: '2em'
  },
  iconBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center'
  },
  leftMarginSize: {
    width: '130px'
  }
};

const HomeComponent = () => (
  <div style={styles.container}>
    <div style={styles.titleContainer}>
      <div style={styles.leftMarginSize}>
        <h1>HOME</h1>
      </div>
      <div>
        <span>We are an open policy network committed to mobilising young Europeans;</span><br/>
        <span>or '89ers', to lead the long term regeneration of the European Project</span><br/>
        <span>through the development of innovative policy proposals.</span><br/>
      </div>
    </div>
    <div>
      <img src="images/inspiring_image.png" width="100%"/>
    </div>
    <div style={styles.iconsContainer}>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_policies.png"/>
        </div>
        <span>Policies for People</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_solidarity.png"/>
        </div>
        <span>Solidarity</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_connectivity.png"/>
        </div>
        <span>Connectivity</span>
      </div>
      <div style={styles.iconBox}>
        <div>
          <img src="images/icon_opportunity.png"/>
        </div>
        <span>Opportunity</span>
      </div>
    </div>
  </div>
);

export default HomeComponent;
