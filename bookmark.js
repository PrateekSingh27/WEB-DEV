document.addEventListener("DOMContentLoaded", loadBookmarks);
        
function addBookmark() {
    let name = document.getElementById("siteName").value;
    let url = document.getElementById("siteURL").value;
    if (!name || !url) {
        alert("Please enter both Name and URL");
        return;
    }
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    bookmarks.push({ name, url });
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
}

function loadBookmarks() {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    let bookmarkList = document.getElementById("bookmarkList");
    bookmarkList.innerHTML = "";
    bookmarks.forEach((bookmark, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
                        <button onclick="deleteBookmark(${index})">Delete</button>`;
        bookmarkList.appendChild(li);
    });
}

function deleteBookmark(index) {
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    bookmarks.splice(index, 1);
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    loadBookmarks();
}