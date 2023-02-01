use hotel
db.dropDatabase()

db.bookings.insertMany([
    {
        guestName:"John",
        guestEmail:"john@.gmail.com",
        checkInStatus: false
    },
    {
        guestName:"Mia",
        guestEmail:"mia@.gmail.com",
        checkInStatus: false
    },
    {
        guestName:"Dave",
        guestEmail:"dave@.gmail.com",
        checkInStatus: false
    }
])