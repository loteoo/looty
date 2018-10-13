
// Http service
export const Http = {

  // Fetch action
  fetch: (props) => ({
    effect,
    url: `http://localhost:5984/looty_items${props.url}`,
    action: props.action
  })
};

// Effect runner
const effect = (props, dispatch) => {
  fetch(props.url)
    .then(response => response.json())
    .then(data => dispatch(props.action, data))
    .catch(err => console.log('ERR', err))
};