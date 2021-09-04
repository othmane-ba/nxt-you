<template>
  <div class="overflow-hidden">
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
const jsonld = {
  logo: {
    url: 'https://nxtyou.de/',
    logo: 'https://nxtyou.de/logo.png',
  },
  breadcrumbs: [
    {
      url: 'https://nxtyou.de',
      text: 'Home',
    },
  ],
}

export default {
  jsonld() {
    const items = jsonld.breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.text,
      item: item.url,
    }))
    return [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        url: jsonld.logo.url,
        logo: jsonld.logo.logo,
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items,
      },
    ]
  },
}
</script>
