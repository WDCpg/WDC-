function update_profile() {

    let firstName = document.getElementById('profile-first-name').value;
    let lastName = document.getElementById('profile-last-name').value;
    let contactNumber = document.getElementById('profile-contact-number').value;
    let email = document.getElementById('profile-email').value;
    let city = document.getElementById('profile-city').value;
    let street = document.getElementById('profile-street-name').value;
    let country = document.getElementById('profile-country').value;
    let postCode = document.getElementById('profile-postcode').value;


    let new_p = {first_name: firstName, last_name: lastName, contact_number: contactNumber, email: email, city: city, street: street, country:country, post_code:postCode};

    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            get_actors();
        }
    };

    xhttp.open("POST", "/actors");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send(JSON.stringify(new_p));

}