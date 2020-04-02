// Elements
const containerNews = document.querySelector(".container-news");
const form = document.forms["form-filter"];
const countrySelect = form.elements["country-select"];
const categorySelect = form.elements["category-select"];
const serchInput = form.elements["serch"];

// Events
showNews("ru", "general");
form.addEventListener("submit", e => {
  e.preventDefault();
  const country = countrySelect.value;
  const category = categorySelect.value;
  const serch = serchInput.value;

  if (!serch) {
    showNews(country, category);
  }
  showNews(country, category, serch);
});

// GET запрос для получения новостей
function getNews(country, category, serch = "", cb) {
  const xhr = new XMLHttpRequest();
  if (serch) {
    xhr.open(
      "GET",
      `https://newsapi.org/v2/everything?q=${serch}&apiKey=7eed34f0c3194b119d6f188a522a30af`
    );
  } else {
    xhr.open(
      "GET",
      `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=7eed34f0c3194b119d6f188a522a30af`
    );
  }

  xhr.addEventListener("load", () => {
    const res = JSON.parse(xhr.responseText);
    cb(res);
  });
  xhr.send();
}
// Вывести основные новости на экран
function showNews(country, category, serch) {
  // очистка container перед отображением других новостей
  let child = containerNews.lastElementChild;
  while (child) {
    containerNews.removeChild(child);
    child = containerNews.lastElementChild;
  }
  getNews(country, category, serch, res => {
    let fragment = "";
    res.articles.forEach(({ urlToImage, title, description, url }) => {
      const newsItem = createHtmlElementNews(
        urlToImage,
        title,
        description,
        url
      );
      fragment += newsItem;
    });
    containerNews.insertAdjacentHTML("afterbegin", fragment);
  });
}

// Создаине html разметки одной новости
function createHtmlElementNews(urlToImage, title, description, url) {
  return `
  <div class="news-item">
      <div class="news-item-left">
        <img class="news-item-img" src="${urlToImage}" alt="" />
      </div>
      <div class="news-item-right">
        <h3>${title}</h3>
        <p>
          ${description};
        </p>
        <a href="${url}">Читать далее</a>
      </div>
    </div>
  `;
}

// Функция для поиска нвоостей по ключевым словам
