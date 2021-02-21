const getYear = (date) => {
  var d = (new Date(date)).getFullYear();
  var now = (new Date()).getFullYear();

  return now - d;
};

export default getYear;
