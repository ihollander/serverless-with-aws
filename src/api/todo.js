module.exports.handler = (event, ctx, done) => {
  const todos = [
    { id: 1, name: "clean up", status: "open" },
    { id: 2, name: "cook", status: "done" }
  ];

  const { id } = event.pathParameters;
  const todo = todos.find(todo => todo.id === parseInt(id));

  done(null, {
    statusCode: 200,
    body: JSON.stringify({ data: todo })
  });
};