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
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkProductData = void 0;
const checkProductData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // const { title, price, description, category, image } = req.body;
    const errors = [];
    // for..in, for..of, for..each
    for (const key in req.body) {
        if (!req.body[key]) {
            errors.push(`Please add product ${key}.`);
        }
    }
    // Object.entries(req.body).forEach(([key, value]) => {
    //   if(!value){
    //     errors.push(`Please add product ${key}.`)
    //   }
    // })
    // for (const key of Object.keys(req.body)) {
    //   // console.log(key, req.body[key]);
    //   if(!req.body[key]){
    //     errors.push(`Please add product ${key}.`)
    //   }
    // }
    if (errors.length > 0)
        return res.status(401).json({ msg: errors });
    next();
});
exports.checkProductData = checkProductData;
//# sourceMappingURL=validate.js.map