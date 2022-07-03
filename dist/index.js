"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// middlware
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
// Datatbase
const URI = process.env.MONGODB_URL;
mongoose_1.default.connect(URI, {
    autoIndex: false // Tắt index đi để tối ưu cho server, chỉ đánh dấu đối với những field cần tìm kiếm
}, (err) => {
    if (err)
        throw err;
    console.log('Mongodb connection.');
});
// Routes
app.use('/api', routes_1.default);
// Start server listening
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});
//# sourceMappingURL=index.js.map