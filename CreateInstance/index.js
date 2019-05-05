
var rm = new Vue({
	el:'#example',
	data:{
		message: 'Hello'
	},
	computed:{
		// 计算属性的 getter
		reversedMessage: function(){
			return this.message.split('').reverse().join('')
		},
		now: function(){
			return Date.now()
		}
	}
	
});

var fn = new Vue({
	el: '#fullName',
	data:{
		firstName: 'Wang',
		lastName: 'Duan'
	},
	computed: {
		// fullName: function(){
		// 	return this.firstName + ' ' + this.lastName
		// }
		fullName: {
			get: function(){
				return this.firstName + ' ' + this.lastName
			},
			set: function(newValue){
				var names = newValue.split(' ')
				this.firstName = names[0]
				this.lastName = names[names.length - 1]
			}
		}
	}
})