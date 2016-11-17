Pushing Notifications
======================


TODO


https://localhost:6040/deepstream
openssl s_client -host localhost -port 6040 -prexit -showcerts </dev/null



```javascript
import React, {Component} from 'react';
import {Header} from './header';
import {Footer} from './footer';
import {Articles} from './articles/articles';

require('./configuration/markedConfiguration');

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

export class Main extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <main className="container" style={styles.main}>
          <Articles url="http://www.thecodestein.com/api/articles"/>
        </main>
        <Footer/>
      </div>
    );
  }
}
```
