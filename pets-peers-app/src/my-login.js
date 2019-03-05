import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
// import './shared-styles.js';

class MyLogin extends PolymerElement {
  static get template() {
    return html`
      <style>
        .btnAddPet{
          float: right;
          bottom: 46px;
        }

       </style>

      

      <div>
      <p> Login Page </p>
     
     

      <paper-input type="text" label="User Name"></paper-input>
      <paper-input type="password" label="password"></paper-input>
      <paper-button raised> Login </paper-button>
      </div>

      
      
    `;
  }
}

window.customElements.define('my-login', MyLogin);
