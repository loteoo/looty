import {h} from 'hyperapp'
import cc from 'classcat'

import './style.css'

export const ImageUploader = ({label = label || 'Label', name = name || 'name', required, hint, ...rest}) => (
  <div className={cc(['nice-input', name])} key={name}>
    {hint ? <p className="hint">{hint}</p> : null}
    <input type="file" name={name} id={name} required={required} {...rest} />
    <label for={name}>{label}{required ? ' *' : null}</label>
  </div>
)


// See: https://codepen.io/team/Cloudinary/pen/QgpyOK