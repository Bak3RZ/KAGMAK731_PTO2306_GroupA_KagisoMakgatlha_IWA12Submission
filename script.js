const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


const books = [ {
    status : document.querySelector('#book1.status').innerText,html:{
    status : document.querySelector('#book1.status'),
    reserve : document.querySelector('#book1.reserve'),
    checkoutButtons : document.querySelector('#book1.checkout'),
    checkinButtons : document.querySelector('#book1.checkin'),
 },   
},
{
    status : document.querySelector('#book2.status').innerText,html:{
    status : document.querySelector('#book2.status'),
    reserve : document.querySelector('#book2.reserve'),
    checkoutButtons : document.querySelector('#book2.checkout'),
    checkinButtons : document.querySelector('#book2.checkin'),
},
},
{
    status : document.querySelector('#book3.status').innerText,html:{
    status : document.querySelector('#book3.status'),
    reserve : document.querySelector('#book3.reserve'),
    checkoutButtons : document.querySelector('#book3.checkout'),
    checkinButtons : document.querySelector('#book3.checkin'),
},
},
]


books[0].html.checkinButtons.style.color = '' // Must remain undefined
books[0].html.status.style.color = STATUS_MAP.status.color; // We use STATUS_MAP.status to access the properties of the specific status of the book.
books[0].html.reserve.disabled = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
books[0].html.checkoutButtons.disabled = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
books[0].html.checkinButtons.disbaled = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

books[1].html.checkinButtons.style.color = '' // Must remain undefined
books[1].html.status.style.color = STATUS_MAP.status.color;
books[1].html.reserve.disabled = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
books[1].html.checkoutButtons.disabled = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
books[1].html.checkinButtons.disbaled = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

books[2].html.checkinButtons.style.color = '' // Must remain undefined
books[2].html.status.style.color = STATUS_MAP.status.color;
books[2].html.reserve.disabled = STATUS_MAP.status.canReserve ? 'enabled' : 'disabled'
books[2].html.checkoutButtons.disabled = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
books[2].html.checkinButtons.disbaled = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

