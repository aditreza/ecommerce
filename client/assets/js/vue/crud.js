new Vue({
  el   : '#app',
  data : {
    message : 'You loaded this page on ',
    items : [],
    carts : [],
    verified: false,
    trans: [],
    total_price : 0,
    id_pruduct_trans : [],
    logHistory : []
  },
  created (){
    axios.get('http://localhost:3000/api/items')
    .then((response)=>{
      this.items.push(...response.data)
    })
    .catch(function(err){
      console.error(err)
    })
  },
  methods : {
    addToCart: function(add){
      console.log('=====',this.items)
      if(this.trans == 0){
        add.qty = 1
        this.total_price += add.price
        this.trans.push(add)
      } else {	
        this.trans.map(tran=>{
          if(add._id !== tran._id){
            if(!add.qty){
              add.qty = 1
              this.total_price += add.price
              this.trans.push(add)
            }
          }
          if(add._id == tran._id){
            tran.qty += 1
            this.total_price += add.price
          }
        })
      }
      
      this.carts.push([add._id, add.price, add.item_name])
      console.log(this.carts)
      console.log(this.total_price,'<<')
    },
    
    priceIDR : function(price){
      price += '';
      var x = price.split('.');
      var x1 = x[0];
      var x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + '.' + '$2');
      }
      return x1 + x2;
    },
    
    toTransaction(){
      this.trans.map(tran=>{
        console.log('|||',tran.brand)
        this.logHistory.push(tran._id,tran.item_name,tran.qty,tran.brand,tran.category)
        this.id_pruduct_trans.push(tran._id)
      })
      console.log('>',this.id_pruduct_trans)
        axios.post('http://localhost:3000/api/transactions',{
          productId : this.id_pruduct_trans,
          total : this.total_price,
          logHistory : this.logHistory
        })
        .then(function(response){
          console.log(response)
        })
        .catch(function(err){
          console.error(err)
        })
    }
  }
})