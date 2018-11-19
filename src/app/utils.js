
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
    url: `http://${window.location.hostname}:5984/looty${props.url}`,
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
    url: `http://${window.location.hostname}:5984/looty${props.url}`,
    data: props.data,
    action: props.action
  })
};


// Listen to hash changes in the browser
export const LocationChanged = props => ({
  effect: (props, dispatch) => {
    const eventListener = event => {
      dispatch(props.action, window.location.hash.substring(1))
    }
    addEventListener("hashchange", eventListener)
    return () => removeEventListener("hashchange", eventListener)
  },
  action: props.action
})


// DOM custom event (hyperapp will treat this like any other event)
export const enableOnMountDomEvent = () => {
  const mountEvent = new Event('mount')
  const realCreateElement = document.createElement.bind(document)
  document.createElement = (name) => {
    let el = realCreateElement(name)
    setTimeout(() => el.dispatchEvent(mountEvent))
    return el
  }
}