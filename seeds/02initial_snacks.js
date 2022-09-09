/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('snacks').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks').insert([
        { id: 1, name: 'Milky Way', snack_type_id: 1, price: 15 },
        { id: 2, name: 'Fudge Stick', snack_type_id: 3, price: 15 },
        { id: 3, name: 'Icee', snack_type_id: 5, price: 15 },
        { id: 4, name: 'Soda', snack_type_id: 5, price: 15 },
        { id: 5, name: 'Popcorn', snack_type_id: 4, price: 15 },
        { id: 6, name: 'Jolly Ranchers', snack_type_id: 2, price: 15 },
        { id: 7, name: 'Pretzel', snack_type_id: 6, price: 15 },
      ]);
    });
  }