<template>
<div class="py-2 px-2 container mx-auto">
  <div class=" px-4 py-2 my-4 max-w-xl bg-opal rounded shadow border-solid border-4 mx-auto">
    <h1 class="font-semibold py-2">Get In Touch</h1>
    <div class="p-2">

<!--
      <form class="" action="index.html" method="post" style="visibility: hidden !important;" name="fake-form" netlify>
        <input type="text" name="firstname" value="">
        <input type="text" name="lastnameame" value="">
        <input type="email" name="email" value="">
        <input type="tel" name="phone" value="">
        <input type="textarea" name="message" value="">
      </form>
-->

      <FormulateForm @submit="submitHandler" name="MY-FORM" netlify>

        <FormulateInput type="text" name="firstname" label="First Name" placeholder="Nestor" validation="required" error-behavior="live" input-class="custom-input" element-class="custom-element-class" />

        <FormulateInput type="text" name="lastname" label="Last Name" placeholder="Makhno" validation="required" error-behavior="live" input-class="custom-input" element-class="custom-element-class" />

        <FormulateInput type="email" name="email" label="Email" placeholder="coolemail@email.com" validation="required|email" error-behavior="live" input-class="custom-input" element-class="custom-element-class" />

        <FormulateInput type="tel" name="phone" label="Phone" placeholder="Sample tel placeholder" validation="required" input-class="custom-input" element-class="custom-element-class" />

        <FormulateInput type="textarea" name="message" label="Your message to me" help="Enter some text, maybe about turtles" input-class="custom-input" element-class="custom-element-class" />

        <FormulateInput type="submit" name="Submit this form!" />
      </FormulateForm>
    </div>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    submitHandler(data) {
      alert(`Thank you, ${data.firstname}`)
    }
  },
  data() {
    return {
      formData: {}
    }
  }
}
</script>

<style>
.custom-input {
  background-color: white !important;
  border: 2px solid black !important;
}
.custom-input:focus {
  border: 2px solid #008b8b !important;
}
.custom-element-class {
  width: 100% !important;
}

.formulate-input ::placeholder {
  color: #000 !important;
}

.formulate-input-element--submit button {
  background-color: #008b8b !important;
  border-color: #008b8b !important;
  border: 2px solid black !important;
}
</style>
