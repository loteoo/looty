// Utility functions

export const generateUUID = () =>
  ('' + 1e7 + -1e3 + -4e3 + -8e3 + -1e11)
    .replace(/1|0/g, function () {
      return (0 | Math.random() * 16)
        .toString(16)
    })


// Fetch wrapper set to couchdb
export const getData = (url) =>
  fetch(`http://localhost:5984${url}`)
    .then(response => response.json())
    .catch(error => console.error(`Fetch error:\n`, error))

    
// Fetch wrapper  for POST requests,
// set to the live Strapi
export const postData = (url, data) =>
  fetch(`http://localhost:5984${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .catch(error => console.error(`Fetch error:\n`, error))