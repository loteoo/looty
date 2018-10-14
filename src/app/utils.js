
// Http service
export const Http = {

  // Fetch action
  fetch: (props) => ({
    effect: (props, dispatch) => {
      fetch(props.url)
        .then(response => response.json())
        .then(data => dispatch(props.action, data))
        .catch(err => console.log('Fetch error: ', err))
    },
    url: `http://localhost:5984/looty_items${props.url}`,
    action: props.action
  }),

  post: (props) => ({
    effect: (props, dispatch) => {
      fetch(props.url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(props.data)
      })
        .then(response => response.json())
        .then(data => dispatch(props.action, data))
        .catch(err => console.log('Fetch error: ', err))
    },
    url: `http://localhost:5984/looty_items${props.url}`,
    data: props.data,
    action: props.action
  })
};
