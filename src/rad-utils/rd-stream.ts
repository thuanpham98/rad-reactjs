import { RdAbstractEvent } from "../rad-cores";

class RdStreamEvent<T> extends CustomEvent<T>{

}

export class RdStream<T> extends RdAbstractEvent<T> {
    public key: symbol;
    public value: RdStreamEvent<T>;
    private  stream: EventTarget;

    constructor(init: T) {
        super();
        this.key = Symbol(Date.now());
        this.value = new RdStreamEvent<T>(this.key.toString(), { detail: init, });
        this.stream = new EventTarget();
    }

    public next(t: T) {
        this.value = new RdStreamEvent<T>(this.key.toString(), { detail: t, });
        this.stream.dispatchEvent(this.value);
    }

    public subscribe(handler: (v: T) => void): void {
        this.stream.addEventListener(this.key.toString(), (e: any) => {
            handler(e.detail);
        })
    }

    public complete() {
        this.stream.removeEventListener(this.key.toString(), () => {
           console.log();
        });
    }
}
