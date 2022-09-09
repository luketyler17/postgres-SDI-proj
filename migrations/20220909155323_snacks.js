/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('snacks', table => {
        table.increments('id'); // adds an auto incrementing PK column
        table.string('name').notNullable();
        table.integer('snack_type_id')
        table.integer('price');
        table.timestamps(true, true); // adds created_at and updated_at
    });
};


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.alterTable('snacks', (table) => {
        table.dropForeign('snack_type_id')
            .then(function () {
                return knex.schema.dropTableIfExists
            })
    })
};
