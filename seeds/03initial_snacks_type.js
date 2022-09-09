/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('snacks_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('snacks_type').insert([
        { id: 1, type: 'Chocolate' },
        { id: 2, type: 'Candy' },
        { id: 3, type: 'Ice Cream' },
        { id: 4, type: 'Pop Corn' },
        { id: 5, type: 'Drinks' },
        { id: 6, type: 'All others' }
      ]);
    })
  }