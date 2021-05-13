// const family = ['Vanya', 'Tanya', 'Maxim', 'Ira'];
// console.log(family);

// console.log(family[2]);

//================== changing element of familyay =============
// family[0] = 'Dima';
// console.log(family);

//================== adding element to familyay =============
// family[4] = 'Vanya';
// console.log(family);


//==================== array length =======================

// console.log(family.length);

// // extending array

// family.length = 7;

// console.log(family.length);

// console.log(family); // 'Vanya', 'Tanya', 'Maxim', 'Ira' empty x 2 ;



//================== some operations with the help of 'round' ===============

// for (let i = 0; i < family.length; i += 1) {
//     console.log('Logging family member ', family[i]);
// }

//=================  filling array with elements =========================

// const numbers = [];

// for (let i = 0; i < 52; i += 2) {
//     numbers.push(`label - ${i}`);

// }
// console.log('numbers:', numbers);
// console.log(numbers.length);

//==================== applying 'for.......of' round ========================

const clients = ['Mango', 'Ajax', 'Poly'];

for (const client of clients) {
  console.log(client);
}