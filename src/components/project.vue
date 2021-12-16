<template>
	<page-modal>
		<div class="flex justify-between items-center p-2">
			<button @click="$emit('changeModel', 'profile')" class="flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Profile
			</button>
			<button @click="$emit('changeModel', 'contact')" class="flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300">
				Contact
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
		<div class="px-4 lg:px-10 py-6 lg:py-12 w-full lg:w-10/12 mx-auto space-y-2 lg:space-y-6">
			<h1 class="text-3xl font-semibold text-gray-700">Project</h1>
			<div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div class="col-span-1 bg-gray-50 rounded-md overflow-hidden relative group">
					<div class="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer">
						<a href="https://scape.com.bd/" target="_blank" class="h-full w-full flex items-center justify-center">
							<span class="text-white text-lg font-semibold">Scape Development Engineers</span>
						</a>
					</div>
					<img class="h-60 w-full object-cover" src="assets/images/scape.png" alt="" />
				</div>
				<div class="col-span-1 bg-gray-50 rounded-md overflow-hidden relative group">
					<div class="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer">
						<a href="https://tourhobe.com/" target="_blank" class="h-full w-full flex items-center justify-center">
							<span class="text-white text-lg font-semibold">Tourhobe</span>
						</a>
					</div>
					<img class="h-60 w-full object-cover" src="assets/images/tourhobe.png" alt="" />
				</div>
				<div class="col-span-1 bg-gray-50 rounded-md overflow-hidden relative group">
					<div class="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer">
						<a href="https://dedf.org/" target="_blank" class="h-full w-full flex items-center justify-center">
							<span class="text-white text-lg font-semibold">DEDF</span>
						</a>
					</div>
					<img class="h-60 w-full object-cover" src="assets/images/dedf.png" alt="" />
				</div>
				<div class="col-span-1 bg-gray-50 rounded-md overflow-hidden relative group">
					<div class="absolute inset-0 bg-gray-900 bg-opacity-50 group-hover:bg-opacity-0 transition-all duration-300 cursor-pointer">
						<a href="https://rosemaryhub.com/" target="_blank" class="h-full w-full flex items-center justify-center">
							<span class="text-white text-lg font-semibold">Rosemaryhub</span>
						</a>
					</div>
					<img class="h-60 w-full object-cover" src="assets/images/rosemaryhub.png" alt="" />
				</div>
			</div>
		</div>
	</page-modal>
</template>

<script>
import PageModal from "../layout/page_modal.vue"
export default {
	name: "Project",
	components: {
		PageModal,
	},
}
</script>

<style></style>
