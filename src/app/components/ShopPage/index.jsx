import {h} from 'hyperapp'

import './style.css'

// Import local actions
import {SetValue, SubmitForm} from './actions'

import {NiceInput} from '../common/NiceInput'
import {ImageUploader} from '../common/ImageUploader'


export const ShopPage = ({shop, user}) => (
  <div className="shop-page" key="shop-page">
    {/* <form className="item-form" key="item-form" method="post" onsubmit={SubmitForm}>
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
    </form> */}
    <p>Shop name: <b>{shop.title}</b></p>
    
    <p>{shop.user_id === user._id ? 'You own this shop!' : 'This shop is not yours'}</p>
    
  </div>
)

