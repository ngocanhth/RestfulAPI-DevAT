"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const producModel_1 = __importDefault(require("../models/producModel"));
const features_1 = require("../lib/features");
const productCtr = {
    getProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const features = new features_1.APIfeatures(producModel_1.default.find(), req.query)
                .paginating().sorting().searching().filtering();
            const result = yield Promise.allSettled([
                features.query,
                producModel_1.default.countDocuments() //count number of products.
            ]);
            const products = result[0].status === 'fulfilled' ? result[0].value : [];
            const count = result[1].status === 'fulfilled' ? result[1].value : 0;
            return res.status(200).json({ products, count });
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }),
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield producModel_1.default.findById(req.params.id);
            if (!product)
                return res.status(404).json({ msg: 'This product does not exist.' });
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }),
    addProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, price, description, category, image } = req.body;
            const newProduct = new producModel_1.default({
                title, price, description, category, image
            });
            yield newProduct.save();
            return res.status(200).json(newProduct);
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { title, price, description, category, image } = req.body;
            const product = yield producModel_1.default.findByIdAndUpdate(req.params.id, {
                title, price, description, category, image
            }, { new: true });
            if (!product)
                return res.status(404).json({ msg: 'This product does not exist.' });
            return res.status(200).json(product);
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const product = yield producModel_1.default.findByIdAndDelete(req.params.id);
            if (!product)
                return res.status(404).json({ msg: 'This product does not exist.' });
            return res.status(200).json({ msg: 'Delete Success!' });
        }
        catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    })
};
exports.default = productCtr;
//# sourceMappingURL=productCtrl.js.map