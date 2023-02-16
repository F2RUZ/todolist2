window.addEventListener("DOMContentLoaded", function () {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const year = document.querySelector("#year");
  const btn = document.querySelector("#btn");
  const booklist = document.querySelector("#book-list");

  btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (title.value == "" && author.value == "" && year.value == "") {
      alert(`Iltimos maydonni bo'sh qoldirmang`);
    } else {
      const newRow = document.createElement("tr");

      //Title
      const newTitle = document.createElement("th");
      newTitle.innerHTML = title.value;
      newRow.append(newTitle);

      //Author
      const newAuthor = document.createElement("th");
      newAuthor.innerHTML = author.value;
      newRow.append(newAuthor);

      //Year
      const newYear = document.createElement("th");
      newYear.innerHTML = year.value;
      newRow.append(newYear);

      booklist.append(newRow);
    }
    title.value = "";
    author.value = "";
    year.value = "";
  });
});
