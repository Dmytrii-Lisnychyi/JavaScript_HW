const dayOfTheWeekNumber = String(prompt('Введіть номер дня в тижні'))

let dayOfTheWeekName

switch(dayOfTheWeekNumber){
	case '1': dayOfTheWeekName = 'Понеділок'
	break
	case '2': dayOfTheWeekName = 'Вівторок'
	break
	case '3': dayOfTheWeekName = 'Середа'
	break
	case '4': dayOfTheWeekName = 'Четвер'
	break
	case '5': dayOfTheWeekName = 'П\'ятниця'
	break
	case '6': dayOfTheWeekName = 'Субота'
	break
	case '7': dayOfTheWeekName = 'Неділя'
	break
	default : dayOfTheWeekName = 'Хтозна який зараз день'
}

document.write(dayOfTheWeekName)