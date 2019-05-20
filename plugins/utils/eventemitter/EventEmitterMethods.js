const EE = Phaser.Events.EventEmitter; // Use built-in EventEmitter class by default

export default {
    setEventEmitter(eventEmitter, EventEmitterClass) {
        if (EventEmitterClass === undefined) {
            EventEmitterClass = EE;
        }
        this._privateEE = (eventEmitter === undefined);
        this._eventEmitter = (this._privateEE) ? (new EventEmitterClass()) : eventEmitter;
        return this;
    },

    destroyEventEmitter() {
        if (this._eventEmitter && this._privateEE) {
            this._eventEmitter.shutdown();
        }
    },

    getEventEmitter() {
        return this._eventEmitter;
    },

    on: function () {
        if (this._eventEmitter) {
            this._eventEmitter.on.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    once: function () {
        if (this._eventEmitter) {
            this._eventEmitter.once.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    off: function () {
        if (this._eventEmitter) {
            this._eventEmitter.off.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    emit: function () {
        if (this._eventEmitter) {
            this._eventEmitter.emit.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    addListener: function () {
        if (this._eventEmitter) {
            this._eventEmitter.addListener.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    removeListener: function () {
        if (this._eventEmitter) {
            this._eventEmitter.removeListener.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    removeAllListeners: function () {
        if (this._eventEmitter) {
            this._eventEmitter.removeAllListeners.apply(this._eventEmitter, arguments);
        }
        return this;
    },

    listenerCount: function () {
        if (this._eventEmitter) {
            return this._eventEmitter.listenerCount.apply(this._eventEmitter, arguments);
        }
        return 0;
    },

    listeners: function () {
        if (this._eventEmitter) {
            return this._eventEmitter.listeners.apply(this._eventEmitter, arguments);
        }
        return [];
    }
};