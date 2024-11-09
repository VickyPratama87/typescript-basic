// numerik enum
enum Month {
	JAN = 1,
	FEB,
	MAR = 100,
	APR,
	MAY,
}

console.log(Month.JAN); // 1
console.log(Month.APR); // 101

// string enum
enum Bulan {
	JUN = 'Juni',
	JUL = 'Juli',
	AUG = 'Agustus',
	SEP = 'September',
	OCT = 'Oktober',
}

console.log(Bulan.JUN); // Juni
