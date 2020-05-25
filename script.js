 const form = document.querySelector('#add-cafe-form');

//saving data
form.addEventListener('submit',(e)=> {
//	e.preventDefault();
	db.collection('UserData').add({
		Name: form.Name.value,
		EmailId: form.EmailId.value,
		Password: form.Password.value
	});
	form.Name.value = '';
	form.EmailId.value = '';
	form.Password.value = '';
});
