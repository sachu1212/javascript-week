// function displaySuperheroData(data) {

//     document.getElementById('heroesTitle').innerText = data.squadName;
//     const membersContainer = document.getElementById('membersContainer');

//     for(let member of data.member) {
//         const memberNameEl = document.createElement('h2');
//         memberNameEl.innerText =member.name;
//         memberNameEl.className = 'SuperHeroes';
//         membersContainer.append(memberNameEl);

//     }


//     data.members.forEach((item => membersContainer.append(generateMember(item)))
// }

// function generateMember(member, id) {
//     const memberWrapper = document.createElement('div');
//     memberWrapper.id = id;
//     memberWrapper.className = 'memberWrapper';

//     const title = document.createElement('h2');
//     title.innerText = member.name;
//     memberWrapper.append(title)

//     const powers = document.createElement('p');
//     powers.innerText = member.powers.join(', ');
//     memberWrapper.append(powers);

//     return memberWrapper;
// }

// function fetchSuperheroes() {

//     const request = new XMLHttpRequest();

//     request.onload = () => {
//         const parsedData = JSON.parse(request.responseText);
//         displaySuperheroData(parsedData);
//     };

//     request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
//     request.send();
// }

//     const request = new XMLHttpRequest();
//     request.onload = () => {
//         const parsedData = JSON.parse(request.responseText);
//         console.log('DATA', parsedData);
//         displaySuperheroData(parsedData);
// };

// request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');
// request.send();




// const request = new XMLHttpRequest();
// request.onload = function(){
//    console.log('loaded!');
//    console.log(request.responseText);
// }
// request.open('GET', 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json');

// //document.getElementById('heroesTitle').innerText = data.squadName;
// request.send();

// console.log('sent');

// function fetchSuperheroes() {
//     const request = new XMLHttpRequest();
 
//     request.onload = () => {
 
//         const parsedData = JSON.parse(request.responseText);
//         console.log('DATA', parsedData);
//         displaySuperheroData(parsedData);
//     };
 
//     request.open(
//         'GET',
//         'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json'
//     );
 
//     request.send();
//     console.log('sent!');
//  }
 
// function displaySuperheroData(data) {
//  console.log('do stuff here with the data', data.squadName);
 
// document.getElementById('squadName').innerText = data.squadName;
 
// }
 
//  fetchSuperheroes();

function fetchSuperHeros() {
    const request = new XMLHttpRequest();
    request.open(
      "GET",
      "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
    );
    request.onload = () => {
      const parsedApiData = JSON.parse(request.responseText);
      console.log(parsedApiData);
      displaySuperherodata(parsedApiData);
      //request.status - will give you the status a number - will tell if you if it worked or errored
    };
    request.send(); //can send JSON data in the send e.g JSON.stringify({});
  }
  fetchSuperHeros();
  
  function displaySuperherodata(parsedApiData) {
    //passing in the parsed data
    const squadNameTitle = document.getElementById("apiDisplayData");
    squadNameTitle.innerText = parsedApiData.squadName;
  
    const homeTownTitle = document.getElementById("homeTown");
    homeTownTitle.innerText = parsedApiData.homeTown;
  
    const memberEl = document.getElementById("membersNameContainer");
  
    for (let item of parsedApiData.members) {
      const memberWrapper = document.createElement("div");
      memberWrapper.className = "card m-4";
  
      memberEl.appendChild(memberWrapper);
  
      const memberTown = document.createElement("h5");
      memberTown.innerHTML += item.name;
      memberWrapper.appendChild(memberTown);
      memberTown.className = "mx-auto text-danger";
  
      const memberAge = document.createElement("p");
      memberAge.innerHTML += item.age "<br />";
      memberWrapper.appendChild(memberAge);
      memberAge.className = "mx-auto";
  
      const memberSecretIdentity = document.createElement("p");
      memberSecretIdentity.innerHTML = item.secretIdentity;
      memberWrapper.appendChild(memberSecretIdentity);
      memberSecretIdentity.className = "mx-auto";
  
      const memberPowers = document.createElement("p");
      memberPowers.innerHTML = item.powers.join(", ");
      memberWrapper.appendChild(memberPowers);
      memberPowers.className = "mx-auto";
    }
  }