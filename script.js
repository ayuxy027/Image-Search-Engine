const a = document.getElementById("search-form");
const b = document.getElementById("search-box");
const c = document.getElementById("search-result");
const d = document.getElementById("more-btn");

let keyword = "";
let page = 1;
const accessKey = "B54RLc5kzDzDphtZ1PMiafcGsiNmZa2jjsGbvK093TU";

async function searchImage() {
  keyword = b.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    c.appendChild(imageLink);
  });
}

a.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  c.innerHTML = "";
  searchImage();
});
