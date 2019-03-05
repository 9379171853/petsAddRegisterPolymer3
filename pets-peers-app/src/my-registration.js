
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
 import '@polymer/paper-input/paper-input.js';
 import '@polymer/paper-input/paper-textarea.js';
 import '@polymer/paper-button/paper-button.js';
 import '@polymer/iron-form/iron-form.js'


//import './shared-styles.js';

class MyRegistration extends PolymerElement {

  static get properties() {
    return {
      username: {
            type: String
        },
        mobile: {
          type:String
        },
        location: {
          type: String
        },
        psw : {
          type:String
        }

      }
    }
  _handleSubmit() {       
    if(this.$.demoForm.validate()) {
      var ironAjax = this.$.dataAjax;// this.$.dataAjax.url;      
      ironAjax.method = 'post';
      //ironAjax.contentType = 'text/plain';      
        let obj = {username: this.username, mobile: this.mobile, location: this.location, psw: this.psw}
        console.log(obj);
        var valueToSend = obj;
        ironAjax.body = valueToSend;
        ironAjax.generateRequest();
    }
}


postComplete(event){
  this.data = event.detail.response;
  console.log(this.data);
}

  static get template() {
    return html`
      <style>       
      </style>
      <p> Registration Page </p>     

      <iron-ajax 
      auto
    id="dataAjax"     
    url="http://localhost:4000/register/register"
    handle-as="json"
    content-type="application/json"
    method="POST"
    body="obj"
    on-response="postComplete"
    ></iron-ajax>

    <iron-form id="demoForm">
      <form>
      <paper-input type="text" name="username" value={{username}} label="User Name"></paper-input>
      <paper-input type="text" name="mobile" value={{mobile}} label="Mobile Number"></paper-input>
      <paper-textarea name="location" value={{location}} label="Location"></paper-textarea>
      <paper-input type="password" name="psw" value={{psw}} label="Password"></paper-input>
      <paper-button raised on-click="_handleSubmit"> submit </paper-button>
      </form>
      </iron-form>
      
    `;
  }

  
}

window.customElements.define('my-registration', MyRegistration);
