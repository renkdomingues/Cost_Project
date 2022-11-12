import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Contact.module.css'

function Contact(){
    return (
        <div className={styles.contact_container}>
            <h1>Contact</h1>
            <h2>Send an email</h2>
            <form>
                <Input type='text' name='description' text='Mensagem' placeholder='Insira a mensagem aqui...' value='' />
                <SubmitButton text='Enviar'/>
            </form>
        </div>
    )
}

export default Contact