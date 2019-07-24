const db = (() => {
  let connection = '';

  const connect = () => {
    if (!connection) {
      connection = 'sql.db';
      console.log('connecting...');      
    }

    return connection;
  }

  const terminate = () => {
    if (connection) {
      console.log('terminating connection...');
      connection = '';
    } else {
      console.log('no existing connection!');
    }
    
  }

  const getDB = () => {
    return connect();
  }

  const termDB = () => {
    return terminate();
  }

  return {
    getDB,
    termDB
  }

})();