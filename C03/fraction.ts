import { question, questionInt } from "readline-sync";

class Fraction {
    tuSo: number;
    mauSo: number;
    
    constructor(tuSo: number, mauSo: number) {
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }

    scan(): void {
        console.log('Nhap phan so');
        let tuSo: number = questionInt('Nhap tu so');
        let mauSo: number = questionInt('Nhap mau so');
        
        this.tuSo = tuSo;
        this.mauSo = mauSo;
    }

    print(): void {
        console.log('Phan so co tu so la: ', this.tuSo);
        console.log('Phan so co mau so la: ', this.mauSo);
    }

    reduce(): void {
        let gcd = (a: number, b:number): number => b === 0 ? a : gcd(b, a % b);
        let UCLN: number = gcd(this.tuSo, this.mauSo);
        
        this.tuSo = this.tuSo / UCLN;
        this.mauSo = this.mauSo / UCLN;
    }

    normalize(): void {
        let so: number = this.tuSo/this.mauSo; 

        switch (true) {
            case so > 0:
                this.tuSo = Math.abs(this.tuSo);
                this.mauSo = Math.abs(this.mauSo);
                break;
            case so < 0:
                this.tuSo = - Math.abs(this.tuSo);
                this.mauSo = - Math.abs(this.mauSo);
            default:
                this.tuSo = 0;
                this.mauSo = 1;
        }
    }

    plus(y: Fraction): Fraction {
        const tuSoMoi = this.tuSo * y.mauSo + this.mauSo * y.tuSo;
        const mauSoMoi = this.mauSo * y.mauSo;

        const result = new Fraction(tuSoMoi, mauSoMoi);

        result.reduce();

        return result;
    }    

    multily(y: Fraction): Fraction {
        const tuSoMoi = this.tuSo * y.tuSo;
        const mauSoMoi = this.mauSo * y.mauSo;

        const result = new Fraction(tuSoMoi, mauSoMoi);

        result.reduce();

        return result;
    }
    
    equal(y: Fraction): boolean {
        return this.tuSo * y.mauSo == this.mauSo * y.tuSo;
    }
    
    lessThan(y: Fraction): boolean {
        return this.tuSo * y.mauSo < this.mauSo * y.tuSo;
    }
}

