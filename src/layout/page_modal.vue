<template>
	<section class="fixed inset-0 z-50 p-5 lg:p-14 bg-gray-900 bg-opacity-90" ref="modelBody">
		<svg @click="hideModelAction" class="h-6 w-6 absolute top-2 lg:top-5 right-2 lg:right-5 text-red-500 lg:text-white cursor-pointer z-[51]" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
		</svg>
		<div class="bg-gray-50 shadow-lg h-full rounded overflow-hidden overflow-y-auto">
			<slot />
		</div>
	</section>
</template>

<script>
export default {
	name: "PageModal",
	data() {
		return {
			hideModel: false,
		}
	},
	methods: {
		hideModelAction() {
			this.$refs.modelBody.style.display = "none"
			window.location.reload()
		},
	},
}
</script>
