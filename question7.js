// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function createPostItem(title, body) {
  const postSection = document.getElementById("posts");

  const postElement = document.createElement("div");
  postElement.classList = "postItem";
  postElement.style.backgroundColor = "#cac7c7";

  postElement.innerHTML = `
    <h2>Post title: ${title}</h2>
    <p>${body}</p>
  `;

  postSection.appendChild(postElement);
}

async function populatePost() {
  const data = await fetchData();

  data.forEach((post) => {
    createPostItem(post.title, post.body);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populatePost();
});

async function fetchDataWitchComments(url) {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

function createPostItemWithComments(title, body, comments) {
  const postsWithCommentsSection = document.getElementById("postsWithComments");

  const postElement = document.createElement("div");
  postElement.classList = "postItem";
  postElement.style.backgroundColor = "#cac7c7";

  const commentsHTML = comments
    .map(
      (comment) => `
    <div class="commentItem">
      <h3>${comment.name}</h3>
      <p>${comment.body}</p>
    </div>
  `
    )
    .join("");

  postElement.innerHTML = `
    <h2>Post title: ${title}</h2>
    <p>${body}</p>
    <div class="comments">${commentsHTML}</div>
  `;

  postsWithCommentsSection.appendChild(postElement);
}

async function populatePostsWithComments() {
  const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");

  for (const post of posts) {
    const comments = await fetchData(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    );
    createPostItemWithComments(post.title, post.body, comments);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  populatePostsWithComments();
});

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId
