exports.get = (req, res) => {
  res.clearCookie('accessToken');
  res.writeHead(302, {
    Location: 'http://localhost:3000',
  });
  res.end();
};
