import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
    goToStore(event) {
        event.preventDefault(); 
        const storeId = this.storeInput.value;
        console.log(`Going to ${storeId}`)
        console.log(this);
        this.context.router.transitionTo(`/store/${storeId}`);                 
    }   

    render(){
        return (
            <form className="store-selector" onSubmit={(e) => this.goToStore(e)}>
                <h2>Please Enter A Store</h2>
                <input type="text" ref={(input) => { this.storeInput = input}} required placeholder="Store Name"    defaultValue={getFunName()} />
                <button type="submit">Visit Store </button>
            </form>
        )
    }
}

StorePicker.contextTypes = {
    router: React.PropTypes.object
}

export default StorePicker;
