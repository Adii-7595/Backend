//Mongoose : A library that creates a connection between mongoDB and NodeJS JS runtime environment
//It is an ODM(object data modeling ) library


const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/test");

main().then((res)=>{
  console.log("connection successful")  
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
    //use this line if ur db has auth enabled
}

// Schema : Schema defines the shape of the document within that collection.

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
});


//Models : Model in mongoose is a classs with which we construct documents

const User = mongoose.model("User",userSchema);
// const Employees = mongoose.model("Employees",userSchema);


// // Insert one 
const user1 = new User({
    name:'Aditya',
    email:'abc@gmail.com',
    age:23
});
const user2 = new User({
    name:'Adi',
    email:'def@gmail.com',
    age:23
});const user3 = new User({
    name:'Adit',
    email:'ghi@gmail.com',
    age:25
});const user4 = new User({
    name:'Adityaa',
    email:'jkl@gmail.com',
    age:25
});const user5 = new User({
    name:'AdityaG',
    email:'mno@gmail.com',
    age:26
});
user1.save();
user2.save()
user3.save()
user4.save()
user5.save().then(res=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})

// Insert Many

User.insertMany([
    {name:"tony stark", email:"tony@gmail",age:55},
    {name:"tony star", email:"ton@gmail",age:50},
    {name:"tony stak", email:"to@gmail",age:500},
    {name:"tony strk", email:"toy@gmail",age:95},
    {name:"tony sark", email:"tny@gmail",age:85},
    
]).then((res)=>{
    console.log();
})
.catch((err)=>{
    console.log(err);

})

// NOTE : Mongoose uses operation buffering
// mongoose lets yous start using ur models immedialtely, 
// without waiting for mongoose to establish a connection to mongodb



// FIND : model.find() returns a query object(thennable)
// note - Mongoose queries are not Promises, but they have .then()

// User.find({}) returns all the data of the collection/model

 // find,findOne,findMany
//  to find using id 
// User.find({_id: ""}) or User.findBYId("")
User.find({age: {$gt:150}}).then((res)=>{
    // console.log(res)  
    console.log(res[0])
    console.log(res[0].name)
})
.catch(err=>{
    console.log((err))
});


// Update //it returns query but thennable it is.
// Model.findOneAndUpdate()
Model.findBYIdAndUpdate()

User.findOneAndUpdate({name:"Aditya"},{age:32},{new:true}).then((res)=>{
    console.log(res)
})
.catch((err)=>{
    console.log(err);
})

User.updateMany({age:500},{age:60},{new:true}).then((res)=>{
    console.log(res)
});
User.findByIdAndUpdate('66773492ed5ba51f3de5e57f',{age:60},{new:true}).then((res)=>{
    console.log(res)
});

//DELETE : deleteOne and deleteMany return query object

User.deleteOne({name:'Aditya'}).then((res)=>{
    console.log(res);
})

User.deleteMany({age:60}).then((res=>{
    console.log(res);
}))

User.findByIdAndDelete('6677369b3149c6c0f779a564').then((res)=>{
    console.log(res);
});

User.findOneAndDelete({age:23}).then((res)=>{
    console.log(res);
});



