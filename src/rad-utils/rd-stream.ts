// import { RdObserver, RdSubject } from "../rad-cores";
import { RdBehaviorSubject, RdBehaviourObserver } from "./rd-behaviour-subject";
// import { BehaviorSubject } from 'rxjs';
// class RdStreamEvent<T> extends CustomEvent<T>{

// }

export class RdStream<T>{
    public key: symbol;
    // private  stream: EventTarget;
    private subject: RdBehaviorSubject<T>;
    private closed = false;
    // private observers : RdBehaviourObserver<T>[];

    constructor(init: T) {
        this.key = Symbol(Date.now());
        this.subject = new RdBehaviorSubject<T>(init);
        // this.value = new RdStreamEvent<T>(this.key.toString(), { detail: init, });
        // this.stream = new EventTarget();
    }

    public next(t: T) {
        if (!this.closed) {
            this.subject.value = t;
            this.subject.notify();
        }

        // this.value = new RdStreamEvent<T>(this.key.toString(), { detail: t, });
        // this.stream.dispatchEvent(this.value);
    }

    public subscribe(handler: (v: T) => void): void {
        if (!this.closed) {
            this.subject.subscribe(new RdBehaviourObserver<T>(handler));
        }

    }


    public complete() {
        if (!this.closed) {
            this.subject.close();
            this.closed = true;
        }

    }
}
