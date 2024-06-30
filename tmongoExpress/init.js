const mongoose = require("mongoose");
const Chat = require("./models/chat.js")


main().then(() => { console.log("successful connection") })
    .catch(err => { console.log(err) });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: 'Adi',
        to: 'Sonal',
        msg: 'send me time table',
        created_at: new Date()
    },
    {
        from: 'abhi',
        to: 'allahabad',
        msg: 'send me time table',
        created_at: new Date()
    },
    {
        from: 'raghu',
        to: 'upwala',
        msg: 'send me time table',
        created_at: new Date()
    },
    {
        from: 'mg',
        to: 'bengal',
        msg: 'send me time table',
        created_at: new Date()
    },
    {
        from: 'sumit',
        to: 'wholesaler',
        msg: 'send me time table',
        created_at: new Date()
    },
    {
        from: 'saurabh',
        to: 'isha',
        msg: 'send me time table',
        created_at: new Date()
    },

]
Chat.insertMany(allChats);


