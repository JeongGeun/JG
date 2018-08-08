var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var codeSchema=new Schema({
  title:String,
  date:{type:Date,default:Date.now},
  text:String

}
);
module.exports=mongoose.model('Code',codeSchema);
