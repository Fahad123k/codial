const mongoose=require('mongoose');


const userSchema= new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

/**
 * updation trak  when created upadated etc
 * ,{
    timestamps:true
}
 */



// const userSchemaSign_in= new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     }
// },{
//     timestamps:true
// })




// const UserSign_in=mongoose.model("User",userSchemaSign_in)
// module.exports=UserSign_in;

const User=mongoose.model("User",userSchema)
module.exports=User;