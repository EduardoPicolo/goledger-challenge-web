const formatDate = (date) => {
  const formatedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(Date.parse(date)));

  return formatedDate;
};

export default formatDate;
