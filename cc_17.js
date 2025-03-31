//Task 1: Create a Customer Class
class Customer {
    constructor(name, email, purchaseHistory){
        this.name = name;
        this.email = email;
        this.purchaseHistory = [];
    }
    addPurchase(amount){
            this.purchaseHistory.push(amount);//adds a purchase amount to purchaseHistory
    }
    getTotalSpent(){
        return this.purchaseHistory.reduce((total, amount) => total + amount, 0);//returns total amount spent
    }
};

const sam = new Customer("Sam Goodman", "Goodman@gmail.com");
sam.addPurchase(200);
sam.addPurchase(480);
console.log(`New Customer: ${sam.name}, ${sam.email}`);
console.log(`Total amount customer ${sam.name} spent: $${sam.getTotalSpent()}`);// Logging new customer creation and total spent after purchases

//Task 2: Create a SalesRep Class
class SalesRep {
    constructor(name, clients){
        this.name = name;
        this.clients = [];
    }
    addClient(customer){
        this.clients.push(customer)//adding a customer to the list
    } 
    getClientTotal(name){
        const client = this.clients.find(client => client.name ===name);
        
        return client ? client.getTotalSpent() : 0;// finding client by name and returning the total they spent
    }
};

const jimmy = new Customer("Jimmy", "JimbobSophine@gmail.com");
jimmy.addPurchase(430);
const salesRepA = new SalesRep ("Sal");
salesRepA.addClient(sam);
salesRepA.addClient(jimmy);
console.log(`${salesRepA.name}'s clients: ${rep.clients.map(client => client.name).join(",")}`)// shows the sales reps clients
console.log(`Total spent by Jimmy: $${salesRepA.getClientTotal("Jimmy")}`);
console.log(`Total spent by Sam: $${salesRepA.getClientTotal("Sam")}`);//shows how much each client spent
