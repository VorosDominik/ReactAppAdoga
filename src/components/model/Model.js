import { szenvedoMondatok } from "../adatok/angol";

class Model {
    #list=[]
    constructor() {
        this.#list=szenvedoMondatok
       
    }

    Mondat(hanyadik) {
        return this.#list[hanyadik].mondat;
    }
    helyes(hanyadik){
        return szenvedoMondatok[hanyadik].valasztas[0]
    }
        
    
}
export default Model
