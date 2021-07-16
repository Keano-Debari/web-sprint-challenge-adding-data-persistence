
exports.up = function(knex) {
  return knex.schema
    .createTable('tasks', table => {
        table.increments('task_id')
        table.text('task_description')
            .notNullable()
        table.text('task_notes')
        table.boolean('task_completed')
            .defaultTo('false')    
    })
};

exports.down = function(knex) {
  
};
