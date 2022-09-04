//UI ELEMENTS
const contactListElem = document.getElementById("contactList");
const numOfContactsElem = document.getElementById("numOfContacts");
const searchByNameElem = document.getElementById("searchByName");

//OTHERS
const API_URL = "https://randomuser.me/api/";
let truncContancts = [];
const NUM_OF_RAND_USERS = 30;

const handleContacts = async () => {
  const randContacts = await fetchRandomUsers(NUM_OF_RAND_USERS);
  truncContancts = randContacts.map((current) => {
    return {
      picture: current.picture.thumbnail,
      name: `${current.name.title} ${current.name.first} ${current.name.last}`,
      city: current.location.city,
      email: current.email,
      state: current.location.state,
      country: current.location.country,
      postcode: current.location.postcode,
      age: current.registered.age,
      phone: current.phone,
      nat: current.nat,
    };
  });

  displayContacts(truncContancts);
};

const displayContacts = (contacts) => {
    contactListElem.innerHTML = "";
    contacts.forEach((contact) => {
    const contactElem = getContactTemplate(contact);
    contactListElem.appendChild(contactElem);
  });

  numOfContactsElem.textContent = contacts.length;
};

const fetchRandomUsers = async (num) => {
  try {
    //by default is GET method
    const response = await fetch(`${API_URL}?results=${num}`);
    const body = await response.json();
    return body.results;
  } catch (err) {
    console.log(err);
  }
};

searchByNameElem.addEventListener("input", (event) => {
  const value = event.target.value;

  if(value === "" || value === " ") {
    displayContacts(truncContancts);
  } else {
    const filteredContacts = truncContancts.filter(contact => contact.name.toLowerCase().includes(value.toLowerCase()));
    displayContacts(filteredContacts);
  }
  
});

const getContactTemplate = (data) => {
  let contact = document.createElement("li");
  contact.classList.add("contact");

  let img = document.createElement("img");
  img.src = data.picture;
  img.alt = "contact";

  let details = document.createElement("ul");
  let contactName = document.createElement("li");
  contactName.textContent = `Name: ${data.name}`;
  let email = document.createElement("li");
  email.textContent = `Email: ${data.email}`;
  let address = document.createElement("li");
  address.textContent = `Address: ${data.city} ${data.state} ${data.country} ${data.postcode}`;
  let age = document.createElement("li");
  age.textContent = `Age: ${data.age}`;
  let phone = document.createElement("li");
  phone.textContent = `Phone: ${data.phone}`;
  let nat = document.createElement("li");
  nat.textContent = `Nat: ${data.nat}`;

  details.appendChild(contactName);
  details.appendChild(email);
  details.appendChild(address);
  details.appendChild(age);
  details.appendChild(phone);
  details.appendChild(nat);
  contact.appendChild(img);
  contact.appendChild(details);
  return contact;
};

handleContacts();
