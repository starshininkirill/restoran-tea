let cost = 0;
let person = 0;
let personSum
let persent
let result
$('#btn').click(function(e){
   cost = $('#cost').val()
   person = $('#persons').val()
   result = Math.floor((cost/person) / 100 * $('#select').val()) 
   $('.result').text(`Итого с человека: ${result}р`)
   e.preventDefault()
})