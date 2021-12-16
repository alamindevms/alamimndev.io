<template>
	<page-modal>
		<div class="flex justify-between items-center p-2">
			<button @click="$emit('changeModel', 'project')" class="ml-auto flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300">
				Project
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
		<div class="flex gap-10 px-10 py-16 w-10/12 mx-auto">
			<div class="w-96">
				<img class="h-auto w-full rounded-md" src="assets/images/alamin.jpg" alt="" />
			</div>
			<div class="flex-1 space-y-6 py-4">
				<div class="space-y-1">
					<h1 class="text-3xl font-semibold text-gray-700">Al Amin Hossain</h1>
					<h3 class="text-base font-light text-gray-600">Web Application Developer (Front End)</h3>
				</div>
				<div class="space-y-2">
					<p class="text-sm text-gray-600 leading-5 font-light">
						Hi, I'm from Bangladesh. <br />
						I'm pationate with my duty. Working as frontend developer in a local IT company.
					</p>
					<p class="text-sm text-gray-600 leading-5 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit alias rerum ab aliquid libero incidunt. Aperiam sapiente quibusdam impedit.</p>
					<p class="text-sm text-gray-600 leading-5 font-light">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, reprehenderit alias rerum ab aliquid libero incidunt. Aperiam sapiente quibusdam impedit.</p>
				</div>
				<div class="flex gap-4 items-center">
					<button @click="$emit('changeModel', 'project')" class="bg-blueGray-700 hover:bg-blueGray-800 px-4 py-2 rounded-md text-white text-sm transition-all duration-300">Project</button>
					<button @click="$emit('changeModel', 'project')" class="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white text-sm transition-all duration-300">Download CV</button>
				</div>
			</div>
		</div>
	</page-modal>
</template>

<script>
import PageModal from "../layout/page_modal.vue"
export default {
	name: "About",
	components: {
		PageModal,
	},
}
</script>
