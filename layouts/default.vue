<template>
  <div>
    <PageLoader />
    <Pointer />
    <Header></Header>
    <HeaderMenu></HeaderMenu>
    <div data-transition-layout>
      <Nuxt />
      <Footer></Footer>
    </div>
    <CookieHint></CookieHint>
  </div>
</template>

<script>
export default {}
</script>
