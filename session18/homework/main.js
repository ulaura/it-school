//UI ELEMENTS
const contactListElem = document.getElementById("contactList");
const numOfContactsElem = document.getElementById("numOfContacts");
const searchBar = document.getElementById("searchBar");

const pageContentElem = document.getElementById("pageContent");
const btnDarkModeElem = document.getElementById("btnDarkMode");

const pageTitle = document.getElementById("pageTitle");
const searchByNumChkElem = document.getElementById("searchByNumChk");
const searchByNumLblElem = document.getElementById("searchByNumLbl");

//OTHERS
const API_URL = "https://randomuser.me/api/";
let truncContancts = [];
const NUM_OF_RAND_USERS = 30;
const MIN_AGE = 1;
const MAX_AGE = 100;

// dark mode

btnDarkModeElem.addEventListener("click", (event) => {
  pageContentElem.classList.toggle("dark");
  event.target.classList.toggle("btn-dark");
});

pageTitle.addEventListener("mouseover", () => {
  pageTitle.classList.add("title-mouse-over");
});

pageTitle.addEventListener("mouseout", () => {
  pageTitle.classList.remove("title-mouse-over");
});

searchByNumChkElem.addEventListener("change", (event) => {
  if (event.target.checked) {
    searchBar.type = "number";
    searchBar.min = MIN_AGE;
    searchBar.max = MAX_AGE;
    searchBar.placeholder = "Search by age";
    searchByNumLblElem.textContent = "Uncheck to search by name";
  } else {
    searchBar.type = "text";
    searchBar.removeAttribute("min");
    searchBar.removeAttribute("max");
    searchBar.placeholder = "Search by name";
    searchByNumLblElem.textContent = "Check to search by age";
  }
});

//endregion dark mode

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

searchBar.addEventListener("input", (event) => {
  const value = event.target.value;

  if (value === "" || value === " ") {
    displayContacts(truncContancts);
  } else if (searchByNumChkElem.checked) {
    searchByAge(Number(value));
  } else {
    searchByName(value);
  }
});

const searchByAge = (value) => {
  const filteredContacts = truncContancts.filter(
    (contact) => contact.age === value
  );
  displayContacts(filteredContacts);
};

const searchByName = (value) => {
  const filteredContacts = truncContancts.filter((contact) =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );
  displayContacts(filteredContacts);
};

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
