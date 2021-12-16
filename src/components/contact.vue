<template>
	<page-modal>
		<div class="flex justify-between items-center p-2">
			<button @click="$emit('changeModel', 'project')" class="flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
				</svg>
				Project
			</button>
		</div>
		<div class="p-4 lg:p-5 w-full lg:w-10/12 mx-auto space-y-2 lg:space-y-6">
			<h1 class="text-3xl font-semibold text-gray-700">Get In Touch</h1>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
				<div class="col-span-1 bg-blueGray-100 rounded-md p-4">
					<form class="space-y-4">
						<div class="space-y-1">
							<label class="text-sm font-medium text-blueGray-800">Name</label>
							<input type="text" class="text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-10 w-full focus:outline-none" placeholder="Jhon Doe" />
						</div>
						<div class="space-y-1">
							<label class="text-sm font-medium text-blueGray-800">Email</label>
							<input type="email" class="text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-10 w-full focus:outline-none" placeholder="example@mail.com" />
						</div>
						<div class="space-y-1">
							<label class="text-sm font-medium text-blueGray-800">Note</label>
							<textarea class="text-sm font-medium text-blueGray-700 px-3 border border-blueGray-400 rounded-md h-48 w-full focus:outline-none"></textarea>
						</div>
						<button type="submit" class="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-md text-white text-sm transition-all duration-300">Send</button>
					</form>
				</div>
				<div class="col-span-1 flex flex-col justify-center space-y-5 py-4">
					<div class="flex items-center justify-center gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
						</svg>
						<span class="flex-1">alamin.mistrisolution@gmail.com</span>
					</div>
					<div class="flex items-center justify-center gap-4">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path
								d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
							></path>
						</svg>
						<span class="flex-1">https://github.com/alamindevms</span>
					</div>
				</div>
			</div>
		</div>
	</page-modal>
</template>

<script>
import PageModal from "../layout/page_modal.vue"
export default {
	name: "Contact",
	components: {
		PageModal,
	},
}
</script>

<style></style>
