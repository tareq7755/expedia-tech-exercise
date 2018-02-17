/**
 * @desc fetches the offers
 * @param {*} query 
 */
function renderOffers(filters) {
    var request = new XMLHttpRequest();
    request.open('GET', `${window.location.origin}/offers?data=${encodeURIComponent(JSON.stringify(filters))}`, true);
    request.setRequestHeader('Content-type', 'application/json');
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            render(JSON.parse(this.responseText));
        }
    };
    
    request.send();
}

/**
 * @desc Renders content from the API
 * @param {*} context 
 */
function render(context) {
    if(!context) {
        return;
    }

    var source = document.getElementById('entry-template').innerHTML;
    var template = Handlebars.compile(source);
    var html = template(context);

    document.getElementById('main-view').innerHTML = html;
}

/**
 * @desc handles form submission
 */
function submit() {
    var filters = {
        destinationCity: document.getElementById('destination').value || undefined,
        minTripStartDate: document.getElementById('check-in').value || undefined,
        maxTripStartDate: document.getElementById('check-out').value || undefined,
        minStarRating: document.getElementById('min-star-rating').value || undefined,
        maxStarRating: document.getElementById('max-star-rating').value || undefined,
        minTotalRating: document.getElementById('min-total-rating').value || undefined,
        maxTotalRating: document.getElementById('max-total-rating').value || undefined,
        minGuestRating: document.getElementById('min-guest-rating').value || undefined,
        maxGuestRating: document.getElementById('max-guest-rating').value || undefined,
    };

    renderOffers(filters);
}