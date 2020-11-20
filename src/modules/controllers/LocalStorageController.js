import LocalStorageModel from '../models/LocalStorageModel';

class LocalStorageController {
    constructor(storage) {
        if ( !!LocalStorageController.instance ) {
            return LocalStorageController.instance;
        }
        LocalStorageController.instance = this;

        const localStorageModel = new localStorageModel(storage);

        this.init = function() {
            
        }

        return this;
    }

}

export default LocalStorageController;