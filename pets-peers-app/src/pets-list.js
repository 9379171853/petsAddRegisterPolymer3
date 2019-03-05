import { PolymerElement, html } from '@polymer/polymer/polymer-element';

import '@polymer/iron-ajax/iron-ajax.js';
import '@polymer/paper-button/paper-button.js';

import '@vaadin/vaadin-grid/vaadin-grid.js';
import '@vaadin/vaadin-grid/vaadin-grid-column.js';
import '@vaadin/vaadin-grid/vaadin-grid-column-group.js'
import '@vaadin/vaadin-grid/src/vaadin-grid-templatizer.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-styles.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column-group.js';
import '@vaadin/vaadin-grid/src/vaadin-grid-column.js';

class PetsList extends PolymerElement {

  static get properties() {
    return {
        data: Array
    }
}
_handleResponse(event) {
    this.data = event.detail.__data.response;
    console.log(this.data);
}
static get template() {
    return html`
    <style>        
      paper-button.indigo {
        background-color: gray;
        color: white;           
      }
      
    </style>
    <iron-ajax 
    auto 
    id="ajax"
    url="http://localhost:4000/pet"
    on-response="_handleResponse"
    > </iron-ajax>
    <div>Number of User is --{{data.length}} </div><br/>

    <vaadin-grid id="test"items={{data}} column-reordering-allowed>
        <vaadin-grid-column>
          <template class="header">Id</template>
          <template>[[item.id]]</template>
       </vaadin-grid-column>
      <vaadin-grid-column>
          <template class="header">Name</template>
          <template>[[item.name]]</template>
        </vaadin-grid-column>
        <vaadin-grid-column>
          <template class="header">Age</template>
          <template>[[item.age]]</template>
        </vaadin-grid-column>
        <vaadin-grid-column>
          <template class="header">Bought By</template>
          <template>[[item.boughtBy]]</template>
        </vaadin-grid-column>
        <vaadin-grid-column>
          <template class="header">Created By</template>
          <template>[[item.createdBy]]</template>
        </vaadin-grid-column>
        <vaadin-grid-column>
        <template class="header">Actions</template>
        <template>[[item.status]]</template>
        </vaadin-grid-column>
        
      </vaadin-grid>  
    `;
}

   
}

customElements.define('pets-list', PetsList);