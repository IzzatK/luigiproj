/* This example requires Tailwind CSS v2.0+ */

import React, { Component } from "react"
import './PopupMenu.css'








export default class PopupMenu extends Component {


  render() {
 

    

      return (
 

<div class="dropdown" id="dropdowndiv">
  <div tabindex="0" class="m-1 btn">Dropdown</div> 
  <ul tabindex="0" class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <a>Item 1</a>
    </li> 
    <li>
      <a>Item 2</a>
    </li> 
    <li>
      <a>Item 3</a>
    </li>
  </ul>
</div>
  
  )
}
}