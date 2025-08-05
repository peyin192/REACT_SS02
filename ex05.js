function addContact(phoneBooks, name, phone, email) {
    const contact = { name, phone, email };
    phoneBooks.push(contact);
}
function displayContacts(phoneBooks) {
    console.log("Danh bạ điện thoại:");
    for (const contact of phoneBooks) {
        console.log(`Tên: ${contact.name}, Số Điện Thoại: ${contact.phone}, Email: ${contact.email}`);
    }
}
let phoneBooks = [];
addContact(phoneBooks, "Nguyen Van A", "0123456789", "a@b.com");
addContact(phoneBooks, "Nguyen Van B", "0123456789", "a@b.com");
addContact(phoneBooks, "Nguyen Van C", "0123456789", "a@b.com");
displayContacts(phoneBooks);