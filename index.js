'use strict';

const url = 'https://randomuser.me/api';

const button = document.querySelector('#fetch-users');

const getUsers = async (url, length) => {
  const response = await fetch(`${url}?results=${length}`);
  const data = await response.json();
  return data.results;
};

const displayUsers = async () => {
  try {
    const users = await getUsers(url, 5);
    const usersContainer = document.querySelector('.users');
    usersContainer.innerHTML = '';
    users.map(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');
      userDiv.innerHTML = `
      <h3 class="name">${user.name.first} ${user.name.last}</h3>
      <img src="${user.picture.large}" class="image" alt="${user.name.first} ${user.name.last}">
        <p>City: ${user.location.city}</p>
        <p>Phone: ${user.cell}</p>
        <p>Email: ${user.email}</p>
        <p>Country: ${user.location.country}</p>
        <p>Postcode: ${user.location.postcode}</p>
      `;
      usersContainer.appendChild(userDiv);
    })
  } catch (error) {
    console.log(error);
  }
};

button.addEventListener('click', displayUsers);