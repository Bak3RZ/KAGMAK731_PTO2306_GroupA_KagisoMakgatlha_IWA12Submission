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

// Group elements by Class name using querySelectorAll
const statusElements = document.querySelectorAll('.status');
const reserveButtons = document.querySelectorAll('.reserve');
const checkoutButtons = document.querySelectorAll('.checkout');
const checkinButtons = document.querySelectorAll('.checkin');

// Loop elements and update propeties based on the STATUS_MAP
for (let i = 0; i < statusElements.length; i++) {
    const statusText = statusElements[i].textContent.trim().replace('Status: ', ''); 
    // Get the status text
    const statusInfo = STATUS_MAP[statusText];

    // Match colour to STATUS_MAP
    statusElements[i].style.color = statusInfo.color;

    // Enable or disable buttons based on STATUS_MAP
    reserveButtons[i].disabled = !statusInfo.canReserve;
    checkoutButtons[i].disabled = !statusInfo.canCheckout;
    checkinButtons[i].disabled = !statusInfo.canCheckIn;

    // Set button text color to grayscale
    reserveButtons[i].style.color = 'black';
    checkoutButtons[i].style.color = 'black';
    checkinButtons[i].style.color = 'black';
}