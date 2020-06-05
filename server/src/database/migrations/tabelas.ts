import knex from 'knex'

export async function up(knex: knex) {
    return knex.schema
      .createTable('points', function (table) {
         table.increments('id').primary();
         table.string('image').notNullable();
         table.string('name').notNullable();
         table.string('email').notNullable();
         table.string('whatsapp').notNullable();
         table.decimal('latitude').notNullable();
         table.decimal('longitude').notNullable();
         table.string('city').notNullable();
         table.string('uf', 2).notNullable();
      })
      .createTable('items', function (table) {
         table.increments('id').primary();
         table.string('image').notNullable();
         table.string('title', 1000).notNullable();
      })
      .createTable('point_items', function (table) {
        table.increments('id').primary();
        table.integer('point_id')
        .notNullable()
        .references('id')
        .inTable('points');
        table.integer('item_id', 1000)
        .notNullable()
        .references('id')
        .inTable('items');
     });
  };
  
  export async function down(knex: knex) {
    return knex.schema
        .dropTable("points")
        .dropTable("items")
        .dropTable("point_items");
  };
  
  exports.config = { transaction: false };