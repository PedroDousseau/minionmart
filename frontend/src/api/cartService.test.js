const cartService = require("./cartService")
// @ponicode
describe("cartService.LoadCart", () => {
    test("0", () => {
        let callFunction = () => {
            cartService.LoadCart("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cartService.LoadCart("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cartService.LoadCart("user123")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cartService.LoadCart("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cartService.LoadCart("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cartService.LoadCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cartService.ClearCart", () => {
    test("0", () => {
        let callFunction = () => {
            cartService.ClearCart(123)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cartService.ClearCart("user name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cartService.ClearCart("user_name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cartService.ClearCart("user-name")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cartService.ClearCart("username")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cartService.ClearCart(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
