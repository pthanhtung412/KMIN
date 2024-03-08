import { question, questionInt } from "readline-sync";

class IntArray {
    name: string;
    array: number[];
    
    constructor(name, ...array) {
        this.name = name;
        
        for (let i = 0; i < array.length; i++) {
            this.array.push(Math.floor(array[i]));
        }
    }

    input(): void {
        this.name = question('Nhap ten cua mang:')
        let num: number = questionInt('Nhap so luong phan tu muon nhap: ')
        for (let i: number = 0; i < num; i++) {
            let tmp: number = questionInt(`Nhap so thu ${i}: `);
            this.array.push(tmp);
        }
    }

    print(): void {
        console.log('Ten cua mang la: ', this.name);
        console.log('Cac phan tu cua mang la: ', this.array);
    }

    getElement(idx: number): number {
        return this.array[idx];
    }

    getSize(): number {
        return this.array.length;
    }

    getSum(): number {
        return this.array.reduce((curr, prev) => curr + prev, 0); 
    }

    getMax(): number {
        let maxNum: number = this.array[0];

        for (let x of this.array) {
            if (maxNum < x) {
                maxNum = x;
            }
        }

        return maxNum;
    }

    getEven(): number[] {
        return this.array.filter(idx => idx % 2 == 0);
    }

    addHead(val: number): void {
        this.array.unshift(val);
    }

    insert(idx: number, val: number): void {
        this.array.splice(idx, 0, val);
    }

    addElements(p: number[]): void {
        this.array.push(...p);
    }


}

