import ReactGA from 'react-ga';

ReactGA.initialize('UA-61569536-1', {debug: false});

export const handlePageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

export const handleDonationClick = () => {
  ReactGA.event({
    category: 'User',
    action: 'Donation Attempt'
  });
};
