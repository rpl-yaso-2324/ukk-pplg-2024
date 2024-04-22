let pin = document.getElementById("pin");
user = {
	pin: 123456,
};
cekpin = () => {
	if (pin.value != user.pin) {
		alert("pin salah");
	} else if (pin.value == "") {
		alert("pin harus diisi");
	} else {
		window.location.href = "pilihNominal.html";
	}
};
const nominal = {
	seRatus: "100000",
	duaRatus: "200000",
	tigaRatus: "300000",
	limaRatus: "500000",
	satuJuta: "1000000",
	satuJutaLimaRatus: "1500000",
};

let saldo = 1000000;
const inputNominal = document.getElementById("nominal");
function pilihNominal(saldoPilihan) {
	if (saldoPilihan == "" || saldoPilihan == 0) {
		alert(`nominal tidak boleh kosong`);
	} else if (saldo >= saldoPilihan) {
		if (saldoPilihan % 50000 == 0) {
			confirm(
				`anda mengambil uang ${saldoPilihan} dan sisa saldo anda adalah${
					saldo - saldoPilihan
				}`
			);
		} else {
			alert("nominal harus 500000");
		}
	} else {
		alert(`saldo anda kurang`);
	}
}
