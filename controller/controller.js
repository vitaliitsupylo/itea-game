function Controller() {

    this.matrixModel = new MatrixModel();

}

Controller.prototype.onKeyPress = function (event) {
    var key = null;

    switch (event.keyCode) {
        case 38:
            key = 'up';
            break;
        case 40:
            key = 'down';
            break;
        case 37:
            key = 'left';
            break;
        case 39:
            key = 'right';
            break;
        default:
            return false;
    }

    this.matrixModel.showText(key);

};


Controller.prototype.onClickNewGame = function () {
    this.matrixModel.clearField();
};
