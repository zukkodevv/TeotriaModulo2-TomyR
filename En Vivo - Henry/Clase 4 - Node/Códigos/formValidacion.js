(function () {
  const forms = document.querySelectorAll(".needs-validation");
  //* Agarramos todos los elementos con la clase "need validation" propia de Bootstrap, la cual esta inbuida
  //* los distintos inputs del formulario

  forms.forEach((form) => {
    //* Dentro de los forms hacemos una iteración y para cada formulario, nos referimos a cada formulario iterado individualmnte cómo el parametro "form".
    form.addEventListener("submit", (event) => {
      //* A cada formulario iterado con el evento "submit" se le añade el evento que hace lo siguiente:
      if (!form.checkValidity()) {
        //* Se usa el método checkValidity() que verifica si cumple todo lo que se define en el (un required o algo así) y sí no cumple con algo con el !form le indicamos que sí ocurre eso, ejecute lo siguiente:
        event.preventDefault();
        //* Le indicamos que no realice su acción predeterminada
        event.stopPropagation();
        //* Le indicamos que no se propage(no pueda accionar en ningún otro elemento fuera del mismo)
      }

      form.classList.add("was-validated");
      //* Le añadimos la clase definida por Bootstrap ('was-validated')
      alert("Mensaje Vaidado");
      //* Reproducimos un mensaje en la página mediante una alerta "Mensaje validado"
    });
  });
})();

(function () {
  const form = document.querySelector("#form");
  //* Se obtienen todos los elementos con el id "Form"

  form.addEventListener("submit", (evento) => {
    //* Al elemento con el id form se le añade un evento cuándo ocurre un submit
    if (!form.checkValidity()) {
      //* Se indica al código que sí el elemento con el id "form" no cumple con sus validaciones internas (required, etc) entonces se reproduzca el siguiente código:
      evento.preventDefault();
      //* Se impide que continúe con su código predeterminado.

      evento.stopPropagation();
      //* Se impide que se propague en otros elementos y solo afecta al propio elemento.

      form.classList.add("was-validated");
      //* Se le añade al elemento con el id "form" la clase de Bootstrap "was-valdiated".
      //
    } else alert("Mensaje enviado");
    //* Sí el elemeto con el id "form" no rompe con nada de lo que determina en si mismo (required o cosas así) entonces se madna una alerta notificando que el envío del mensaje fue satisfactorio
  });
})();


