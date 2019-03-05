import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-form/iron-form.js'
class PetAdd extends PolymerElement {

  static get properties() {
    return {
      name: {
            type: String
        },
        age: {
          type:Number
        },
        place: {
          type: String
        },
        status : {
          type:String
        },
        createdBy: {
          type: String
        }

      }
    }

    _handleAddPet(){
      if(this.$.petForm.validate()){
        var petAjax = this.$.petAjax;
        petAjax.method = 'POST';
        let petObj = {name :this.name,age: this.age,place:this.place, status: this.status,createdBy: this.createdBy};
        console.log(petObj);
        petAjax.body = petObj;
        petAjax.generateRequest();
      }
    }

    responseComplete(event){
      var status = event.detail.response;
      console.log(status);
    }

  static get template() {
    return html`
      <style>
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      <div>
      <p>Add Pet </p>
      
    <iron-ajax 
    auto
    id="petAjax"     
    url="http://localhost:4000/pet/addpet"
    handle-as="json"
    content-type="application/json"
    method="POST"
    body="petObj"
    on-response="responseComplete"
    ></iron-ajax>

    <iron-form id="petForm">
      <form>
      <paper-input type="text" name="name" value={{name}} label="Pet Name"></paper-input>
      <paper-input type="text" name="age" value={{age}} label="Age"></paper-input>
      <paper-textarea name="place" value={{place}} label="Location"></paper-textarea>
      <paper-textarea name="status" value={{status}} label="Status"></paper-textarea>
      <paper-textarea name="createdBy" value={{createdBy}} label="User Name"></paper-textarea>
      <paper-button raised on-click="_handleAddPet"> submit </paper-button>
      </form>
      </iron-form>

      </div>
    `;
  }
}

window.customElements.define('pet-add', PetAdd);
