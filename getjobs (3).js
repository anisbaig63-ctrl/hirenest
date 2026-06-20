exports.handler = async (event) => {
  const query = event.queryStringParameters.query || 'developer';
  const page = event.queryStringParameters.page || '1';
  try {
    const res = await fetch(
      'https://jsearch.p.rapidapi.com/search?query=' + encodeURIComponent(query) + '&page=' + page + '&num_pages=1',
      {
        headers: {
          'x-rapidapi-host': 'jsearch.p.rapidapi.com',
          'x-rapidapi-key': 'f1b71d3d18msh3e7113790910cacp106012jsna5a99a59c717'
        }
      }
    );
    const data = await res.json();
    return {
      statusCode: 200,
      headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify({ error: err.message, data: [] })
    };
  }
};
