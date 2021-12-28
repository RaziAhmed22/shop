const mongoose = require("mongoose")
const productSchema= new mongoose.Schema(
	{
		title:{type:String},
		subTitle:{type:String},
		items:[
			{
				name:{type:String,required:true,unique:true},
				imageUrl:{type:String},
				priceAfter:{type:Number,required:true},
				priceBefore:{type:Number,required:true}
			}
		],
	},
	{timestamps:true}
)
module.exports=mongoose.model("Product",productSchema)