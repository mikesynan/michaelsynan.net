<template>
<div class="container mx-auto px-4 my-4 max-w-2xl bg-opal rounded shadow">
  <h2>Say Hi</h2>
<div class="p-2">
<FormulateInput
  type="text"
  name="First Name"
  label="First Name"
  placeholder="Nestor"
  help="Put your first name"
  validation="required"
  error-behavior="live"
/>Sample email placeholder

<FormulateInput
  type="text"
  name="Last Name"
  label="Last Name"
  placeholder="Makhno"
  help="Put your last name"
  validation="required"
  error-behavior="live"
/>

<FormulateInput
  type="email"
  name="Email"
  label="Enter Your Email"
  placeholder="coolemail@email.com"
  help="Sample email help text"
  validation="required|email"
  error-behavior="live"
/>

<FormulateInput
  type="tel"
  name="phone"
  label="Sample tel input"
  placeholder="Sample tel placeholder"
  help="Sample tel help text"
  validation="required"
/>

<FormulateInput
  type="textarea"
  label="Enter your message in the box"
  help="Enter some text, maybe about turtles"
/>
</div>
</div>
</template>

<script>

</script>

<style>

</style>
