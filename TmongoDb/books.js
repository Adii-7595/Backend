const mongoose = require("mongoose")


main().then((res)=>{
    console.log("connection successful");
    
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

// usually we do 
// const bookSchema = new mongoose.SchemaType({
//     title:String,
//     author:String,
//     price:Number

// })

const bookSchema =  new mongoose.Schema({
    title:{
        type:String,
    },
    author:{
        type:String,
        required:true
    },
    price:{
        type:Number,
    },
    discount:{
        type:Number,
        default:0,
    },
});

const Book = mongoose.model("Book",bookSchema);

let book1 = new Book({
    title: 'Love triangle',
    author:'Preity Senon',
    price:200,
});
book1.save().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err);
})