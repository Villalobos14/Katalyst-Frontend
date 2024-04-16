import Swal from "sweetalert2";
import './alerts.css'

export const AlertStandard = (titulo, icono) => {
  Swal.fire({
    title: titulo,
    icon: icono,
    color: "white",
    background: "#2a2a2a",
    customClass: {
      confirmButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
}

export const AlertDecision = (title, text, icon, confirmText, funcion) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    background:"#2b2424",
    color:"white",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
    cancelButtonText:"Cancelar",  
  }).then((result) => {
    if (result.isConfirmed) {
      if (typeof funcion === 'function') {
        funcion();  // Llama a la función directamente
        console.log("estoy recibiendo solo la funcion")
      } else if (funcion && typeof funcion === 'object' && funcion.funcion) {
        const properties = funcion.properties || [];
        funcion.funcion(...properties);
      }
    }
  });
}

// Forma de agregar props a la función
// AlertDecision("Título", "Texto", "info", "Confirmar", { funcion: tuFuncion, props: [parametro1, parametro2] });



export const AlertInformativo = (titulo, icono) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 3000,
  })
    ; (async () => {
      await Toast.fire({
        icon: icono,
        title: titulo
      })
    })()
}