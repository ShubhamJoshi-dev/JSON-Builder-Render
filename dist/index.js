"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./database/connect"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get("/health", (req, res) => {
    res.status(201).json({
        message: `Testing health api`,
    });
});
(0, connect_1.default)().then(() => {
    app.listen(port, () => {
        console.log(`App is Running on ${port}`);
    });
});
