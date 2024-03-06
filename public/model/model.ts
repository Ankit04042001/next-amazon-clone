import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema(
    {
        brand : String,
        category : String,
        description : String,
        image : String,
        isNew : Boolean,
        oldPrice : Number,
        price : Number,
        title : String
    }
)


const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema,'Product')

export default Product;
 