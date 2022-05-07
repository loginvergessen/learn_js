
function Address(street, city, zipCode) {
    this.street = street,
    this.city = city,
    this.zipCode = zipCode
};

const address1 = new Address('whoKnows', 'nowhere', 420);

function showAddress(address) {
    for (let key in address) {
        console.log(key, address[key]);
    }
}