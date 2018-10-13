import {h} from 'hyperapp'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import {NiceInput} from '../../common/NiceInput'
import {ImageUploader} from '../../common/ImageUploader'

import './style.css'

export const ItemForm = ({name, price, image, submitted}) => (
  <form className="item-form" key="item-form" method="post" onsubmit={SubmitForm}>
    <h3>New item</h3>
    
    <NiceInput
      label="Item name"
      name="name"
      value={name}
      oninput={[SetValue, 'name']}
      hint="Optional hint"
    />
    
    <NiceInput
      label="Price"
      name="price"
      value={price}
      oninput={[SetValue, 'price']}
      hint="Optional hint"
    />
    
    <ImageUploader
      label="Image"
      name="image"
      value={image}
      oninput={[SetValue, 'image']}
      hint="Optional hint"
    />

    {!submitted ? <button type="submit" pill>Submit</button> : <span>Submitted!</span>}
  </form>
)

/*
import {ItemForm} from './components/ItemForm'
<ItemForm {...state.itemForm} />
*/
