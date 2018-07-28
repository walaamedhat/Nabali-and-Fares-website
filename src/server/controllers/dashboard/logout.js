exports.get = (req, res) => {
  res.clearCookie('accessToken');
  res.writeHead(302, {
    Location: 'https://nfdashboard.herokuapp.com',
  });
  res.end();
};
