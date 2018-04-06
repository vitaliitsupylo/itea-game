function PubSub() {
    this.subscribeers = [];
}

PubSub.prototype.subscribe = function (event, handler, context) {
    this.subscribeers.push({event: event, handler: handler.bind(context)});
};

PubSub.prototype.public = function (event, arg) {
    this.subscribeers.forEach(function (action) {
        if (action.event === event) {
            action.handler(arg)
        }
    })
};