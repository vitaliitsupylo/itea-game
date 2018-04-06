function BaseView() {
    this.rootElement = document.createElement('div');

}

BaseView.prototype.show = function (element) {
    this.beforeRender();

    this.rootElement.innerHTML = this.render();
    this.rootElement.classList.add(this.className);

    element.appendChild(this.rootElement);

    this.afterRender();

};

BaseView.prototype.beforeRender = function () {

};

BaseView.prototype.render = function () {
    throw new Error('error render');
};


BaseView.prototype.afterRender = function () {

};


BaseView.prototype.reRender = function (element) {

    this.beforeRender();

    this.rootElement.innerHTML = this.render();
    // element.appendChild(this.rootElement);

    this.afterRender();

};
