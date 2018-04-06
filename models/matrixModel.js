function MatrixModel() {
    BaseModel.bind(this);

    this.attributes = {
        size: {
            width: 4,
            height: 4
        },
        grid: [
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', ''],
            ['', '', '', '']
        ]
    };
    var instance = this;
    MatrixModel = function () {
        return instance;
    }
}

MatrixModel.prototype = Object.create(BaseModel.prototype);
MatrixModel.prototype.constructor = MatrixModel;

MatrixModel.prototype.showText = function (key) {
    var i = 0;
    this.attributes.grid[0][i++] = 1;
    this.public('changeData');
};

MatrixModel.prototype.clearField = function () {
    console.log('clear');
};