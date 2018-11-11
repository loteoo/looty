import {h} from 'hyperapp'
import cc from 'classcat'

import './style.css'

export const NiceInput = ({label = label || 'Label', name = name || 'name', type = type || 'text', placeholder = placeholder || ' ', required, hint, ...rest}) => (
  <div class={cc(['nice-input', name])} key={name}>
    {hint ? <p class="hint">{hint}</p> : null}
    <input type={type} name={name} id={name} placeholder={placeholder} required={required} {...rest} />
    <label for={name}>{label}{required ? ' *' : null}</label>
  </div>
)

/*
import {NiceInput} from './components/common/NiceInput'
<NiceInput label="First name" name="firstName" value={firstName} hint="Optional hint" />
*/
