<template>
	<page-modal>
		<div class="flex justify-between items-center p-2">
			<button @click="$emit('changeModel', 'profile')" class="ml-auto flex items-center gap-2 text-sm font-light px-4 py-2 rounded-md text-blueGray-600 hover:text-blueGray-900 transition-all duration-300">
				Profile
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
				</svg>
			</button>
		</div>
		<div class="flex justify-center items-center w-10/12 h-full mx-auto">
			<div class="w-96 h-96">
				<img class="h-full w-full rounded-md" src="assets/images/404.svg" alt="" />
			</div>
		</div>
	</page-modal>
</template>

<script>
import PageModal from "../layout/page_modal.vue"
export default {
	components: {
		PageModal,
	},
}
</script>

<style></style>
