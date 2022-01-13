const myForm = document.querySelector('#post');
myForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = e.target.title.value;
    const name = e.target.username.value;
    const body = e.target.message.value;
    postMessage(title, name, body);
});

async function postMessage(title, name, body){
    try {
        const post = {title: title, name: name, body: body};
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(post)
        };
        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        window.open(window.location.href.slice(0, -11) + `/posts.html?id=${data._id}`, '_self');
    } catch (err) {
        console.warn(err);
    };
};