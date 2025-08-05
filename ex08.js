const userInfo = {
    name: "John",
    age: 25,
    location: {
        city: "Hanoi",
        country: "Vietnam"
    },
    contact: {
        // email: "john@example.com",
        phone: "123-456-7890"
    },
    job: {
        // title: "Developer",
        company: "Tech Corp"
    }
};

function displayUserInfo(user) {
    const { name, age, location, contact, job } = user;
    const email = contact?.email ?? "unknown";
    const phone = contact?.phone ?? "unknown";
    const title = job?.title ?? "unknown";
    const company = job?.company ?? "unknown";
    return `${name} is ${age} years old, lives in ${location.city}, ${location.country}, works as ${title} at ${company}, and can be contacted via ${email} or ${phone}.`;
}

console.log(displayUserInfo(userInfo));