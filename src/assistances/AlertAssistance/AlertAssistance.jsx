import Swal from 'sweetalert2'
import './SweetAlertSS.css'

const handleAlertOperation = (funcPropsAA, value) => {
    console.log("Sending true value through the method you provided (AlertAssistance)")
    funcPropsAA(value)
}

export const ShowAlertAssistance = ({
    title = "No title",
    message = "No message",
    status = "warning",
    type = "warning",
    toast = true,
    showConfirmButton = true,
    showConfirmMessage = false,
    showDenyButton = false,
    showDenyMessage = false,
    progressTime = 5000,
    funcPropsAA = null,
    }) => {
    Swal.fire({
        title: `<div className='bold-text-800'>${title.toUpperCase()}</div>`,
        html: `<div className='bold-text-500'>${message.toUpperCase()}</div>`,
        position: `${toast === true ? 'top-end' : 'center'}`,
        icon: status,
        iconColor: status === "error" ? "#D92D2D" :
            status === "warning" ? "#FAA300" :
                status === "info" ? "#BAC2C9" :
                    status === "success" && type === "exit" ? "#149da7" :
                        status === "success" ? "#4CAF50" : "#fff",
        background: "#262626",
        color: "#BAC2C9",
        toast: toast,
        timerProgressBar: true,
        timer: progressTime,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        },
        showConfirmButton: showConfirmButton,
        confirmButtonText: status === "error" ? "<div className='high-red-c-as-bg'>ACEPTAR</div>" :
            status === "warning" ? "<div className='high2-orange-c-as-bg'>ACEPTAR</div>" :
                status === "info" ? "<div className='black-bold'>ACEPTAR</div>" :
                    status === "success" && type === "exit" ? "<div className='high-blue-c-as-bg'>ACEPTAR</div>" :
                        status === "success" ? "<div className='high-green-c-as-bg2'>ACEPTAR</div>" :
                            "<div className='black-bold'>ACEPTAR</div>",
        confirmButtonColor: status === "error" ? "#D92D2D" :
            status === "warning" ? "#FAA300" :
                status === "info" ? "#BAC2C9" :
                    status === "success" && type === "exit" ? "#149da7" :
                        status === "success" ? "#4CAF50" : "#fff",
        showDenyButton: showDenyButton,
        denyButtonText: "<div className='high-red-c-as-bg'>CANCELAR</div>",
        denyButtonColor: "#D92D2D"

    }).then((result) => {
        if (result.isConfirmed) {
            if (funcPropsAA) {
                handleAlertOperation(funcPropsAA, true);
            }
            if (showConfirmMessage) {
                ShowAlertAssistance({title: "¡IMPECABLE!", message: "OPERACIÓN REALIZADA DE FORMA IMPECABLE", status: 'success'});
            }
        } else if (result.isDenied) {
            if (funcPropsAA) {
                handleAlertOperation(funcPropsAA, false);
            }
            if (showDenyMessage) {
                ShowAlertAssistance({title: "¡OOPS!", message: "OPERACIÓN NO ENVIADA, CANCELADA", status: 'info'});
            }
        }
    });    
}


// ACCEPTED VALUES:
//
//   TITLE:
//     - String expression
//     >> If there is no a value >> default value: "No title"

//   MESSAGE:
//     - String expression
//     >> If there is no a value >> default value: "No message"

//   STATUS:
//     - String expression
//       - "success"
//       - "error"
//       - "warning"
//       - "info"
//       - "question"
//     >> If there is no a value >> default value: "warning"

//   TYPE:
//     - String expression
//       - "assistance" >> green button
//       - "exit" >> blue button
//     >> If there is no a value >> default value: "<<status decides by default value>>"

//   TOAST:
//     - Boolean expression
//       - true >> to activate toast mode
//       - false >> to disable toast mode

//   SHOWCONFIRMBUTTON:
//     - Boolean expression
//       - true >> it shows a button to confirm the alert of confirm button
//       - false >> it does not show a button to confirm the alert of confirm button
//     >> If there is no a value >> default value: true

//   SHOWCONFIRMMESSAGE:
//     - Boolean expression
//       - true >> to activate message confirmation
//       - false >> to disable message confirmation
//     >> If there is no a value >> default value: false

//   SHOWDENYBUTTON:
//     - Boolean expression
//       - true >> it shows a button to confirm the alert of cancel button
//       - false >> it does not show a button to confirm the alert of cancel button
//     >> If there is no a value >> default value: false

//   SHOWDENYMESSAGE:
//     - Boolean expression
//       - true >> to activate message deny confirmation
//       - false >> to disable message deny confirmation
//     >> If there is no a value >> default value: false

//   PROGRESSTIME:
//     - Integer expression in ms (5000ms=5s)
//       - 0-... >> it defines the timer before alert disappears
//     >> If there is no a value >> default value: 5000
//