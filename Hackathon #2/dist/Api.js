var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class Api {
    constructor() {
    }
    static getData(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`${Api.base}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            });
            const result = yield response.json();
            return result;
        });
    }
    static addEventListener(callback) {
        Api.listener.addEventListener('message', function (event) {
            const data = JSON.parse(event.data).doc;
            callback(data);
        });
    }
    static getSize() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getWalls() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    static getEndPlates() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
}
Api.base = "https://sdw.mufasa.fr/portal";
Api.listener = new EventSource(`${Api.base}/_changes?feed=eventsource&include_docs=true&since=0`);
