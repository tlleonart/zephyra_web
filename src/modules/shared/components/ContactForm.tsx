'use client'

import { enviarFormulario } from "@/app/actions";
import { ChangeEvent, FC, FormEvent, useState } from "react";

interface MessageProps {
    name: string
    email: string
    content: string
}

const ContactForm: FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<MessageProps>({
        name: '',
        email: '',
        content: ''
    })
    const [mailSent, setMailSent] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(() => ({
            ...message,
            [event.target.name]: event.target.value
        }))
    }

    const handleSendMail = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        setError(null)

        const result = await enviarFormulario(formData)

        if (result.success) {
            setIsLoading(false)
            setMailSent(true)
        } else {
            console.error(`Error intentando enviar mail: ${result.error}`)
            setError(result.error || 'Ocurrió un error desconocido.')
        }
        setIsLoading(false)
    }

    return (
        <form className="flex flex-col justify-center gap-4" onSubmit={handleSendMail}>
            <h1 className="text-lg font-bold">¿Buscás incorporar la sostenibilidad en tu organización? ¿Querés más información sobre nuestros servicios?</h1>
            <p>Contactanos por medio de este formulario</p>
            {!mailSent ? (<div className="flex flex-col gap-2">
                <input onChange={handleInputChange} name='name' className="p-4 text-zmain" type="text" disabled={isLoading} placeholder="Nombre y apellido" />
                <input onChange={handleInputChange} name='email' className="p-4 text-zmain" type="email" disabled={isLoading} placeholder="Email" />
                <input onChange={handleInputChange} name='content' className="p-4 text-zmain" type="text" disabled={isLoading} placeholder="Escribí tu mensaje" />
                <button className="bg-white p-4 text-zmain" type="submit" disabled={isLoading}>Enviar</button>
            </div>) : (
                <h1 className="text-lg font-bold">¡Contacto enviado correctamente!</h1>
            )}
            {error && <p>{error}</p>}
        </form>
    )
}

export default ContactForm