interface INotifier { send(): void; }

class SmsNotifier implements INotifier {
    send() { console.log("SMS відправлено!"); }
}

class Order {
    constructor(private notifier: INotifier) {} // DIP: залежимо від правила
    save() {
        console.log("Збереження...");
        this.notifier.send();
    }
}

// Перевірка
const order = new Order(new SmsNotifier());
order.save();