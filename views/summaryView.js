function SummaryView() {
    this.summaryModel = new SummaryModel();
    this.template = document.getElementById('summaryTemplate').innerHTML;
    BaseView.call(this);
}

SummaryView.prototype = Object.create(BaseView.prototype);
SummaryView.prototype.constructor = SummaryView;


SummaryView.prototype.render = function () {
    return tempString(this.template, this.summaryModel.attributes);

};