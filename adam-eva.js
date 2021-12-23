class Apple {
    _weight;

    constructor(weight) {
        this._weight = weight
    }

    get weight() {
        return this._weight
    }

    set weight(weight) {
        this._weight = weight
    }

    isEmpty() {
        if (this._weight === 0) {
            this.isEmpty = true
        } else {
            this.isEmpty = false
        }
    }

    decreaseWeight() {
        if (this._weight > 0) {
            this._weight --
        }
    }
}

class Human {
    _name;
    _gender;
    _humanweight;

    constructor(name, gender, weight) {
        this._name = name
        this._gender = gender
        this._humanweight = weight
    }

    set name(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set gender(gender) {
        this._gender = gender
    }

    get gender() {
        return this._gender
    }

    set humanweight(weight) {
        this._humanweight = weight
    }

    get humanweight() {
        return this._humanweight
    }

    saySomething(something) {
        console.log(this._name + ' say:' + something)
    }

    eat(apple) {
        apple.decreaseWeight()
        this._humanweight++
    }

    checkApple(apple) {
        return apple._weight
    }
}