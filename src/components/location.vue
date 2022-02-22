<template>
  <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
         <h2 class="text-xl font-bold text-gray-900">Our Active Location</h2>

      <div class="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in products" :key="product.id">
          <div class="relative">
            <div class="relative w-full h-72 rounded-lg overflow-hidden">
              <img :src="product.imageSrc" :alt="product.imageAlt" class="w-full h-full object-center object-cover" />
            </div>
            <div class="absolute top-0 inset-x-0 h-72 rounded-lg p-4 flex items-end justify-end overflow-hidden">
              <div aria-hidden="true" class="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50" />
              <p class="relative text-lg font-semibold text-white">{{ product.name }}</p>
              <button type="button" class="ml-8 relative items-center px-4 py-2 border border-transparent text-sm font-medium rounded-sm shadow-sm text-white border-white bg-transparent hover:bg-indigo-100 hover:text-indigo-700 hover:shadow-2xl hover:border-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Get Direction</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const products = [
  {
    id: 1,
    name: 'Serpong, Tangerang Selatan',
    href: '#',
    imageSrc: '/img/tempat1.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'Serang, Banten',
    href: '#',
    imageSrc: '/img/tempat2.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'Citra Raya, Tangerang',
    href: '#',
    imageSrc: '/img/tempat3.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'GreenBay Pluit , Jakarta Utara',
    href: '#',
    imageSrc: '/img/tempat4.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'Taiwan, Taipei',
    href: '#',
    imageSrc: '/img/tempat4.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  {
    id: 1,
    name: 'Surabaya',
    href: '#',
    imageSrc: '/img/tempat4.jpg',
    imageAlt: 'Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls.',
  },
  // More products...
]

export default {
  setup() {
    return {
      products,
    }
  },
}
</script>