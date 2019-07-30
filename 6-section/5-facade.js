function TravelAgent(options) {
  this.type = options.type;
  this.flight = new Flight();
  this.hotel = new Hotel();
}

TravelAgent.prototype.book = function(bookingInfo) {

  const {hotelId, flightNumber} = bookingInfo;

  console.log(this)

  switch (this.type) {
    case 'Flight':
      this.flight.book(flightNumber);
      break;
    case 'Hotel':
      this.hotel.book(hotelId);
      break;
    case 'Package':
      this.flight.book(flightNumber);
      this.hotel.book(hotelId);
      break;
    default:
      throw Error(`Error: type not supported ${this.type}`);
  }
}

function Flight() {
  function book(flightNumber) {      
    console.log(`booking flight ${flightNumber}`);
  }

  return {
    book
  }
}

function Hotel() {
  function book(hotelId) {
    console.log(`booking hotel ${hotelId}`);
  }

  return {
    book
  }
}

