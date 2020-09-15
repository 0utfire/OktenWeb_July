// class Human {
//     weight: number;
//     height: number;
//
//     constructor(weight: number, height: number) {
//         this.weight = weight;
//         this.height = height;
//     }
// }
//
// class Deputy  extends Human{
//     firstName: string;
//     lastName: string;
//     age: number;
//     bribe: boolean;
//     bribeSum: number;
//
//     constructor(weight:number, height:number, firstName: string, lastName: string, age: number, bribe: boolean, bribeSum: number = 10000) {
//         super(weight, height);
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         this.bribe = bribe;
//         this.bribeSum = bribeSum;
//
//     }
//     giveBribe(bribeSum): boolean {
//         return !(this.bribe === false || bribeSum > this.bribeSum);
//     }
// }
//
// let victor = new Deputy(80, 175, 'Victor', 'Kmin', 28, true, 5000);
// let result = victor.giveBribe(1000 );
// // console.log('result is', result);

class Deputy {
    name: string;
    bribe: boolean;
    bribeSum: number;

    constructor(name: string, bribe?: boolean, bribeSum?: number) {
        this.name = name;
        this.bribe = bribe;
        this.bribeSum = bribeSum;
    }
}

class Fraction {
    name: string;
    deputies: Deputy[] = [];

    constructor(name: string, deputies?: Deputy[]) {
        this.name = name;
        this.deputies = deputies;
    }

    addDeputy() {
        console.log(this.deputies);
        this.deputies.push({
            name: prompt('Enter the name of Deputy to add'),
            bribe: confirm('Can Deputy be bribed?'),
            bribeSum: +prompt('Enter the sum of bribe')
        })
    }

    removeDeputy() {
        let deputyToRemove = prompt('Enter the name of Deputy to remove')
        const deputy = this.deputies.find(dep => dep.name === deputyToRemove);
        this.deputies.splice(this.deputies.indexOf(deputy), 1)
    }

    showAllDeputies() {
        this.deputies.forEach(deputy => {
                console.log(deputy)
            }
        )
    }

    showAllBribed() {
        this.deputies.forEach(deputy => {
            if (deputy.bribe) {
                console.log(deputy);
            }
        })
    }

    showTheBiggestBribe() {
        let a: Deputy = this.deputies[0]
        this.deputies.forEach(deputy => {
                if (deputy.bribeSum > a.bribeSum && deputy.bribe) {
                    a = deputy
                }
            }
        )
        console.log(a);
    }

    showTheBiggestBribeMinMax() {
        let bribes = this.deputies.map(deputy => deputy.bribeSum);
        let briber = bribes.reduce((a, b) => Math.max(a, b))
        let deputy = this.deputies.find(dep => dep.bribeSum === briber);
        console.log(deputy);

    }

    deleteAllDeputies() {
        this.deputies.forEach(dep => this.deputies.splice(this.deputies.indexOf(dep), 1))
    }

    showBribeSum() {
        let a: number = 0
        this.deputies.forEach(deputy => a += deputy.bribeSum);
        console.log(a);

    }
}

let es = new Fraction('ES',[
    {
        name: 'Poroh',
        bribe: true,
        bribeSum: 1000
    },
    {
        name: 'Roman',
        bribe: true,
        bribeSum: 7000
    },
    {
        name: 'Victor',
        bribe: false,
        bribeSum: 9000
    },
]);

// console.log(es.deputies);
// es.addDeputy()
// console.log(es.deputies);
// es.showAllDeputies()
// es.removeDeputy()
// es.showAllBribed()
// es.showTheBiggestBribe()
// es.showTheBiggestBribeMinMax()
// es.deleteAllDeputies()
// es.showBribeSum()

// додати\видалити фракцію +
// вивести всі фракції +
// вивести конкретну фракцію +
// додати\видалити депутата з фракції +
// вивести всіх хабарників фракції
// вивести найбільшого хабарника у фрації
// вивести найбільшого хабарника верховної ради
// вивести фсіх депутатів фракції
// вивести найбільшого хабарника фракції


class Government {
    fractionList: Fraction[] = [];
    constructor(fractionList: Fraction[]) {
        this.fractionList = fractionList;
    }

    addFraction(){
        let newFraction = new Fraction(prompt('Enter the name of Fraction to add'),[]);
        // console.log(newFraction);
        this.fractionList.push(newFraction)
    }
    removeFraction(){
        let deletName = prompt('Enter the name of Fraction to remove');
        const frToDel = this.fractionList.find(fr => fr.name === deletName)
        this.fractionList.splice(this.fractionList.indexOf(frToDel),1)
    }
    showAllFractions(){
        this.fractionList.forEach(
            fr => console.log(fr.name)
        )
    }
    showFractionByName(){
        let frToFind = prompt('Enter Fraction to show');
        let showFr = this.fractionList.find( fr => fr.name === frToFind)
        console.log(showFr);
    }
    addDeputyToFraction(){
        let frToAdd = this.fractionList.find( fr => fr.name === prompt('Enter Fraction to add Deputy'));
        frToAdd.addDeputy();
    }
    removeDeputyFromFraction(){
        
    }
}

let Ukraine = new Government([]);
Ukraine.addFraction()
Ukraine.addFraction()
// console.log(Ukraine.fractionList);
// Ukraine.removeFraction();
// console.log(Ukraine.fractionList);
// Ukraine.showAllFractions()
// Ukraine.showFractionByName();
Ukraine.addDeputyToFraction();
