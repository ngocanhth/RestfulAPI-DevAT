"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productCtrl_1 = __importDefault(require("../controllers/productCtrl"));
const validate_1 = require("../middleware/validate");
const router = express_1.default.Router();
// C.R.U.D (Create, Read, Update, Delete)
router.get('/products', productCtrl_1.default.getProducts);
router.get('/product/:id', productCtrl_1.default.getProduct);
router.post('/product/add', validate_1.checkProductData, productCtrl_1.default.addProduct);
router.put('/product/update/:id', validate_1.checkProductData, productCtrl_1.default.updateProduct);
router.delete('/product/delete/:id', productCtrl_1.default.deleteProduct);
exports.default = router;
//# sourceMappingURL=productRoute.js.map