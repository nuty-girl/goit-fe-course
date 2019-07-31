/* eslint-disable linebreak-style */
/* eslint-disable strict */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-spacing */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable no-shadow */
/* eslint-disable linebreak-style */
// eslint-disable-next-line strict

'use strict';

const users = [
  {
    id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    skills: ['ipsum', 'lorem'],
    gender: 'male',
    age: 37,
  },
  {
    id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
    gender: 'female',
    age: 34,
  },
  {
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
    gender: 'male',
    age: 24,
  },
  {
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    skills: ['adipisicing', 'irure', 'velit'],
    gender: 'female',
    age: 21,
  },
  {
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    skills: ['ex', 'culpa', 'nostrud'],
    gender: 'male',
    age: 27,
  },
  {
    id: '150b00fb-dd82-427d-9faf-2879ea87c695',
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    skills: ['non', 'amet', 'ipsum'],
    gender: 'male',
    age: 38,
  },
  {
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    skills: ['lorem', 'veniam', 'culpa'],
    gender: 'female',
    age: 39,
  },
];

const getAllNames = users => {
  return users.map(user => {
    return user.name;
  });
};
console.log(getAllNames(users));

const getUsersByEyeColor = (users, color) => {
  return users.filter(user => {
    return user.eyeColor === color;
  });
};
console.log(getUsersByEyeColor(users, 'blue'));

const getUsersByGender = (users, gender) => {
  return users
    .filter(user => user.gender === gender)
    .map(user => {
      return user.name;
    });
};
console.log(getUsersByGender(users, 'male'));

const getInactiveUsers = users => {
  return users.filter(user => {
    return !user.isActive;
  });
};
console.log(getInactiveUsers(users));

const getUserByEmail = (users, email) => {
  return users.find(user => {
    return user.email === email;
  });
};
console.log(getUserByEmail(users, 'shereeanthony@kog.com'));
console.log(getUserByEmail(users, 'elmahead@omatom.com'));

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => {
    return user.age >= min && user.age <= max;
  });
};
console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

const getTotalBalance = users => {
  return users.reduce((totalBalance, user) => {
    return totalBalance + user.balance;
  }, 0);
};
console.log(getTotalBalance(users));

const getUsersByFriend = (users, name) => users
    .filter(user =>
      // eslint-disable-next-line implicit-arrow-linebreak
      user.friends.includes(name))
    .reduce((allNames, user) => {
      allNames.push(user.name);
      return allNames;
    }, []);
console.log(getUsersByFriend(users, 'Briana Decker'));
console.log(getUsersByFriend(users, 'Goldie Gentry'));

// const getAllSkills = users => {
//   return users.reduce((allSkills, user) => {
//     allSkills.push(...user.skills);
//     return allSkills;
//   }, []);
// };
// const skills = getAllSkills(users);
// const filteredSkills = skills.reduce((acc, skill) => {
//   if (!acc.includes(skill)) {
//     acc.push(skill);
//   }
//   return acc;
// }, []);

// const getUniqueSkills = filteredSkills => {
//   return filteredSkills.sort();
// };

// console.log(getUniqueSkills(filteredSkills));
//

const getUniqueSkills = users => users
    .reduce((allSkills, user) => {
      allSkills.push(...user.skills);
      return allSkills;
    }, [])
    .reduce((acc, skill) => {
      if (!acc.includes(skill)) {
        acc.push(skill);
      }
      return acc;
    }, [])
    .sort();

console.log(getUniqueSkills(users));

const getNamesSortedByFriendsCount = users => users
    .map(user => {
      return { name: user.name, friendsCount: user.friends.length };
    })
    .sort((userA, userB) => {
      return userA.friendsCount - userB.friendsCount;
    })
    .map(user => {
      return user.name;
    });
console.log(getNamesSortedByFriendsCount(users));
// eslint-disable-next-line max-len
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// const countedUserFriends = users.map(user => {
//   return { name: user.name, friendsCount: user.friends.length };
// });
// console.log(countedUserFriends);
// const sortedByFriends = [...countedUserFriends].sort((userA, userB) => {
//   return userA.friendsCount - userB.friendsCount;
// });
// console.log(sortedByFriends);
//
