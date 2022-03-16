import { connect } from 'redux-bundler-react';

export default connect(
  'selectAuthIsLoggedIn',
  'doUpdateUrl',
  function AuthRequired({
    authIsLoggedIn,
    doUpdateUrl,
    loggedOutUrl = '/',
    children,
  }) {
    if (!authIsLoggedIn) doUpdateUrl(loggedOutUrl);
    return <>{children}</>;
  }
);
