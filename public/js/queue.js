class Queue {
    constructor() {
        this.items = [];
    }

    // add element to the queue
    add(element) {
        return this.items.push(element);
    }

    // remove element from the queue
    pop() {
        if (this.items.length > 0) {
            return this.items.shift();
        }
    }

    // view the first element
    front() {
        return this.items[0];
    }

    // check if the queue is empty
    isEmpty() {
        return this.items.length == 0;
    }

    // the size of the queue
    size() {
        return this.items.length;
    }

    // empty the queue
    clear() {
        this.items = [];
    }
}