export const Product = {
    _id:"",
    name:"",
    producttype:"",
    brand:"",
    model:"",
    price: 0,
    list_price: 0,
    description:"",
    rating:"",
    sku:"",
    feature: [],
    image: [],
    images: { black: [null], white: [null], stainless: [null] },
    specifications: { dimensions: [null], details: [null] }
  }

  export const Cart = {
    email:"",
    items: []
  }

  export const Delivery = {
    firstName: 'John',
    lastName:'Admin',
    email:'John@John.com',
    phone:'905 454 8989',
    shippingAddress:'40 Angular Place',
    zipCode:'12345',
    cityState:'Maynard, MA',
    useAsBillingAddress: true,
    deliveryDate: new Date(),
    specialInstruction:'Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway Leave package in driveway ',    
  }
  
  export const Payment = {
    paymentType: "Credit Card",
    cardNumber: "1234567888890",
    expMonth: "01-January",
    expYear: "2020",
    cw: "456",    
  }
  
  export const Order = {     
      delivery:Delivery, 
      payment:Payment, 
      orderItems:[],
      _id: ''
  }
  
  export const OrderItem = {
    productId: '', 
    quantity: ''        
  }

  export const CartSummary = {
    cart:Cart,
    numberOfItems:0,
    subtotal:0,
    tax:0,
    discount:0,
    total:0,    
  }