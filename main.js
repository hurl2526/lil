
const Node = function(value){
  return {
    value: value,
    next: null,
  }
}

const Lil = function(){
  return {
    head: null,
    addToStart: function(value){
      let oldHead = this.head;
      if(this.head === null){
        this.head = Node(value)
      }
      else{
          this.head = Node(value)
          this.head.next = oldHead
        }
      },
      addToEnd: function(value){
      if(this.head === null){
        this.head = Node(value)
        }else{
          let thing = this.head
          while (thing.next !== null){
          thing = thing.next;
          }
          thing.next = Node(value)
        }
      },
      removeFromStart: function(){
        let removed = this.head.value
        this.head = this.head.next
        return removed
        },

        removeFromEnd: function(){
          let removed = thing.next.value
          while ()
          return removed
        }
    //     const remove = this[0]
    //   for (let i = 0;i < this.length; i++){
    //     this[i] = this[i+1]
    //   }
    //   delete this[this.length-1]
    //   this.length--
    //   return remove
    // },
    }
  }




if (typeof Node === 'undefined') {
  Node = undefined;
}

if (typeof Lil === 'undefined') {
  Lil = undefined;
}


module.exports = {
  Lil,
  Node,
}
