var pin = document.getElementById("pin");
user = {
	pinUser: 123456,
};
cekpin = () => {
	if (pin.value == "") {
		alert("pin harus diisi");
	} else if (pin.value != user.pinUser) {
		alert("pin salah");
	} else {
		window.location.href = "pilihNominal.html";
	}
};
const pilihanNominal = {
	seRatus: "100000",
	duaRatus: "200000",
	tigaRatus: "300000",
	limaRatus: "500000",
	satuJuta: "1000000",
	satuJutaLimaRatus: "1500000",
};

var saldo = 1000000;
const inputNominal = document.getElementById("nominal");
function pilihNominal(nominal) {
	if (nominal == "" || nominal == 0) {
		alert(`nominal tidak boleh kosong`);
	} else if (saldo >= nominal) {
		if (nominal % 50000 == 0) {
			confirm(
				`anda mengambil uang ${nominal} dan sisa saldo anda adalah ${
					saldo - nominal
				}`
			);
		} else {
			alert("nominal harus 500000");
		}
	} else {
		alert(`saldo anda kurang`);
	}
}
