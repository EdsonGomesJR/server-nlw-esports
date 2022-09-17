"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/games', (request, response) => {
    return response.json([]);
});
app.post('/ads', (request, response) => {
    return response.json([]);
});
app.get('/games/:id/ads', (request, response) => {
    console.log('Acessou Ads!');
    return response.json([
        { id: 1, name: 'Anuncio 1' },
        { id: 2, name: 'Anuncio 2' },
        { id: 3, name: 'Anuncio 3' },
        { id: 4, name: 'Anuncio 4' },
    ]);
});
app.get('/ads/:id/discord', (request, response) => {
    console.log('Acessou Ads!');
    return response.json([]);
});
app.listen(3333);
