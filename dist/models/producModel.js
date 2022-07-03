"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});
// Phải đánh dấu index để có thể tìm kiếm được
// productSchema.index({title: 'text', price: 'text', description: 'text', category: 'text'})
// productSchema.index({title: 'text'})
const Products = mongoose_1.default.model('Products', productSchema);
//  Products.createIndexes({title: 'text'})
exports.default = Products;
//# sourceMappingURL=producModel.js.map