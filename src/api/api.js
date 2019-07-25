module.exports.handler = (evt, ctx, done) => {
  done(null, {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      message: "hi"
    })
  });
};
