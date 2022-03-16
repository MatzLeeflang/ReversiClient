// class FeedbackWidget{
//     constructor(elementId) {
//         this._elementId = elementId;
//     }
//
//     get elementId() { //getter, set keyword voor setter methode
//         return this._elementId;
//     }
//
//     show(message, type){
//         $(`#${this.elementId}`)
//             .removeClass()
//             .addClass(type === 'success' ? 'alert alert-success' : 'alert alert-danger')
//             .css("display", "block")
//             .text(message);
//         this.log(message, type)
//     }
//
//     hide(){
//         // let x  = document.getElementById(this.elementId);
//         // x.style.display = "none";
//         $(`#${this.elementId}`)
//             .removeClass()
//             .text("");
//     }
//
//     log(message){
//         const logs = JSON.parse(localStorage.getItem("feedback_widget")) || [];
//         if (logs.length >= 10) logs.splice(0, 1);
//         logs.push(message);
//         localStorage.setItem("feedback_widget", JSON.stringify(logs));
//     }
//
//     removeLog(){
//         localStorage.removeItem("feedback_widget")
//     }
//
//     history(){
//         const logs = JSON.parse(localStorage.getItem("feedback_widget")) || [];
//         console.log(logs)
//         const string = logs.map((log) => `${log.type} - ${log.message}`).join("<br />");
//         this.show(string, "success");
//     }
//
//     }
//

export default class FeedbackWidget {
    constructor(elementId) {
        this._elementId = elementId;
        this._element = document.getElementById(elementId);
    }

    get elementId() {
        //getter, set keyword voor setter methode
        return this._elementId;
    }

    get element() {
        return this._element;
    }

    show(message, type) {
        this.element.style.display = "block";

        $("#" + this._elementId).html(message);
        if (type === "success") {
            $("#" + this._elementId).removeClass("alert-danger");
        } else {
            $("#" + this._elementId).removeClass("alert-success");
        }

        $("#" + this._elementId).addClass(`alert-${type}`);

        this.log({ message, type });
    }

    hide() {
        this.element.style.display = "none";
    }

    log(message) {
        const logs = JSON.parse(localStorage.getItem("feedback_widget")) || [];
        if (logs.length >= 10) logs.splice(0, 1);
        logs.push(message);
        localStorage.setItem("feedback_widget", JSON.stringify(logs));
    }

    removeLog() {
        localStorage.removeItem("feedback_widget");
    }

    history() {
        const logs = JSON.parse(localStorage.getItem("feedback_widget")) || [];
        const string = logs.map((log) => `${log.type} - ${log.message}`).join("<br />");
        this.show(string, "success");
    }
}
