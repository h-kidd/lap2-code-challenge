const db = connect("mongodb://localhost:27017/papyrus");

db.posts.drop();

db.posts.insertMany([
    { 
        title: "twitter", 
        name: "Aristotel", 
        date: "01.01.2000" , 
        body: "Don’t believe everything you read on the internet" 
    }
])
