async function getPost(){
    try{
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const id = urlParams.get('id');
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        document.getElementById("title").textContent = data.title;
        document.getElementById("username").textContent = data.name;
        document.getElementById("date").textContent = data.date;
        document.getElementById("message").textContent = data.body;
    } catch (err) {
        console.warn(err);
    };
};

getPost();