
export class Api {
    protected static base: string = "https://sdw.mufasa.fr/portal";
    public static source: EventSource;
    public static listener = new EventSource(`${Api.base}/_changes?feed=eventsource&include_docs=true&since=0`);

    constructor() {

    }

    static async getData(id: string) {
        const response = await fetch(`${Api.base}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        });
        const result = await response.json();
        return result
    }

    public static addEventListener(callback:Function) {
        Api.listener.addEventListener('message', function (event) {
            const data = JSON.parse(event.data).doc;
            callback(data)
        })
    }


    static async getSize() {
    }

    static async getWalls() {
    }

    static async getEndPlates() {
    }
}
