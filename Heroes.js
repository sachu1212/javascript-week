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
    memberWrapper.className = "alert alert-success";

    memberEl.appendChild(memberWrapper);

    const memberTown = document.createElement("h5");
    memberTown.innerHTML += item.name;
    memberWrapper.appendChild(memberTown);
    memberTown.className = "mx-auto text-danger";

    const memberAge = document.createElement("p");
    memberAge.innerHTML += item.age + "<br />";
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