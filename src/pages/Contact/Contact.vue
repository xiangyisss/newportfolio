<template>
    <div class="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 class="mt-4 mb-5">Get In Touch</h1>
        <p>Dorp me a message to say Hi or ask for my CV.
           Feel free to contact me, I'd love to hear from you!
        </p>
        <form ref="formData" class="d-flex flex-column align-items-center " @submit.prevent="sendEmail()">
            <label for="user_name"></label>
            <input type="text" id="user_name" name="user_name" placeholder="Name" required>
            <label for="user_email"></label>
            <input type="email" id="user_email" name="user_email" placeholder="Email" required>
            <label for="message"></label>
            <textarea type="text" id="message" name="message" placeholder="Message" required />
                <button v-if="!formPosted" :disabled="formPosted">{{buttonText}}</button>
                <button v-if="formPosted" @click="sendAnotherOne">Send Another one?</button>
        </form>
        <PopUp v-if="modalOpen" class="popup"/>
    </div>
</template>

<script setup lang="ts">
import emailjs from 'emailjs-com';
import {ref} from 'vue'
import PopUp from '../../components/FormPostedPop.vue/PopUp.vue'

const formData = ref()
const formPosted =ref(false)
const modalOpen = ref(false)
const buttonText = ref('Send Email')

const sendAnotherOne = () => {
    formPosted.value = false
    buttonText.value = 'Send Email'
}

const sendEmail = ():void => {
    buttonText.value = 'Sending...'
    emailjs.sendForm(
        'service_fyfhgcq',
        'template_vugf4hc',
        formData.value,
        'o9uTOfZUIN4GLAdyG'
    )
    .then((res) => {
        if( res.status === 200 ) {
            formPosted.value = true;
            modalOpen.value = true;
            formData.value.reset();
            buttonText.value = 'SENT'
            setTimeout(() => {
                modalOpen.value = false
            }, 4000)
        }
    }, (err) => {
        console.log(err)
        buttonText.value = 'Send Email'
    })


}

</script>

<style scoped>


form {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
}
form > * {
    width: 80%;
    height: 40px;
    outline: none;
    border: none;
}
input, textarea {
    padding-left: 0.5rem;
    font-family: inherit;
    border: 1px solid #F8CBE6;
}

p {
    font-size: 1.1rem;
    text-align: center;
}
textarea {
    height: 100px !important;
    padding-top: 0.5rem;

    resize: none;
}

button {
    width: 40%;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 500;
    margin-top: 2rem;
    cursor: pointer;
    border: 1px solid #F8CBE6;
    background-color: transparent;
}

button:hover {
    color: whitesmoke;
    background-color: #F8CBE6;
    transition: all 0.2s ease-in-out;
}

@media ( max-width: 1080px ) {
    form {
        width: 80%;
    }
    form > * {
        width: 90%;
    }
}
@media ( max-width: 580px ) {
    form {
        width: 90%;
    }
}
</style>