// ESTETICA
const formEstetica = document.getElementById("formEstetica");

if (formEstetica) {
    formEstetica.onsubmit = function(e) {
        e.preventDefault();

        let dueno = document.getElementById("dueno").value;
        let perro = document.getElementById("perro").value;
        let tamano = parseFloat(document.getElementById("tamano").value);
        let servicio = parseFloat(document.getElementById("servicio").value);

        if (dueno === "" || perro === "" || tamano === "" || servicio === "") {
            alert("Completa todos los campos");
            return;
        }

        let total = tamano * servicio;

        document.getElementById("resultadoEstetica").innerText =
            "Dueño: " + dueno +
            " | Mascota: " + perro +
            " | Total a pagar: $" + total;
    };
}

// PENSION
const formPension = document.getElementById("formPension");

if (formPension) {
    formPension.onsubmit = function(e) {
        e.preventDefault();

        let perro = document.getElementById("perro").value;
        let dias = parseInt(document.getElementById("dias").value);
        let costo = parseFloat(document.getElementById("costo").value);

        if (perro === "" || isNaN(dias) || dias <= 0 || isNaN(costo) || costo <= 0) {
            alert("Completa correctamente los campos");
            return;
        }

        let total = dias * costo;

        document.getElementById("resultadoPension").innerText =
            "Mascota: " + perro +
            " | Días: " + dias +
            " | Total a pagar: $" + total;
    };
}

// TIENDA
const formTienda = document.getElementById("formTienda");

if (formTienda) {
    formTienda.onsubmit = function(e) {
        e.preventDefault();

        let precio = parseFloat(document.getElementById("producto").value);
        let cantidad = parseInt(document.getElementById("cantidad").value);

        if (isNaN(precio) || isNaN(cantidad) || cantidad <= 0) {
            alert("Selecciona un producto y cantidad válida");
            return;
        }

        let total = precio * cantidad;

        // DESCUENTO (ejemplo: si compra más de 500, descuento de 50)
        let descuento = 0;

        if (total > 500) {
            descuento = 50;
        }

        let totalFinal = total - descuento;

        document.getElementById("resultadoTienda").innerText =
            "Subtotal: $" + total +
            " | Descuento: $" + descuento +
            " | Total a pagar: $" + totalFinal;
    };
}


// CITAS
const formCitas = document.getElementById("formCitas");

if (formCitas) {
    formCitas.onsubmit = function(e) {
        e.preventDefault();

        let dueno = document.getElementById("dueno").value;
        let mascota = document.getElementById("mascota").value;
        let costo = parseFloat(document.getElementById("tipoConsulta").value);
        let pago = parseFloat(document.getElementById("pago").value);

        if (dueno === "" || mascota === "" || isNaN(costo) || isNaN(pago)) {
            alert("Completa todos los campos");
            return;
        }

        let cambio = pago - costo;

        document.getElementById("resultadoCitas").innerText =
            "Dueño: " + dueno +
            " | Mascota: " + mascota +
            " | Costo: $" + costo +
            " | Cambio: $" + cambio;
    };
}