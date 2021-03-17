class DonutMaker{
    constructor(){
        this.count = 0;
        this.incrementor = 1;
        this.autoClicker = 0;
        this.autoClickerPrice = 100;
        this.multiplier = 0;
        this.multiplierPrice = 10;
    }

    getCount(){
        return this.count;
    }

    addDonuts(){
        this.count += this.incrementor;
    }

    getAutoClicker(){
        return this.autoClicker;
    }

    addAutoClicker(){
        this.autoClicker++;
        this.count -= 100;
    }

    getMultiplier(){
        return this.multiplier;
    }

    addMultiplier(){
        if(this.count < this.multiplierPrice){

        }
        else{
        this.multiplier++;
        this.incrementor = Math.pow(1.2, this.multiplier);
        this.count -= this.multiplierPrice;
        this.multiplierPrice *= 1.1;
        }
    }

    getMultiplierPrice(){
        return this.multiplierPrice;
    }
}

