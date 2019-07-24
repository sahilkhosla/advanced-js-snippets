longRunningNetworkCall = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

asyncFun = async () => {
  await longRunningNetworkCall(3000);  
  console.log('been waiting for three long :/');
  await longRunningNetworkCall(2000);  
  console.log('been waiting for too long :/');
}