// function add(num1: number,num2: number) {
//     return num1 + num2;
// }
var Invoice = (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return this.client + " owes $" + this.amount + " for " + this.details;
    };
    return Invoice;
}());
var Payment = (function () {
    function Payment(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    Payment.prototype.format = function () {
        return this.recipient + " is owed $" + this.amount + " for " + this.details;
    };
    return Payment;
}());
var ListTemplate = (function () {
    function ListTemplate(container) {
        this.container = container;
    }
    ListTemplate.prototype.render = function (item, header, pos) {
        var li = document.createElement('li');
        var h4 = document.createElement('h4');
        h4.innerText = header;
        li.appendChild(h4);
        var p = document.createElement('p');
        p.innerText = item.format();
        li.appendChild(p);
        if (pos === 'start') {
            this.container.appendChild(li);
        }
        else {
            this.container.appendChild(li);
        }
    };
    return ListTemplate;
}());
var form = document.querySelector('.new-item-form');
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
//list template instance
var ul = document.querySelector('ul');
var list = new ListTemplate(ul);
form.addEventListener('submit', function (e) {
    e.preventDefault();
    var doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    list.render(doc, type.value, 'end');
});
