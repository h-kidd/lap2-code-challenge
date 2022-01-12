const db = connect("mongodb://localhost:27017/papyrus");

db.posts.drop();

db.posts.insertMany([
    { 
        title: "twitter", 
        name: "Aristotel", 
        date: "0022-01-12T12:17:32.796Z", 
        body: "Don’t believe everything you read on the internet" 
    }
])
