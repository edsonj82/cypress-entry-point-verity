import {  
    navigate, validateHomePage, validateVerityLab, verityRegister
} from "../../page-objects/home-page";

beforeEach(()=>{
    navigate()
})

describe('Home Page', ()=>{
    it('should validate some titles in "Home Page"', ()=>{
        validateHomePage()
    })
    it('should validate some titles in "VERITY LAB" and Register a new VERITY', ()=>{
        validateVerityLab()
        verityRegister()
    })

})