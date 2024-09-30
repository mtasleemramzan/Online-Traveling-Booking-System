document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    const bookingDetails = document.getElementById('booking-details');
    const detailDestination = document.getElementById('detail-destination');
    const detailDate = document.getElementById('detail-date');
    const detailTravelers = document.getElementById('detail-travelers');

    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const destination = document.getElementById('destination').value;
        const travelDate = document.getElementById('travel-date').value;
        const travelers = document.getElementById('travelers').value;

        detailDestination.textContent = destination;
        detailDate.textContent = travelDate;
        detailTravelers.textContent = travelers;

        bookingForm.classList.add('hidden');
        bookingDetails.classList.remove('hidden');
    });
});
