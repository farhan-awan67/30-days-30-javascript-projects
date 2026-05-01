let persons = [
  {
    rank: 1,
    name: "Elon Musk",
    net_worth_usd_billion: 342,
    country: "United States",
    source: "Tesla, SpaceX, xAI, X",
    image_url:
      "https://imgs.search.brave.com/AC3yDxso_pFkl9TxUEwhOOS7KUPlgrHbqQsrX_CWbzo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kaW1z/LmFwbmV3cy5jb20v/ZGltczQvZGVmYXVs/dC9jZWE2ODIyLzIx/NDc0ODM2NDcvc3Ry/aXAvdHJ1ZS9jcm9w/LzE5MDJ4MTI2OCsw/KzAvcmVzaXplLzU5/OXgzOTkhL3F1YWxp/dHkvOTAvP3VybD1o/dHRwczovL2Fzc2V0/cy5hcG5ld3MuY29t/Lzg3LzI3L2Q2Yzc2/NmIwNGZhMDZlMDE2/Mjk4NTU2NGNjY2Uv/MmI0NzVlMGQ4YzBk/NDNiOWEwY2RlN2Mx/YjQyMDg5ZTI",
  },
  {
    rank: 2,
    name: "Mark Zuckerberg",
    net_worth_usd_billion: 216,
    country: "United States",
    source: "Meta",
    image_url:
      "https://imgs.search.brave.com/amaU0n-PfbaEGG1mmXO4sKA7SJcWv52r001QLoh0pD0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvOTQ1/OTMxNjYvcGhvdG8v/c3dpdHplcmxhbmQt/bWFyay16dWNrZXJi/ZXJnLWZvdW5kZXIt/b2YtZmFjZWJvb2st/cGFydGljaXBhdGVz/LWluLWEtZGlzY3Vz/c2lvbi1kdXJpbmct/dGhlLXdvcmxkLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1X/LVliRVdUUndrVGtI/Vkk0bGlteGtTaDIw/MTVJUTczOG9DM0Q4/WV83NFUwPQ",
  },
  {
    rank: 3,
    name: "Jeff Bezos",
    net_worth_usd_billion: 215,
    country: "United States",
    source: "Amazon",
    image_url:
      "https://imgs.search.brave.com/TjsTIqVbZEoJc5EY8EaPV1XH7f8rOkqnEQyA2gVcRkQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hNTcu/Zm94bmV3cy5jb20v/c3RhdGljLmZveG5l/d3MuY29tL2ZveG5l/d3MuY29tL2NvbnRl/bnQvdXBsb2Fkcy8y/MDI1LzA2LzkxOC81/MTYvamVmZi1iZXpv/cy12ZW5pY2UuanBn/P3ZlPTEmdGw9MQ",
  },
  {
    rank: 4,
    name: "Larry Ellison",
    net_worth_usd_billion: 192,
    country: "United States",
    source: "Oracle",
    image_url:
      "https://imgs.search.brave.com/TFyiDWORMr46L3CX35FllvDB1SVyYt7jWA20XjoC2s0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzAwL0xhcnJ5X0Vs/bGlzb25fcGljdHVy/ZS5wbmc",
  },
  {
    rank: 5,
    name: "Bernard Arnault  ",
    net_worth_usd_billion: 178,
    country: "France",
    source: "LVMH",
    image_url:
      "https://imgs.search.brave.com/3wfUS2hbniIqOSLFu_efQtSThaLeEHaZyHjaTTvYLFE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/MjBtbi5mci9GVXR4/blFNQVFtQ3p0SlFS/eWI4c3FTay80ODB4/MzA4X21hbmRhdG9y/eS1jcmVkaXQtcGhv/dG8tYnktbWF0dGhp/ZXUtbWlydmlsbGUt/enVtYS1wcmVzcy13/aXJlLTE0NzgzNzgy/YXEtaGVhZC1vZi1s/dm1oLWx1eHVyeS1j/b25nbG9tZXJhdGUt/YmVybmFyZC1hcm5h/dWx0LWFycml2ZXMt/dG8tYXR0ZW5kLWFu/LW9mZmljaWFsLXN0/YXRlLWRpbm5lci1h/cy1wYXJ0LW9mLXRo/ZS1zdGF0ZS12aXNp/dC1vZi1raW5nLXBo/aWxpcHBlLWZpbGlw/LW9mLWJlbGdpdW0t/dG8tZnJhbmNlLWF0/LXRoZS1wcmVzaWRl/bnRpYWwtZWx5c2Vl/LXBhbGFjZS1vbi1v/Y3RvYmVyLTE0LTIw/MjQtaW4tcGFyaXMt/ZnJhbmNlLWZyZW5j/aC1wcmVzaWRlbnQt/ZW1tYW51ZWwtbWFj/cm9uLWhvc3RzLWtp/bmctcGhpbGlwcGUt/b2YtYmVsZ2l1bS1w/YXJpcy1mcmFuY2Ut/MTQtb2N0LTIwMjQt/c2h1dHRlcnN0b2Nr/LWVkaXRvcmlhbC1m/cmVuY2gtcHJlc2lk/ZW50LWVtbWFudWVs/LW1hYy0xNDc4Mzc4/MmFxLTI0MTAxNzE0/MTA",
  },
  {
    rank: 6,
    name: "Warren Buffett",
    net_worth_usd_billion: 154,
    country: "United States",
    source: "Berkshire Hathaway",
    image_url:
      "https://imgs.search.brave.com/RU2LeioYdMOMY9KiwHYiYkGwWv_fdM1FwmWCeT6QIcQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTI2/OTI3ODU4L3Bob3Rv/L3dhcnJlbi1idWZm/ZXR0LWNoYWlybWFu/LWFuZC1jaGllZi1l/eGVjdXRpdmUtb2Zm/aWNlci1vZi1iZXJr/c2hpcmUtaGF0aGF3/YXktaW5jLWxhdWdo/cy13aGlsZS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9VUJ2/My1nU2U3V3BlYlZu/UDAtWW1OczNZUmFH/M3h0TGlMRVBXeU5J/MXBkUT0",
  },
];

let cardsContainer = document.querySelector(".card-container");
let searchInput = document.getElementById("searchInput");

window.addEventListener("load", () => {
  persons.forEach((person) => {
    cardsContainer.innerHTML += `
    <div class="card">
        <img src="${person.image_url}" alt="profile_pic" />
        <h1>${person.name}</h1>
        <h2>net worth : ${person.net_worth_usd_billion} Billion</h2>
      </div>
        `;
  });
});

// search funcionality

searchInput.addEventListener("input", (e) => {
  let searchValue = e.target.value.trim().toLowerCase();

  // Filter the persons array
  let filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchValue)
  );

  // Clear previous cards
  cardsContainer.innerHTML = "";

  // Render filtered cards
  filteredPersons.forEach((person) => {
    cardsContainer.innerHTML += `
      <div class="card">
        <img src="${person.image_url}" alt="profile_pic" />
        <h1>${person.name}</h1>
        <h2>net worth : ${person.net_worth_usd_billion} Billion</h2>
      </div>
    `;
  });
});
