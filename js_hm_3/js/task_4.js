const driverCategory = prompt('Введіть категорію (A,B,C)')

let category

switch(driverCategory){
	case 'A': category = 'Ви можете керувати  мотоциклом'
	break
	case 'B': category = 'Ви можете керувати легковим автомобілем'
	break
	case 'C': category = 'Ви можете керувати вантажним автомобілем'
	break
	default : category = 'У вас немає прав'
}

document.write(category)