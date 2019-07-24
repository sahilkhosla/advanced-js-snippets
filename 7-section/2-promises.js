// randomly resolve reject
longRunningNetworkCall = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// calling sequentially (.then.then)
// calling parallely (.all)
// catch then finally
