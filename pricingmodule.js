class PricingModule {
    constructor(inTexas, hasHistory, largePurchase) {
        this.inTexas = inTexas;
        this.hasHistory = hasHistory;
        this.largePurchase = largePurchase;
    }

    setLoc(val) {
        this.inTexas = val;
    }

    setHist(val) {
        this.hasHistory = val;
    }
    
    setGal(val) {
        this.largePurchase = val;
    }

    calcSugPrice() {
        let loc, hist, gal;
    	if (this.inTexas) {
        	loc = .02;
        } else {
        	loc = .04;
        }
        
        if (this.hasHistory) {
        	hist = .01;
        } else {
        	hist = 0;
        }
        
        if (this.largePurchase) {
        	gal = .02;
        } else {
        	gal = .03;
        }
        
        return ((loc - hist + gal + .10) * 1.50) + 1.50;
    }
}

//module.exports = PricingModule;
