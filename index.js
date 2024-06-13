const API_KEY = "AZmxbNn1Jp6epPgLhMm7hRFmGPPXi4AKfQWBElJmyXt3aOhozPejXRIw";
const URL1 = "https://api.pexels.com/v1/search?query=landscape";
const URL2 = "https://api.pexels.com/v1/search?query=wave";
const loadImg1 = document.getElementById("loadImg1");
const loadImg2 = document.getElementById("loadImg2");
const galleria = document.getElementById("galleria");
loadImg1.addEventListener("click", () => {
  galleria.innerHTML = "";
  fetch(URL1, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((foto) => {
      console.log("foto", foto);
      const galleria = document.getElementById("galleria");

      foto.photos.forEach((fotoCorrente) => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("h3");
        const text = document.createElement("p");
        const divButtonsFlex = document.createElement("div");
        const divButtons = document.createElement("div");
        const buttonView = document.createElement("button");
        const buttonEdit = document.createElement("button");
        const small = document.createElement("small");

        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-3");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");
        img.classList.add("card-img-top", "bd-placeholder-img");
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-around");
        title.classList.add("card-title");
        text.classList.add("card-text");
        divButtonsFlex.classList.add("d-flex", "justify-content-between", "align-items-center");
        divButtons.classList.add("btn-group");
        buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonEdit.classList.add("btn", "btn-sm", "btn-outline-secondary");
        galleria.classList.add("g-5");

        img.setAttribute("src", `${fotoCorrente.src.original}`);
        card.setAttribute("style", "width: 18rem");
        title.innerText = "Lorem Ipsum";
        text.innerText =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
        buttonView.innerText = "View";
        buttonEdit.innerText = "Edit";
        small.innerText = `9mins`;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(divButtonsFlex);
        divButtonsFlex.appendChild(divButtons);
        divButtonsFlex.appendChild(small);
        divButtons.appendChild(buttonView);
        divButtons.appendChild(buttonEdit);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        galleria.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
});
loadImg2.addEventListener("click", () => {
  galleria.innerHTML = "";
  fetch(URL2, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      console.log("response", response);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((foto) => {
      console.log("foto", foto);
      const galleria = document.getElementById("galleria");

      foto.photos.forEach((fotoCorrente) => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("h3");
        const text = document.createElement("p");
        const divButtonsFlex = document.createElement("div");
        const divButtons = document.createElement("div");
        const buttonView = document.createElement("button");
        const buttonEdit = document.createElement("button");
        const small = document.createElement("small");

        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-3");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");
        img.classList.add("card-img-top", "bd-placeholder-img");
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-around");
        title.classList.add("card-title");
        text.classList.add("card-text");
        divButtonsFlex.classList.add("d-flex", "justify-content-between", "align-items-center");
        divButtons.classList.add("btn-group");
        buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonEdit.classList.add("btn", "btn-sm", "btn-outline-secondary");
        galleria.classList.add("g-5");

        img.setAttribute("src", `${fotoCorrente.src.original}`);
        card.setAttribute("style", "width: 18rem");
        title.innerText = "Lorem Ipsum";
        text.innerText =
          "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.";
        buttonView.innerText = "View";
        buttonEdit.innerText = "Hide";
        buttonEdit.addEventListener("click", () => {
          col.classList.add("d-none");
        });
        small.innerText = `${fotoCorrente.id}`;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(divButtonsFlex);
        divButtonsFlex.appendChild(divButtons);
        divButtonsFlex.appendChild(small);
        divButtons.appendChild(buttonView);
        divButtons.appendChild(buttonEdit);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        galleria.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
});

const searchForm = document.getElementById("searchForm");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("searchInput").value;
  const URL = `https://api.pexels.com/v1/search?query=${query}`;

  galleria.innerHTML = "";
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: API_KEY,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nel reperimento dati");
      }
    })
    .then((foto) => {
      foto.photos.forEach((fotoCorrente) => {
        const col = document.createElement("div");
        const card = document.createElement("div");
        const img = document.createElement("img");
        const cardBody = document.createElement("div");
        const title = document.createElement("h3");
        const text = document.createElement("p");
        const divButtonsFlex = document.createElement("div");
        const divButtons = document.createElement("div");
        const buttonView = document.createElement("button");
        const buttonEdit = document.createElement("button");
        const small = document.createElement("small");

        col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-4", "col-xl-4", "col-xxl-3");
        card.classList.add("card", "mb-4", "shadow-sm", "h-100");
        img.classList.add("card-img-top", "bd-placeholder-img");
        cardBody.classList.add("card-body", "d-flex", "flex-column", "justify-content-around");
        title.classList.add("card-title");
        text.classList.add("card-text");
        divButtonsFlex.classList.add("d-flex", "justify-content-between", "align-items-center");
        divButtons.classList.add("btn-group");
        buttonView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonEdit.classList.add("btn", "btn-sm", "btn-outline-secondary");
        galleria.classList.add("g-5");

        img.setAttribute("src", `${fotoCorrente.src.original}`);
        card.setAttribute("style", "width: 18rem");
        title.innerText = "Lorem Ipsum";
        text.innerText =
          "Questa è una carta più ampia con del testo di supporto sotto come guida naturale a contenuti aggiuntivi. Questo contenuto è un po' più lungo.";
        buttonView.innerText = "Visualizza";
        buttonEdit.innerText = "Nascondi";
        buttonEdit.addEventListener("click", () => {
          col.classList.add("d-none");
        });
        small.innerText = `${fotoCorrente.id}`;

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        cardBody.appendChild(divButtonsFlex);
        divButtonsFlex.appendChild(divButtons);
        divButtonsFlex.appendChild(small);
        divButtons.appendChild(buttonView);
        divButtons.appendChild(buttonEdit);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        galleria.appendChild(col);
      });
    })
    .catch((err) => console.log(err));
});
