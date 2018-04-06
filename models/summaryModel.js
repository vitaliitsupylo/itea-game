function SummaryModel() {
    BaseModel.call(this);

    this.attributes = {
        totalScore: 0,
        totalResult: 0
    };


    SummaryModel.prototype = Object.create(BaseModel.prototype);
    SummaryModel.prototype.constructor = SummaryModel.prototype;
}