<template>

<div class="py-2 px-2 container mx-auto">
  <div class=" px-4 py-2 my-4 max-w-xl bg-opal rounded shadow border-solid border-4 mx-auto">

  <h2 class="font-semibold py-2">Say hi, but not here. This page is under construction.</h2>
<div class="p-2">
  <form class="" action="index.html" method="post"  data-netlify="true" style="visibility: hidden;">
    <input type="text" name="First Name" value="">
    <input type="text" name="Last Name" value="">
    <input type="email" name="Email" value="">
    <input type="tel" name="Phone" value="">
    <input type="textarea" name="Message" value="">
  </form>
  <FormulateForm @submit="submitHandler">
<FormulateInput
  type="text"
  name="First Name"
  label="First Name"
  placeholder="Nestor"
  validation="required"
  error-behavior="live"
  input-class="custom-input"
  element-class="custom-element-class"
/>

<FormulateInput
  type="text"
  name="Last Name"
  label="Last Name"
  placeholder="Makhno"
  validation="required"
  error-behavior="live"
  input-class="custom-input"
  element-class="custom-element-class"
/>

<FormulateInput
  type="email"
  name="Email"
  label="Email"
  placeholder="coolemail@email.com"
  validation="required|email"
  error-behavior="live"
  input-class="custom-input"
  element-class="custom-element-class"
/>

<FormulateInput
  type="tel"
  name="Phone"
  label="Phone"
  placeholder="Sample tel placeholder"
  validation="required"
  input-class="custom-input"
  element-class="custom-element-class"
/>

<FormulateInput
  type="textarea"
  name="Message"
  label="Your message to me"
  help="Enter some text, maybe about turtles"
  input-class="custom-input"
  element-class="custom-element-class"
/>

  <FormulateInput
    type="submit"
    name="Submit this form!"
  />
</FormulateForm>
</div>
</div>
</div>
</template>

<script>



</script>

<style>
.custom-input {background-color: white !important; border: 2px solid black !important;}
.custom-element-class {width: 100% !important;}
.formulate-input ::placeholder {color: #000 !important;}
.formulate-input-element--submit button {background-color: #008b8b !important; border-color: #008b8b !important; border: 2px solid black !important;}
</style>
